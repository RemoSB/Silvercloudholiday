import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import About from "@/components/home/About";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import { getTestimonials } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "About Us — Family-Run Travel Since 2018",
  description:
    "Silver Clouds Holiday grew from a single Innova Crysta in 2018 into a 50+ vehicle fleet across 8 Indian states. Built on trust, driven by passion for India.",
};

export default async function AboutPage() {
  const testimonials = await getTestimonials();
  return (
    <main>
      <PageHero
        label="About Silver Clouds Holiday"
        title="Built on Trust, Driven by Passion for India"
        desc="A family-run business that treats every customer like a guest in our home."
      />
      <About />
      <WhyUs />
      <Testimonials items={testimonials} />
      <CTA />
    </main>
  );
}
