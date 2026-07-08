import { cache } from "react";
import { client, isSanityConfigured } from "./client";
import { urlFor } from "./image";
import {
  SETTINGS_DEFAULTS,
  NAV_DEFAULTS,
  type SiteSettings,
  type SiteStat,
  type NavMenu,
} from "@/lib/site";
import {
  fleet as fleetFallback,
  destinations as destFallback,
  packages as pkgFallback,
  tours as toursFallback,
  testimonials as testiFallback,
  services as servicesFallback,
  getTour,
  getVehicle,
  getDestination,
  toursForDestination,
  type Vehicle,
  type Destination,
  type Package,
  type Tour,
  type Testimonial,
  type Service,
} from "@/lib/data";

// Revalidate CMS reads every 60s (ISR) once Sanity is live.
const OPTS = { next: { revalidate: 60 } } as const;

type SanityImg = { asset?: { _ref?: string } } | undefined;
const img = (source: SanityImg, fallback: string, w = 900): string => {
  if (!source?.asset?._ref) return fallback;
  try {
    return urlFor(source as never).width(w).url();
  } catch {
    return fallback;
  }
};
const gallery = (arr: SanityImg[] | undefined, w = 1200): string[] =>
  (arr || []).map((g) => img(g, "", w)).filter(Boolean);

export async function getFleet(): Promise<Vehicle[]> {
  if (!isSanityConfigured) return fleetFallback;
  const rows = await client.fetch<Record<string, unknown>[]>(
    `*[_type == "vehicle"] | order(order asc){ name, "slug": slug.current, category, image, badge, meta, tags, price }`,
    {},
    OPTS
  );
  if (!rows?.length) return fleetFallback;
  return rows.map((r) => ({
    name: r.name as string,
    alt: r.name as string,
    slug: r.slug as string | undefined,
    category: r.category as Vehicle["category"],
    image: img(r.image as SanityImg, "/images/Toyota Innova Crysta.png"),
    badge: r.badge as Vehicle["badge"],
    meta: (r.meta as Vehicle["meta"]) || [],
    tags: (r.tags as string[]) || [],
    price: (r.price as string) || "",
  }));
}

export async function getDestinations(): Promise<Destination[]> {
  if (!isSanityConfigured) return destFallback;
  const rows = await client.fetch<Record<string, unknown>[]>(
    `*[_type == "destination"] | order(order asc){ name, "slug": slug.current, image, sub, pill, wide, region, tagline }`,
    {},
    OPTS
  );
  if (!rows?.length) return destFallback;
  return rows.map((r) => ({
    name: r.name as string,
    slug: r.slug as string | undefined,
    image: img(r.image as SanityImg, "/images/India_outline.png"),
    sub: (r.sub as string) || "",
    pill: r.pill as Destination["pill"],
    wide: r.wide as boolean | undefined,
    region: r.region as string | undefined,
    tagline: r.tagline as string | undefined,
  }));
}

export async function getPackages(): Promise<Package[]> {
  if (!isSanityConfigured) return pkgFallback;
  const rows = await client.fetch<Record<string, unknown>[]>(
    `*[_type == "tourPackage"] | order(order asc){ name, "slug": slug.current, image, tag, route, feats, price, duration }`,
    {},
    OPTS
  );
  if (!rows?.length) return pkgFallback;
  return rows.map((r) => ({
    name: r.name as string,
    slug: r.slug as string | undefined,
    image: img(r.image as SanityImg, "/images/pkg-manali.jpg"),
    tag: (r.tag as string) || "",
    route: (r.route as string) || "",
    feats: (r.feats as string[]) || [],
    price: (r.price as string) || "",
    duration: r.duration as string | undefined,
  }));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured) return testiFallback;
  const rows = await client.fetch<Record<string, unknown>[]>(
    `*[_type == "testimonial"] | order(order asc){ name, text, rating, trip }`,
    {},
    OPTS
  );
  if (!rows?.length) return testiFallback;
  return rows.map((r) => ({
    name: r.name as string,
    text: (r.text as string) || "",
    rating: (r.rating as number) || 5,
    trip: (r.trip as string) || "",
    avatar: (r.name as string)?.charAt(0)?.toUpperCase() || "•",
  }));
}

/* ------------------------------------------------------------------ */
/* Detail pages — slug lists + single-doc fetches (CMS or fallback)    */
/* ------------------------------------------------------------------ */

async function cmsSlugs(type: string): Promise<string[]> {
  const rows = await client.fetch<string[]>(
    `*[_type == $type && defined(slug.current)].slug.current`,
    { type },
    OPTS
  );
  return rows || [];
}

// --- Vehicles ---
const VEHICLE_DETAIL = `{
  name, "slug": slug.current, category, image, badge, meta, tags, price,
  overview, specs, idealFor, pricing, gallery, faqs
}`;

