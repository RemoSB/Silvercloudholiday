import { NextResponse } from "next/server";
import { writeClient } from "@/sanity/writeClient";

type Payload = {
  ref?: string;
  data?: Record<string, string>;
};

// Captures a website inquiry: stores it as a Sanity "lead" document AND emails
// the travel desk via Resend. Each destination is independent and non-fatal —
// the client-side WhatsApp + localStorage flow works regardless.
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const { ref, data } = body;
  if (!ref || !data) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const SKIP = new Set(["tab", "tabLabel", "name"]);
  const summary = Object.entries(data)
    .filter(([k, v]) => !SKIP.has(k) && v)
    .map(([label, value], i) => ({ _key: `r${i}`, label, value }));

  const phone =
    data["Phone"] ||
    Object.entries(data).find(([k]) => k.toLowerCase().includes("phone"))?.[1] ||
    "";

  const result = { stored: false, emailed: false };

  // 1) Store lead in Sanity (visible in Studio)
  if (writeClient) {
    try {
      await writeClient.create({
        _type: "lead",
        name: data.name || "",
        phone,
        service: data.tabLabel || "Inquiry",
        ref,
        status: "new",
        summary,
        submittedAt: new Date().toISOString(),
      });
      result.stored = true;
    } catch {
      /* non-fatal */
    }
  }

  // 2) Email the travel desk via Resend
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const to = process.env.INQUIRY_TO || "info@silvercloudsholiday.in";
    const from =
      process.env.INQUIRY_FROM || "Silver Clouds Holiday <onboarding@resend.dev>";
    const rows = [["Customer", data.name || "—"], ...summary.map((s) => [s.label, s.value])]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;color:#6b7280">${escapeHtml(
            k
          )}</td><td style="padding:6px 12px;font-weight:600">${escapeHtml(v)}</td></tr>`
      )
      .join("");
    const html = `
      <div style="font-family:system-ui,sans-serif;max-width:560px">
        <h2 style="color:#0d1b2a">New Inquiry — Silver Clouds Holiday</h2>
        <p>Reference: <strong>${escapeHtml(ref)}</strong></p>
        <table style="border-collapse:collapse;width:100%">${rows}</table>
        <p style="color:#6b7280;font-size:13px">Sent from the website booking form.</p>
      </div>`;
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to,
          subject: `New Inquiry ${ref} — ${data.tabLabel || "Booking"}`,
          html,
        }),
      });
      result.emailed = res.ok;
    } catch {
      /* non-fatal */
    }
  }

  return NextResponse.json({ ok: true, ...result });
}

function escapeHtml(s: string): string {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}
