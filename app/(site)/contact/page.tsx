import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import QuoteForm from "@/components/home/QuoteForm";
import Icon from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Contact Us — Book Your Chauffeur Trip",
  description:
    "Talk to the Silver Clouds Holiday travel desk. WhatsApp, call or send an inquiry — real people, instant confirmation, no booking fee.",
};

const contactItems = [
  { icon: "phone", label: "Call / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "mail", label: "Email", value: "info@silvercloudsholiday.in", href: "mailto:info@silvercloudsholiday.in" },
  { icon: "mappin", label: "Office", value: "Connaught Place, New Delhi", href: undefined },
  { icon: "clock", label: "Hours", value: "24/7 travel desk on WhatsApp", href: undefined },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Get In Touch"
        title="Let's Plan Your Journey"
        desc="Drop us a message and our travel desk will reach out within 15 minutes with the right vehicle and best price."
      />
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Talk to a real person</h2>
              <p>
                No bots, no call centres. Tell us where you want to go and we&apos;ll
                handle the vehicle, the driver and the route — end to end.
              </p>
              <ul className="contact-list">
                {contactItems.map((c) => (
                  <li key={c.label}>
                    <div className="ci-icon">
                      <Icon name={c.icon} />
                    </div>
                    <div>
                      <strong>{c.label}</strong>
                      {c.href ? (
                        <a href={c.href}>{c.value}</a>
                      ) : (
                        <span>{c.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="contact-form-wrap">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
