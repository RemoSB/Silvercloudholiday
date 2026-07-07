import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { destinations, type Destination } from "@/lib/data";

export default function Destinations({
  items = destinations,
  heading = true,
}: {
  items?: Destination[];
  heading?: boolean;
}) {
  return (
    <section id="destinations">
      <div className="container">
        {heading && (
          <div className="section-header">
            <span className="section-label">Popular Destinations</span>
            <h2 className="section-title" style={{ color: "var(--white)" }}>
              Where Do You Want to Go?
            </h2>
            <p style={{ color: "rgba(255,255,255,.6)" }}>
              We cover 8 breathtaking states across India — every route, every
              season.
            </p>
          </div>
        )}
        <div className="dest-grid">
          {items.map((d, i) => (
            <Reveal
              as="div"
              className={`dest-card${d.wide ? " wide" : ""}`}
              key={d.name}
              delay={i * 0.04}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-overlay">
                <h3>{d.name}</h3>
                <span>
                  <Icon name="mappin" /> {d.sub}
                </span>
              </div>
              {d.pill && (
                <span className="dest-pill">
                  {d.pill.star && (
                    <Icon
                      name="star"
                      sm
                      filled
                      style={{ width: 10, height: 10 }}
                    />
                  )}
                  {d.pill.label}
                </span>
              )}
            </Reveal>
          ))}

          <Reveal as="div" className="corporate-card">
            <div className="corp-content">
              <span className="section-label">Corporate Travel</span>
              <h3>
                Elevate your corporate travel with{" "}
                <em>Silver Clouds Holiday</em>
              </h3>
              <p>
                Employee transfer service for short-term and long-term rentals —
                with verified chauffeurs, GST invoicing &amp; dedicated account
                managers.
              </p>
              <a className="btn-primary" href="#cta">
                Get In Touch
                <Icon name="arrow" sm />
              </a>
            </div>
            <div className="corp-images">
              <div className="corp-blob b1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Honda Amaze.webp" alt="Executive Sedan" loading="lazy" />
              </div>
              <div className="corp-blob b2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Toyota Innova Crysta.webp" alt="Premium SUV" loading="lazy" />
              </div>
              <div className="corp-blob b3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/Force Tempo Traveller2.webp" alt="Group Transport" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
