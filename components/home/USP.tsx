import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { uspItems } from "@/lib/data";

export default function USP() {
  return (
    <section id="usp">
      <div className="container">
        <div className="usp-grid">
          {uspItems.map((u, i) => (
            <Reveal as="div" className="usp-item" key={u.title} delay={i * 0.06}>
              <div className="usp-icon">
                <Icon name={u.icon} />
              </div>
              <div className="usp-text">
                <strong>{u.title}</strong>
                <span>{u.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
