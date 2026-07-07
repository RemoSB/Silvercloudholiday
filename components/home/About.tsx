import Icon from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="owner-frame">
            <div className="owner-years">
              <strong>15+</strong>
              <span>Years</span>
            </div>
            <div className="owner-portrait">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/akshoy.webp"
                alt="Akshoy — Founder, Silver Clouds Holiday"
                loading="lazy"
              />
            </div>
            <div className="owner-badge">
              <div className="owner-badge-icon">
                <Icon name="award" />
              </div>
              <div>
                <strong>Akshoy</strong>
                <span>Founder &amp; CEO</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-label">About Silver Clouds Holiday</span>
            <h2 className="section-title">
              Built on Trust, Driven by <em>Passion for India</em>
            </h2>
            <div className="about-quote">
              &quot;Every journey we plan, I plan it like it&apos;s for my own
              family — that&apos;s the Silver Clouds Holiday promise.&quot;
            </div>
            <p>
              What started as a single Innova Crysta and one chauffeur in 2018
              has grown into a fleet of 50+ premium vehicles serving travellers
              across 8 Indian states. We&apos;re a family-run business that
              treats every customer like a guest in our home.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <strong>50+</strong>
                <span>Vehicles</span>
              </div>
              <div className="about-stat">
                <strong>10K+</strong>
                <span>Trips Done</span>
              </div>
              <div className="about-stat">
                <strong>4.9★</strong>
                <span>Rating</span>
              </div>
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
