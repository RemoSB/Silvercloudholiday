import Icon from "@/components/ui/Icon";
import QuoteForm from "./QuoteForm";

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <Icon name="sparkle" sm filled />
              Trusted by 10,000+ Travellers
            </div>
            <h1 className="hero-title">
              Explore India with <em>Premium Chauffeur</em> Services
            </h1>
            <p className="hero-desc">
              From the snow-peaks of Himachal to the beaches of Goa — travel in
              comfort, safety and style with our expert drivers and
              well-maintained fleet.
            </p>
            <div className="hero-buttons">
              <a className="btn-primary" href="#fleet">
                View Our Fleet
                <Icon name="arrow" sm />
              </a>
              <a className="btn-outline" href="#destinations">
                <Icon name="mappin" sm />
                Explore Destinations
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>10K+</strong>
                <span>Happy Travellers</span>
              </div>
              <div className="hero-stat">
                <strong>8</strong>
                <span>States Covered</span>
              </div>
              <div className="hero-stat">
                <strong>5</strong>
                <span>Vehicle Types</span>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