function mapVehicle(r: Record<string, unknown>): Vehicle {
  return {
    name: r.name as string,
    alt: r.name as string,
    slug: r.slug as string | undefined,
    category: r.category as Vehicle["category"],
    image: img(r.image as SanityImg, "/images/Toyota Innova Crysta.webp", 1600),
    badge: r.badge as Vehicle["badge"],
    meta: (r.meta as Vehicle["meta"]) || [],
    tags: (r.tags as string[]) || [],
    price: (r.price as string) || "",
    overview: r.overview as string | undefined,
    specs: r.specs as Vehicle["specs"],
    idealFor: r.idealFor as string[] | undefined,
    pricing: r.pricing as Vehicle["pricing"],
    gallery: gallery(r.gallery as SanityImg[] | undefined),
    faqs: r.faqs as Vehicle["faqs"],
  };
}

export async function getVehicleSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return fleetFallback.map((v) => v.slug!).filter(Boolean);
  const s = await cmsSlugs("vehicle");
  return s.length ? s : fleetFallback.map((v) => v.slug!).filter(Boolean);
}

export async function getVehicleBySlug(slug: string): Promise<Vehicle | undefined> {
  if (isSanityConfigured) {
    const r = await client.fetch<Record<string, unknown> | null>(
      `*[_type == "vehicle" && slug.current == $slug][0]${VEHICLE_DETAIL}`,
      { slug },
      OPTS
    );
    if (r) return mapVehicle(r);
  }
  return getVehicle(slug);
}

// --- Destinations ---
const DEST_DETAIL = `{
  name, "slug": slug.current, image, sub, pill, wide, region, tagline,
  overview, bestTime, idealDuration, whyVisit, attractions, fastFacts, gallery, faqs, seoDesc,
  "tourSlugs": relatedTours[]->slug.current,
  "vehicleSlugs": recommendedVehicles[]->slug.current
}`;

function mapDestination(r: Record<string, unknown>): Destination {
  return {
    name: r.name as string,
    slug: r.slug as string | undefined,
    image: img(r.image as SanityImg, "/images/India_outline.webp", 1600),
    sub: (r.sub as string) || "",
    pill: r.pill as Destination["pill"],
    wide: r.wide as boolean | undefined,
    region: r.region as string | undefined,
    tagline: r.tagline as string | undefined,
    overview: r.overview as string[] | undefined,
    bestTime: r.bestTime as string | undefined,
    idealDuration: r.idealDuration as string | undefined,
    whyVisit: r.whyVisit as string[] | undefined,
    attractions: r.attractions as Destination["attractions"],
    fastFacts: r.fastFacts as Destination["fastFacts"],
    gallery: gallery(r.gallery as SanityImg[] | undefined),
    faqs: r.faqs as Destination["faqs"],
    tourSlugs: (r.tourSlugs as string[] | undefined)?.filter(Boolean),
    vehicleSlugs: (r.vehicleSlugs as string[] | undefined)?.filter(Boolean),
    seoDesc: r.seoDesc as string | undefined,
  };
}

export async function getDestinationSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return destFallback.map((d) => d.slug!).filter(Boolean);
  const s = await cmsSlugs("destination");
  return s.length ? s : destFallback.map((d) => d.slug!).filter(Boolean);
}

export async function getDestinationBySlug(
  slug: string
): Promise<Destination | undefined> {
  if (isSanityConfigured) {
    const r = await client.fetch<Record<string, unknown> | null>(
      `*[_type == "destination" && slug.current == $slug][0]${DEST_DETAIL}`,
      { slug },
      OPTS
    );
    if (r) return mapDestination(r);
  }
  return getDestination(slug);
}

// --- Tours ---
const TOUR_DETAIL = `{
  name, "slug": slug.current, tag, route, price, priceNote, duration, feats,
  image, heroImage, overview, highlights, itinerary, inclusions, exclusions, faqs,
  "destinationSlug": destination->slug.current,
  "vehicleSlug": vehicle->slug.current
}`;

function mapTour(r: Record<string, unknown>): Tour {
  const image = img(r.image as SanityImg, "/images/pkg-manali.webp", 1600);
  return {
    name: r.name as string,
    slug: r.slug as string | undefined,
    tag: (r.tag as string) || "",
    route: (r.route as string) || "",
    price: (r.price as string) || "",
    priceNote: r.priceNote as string | undefined,
    duration: r.duration as string | undefined,
    feats: (r.feats as string[]) || [],
    image,
    heroImage: img(r.heroImage as SanityImg, image, 1600),
    overview: r.overview as string[] | undefined,
    highlights: r.highlights as string[] | undefined,
    itinerary: r.itinerary as Tour["itinerary"],
    inclusions: r.inclusions as string[] | undefined,
    exclusions: r.exclusions as string[] | undefined,
    faqs: r.faqs as Tour["faqs"],
    destinationSlug: r.destinationSlug as string | undefined,
    vehicleSlug: r.vehicleSlug as string | undefined,
  };
}

