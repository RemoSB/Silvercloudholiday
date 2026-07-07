import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://silvercloudsholiday.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Silver Clouds Holiday – Premium Chauffeur Travel & Tour Packages Across India",
    template: "%s | Silver Clouds Holiday",
  },
  description:
    "Chauffeur-driven cars and curated holiday packages across India — Himachal, Uttarakhand, Rajasthan, Kashmir, Kerala, Goa & more. Verified drivers, well-maintained fleet, transparent pricing, 24/7 support.",
  keywords: [
    "car rental India",
    "chauffeur driven cars",
    "outstation cabs",
    "tour packages India",
    "Innova Crysta rental",
    "Tempo Traveller hire",
    "airport transfer Delhi",
  ],
  openGraph: {
    type: "website",
    siteName: "Silver Clouds Holiday",
    title: "Silver Clouds Holiday – Premium Chauffeur Travel Across India",
    description:
      "Explore India with premium chauffeur services. Curated tour packages, well-maintained fleet, transparent pricing.",
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
