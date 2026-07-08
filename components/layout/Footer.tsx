import Icon from "@/components/ui/Icon";
import VisitorCount from "./VisitorCount";
import { getServices } from "@/sanity/queries";
import type { SiteSettings } from "@/lib/site";

const destinations: { label: string; href: string }[] = [
  { label: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
  { label: "Kashmir", href: "/destinations/kashmir" },
  { label: "Uttarakhand", href: "/destinations/uttarakhand" },
  { label: "Rajasthan", href: "/destinations/rajasthan" },
  { label: "Kerala", href: "/destinations/kerala" },
  { label: "All Tour Packages", href: "/tours" },
];

export default async function Footer({ settings }: { settings: SiteSettings }) {
  const services = await getServices();
  const { phone, phoneTel, whatsappNumber, email, address, socials } = settings;
  const waHref = `https://wa.me/${whatsappNumber}`;

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.webp" alt="Silver Clouds Holiday" />
            <strong>Silver Clouds Holiday</strong>
            <p>
              Holiday tour packages &amp; premium chauffeur-driven travel across
              India. Based in {address} — trusted by thousands of families,
              corporates and solo travellers.
            </p>
            <div className="social-links">
              {socials.instagram && (
                <a href={socials.instagram} target="_blank" rel="noopener" title="Instagram">
                  <Icon name="instagram" />
                </a>
              )}
              {socials.facebook && (
                <a href={socials.facebook} target="_blank" rel="noopener" title="Facebook">
                  <Icon name="facebook" />
                </a>
              )}
              {socials.youtube && (
                <a href={socials.youtube} target="_blank" rel="noopener" title="YouTube">
                  <Icon name="youtube" />
                </a>
              )}
              <a href={waHref} target="_blank" rel="noopener" title="WhatsApp">
                <Icon name="whatsapp" filled />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.title}>
                  <a href="/#services">
                    <Icon name="arrow" /> {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinations</h4>
            <ul>
              {destinations.map((d) => (
                <li key={d.label}>
                  <a href={d.href}>
                    <Icon name="mappin" /> {d.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:${phoneTel}`}>
                  <Icon name="phone" /> {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`}>
                  <Icon name="mail" /> {email}
                </a>
              </li>
              <li>
                <a href={waHref} target="_blank" rel="noopener">
                  <Icon name="whatsapp" filled /> WhatsApp Chat
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon name="mappin" /> {address}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Silver Clouds Holiday. All rights reserved.</span>
          <div className="meta">
            <div className="visitor-counter" title="Live visitor count">
              <span className="vc-dot" aria-hidden="true"></span>
              <Icon name="eye" />
              <span className="vc-label">Visitors</span>
              <VisitorCount />
            </div>
            <span>
              Made in India &nbsp;·&nbsp; <a href="#">Privacy Policy</a>{" "}
              &nbsp;·&nbsp; <a href="#">Terms</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
