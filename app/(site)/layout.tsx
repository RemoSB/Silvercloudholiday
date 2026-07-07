import "../legacy.css";
import SvgSprite from "@/components/ui/SvgSprite";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const SITE_URL = "https://silvercloudsholiday.com";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Silver Clouds Holiday",
            description:
              "Chauffeur-driven car rentals and curated holiday tour packages across India.",
            url: SITE_URL,
            telephone: "+91-98765-43210",
            email: "info@silvercloudsholiday.in",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Connaught Place",
              addressRegion: "New Delhi",
              addressCountry: "IN",
            },
            areaServed: [
              "Himachal Pradesh", "Uttarakhand", "Rajasthan", "Kashmir",
              "Kerala", "Mumbai", "Goa", "Gujarat",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "10000",
            },
          }),
        }}
      />
      <SvgSprite />
      <Navbar />
      {children}
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
