import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailHero from "@/components/ui/DetailHero";
import FAQ from "@/components/ui/FAQ";
import EnquireCTA from "@/components/detail/EnquireCTA";
import JsonLd from "@/components/ui/JsonLd";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { getVehicleBySlug, getVehicleSlugs, getSettings } from "@/sanity/queries";
import { SITE_URL, COMPANY, waLink } from "@/lib/site";

export const revalidate = 60;
export const dynamicParams = true;

const CATEGORY_LABEL: Record<string, string> = {
  sedan: "Sedan",
  suv: "SUV / MUV",
  tempo: "Tempo Traveller",
  bus: "Bus & Coach",
};

export async function generateStaticParams() {
  return (await getVehicleSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = await getVehicleBySlug(slug);
  if (!v) return { title: "Vehicle Not Found" };
  const desc = `Hire the ${v.name} with a professional chauffeur — ${v.tags.join(", ")}. Transparent ${v.price} pricing from ${COMPANY}.`;
  return {
    title: `${v.name} on Rent with Driver`,
    description: desc,
    openGraph: { title: v.name, description: desc, images: [v.image] },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = await getVehicleBySlug(slug);
  if (!v) notFound();
  const settings = await getSettings();

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Fleet", href: "/fleet" },
    { label: v.name },
  ];

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: v.name,
          image: `${SITE_URL}${v.image}`,
          description: v.overview,
          category: v.category ? CATEGORY_LABEL[v.category] : "Car rental",
          brand: { "@type": "Brand", name: COMPANY },
          offers: {
            "@type": "Offer",
            price: v.price.replace(/[^0-9]/g, ""),
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
          },
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
      {v.faqs && v.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: v.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <DetailHero
        image={v.image}
        label={v.category ? CATEGORY_LABEL[v.category] : "Fleet"}
        title={v.name}
        tagline={v.tags.join(" · ")}
        crumbs={crumbs}
        meta={v.meta.map((m) => ({ text: m.label }))}
      />

      <section className="detail-body">
        <div className="container detail-layout">
          <div className="detail-main">
            <Reveal as="div">
              <span className="section-label">Overview</span>
              <h2>About the {v.name}</h2>
              <div className="detail-lead">
                <p>{v.overview}</p>
              </div>
              {v.idealFor && (
                <>
                  <h2 style={{ marginTop: "2rem" }}>Ideal For</h2>
                  <ul className="why-visit">
                    {v.idealFor.map((x) => (
                      <li key={x}>
                        <Icon name="check" sm /> {x}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {v.specs && (
                <>
                  <h2 style={{ marginTop: "2rem" }}>Specifications</h2>
                  <div className="fast-facts" style={{ marginTop: "1rem", boxShadow: "none" }}>
                    <dl>
                      {v.specs.map((s) => (
                        <div className="fact-row" key={s.label}>
                          <dt>{s.label}</dt>
                          <dd>{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </>
              )}
            </Reveal>
          </div>

          <aside className="detail-aside">
            <div className="price-card">
              <div className="price-amt">{v.price}</div>
              <p className="price-note">Outstation fare · inclusive of driver &amp; fuel</p>
              <div className="price-actions">
                <a
                  className="btn-whatsapp"
                  href={waLink(`Hi, I'd like to book the ${v.name}.`, settings.whatsappNumber)}
                  target="_blank"
                  rel="noopener"
                >
                  <Icon name="whatsapp" filled style={{ width: 18, height: 18 }} />
                  Book This Vehicle
                </a>
                <a className="btn-primary" href="#enquire">
                  <Icon name="send" sm /> Get a Free Quote
                </a>
              </div>
              <div className="price-reassure">
                <span>
                  <Icon name="check" sm /> Verified, trained chauffeur
                </span>
                <span>
                  <Icon name="check" sm /> Sanitised &amp; inspected
                </span>
                <span>
                  <Icon name="check" sm /> No hidden charges
                </span>
              </div>
            </div>
            {v.pricing && <FastFactsPricing pricing={v.pricing} />}
          </aside>
        </div>
      </section>

      {v.faqs && <FAQ items={v.faqs} heading={`${v.name} — Your Questions`} />}

      <EnquireCTA title={`Book the ${v.name}`} subject={`${v.name} on rent`} />
    </main>
  );
}

function FastFactsPricing({ pricing }: { pricing: { label: string; value: string }[] }) {
  return (
    <div className="fast-facts">
      <h3>
        <Icon name="tag" sm /> Transparent Pricing
      </h3>
      <dl>
        {pricing.map((p) => (
          <div className="fact-row" key={p.label}>
            <dt>{p.label}</dt>
            <dd>{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
