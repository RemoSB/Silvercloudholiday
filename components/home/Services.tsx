import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/lib/data";

export default function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {heading && (
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Services Built Around Your Journey</h2>
            <p>
              From a single airport run to a two-week multi-state tour — one
              trusted team, one transparent price.
            </p>
          </div>
        )}
        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal as="div" className="service-card" key={s.title} delay={(i % 3) * 0.06}>
              <div className="svc-icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
