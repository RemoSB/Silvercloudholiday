"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import type { FAQ as FAQItem } from "@/lib/data";

export default function FAQ({
  items,
  heading = "Frequently Asked Questions",
  label = "Good to Know",
}: {
  items: FAQItem[];
  heading?: string;
  label?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  if (!items?.length) return null;
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{label}</span>
          <h2 className="section-title">{heading}</h2>
        </div>
        <div className="faq-list">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                as="div"
                key={f.q}
                delay={i * 0.03}
                className={`faq-item${isOpen ? " open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{f.q}</span>
                  <Icon name="chevron" sm />
                </button>
                {isOpen && <div className="faq-a">{f.a}</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
