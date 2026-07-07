import Icon from "@/components/ui/Icon";

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta-inner">
          <span className="section-label">Ready to Travel?</span>
          <h2>Your Next Adventure Starts with One Message</h2>
          <p>
            Drop us a WhatsApp or call — we&apos;ll plan your entire trip,
            suggest the right vehicle, and give you the best price. No bots, just
            real people.
          </p>
          <div className="cta-buttons">
            <a
              className="btn-whatsapp"
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener"
            >
              <Icon name="whatsapp" filled style={{ width: 18, height: 18 }} />
              WhatsApp Us
            </a>
            <a className="btn-primary" href="tel:+919876543210">
              <Icon name="phone" sm />
              Call Now
            </a>
            <a className="btn-outline" href="#hero">
              <Icon name="send" sm />
              Send Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
