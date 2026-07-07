import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Destinations from "@/components/home/Destinations";
import Packages from "@/components/home/Packages";
import CTA from "@/components/home/CTA";
import { getDestinations, getPackages } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Destinations — 8 States Across India",
  description:
    "Chauffeur-driven tours across Himachal, Kashmir, Uttarakhand, Rajasthan, Kerala, Goa, Mumbai and Gujarat. Curated routes for every season.",
};

export default async function DestinationsPage() {
  const [destinations, packages] = await Promise.all([
    getDestinations(),
    getPackages(),
  ]);
  return (
    <main>
      <PageHero
        label="Popular Destinations"
        title="Where Do You Want to Go?"
        desc="We cover 8 breathtaking states across India — every route, every season, planned end-to-end."
      />
      <Destinations items={destinations} heading={false} />
      <Packages items={packages} />
      <CTA />
    </main>
  );
}
