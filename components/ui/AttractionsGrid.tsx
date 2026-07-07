import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import type { Attraction } from "@/lib/data";

export default function AttractionsGrid({
  items,
  place,
}: {
  items: Attraction[];
  place: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="attractions-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Top Attractions</span>
          <h2 className="section-title">Places You&apos;ll Love in {place}</h2>
        </div>
        <div className="attractions-grid">
          {items.map((a, i) => (
            <Reveal as="div" className="attraction-card" key={a.name} delay={(i % 3) * 0.05}>
              <div className="attraction-icon">
                <Icon name="mappin" sm />
              </div>
              <h3>{a.name}</h3>
              <p>{a.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
