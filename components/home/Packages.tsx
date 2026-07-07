import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
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
            <Reveal as="div" className="pkg-card" key={p.name} delay={(i % 4) * 0.05}>
              <div className="pkg-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={`${p.name} tour`} loading="lazy" />
                <span className="pkg-tag">{p.tag}</span>
              </div>
              <div className="pkg-body">
                <h3>{p.name}</h3>
                <div className="pkg-route">
                  <Icon name="mappin" /> {p.route}
                </div>
                <ul className="pkg-feats">
                  {p.feats.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div className="pkg-foot">
                  <div className="pkg-price">
                    <small>Onwards</small>
                    <strong>{p.price}</strong>
                  </div>
                </div>
                <div className="pkg-actions">
                  <a className="pkg-btn pkg-book" href="#cta">
                    Book Now
                  </a>
                  <a className="pkg-btn pkg-enq" href="#cta">
                    Enquire
                  </a>
                  <a
                    className="pkg-btn pkg-wa"
                    href={`https://wa.me/919876543210?text=${encodeURIComponent(
                      p.name + " package"
                    )}`}
                    target="_blank"
                    rel="noopener"
                    aria-label="Enquire on WhatsApp"
                  >
                    <Icon name="whatsapp" filled />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