export async function getTourSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return toursFallback.map((t) => t.slug!).filter(Boolean);
  const s = await cmsSlugs("tourPackage");
  return s.length ? s : toursFallback.map((t) => t.slug!).filter(Boolean);
}

export async function getTourBySlug(slug: string): Promise<Tour | undefined> {
  if (isSanityConfigured) {
    const r = await client.fetch<Record<string, unknown> | null>(
      `*[_type == "tourPackage" && slug.current == $slug][0]${TOUR_DETAIL}`,
      { slug },
      OPTS
    );
    if (r) return mapTour(r);
  }
  return getTour(slug);
}

export async function getToursForDestination(destSlug: string): Promise<Tour[]> {
  if (isSanityConfigured) {
    const rows = await client.fetch<Record<string, unknown>[]>(
      `*[_type == "tourPackage" && destination->slug.current == $destSlug] | order(order asc)${TOUR_DETAIL}`,
      { destSlug },
      OPTS
    );
    if (rows?.length) return rows.map(mapTour);
  }
  return toursForDestination(destSlug);
}

/* ------------------------------------------------------------------ */
/* Site settings (singleton) + services — CMS or fallback              */
/* ------------------------------------------------------------------ */

// Cached per request: many server components call getSettings(); React
// cache() dedupes them into a single Sanity fetch.
export const getSettings = cache(async (): Promise<SiteSettings> => {
  if (!isSanityConfigured) return SETTINGS_DEFAULTS;
  const r = await client.fetch<Record<string, unknown> | null>(
    `*[_type == "siteSettings"][0]{
      phone, phoneTel, whatsappNumber, email, address,
      heroHeading, heroSubheading, stats,
      about, usps, whyItems, socials
    }`,
    {},
    OPTS
  );
  if (!r) return SETTINGS_DEFAULTS;
  const d = SETTINGS_DEFAULTS;
  const socials = (r.socials as SiteSettings["socials"]) || {};
  const stats = r.stats as SiteSettings["stats"] | undefined;
  const usps = r.usps as SiteSettings["usps"] | undefined;
  const whyItems = r.whyItems as SiteSettings["whyItems"] | undefined;
  const a = (r.about as Record<string, unknown> | undefined) || undefined;
  const about: SiteSettings["about"] = a
    ? {
        founderName: (a.founderName as string) || d.about.founderName,
        founderRole: (a.founderRole as string) || d.about.founderRole,
        yearsBadge: (a.yearsBadge as string) || d.about.yearsBadge,
        portrait: img(a.portrait as SanityImg, d.about.portrait || "", 800) || d.about.portrait,
        quote: (a.quote as string) || d.about.quote,
        story: (a.story as string) || d.about.story,
        stats: (a.stats as SiteStat[] | undefined)?.length
          ? (a.stats as SiteStat[])
          : d.about.stats,
      }
    : d.about;
  return {
    phone: (r.phone as string) || d.phone,
    phoneTel: (r.phoneTel as string) || d.phoneTel,
    whatsappNumber: (r.whatsappNumber as string) || d.whatsappNumber,
    email: (r.email as string) || d.email,
    address: (r.address as string) || d.address,
    heroHeading: (r.heroHeading as string) || d.heroHeading,
    heroSubheading: (r.heroSubheading as string) || d.heroSubheading,
    stats: stats?.length ? stats : d.stats,
    about,
    usps: usps?.length ? usps : d.usps,
    whyItems: whyItems?.length ? whyItems : d.whyItems,
    socials: {
      instagram: socials.instagram || undefined,
      facebook: socials.facebook || undefined,
      youtube: socials.youtube || undefined,
    },
  };
});

export const getNavigation = cache(async (): Promise<NavMenu[]> => {
  if (!isSanityConfigured) return NAV_DEFAULTS;
  const r = await client.fetch<{ menus?: NavMenu[] } | null>(
    `*[_type == "navigation"][0]{
      menus[]{
        label, href, mega, footerTitle, footerSub, footerHref,
        groups[]{ heading, links[]{ icon, title, sub, href } }
      }
    }`,
    {},
    OPTS
  );
  return r?.menus?.length ? r.menus : NAV_DEFAULTS;
});

export async function getServices(): Promise<Service[]> {
  if (!isSanityConfigured) return servicesFallback;
  const rows = await client.fetch<Record<string, unknown>[]>(
    `*[_type == "service"] | order(order asc){ title, icon, description }`,
    {},
    OPTS
  );
  if (!rows?.length) return servicesFallback;
  return rows.map((r) => ({
    title: r.title as string,
    icon: (r.icon as string) || "sparkle",
    description: (r.description as string) || "",
  }));
}

// All tours (for /tours listing), CMS or fallback.
export async function getTours(): Promise<Tour[]> {
  if (isSanityConfigured) {
    const rows = await client.fetch<Record<string, unknown>[]>(
      `*[_type == "tourPackage"] | order(order asc)${TOUR_DETAIL}`,
      {},
      OPTS
    );
    if (rows?.length) return rows.map(mapTour);
  }
  return toursFallback;
}
