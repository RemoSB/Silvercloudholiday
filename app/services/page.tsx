import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Services from "@/components/home/Services";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services — Outstation, Airport, Corporate & Group Travel",
  description:
    "Outstation tours, airport transfers, corporate travel, group tours and wedding transport across India — one trusted team, transparent pricing.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        label="What We Offer"
        title="Services Built Around Your Journey"
        desc="From a single airport run to a two-week multi-state tour — verified chauffeurs and one transparent price."
      />
      <Services heading={false} />
      <CTA />
    </main>
  );
}
