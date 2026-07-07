import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { fleet, type Vehicle } from "@/lib/data";

export default function Fleet({
  items = fleet,
  heading = true,
}: {
  items?: Vehicle[];
  heading?: boolean;
}) {
  return (
    <section id="fleet">
      <div className="container">
        {heading && (
          <div className="section-header">
            <span className="section-label">Our Fleet</span>
            <h2 className="section-title">Choose Your Perfect Ride</h2>
            <p>
              From budget sedans to spacious group movers — pick the vehicle
              that suits your journey and group size.
            </p>
          </div>
        )}
        <div className="fleet-grid">
          {items.map((v, i) => (
            <Reveal as="div" className="fleet-card" key={v.name} delay={i * 0.05}>
              <div className="fleet-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt={v.alt} loading="lazy" />
                {v.badge && (
                  <span className="fleet-badge">
                    <Icon
                      name={v.badge.icon}
                      sm
                      filled={v.badge.filled}
                      style={{ width: 10, height: 10 }}
                    />
                    {v.badge.label}
                  </span>
                )}
              </div>
              <div className="fleet-body">
                <h3>{v.name}</h3>
                <div className="fleet-meta">
                  {v.meta.map((m) => (
                    <span key={m.label}>
                      <Icon name={m.icon} /> {m.label}
                    </span>
                  ))}
                </div>
                <div className="fleet-tags">
                  {v.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="fleet-footer">
                  <div className="price">
                    <span>Starting from</span>
                    <strong>{v.price}</strong>
                  </div>
                  <a className="btn-book" href="#cta">
                    Book Now
                    <Icon name="arrow" sm />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}

          <div className="fleet-card fleet-card-cta">
            <div className="cta-icon-wrap">
              <Icon name="bus" />
            </div>
            <h3>Need a Larger Vehicle?</h3>
            <p>Buses &amp; coaches for weddings, pilgrimages &amp; large groups.</p>
            <a className="btn-primary" href="#cta">
              Enquire Now
              <Icon name="arrow" sm />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
