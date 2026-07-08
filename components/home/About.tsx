import Icon from "@/components/ui/Icon";
import { getSettings } from "@/sanity/queries";

export default async function About() {
  const { about } = await getSettings();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="owner-frame">
            <div className="owner-years">
              <strong>{about.yearsBadge}</strong>
              <span>Years</span>
            </div>
            <div className="owner-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.portrait || "/images/akshoy.webp"}
                alt={`${about.founderName} — Founder, Silver Clouds Holiday`}
                loading="lazy"
              />
            </div>
            <div className="owner-badge">
              <div className="owner-badge-icon">
                <Icon name="award" />
              </div>
              <div>
                <strong>{about.founderName}</strong>
                <span>{about.founderRole}</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Silver Clouds Holiday</span>
            <h2 className="section-title">
              Built on Trust, Driven by <em>Passion for India</em>
            </h2>
            <div className="about-quote">&quot;{about.quote}&quot;</div>
            <p>{about.story}</p>

            <div className="about-stats">
              {about.stats.map((s) => (
                <div className="about-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a className="btn-primary" href="#cta">
                Read Our Story
                <Icon name="arrow" sm />
              </a>
              <a className="read-more" href="#fleet">
                View Our Fleet
                <Icon name="arrow" sm />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
