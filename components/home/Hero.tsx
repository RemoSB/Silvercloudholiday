import Icon from "@/components/ui/Icon";
import QuoteForm from "./QuoteForm";
import { getSettings } from "@/sanity/queries";

export default async function Hero() {
  const settings = await getSettings();

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
            <h1 className="hero-title">{settings.heroHeading}</h1>
            <p className="hero-desc">{settings.heroSubheading}</p>
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
              {settings.stats.map((s) => (
                <div className="hero-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm
            phoneTel={settings.phoneTel}
            phone={settings.phone}
            whatsappNumber={settings.whatsappNumber}
          />
        </div>
      </div>
    </section>
  );
}
