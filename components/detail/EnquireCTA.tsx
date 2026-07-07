import Icon from "@/components/ui/Icon";
import QuoteForm from "@/components/home/QuoteForm";
import { waLink, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site";

export default function EnquireCTA({
  title = "Plan This Trip with Us",
  subject,
}: {
  title?: string;
  subject: string;
}) {
  return (
    <section id="enquire" className="enquire-cta">
      <div className="container enquire-grid">
        <div className="enquire-copy">
          <span className="section-label">Get a Free Quote</span>
          <h2>{title}</h2>
          <p>
            Tell us your dates and group size — our Delhi travel desk builds a
            custom itinerary, suggests the right vehicle and shares a clear,
            all-inclusive price. No bots, no hidden charges.
          </p>
          <ul className="enquire-trust">
            <li>
              <Icon name="shield" sm /> Police-verified chauffeurs
            </li>
            <li>
              <Icon name="tag" sm /> Transparent, itemised pricing
            </li>
            <li>
              <Icon name="headset" sm /> 24/7 support on WhatsApp
            </li>
            <li>
              <Icon name="check" sm /> Free cancellation &amp; flexible plans
            </li>
          </ul>
          <div className="enquire-actions">
            <a
              className="btn-whatsapp"
              href={waLink(`Hi, I'd like a quote for: ${subject}`)}
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" filled style={{ width: 18, height: 18 }} />
              WhatsApp Us
            </a>
            <a className="btn-outline" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" sm /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="enquire-form">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
