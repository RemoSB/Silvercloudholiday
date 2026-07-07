import Reveal from "@/components/ui/Reveal";
import type { ItineraryDay } from "@/lib/data";

export default function Itinerary({ days }: { days: ItineraryDay[] }) {
  if (!days?.length) return null;
  return (
    <section className="itinerary-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Day-by-Day Plan</span>
          <h2 className="section-title">Your Itinerary</h2>
          <p>A suggested flow — fully customisable to your dates and pace.</p>
        </div>
        <ol className="itinerary">
          {days.map((d, i) => (
            <Reveal as="li" className="itin-day" key={d.day} delay={i * 0.04}>
              <div className="itin-marker">
                <span>Day</span>
                <strong>{d.day}</strong>
              </div>
              <div className="itin-body">
                <h3>{d.title}</h3>
                <p>{d.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
