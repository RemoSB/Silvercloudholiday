import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Fleet from "@/components/home/Fleet";
import CTA from "@/components/home/CTA";
import { getFleet } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Our Fleet — Sedans, SUVs & Tempo Travellers",
  description:
    "Browse the Silver Clouds Holiday fleet — Innova Crysta, Tempo Traveller, Swift Dzire, Honda Amaze and Ertiga. Transparent per-km pricing, verified drivers.",
};

export default async function FleetPage() {
  const fleet = await getFleet();
  return (
    <main>
      <PageHero
        label="Our Fleet"
        title="Choose Your Perfect Ride"
        desc="From budget sedans to spacious group movers — every vehicle serviced before each trip and driven by a verified chauffeur."
      />
      <Fleet items={fleet} heading={false} />
      <CTA />
    </main>
  );
}
