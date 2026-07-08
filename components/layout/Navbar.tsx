"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import { NAV_DEFAULTS, type NavMenu, type NavLink } from "@/lib/site";

function DropdownItem({ link }: { link: NavLink }) {
  return (
    <a href={link.href} className="dropdown-item">
      <div className="di-icon">
        <Icon name={link.icon || "arrow"} />
      </div>
      <div className="di-text">
        <strong>{link.title}</strong>
        {link.sub && <span>{link.sub}</span>}
      </div>
    </a>
  );
}

export default function Navbar({
  menus = NAV_DEFAULTS,
  phone = "+91 98765 43210",
  phoneTel = "+919876543210",
}: {
  menus?: NavMenu[];
  phone?: string;
  phoneTel?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<number | null>(null);

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

  const handleDropClick = (key: number) => (e: React.MouseEvent) => {
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

  const navClass = [scrolled && "scrolled", navOpen && "nav-open"]
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
          {menus.map((m, i) => {
            const hasDropdown = !!m.groups?.length;
            if (!hasDropdown) {
              return (
                <li key={m.label}>
                  <a href={m.href} onClick={closeMobile}>
                    {m.label}
                  </a>
                </li>
              );
            }
            return (
              <li
                key={m.label}
                className={`has-dropdown${openDrop === i ? " open" : ""}`}
              >
                <a href={m.href} onClick={handleDropClick(i)}>
                  {m.label} <Icon name="chevron" className="caret" />
                </a>
                <div className={`dropdown${m.mega ? " mega" : ""}`}>
                  {m.mega ? (
                    <div className="mega-grid">
                      {m.groups!.map((g, gi) => (
                        <div key={gi} style={{ display: "contents" }}>
                          {g.heading && (
                            <div
                              className="mega-label"
                              style={gi > 0 ? { marginTop: ".4rem" } : undefined}
                            >
                              {g.heading}
                            </div>
                          )}
                          {g.links.map((l) => (
                            <DropdownItem key={l.title} link={l} />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    m.groups!.map((g, gi) => (
                      <div key={gi} style={{ display: "contents" }}>
                        {g.heading && <div className="mega-label">{g.heading}</div>}
                        {g.links.map((l) => (
                          <DropdownItem key={l.title} link={l} />
                        ))}
                      </div>
                    ))
                  )}
                  {m.footerTitle && (
                    <a href={m.footerHref || m.href} className="dropdown-footer">
                      <div className="dropdown-footer-text">
                        <strong>{m.footerTitle}</strong>
                        {m.footerSub && <span>{m.footerSub}</span>}
                      </div>
                      <Icon name="arrow" />
                    </a>
                  )}
                </div>
              </li>
            );
          })}

          {/* Mobile-only cloned actions (desktop hides via CSS) */}
          <li className="nav-mobile-actions">
            <a className="nav-phone" href={`tel:${phoneTel}`}>
              <Icon name="phone" sm />
              {phone}
            </a>
            <a className="btn-primary" href="/contact" onClick={closeMobile}>
              Book Now
              <Icon name="arrow" sm />
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a className="nav-phone" href={`tel:${phoneTel}`}>
            <Icon name="phone" sm />
            {phone}
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
