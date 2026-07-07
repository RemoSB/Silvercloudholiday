import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { testimonials, type Testimonial } from "@/lib/data";

export default function Testimonials({
  items = testimonials,
}: {
  items?: Testimonial[];
}) {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Customer Reviews</span>
          <h2 className="section-title">Travellers Love Silver Clouds Holiday</h2>
          <p>Real reviews from real journeys across India.</p>
        </div>
        <div className="testi-grid">
          {items.map((t, i) => (
            <Reveal as="div" className="testi-card" key={t.name} delay={i * 0.06}>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon
                    name="star"
                    filled
                    key={s}
                    style={s >= t.rating ? { opacity: 0.3 } : undefined}
                  />
                ))}
              </div>
              <p>&quot;{t.text}&quot;</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>
                    <Icon name="mappin" /> {t.trip}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
