import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailHero from "@/components/ui/DetailHero";
import FastFacts from "@/components/ui/FastFacts";
import Itinerary from "@/components/ui/Itinerary";
import InclusionsExclusions from "@/components/ui/InclusionsExclusions";
import RecommendedVehicles from "@/components/detail/RecommendedVehicles";
import RelatedTours from "@/components/detail/RelatedTours";
import FAQ from "@/components/ui/FAQ";
import EnquireCTA from "@/components/detail/EnquireCTA";
import JsonLd from "@/components/ui/JsonLd";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import {
  getTourBySlug,
  getDestinationBySlug,
  getVehicleBySlug,
  getToursForDestination,
  getTourSlugs,
} from "@/sanity/queries";
import { SITE_URL, COMPANY, waLink } from "@/lib/site";

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  return (await getTourSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTourBySlug(slug);
  if (!t) return { title: "Tour Not Found" };
  const desc = `${t.name} — ${t.duration}, ${t.route}. Chauffeur-driven ${COMPANY} package from ${t.price}. Day-wise itinerary, transparent pricing, 24/7 support.`;
  return {
    title: `${t.name} — ${t.duration}`,
    description: desc,
    openGraph: { title: t.name, description: desc, images: [t.heroImage ?? t.image] },
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTourBySlug(slug);
  if (!t) notFound();

  const dest = t.destinationSlug ? await getDestinationBySlug(t.destinationSlug) : undefined;
  const vehicle = t.vehicleSlug ? await getVehicleBySlug(t.vehicleSlug) : undefined;
  const others = t.destinationSlug
    ? (await getToursForDestination(t.destinationSlug)).filter((x) => x.slug !== t.slug)
    : [];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: t.name },
  ];

  const facts = [
    { label: "Duration", value: t.duration ?? "—" },
    { label: "Route", value: t.route },
    { label: "Starting from", value: t.price },
    ...(dest ? [{ label: "Region", value: dest.name }] : []),
    ...(vehicle ? [{ label: "Recommended car", value: vehicle.name }] : []),
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: t.name,
          description: (t.overview ?? []).join(" "),
          image: `${SITE_URL}${t.heroImage ?? t.image}`,
          touristType: "leisure",
          itinerary: {
            "@type": "ItemList",
            itemListElement: (t.itinerary ?? []).map((d) => ({
              "@type": "ListItem",
              position: d.day,
              name: d.title,
            })),
          },
          offers: {
            "@type": "Offer",
            price: t.price.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
          },
          provider: { "@type": "TravelAgency", name: COMPANY, url: SITE_URL },
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
      {t.faqs && t.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: t.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <DetailHero
        image={t.heroImage ?? t.image}
        label={t.tag}
        title={t.name}
        tagline={t.route}
        crumbs={crumbs}
        meta={[
          { text: t.duration ?? "" },
          { text: `From ${t.price}` },
          ...(dest ? [{ text: dest.name }] : []),
        ]}
      />

      <section className="detail-body">
        <div className="container detail-layout">
          <div className="detail-main">
            <Reveal as="div">
              <span className="section-label">Tour Overview</span>
              <h2>{t.name}</h2>
              <div className="detail-lead">
                {(t.overview ?? []).map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <ul className="tour-highlights">
                {(t.highlights ?? []).map((h) => (
                  <li key={h}>
                    <Icon name="star" sm filled /> {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="detail-aside">
            <div className="price-card">
              <div className="price-amt">{t.price}</div>
              <p className="price-note">{t.priceNote}</p>
              <div className="price-actions">
                <a
                  className="btn-whatsapp"
                  href={waLink(`Hi, I'd like to book the ${t.name} (${t.duration}) package.`)}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="whatsapp" filled style={{ width: 18, height: 18 }} />
                  Book on WhatsApp
                </a>
                <a className="btn-primary" href="#enquire">
                  <Icon name="send" sm /> Get a Free Quote
                </a>
              </div>
              <div className="price-reassure">
                <span>
                  <Icon name="check" sm /> Free cancellation
                </span>
                <span>
                  <Icon name="check" sm /> Customisable itinerary
                </span>
                <span>
                  <Icon name="check" sm /> Pay a small advance to confirm
                </span>
              </div>
            </div>
            <FastFacts facts={facts} title="Tour Snapshot" />
          </aside>
        </div>
      </section>

      {t.itinerary && <Itinerary days={t.itinerary} />}

      {t.inclusions && t.exclusions && (
        <InclusionsExclusions inclusions={t.inclusions} exclusions={t.exclusions} />
      )}

      {vehicle && (
        <RecommendedVehicles
          vehicles={[vehicle]}
          heading="Your Vehicle for This Trip"
        />
      )}

      {others.length > 0 && dest && (
        <RelatedTours
          tours={others}
          heading={`More Tours in ${dest.name}`}
          label="Keep Exploring"
        />
      )}

      {t.faqs && <FAQ items={t.faqs} heading="Tour FAQs" />}

      <EnquireCTA title={`Book the ${t.name}`} subject={`${t.name} (${t.duration})`} />
    </main>
  );
}
