import TourCard from "@/components/ui/TourCard";
import type { Tour } from "@/lib/data";

export default function RelatedTours({
  tours,
  heading = "Popular Tours",
  label = "Ready-to-Book Getaways",
  intro,
}: {
  tours: Tour[];
  heading?: string;
  label?: string;
  intro?: string;
}) {
  if (!tours?.length) return null;
  return (
    <section id="tours" className="related-tours">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{heading}</h2>
          {intro && <p>{intro}</p>}
        </div>
        <div className="pkg-grid">
          {tours.map((t, i) => (
            <TourCard key={t.slug || t.name} tour={t} delay={(i % 4) * 0.05} />
          ))}
        </div>
      </div>
    </section>
  );
}
