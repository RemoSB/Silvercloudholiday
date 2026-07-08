import "../legacy.css";
import SvgSprite from "@/components/ui/SvgSprite";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import { getSettings, getNavigation } from "@/sanity/queries";
import { SITE_URL, COMPANY } from "@/lib/site";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [settings, menus] = await Promise.all([getSettings(), getNavigation()]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: COMPANY,
            description:
              "Chauffeur-driven car rentals and curated holiday tour packages across India.",
            url: SITE_URL,
            telephone: settings.phoneTel,
            email: settings.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: settings.address,
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
      <Navbar menus={menus} phone={settings.phone} phoneTel={settings.phoneTel} />
      {children}
      <Footer settings={settings} />
      <WhatsAppFloat number={settings.whatsappNumber} />
    </>
  );
}
