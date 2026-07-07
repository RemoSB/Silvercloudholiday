import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import TourCard from "@/components/ui/TourCard";
import CTA from "@/components/home/CTA";
import Reveal from "@/components/ui/Reveal";
import { destinations, toursForDestination } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tour Packages Across India",
  description:
    "Chauffeur-driven tour packages across India — Kashmir, Himachal, Uttarakhand, Rajasthan, Kerala, Goa, Mumbai & Gujarat. Day-wise itineraries, transparent pricing, 24/7 support.",
};

export default function ToursPage() {
  // Group tours under their destination for an easy-to-scan listing.
  const groups = destinations
    .map((d) => ({ dest: d, tours: toursForDestination(d.slug!) }))
    .filter((g) => g.tours.length > 0);

  return (
    <main>
      <PageHero
        label="Holiday Tour Packages"
        title="Curated Tours Across India"
        desc="From Himalayan escapes to backwater cruises and desert circuits — chauffeur-driven, fully customisable, and priced with total transparency."
      />
      {groups.map((g) => (
        <section key={g.dest.slug} className="related-tours">
          <div className="container">
            <div className="section-header" style={{ marginBottom: "2.25rem" }}>
              <span className="section-label">{g.dest.region ?? "India"}</span>
              <h2 className="section-title">{g.dest.name} Tours</h2>
              {g.dest.tagline && <p>{g.dest.tagline}</p>}
            </div>
            <div className="pkg-grid">
              {g.tours.map((t, i) => (
                <TourCard key={t.slug} tour={t} delay={(i % 4) * 0.05} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <Reveal as="div">
        <CTA />
      </Reveal>
    </main>
  );
}
