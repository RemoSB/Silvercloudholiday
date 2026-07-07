import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { whyItems } from "@/lib/data";

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-grid">
          <div className="why-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/Toyota Innova Crysta.webp" alt="Premium Travel" />
            <div className="why-badge-float">
              <div className="stars-row">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon name="star" filled key={i} />
                ))}
              </div>
              <strong>4.9</strong>
              <span>Avg. Rating</span>
            </div>
          </div>
          <div className="why-content">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">
              Travel That Feels Like a{" "}
              <em style={{ fontStyle: "italic", color: "var(--ocean)" }}>
                First-Class Experience
              </em>
            </h2>
            <ul className="why-list">
              {whyItems.map((w, i) => (
                <Reveal as="li" className="why-item" key={w.title} delay={i * 0.05}>
                  <div className="why-icon">
                    <Icon name={w.icon} />
                  </div>
                  <div>
                    <h4>{w.title}</h4>
                    <p>{w.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
