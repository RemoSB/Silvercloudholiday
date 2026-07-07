// Shared site-wide constants used by detail pages and structured data.
export const SITE_URL = "https://silvercloudsholiday.com";
export const WHATSAPP_NUMBER = "919876543210";
export const PHONE_TEL = "+919876543210";
export const PHONE_DISPLAY = "+91 98765 43210";
export const EMAIL = "info@silvercloudsholiday.in";
export const COMPANY = "Silver Clouds Holiday";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
