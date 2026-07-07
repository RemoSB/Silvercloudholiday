"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";

type DropItem = { icon: string; title: string; sub: string; href: string };

const fleetItems: DropItem[] = [
  { icon: "car", title: "Toyota Innova Crysta", sub: "6–7 Seats · Premium SUV", href: "/fleet/toyota-innova-crysta" },
  { icon: "bus", title: "Force Tempo Traveller", sub: "12–17 Seats · Group Travel", href: "/fleet/force-tempo-traveller" },
  { icon: "car", title: "Maruti Swift Dzire", sub: "4 Seats · Budget Sedan", href: "/fleet/maruti-swift-dzire" },
  { icon: "car", title: "Honda Amaze", sub: "4 Seats · Highway Sedan", href: "/fleet/honda-amaze" },
  { icon: "car", title: "Maruti Ertiga", sub: "6–7 Seats · Family MUV", href: "/fleet/maruti-suzuki-ertiga" },
  { icon: "bus", title: "Buses & Coaches", sub: "20+ Seats · Custom Hire", href: "/fleet" },
];

const destHills: DropItem[] = [
  { icon: "mountain", title: "Himachal Pradesh", sub: "Manali · Spiti · Dharamshala", href: "/destinations/himachal-pradesh" },
  { icon: "mountain", title: "Kashmir", sub: "Dal Lake · Gulmarg · Pahalgam", href: "/destinations/kashmir" },
  { icon: "mountain", title: "Uttarakhand", sub: "Rishikesh · Haridwar · Kedarnath", href: "/destinations/uttarakhand" },
  { icon: "mappin", title: "Rajasthan", sub: "Jaipur · Udaipur · Jodhpur", href: "/destinations/rajasthan" },
];
const destCoast: DropItem[] = [
  { icon: "mappin", title: "Kerala", sub: "Munnar · Alleppey · Wayanad", href: "/destinations/kerala" },
  { icon: "mappin", title: "Goa", sub: "North Goa · South Goa", href: "/destinations/goa" },
  { icon: "mappin", title: "Mumbai", sub: "City Tours · Airport Transfers", href: "/destinations/mumbai" },
  { icon: "mappin", title: "Gujarat", sub: "Rann of Kutch · Somnath · Dwarka", href: "/destinations/gujarat" },
];

const serviceItems: DropItem[] = [
  { icon: "road", title: "Outstation Tours", sub: "Multi-day journeys across India", href: "/services" },
  { icon: "nav", title: "Airport Transfers", sub: "On-time pickup & drop", href: "/services" },
  { icon: "briefcase", title: "Corporate Travel", sub: "Employee & executive transport", href: "/services" },
  { icon: "users", title: "Group Tours", sub: "Family & friends · 12+ pax", href: "/services" },
  { icon: "sparkle", title: "Wedding Transport", sub: "Decorated cars & fleets", href: "/services" },
];

function DropdownItem({ item, href }: { item: DropItem; href?: string }) {
  return (
    <a href={href ?? item.href} className="dropdown-item">
      <div className="di-icon">
        <Icon name={item.icon} />
      </div>
      <div className="di-text">
        <strong>{item.title}</strong>
        <span>{item.sub}</span>
      </div>
    </a>
  );
}

const PHONE = "+91 98765 43210";
const PHONE_TEL = "+919876543210";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  useEffect(() => {
    const onResize = () => {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        setNavOpen(false);
        setOpenDrop(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const isMobile = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;

  const handleDropClick = (key: string) => (e: React.MouseEvent) => {
    if (isMobile()) {
      e.preventDefault();
      setOpenDrop((cur) => (cur === key ? null : key));
    }
  };

  const closeMobile = () => {
    if (isMobile()) {
      setNavOpen(false);
      setOpenDrop(null);
    }
  };

  const navClass = [
    scrolled && "scrolled",
    navOpen && "nav-open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id="navbar" className={navClass}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.webp" alt="Silver Clouds Holiday Logo" />
          <div className="nav-logo-text">
            <strong>Silver Clouds Holiday</strong>
            <span>Tours &amp; Chauffeur Services</span>
          </div>
        </a>

        <ul className="nav-links">
          <li className={`has-dropdown${openDrop === "fleet" ? " open" : ""}`}>
            <a href="/fleet" onClick={handleDropClick("fleet")}>
              Fleet <Icon name="chevron" className="caret" />
            </a>
            <div className="dropdown">
              {fleetItems.map((it) => (
                <DropdownItem key={it.title} item={it} />
              ))}
              <a href="/fleet" className="dropdown-footer">
                <div className="dropdown-footer-text">
                  <strong>View Full Fleet</strong>
                  <span>5 Vehicle Types</span>
                </div>
                <Icon name="arrow" />
              </a>
            </div>
          </li>

          <li className={`has-dropdown${openDrop === "dest" ? " open" : ""}`}>
            <a href="/destinations" onClick={handleDropClick("dest")}>
              Destinations <Icon name="chevron" className="caret" />
            </a>
            <div className="dropdown mega">
              <div className="mega-grid">
                <div className="mega-label">Hill Stations &amp; Pilgrimage</div>
                {destHills.map((it) => (
                  <DropdownItem key={it.title} item={it} />
                ))}
                <div className="mega-label" style={{ marginTop: ".4rem" }}>
                  Beaches, Heritage &amp; City
                </div>
                {destCoast.map((it) => (
                  <DropdownItem key={it.title} item={it} />
                ))}
              </div>
              <a href="/destinations" className="dropdown-footer">
                <div className="dropdown-footer-text">
                  <strong>Explore All Destinations</strong>
                  <span>8 States · 30+ Cities</span>
                </div>
                <Icon name="arrow" />
              </a>
            </div>
          </li>

          <li className={`has-dropdown${openDrop === "svc" ? " open" : ""}`}>
            <a href="/services" onClick={handleDropClick("svc")}>
              Services <Icon name="chevron" className="caret" />
            </a>
            <div className="dropdown">
              {serviceItems.map((it) => (
                <DropdownItem key={it.title} item={it} />
              ))}
              <a href="/contact" className="dropdown-footer">
                <div className="dropdown-footer-text">
                  <strong>Get Custom Quote</strong>
                  <span>Tailored to your trip</span>
                </div>
                <Icon name="arrow" />
              </a>
            </div>
          </li>

          <li>
            <a href="/tours" onClick={closeMobile}>
              Tours
            </a>
          </li>
          <li>
            <a href="/about" onClick={closeMobile}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" onClick={closeMobile}>
              Contact
            </a>
          </li>

          {/* Mobile-only cloned actions (desktop hides via CSS) */}
          <li className="nav-mobile-actions">
            <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
              <Icon name="phone" sm />
              {PHONE}
            </a>
            <a className="btn-primary" href="/contact" onClick={closeMobile}>
              Book Now
              <Icon name="arrow" sm />
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a className="nav-phone" href={`tel:${PHONE_TEL}`}>
            <Icon name="phone" sm />
            {PHONE}
          </a>
          <a className="btn-primary" href="/contact">
            Book Now
            <Icon name="arrow" sm />
          </a>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
