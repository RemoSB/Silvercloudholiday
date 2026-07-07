import Hero from "@/components/home/Hero";
import USP from "@/components/home/USP";
import Fleet from "@/components/home/Fleet";
import Destinations from "@/components/home/Destinations";
import Packages from "@/components/home/Packages";
import WhyUs from "@/components/home/WhyUs";
import About from "@/components/home/About";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import {
  getFleet,
  getDestinations,
  getPackages,
  getTestimonials,
} from "@/sanity/queries";

export default async function Home() {
  const [fleet, destinations, packages, testimonials] = await Promise.all([
    getFleet(),
    getDestinations(),
    getPackages(),
    getTestimonials(),
  ]);

  return (
    <main>
      <Hero />
      <USP />
      <Fleet items={fleet} />
      <Destinations items={destinations} />
      <Packages items={packages} />
      <WhyUs />
      <About />
      <Testimonials items={testimonials} />
      <CTA />
    </main>
  );
}
