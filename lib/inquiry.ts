// Pure helpers ported from the legacy quote-form script.

export type InquiryData = Record<string, string> & {
  tab: string;
  tabLabel: string;
  name: string;
};

export type SummaryRow = [string, string];

export const WHATSAPP_NUMBER = "919876543210";

export const ctaLabels: Record<string, string> = {
  oneway: "Get One-Way Quote",
  roundtrip: "Get Round-Trip Quote",
  local: "Book Local Cab",
  airport: "Book Airport Transfer",
  tours: "Get Tour Package Quote",
};

export const tabTitle: Record<string, string> = {
  oneway: "One-Way Trip",
  roundtrip: "Round Trip",
  local: "Local Rental",
  airport: "Airport Transfer",
  tours: "Tour Package",
};

// [label prefix, control type] required per tab
export const requiredFields: Record<string, [string, string][]> = {
  oneway: [
    ["From", "text"],
    ["To", "text"],
    ["Pickup Date", "date"],
    ["Pickup Time", "time"],
    ["Vehicle Type", "select"],
  ],
  roundtrip: [
    ["From", "text"],
    ["To", "text"],
    ["Departure", "date"],
    ["Return", "date"],
    ["Pickup Time", "time"],
    ["Vehicle Type", "select"],
  ],
  local: [
    ["City", "select"],
    ["Pickup Date", "date"],
    ["Pickup Time", "time"],
  ],
  airport: [
    ["Drop / Pickup Address", "text"],
    ["Date", "date"],
    ["Time", "time"],
  ],
  tours: [
    ["Destination", "select"],
    ["Travel Date", "date"],
  ],
};

export function genRef(): string {
  const d = new Date();
  const ymd =
    d.getFullYear().toString().slice(-2) +
    String(d.getMonth() + 1).padStart(2, "0") +
    String(d.getDate()).padStart(2, "0");
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return "IW" + ymd + "-" + rnd;
}

export function buildSummary(data: InquiryData): SummaryRow[] {
  const skip = new Set(["tab", "tabLabel", "name"]);
  const rows: SummaryRow[] = [
    ["Service", data.tabLabel],
    ["Customer", data.name],
  ];
  Object.keys(data).forEach((k) => {
    if (skip.has(k)) return;
    if (!data[k]) return;
    rows.push([k, data[k]]);
  });
  return rows;
}

export function waLink(data: InquiryData, ref: string): string {
  const lines = ["*New Inquiry — Silver Clouds Holiday*", "Ref: " + ref, ""];
  buildSummary(data).forEach(([k, v]) => lines.push("• " + k + ": " + v));
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
}

export function saveInquiry(data: InquiryData, ref: string): void {
  try {
    const KEY = "iw_inquiries";
    const all = JSON.parse(localStorage.getItem(KEY) || "[]");
    all.unshift({ ref, ts: Date.now(), data });
    localStorage.setItem(KEY, JSON.stringify(all.slice(0, 25)));
  } catch {
    /* storage full or blocked — non-fatal */
  }
}
