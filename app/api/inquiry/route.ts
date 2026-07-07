import { NextResponse } from "next/server";

type Payload = {
  ref?: string;
  data?: Record<string, string>;
};

// Emails the lead to the travel desk via Resend's REST API.
// No-ops gracefully (200) when RESEND_API_KEY is not configured, so the
// client-side WhatsApp + localStorage flow keeps working regardless.
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

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO || "info@silvercloudsholiday.in";
  const from = process.env.INQUIRY_FROM || "Silver Clouds Holiday <onboarding@resend.dev>";

  if (!apiKey) {
    // Not configured — non-fatal. Lead still captured client-side.
    return NextResponse.json({ ok: true, skipped: true });
  }

  const rows = Object.entries(data)
    .filter(([k]) => !["tab"].includes(k))
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#6b7280">${escapeHtml(
          k
        )}</td><td style="padding:6px 12px;font-weight:600">${escapeHtml(
          String(v)
        )}</td></tr>`
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
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New Inquiry ${ref} — ${data.tabLabel || "Booking"}`,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ ok: false, error: err }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: e instanceof Error ? e.message : "send failed" },
      { status: 502 }
    );
  }
}

function escapeHtml(s: string): string {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
  );
}
