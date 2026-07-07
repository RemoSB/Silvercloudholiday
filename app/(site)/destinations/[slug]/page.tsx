import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import DetailHero from "@/components/ui/DetailHero";
import FastFacts from "@/components/ui/FastFacts";
import AttractionsGrid from "@/components/ui/AttractionsGrid";
import RelatedTours from "@/components/detail/RelatedTours";
import RecommendedVehicles from "@/components/detail/RecommendedVehicles";
import FAQ from "@/components/ui/FAQ";
import EnquireCTA from "@/components/detail/EnquireCTA";
import JsonLd from "@/components/ui/JsonLd";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import {
  destinations,
  getDestination,
  getVehicle,
  toursForDestination,
} from "@/lib/data";
import { SITE_URL, COMPANY } from "@/lib/site";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug! }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Destination Not Found" };
  return {
    title: `${d.name} Tour Packages by Road`,
    description: d.seoDesc,
    openGraph: {
      title: `${d.name} Tour Packages — ${COMPANY}`,
      description: d.seoDesc,
      images: [d.image],
    },
  };
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const tours = toursForDestination(d.slug!);
  const vehicles = (d.vehicleSlugs ?? [])
    .map((s) => getVehicle(s))
    .filter((v): v is NonNullable<typeof v> => Boolean(v));

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Destinations", href: "/destinations" },
    { label: d.name },
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: d.name,
          description: d.seoDesc,
          image: `${SITE_URL}${d.image}`,
          touristType: d.whyVisit,
          address: { "@type": "PostalAddress", addressRegion: d.region, addressCountry: "IN" },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            item: c.href ? `${SITE_URL}${c.href}` : undefined,
          })),
        }}
      />
      {d.faqs && d.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <DetailHero
        image={d.image}
        label={d.region ?? "Destination"}
        title={d.name}
        tagline={d.tagline}
        crumbs={crumbs}
        meta={[
          { text: `Best time: ${d.bestTime}` },
          { text: `Ideal ${d.idealDuration}` },
          { text: `${tours.length} curated tours` },
        ]}
      />

      <section className="detail-body">
        <div className="container detail-layout">
          <div className="detail-main">
            <Reveal as="div">
              <span className="section-label">Overview</span>
              <h2>Why Visit {d.name}?</h2>
              <div className="detail-lead">
                {(d.overview ?? []).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="why-visit">
                {(d.whyVisit ?? []).map((w) => (
                  <li key={w}>
                    <Icon name="check" sm /> {w}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="detail-aside">
            {d.fastFacts && <FastFacts facts={d.fastFacts} />}
            <div className="price-card">
              <div className="price-amt">Plan your {d.name} trip</div>
              <p className="price-note">
                Custom itineraries · chauffeur-driven · transparent pricing
              </p>
              <div className="price-actions">
                <Link className="btn-primary" href="#enquire">
                  <Icon name="send" sm /> Get a Free Quote
                </Link>
              </div>
              <div className="price-reassure">
                <span>
                  <Icon name="check" sm /> Police-verified chauffeurs
                </span>
                <span>
                  <Icon name="check" sm /> No hidden charges
                </span>
                <span>
                  <Icon name="check" sm /> 24/7 WhatsApp support
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {d.attractions && <AttractionsGrid items={d.attractions} place={d.name} />}

      <RelatedTours
        tours={tours}
        heading={`Tours in ${d.name}`}
        label="Ready-to-Book Getaways"
        intro={`Handpicked ${d.name} itineraries — fully customisable to your dates, group size and budget.`}
      />

      <RecommendedVehicles
        vehicles={vehicles}
        heading={`Best Vehicles for ${d.name}`}
      />

      {d.faqs && <FAQ items={d.faqs} heading={`${d.name} Travel FAQs`} />}

      <EnquireCTA
        title={`Plan Your ${d.name} Trip`}
        subject={`${d.name} tour`}
      />
    </main>
  );
}
