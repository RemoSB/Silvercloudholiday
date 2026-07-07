import TourCard from "@/components/ui/TourCard";
import { packages, type Package } from "@/lib/data";

export default function Packages({ items = packages }: { items?: Package[] }) {
  return (
    <section id="packages">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Holiday Tour Packages</span>
          <h2 className="section-title">Curated Getaways, Ready to Book</h2>
          <p>
            Customizable holiday packages across India — hills, beaches,
            backwaters &amp; pilgrimages. Chauffeur-driven vehicle, hotels &amp;
            sightseeing arranged end-to-end.
          </p>
        </div>
        <div className="pkg-grid">
          {items.map((p, i) => (
            <TourCard key={p.slug || p.name} tour={p} delay={(i % 4) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
