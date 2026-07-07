import { client, isSanityConfigured } from "./client";
import { urlFor } from "./image";
import {
  fleet as fleetFallback,
  destinations as destFallback,
  packages as pkgFallback,
  testimonials as testiFallback,
  type Vehicle,
  type Destination,
  type Package,
  type Testimonial,
} from "@/lib/data";

// Revalidate CMS reads every 60s (ISR) once Sanity is live.
const OPTS = { next: { revalidate: 60 } } as const;

type SanityImg = { asset?: { _ref?: string } } | undefined;
const img = (source: SanityImg, fallback: string): string => {
  if (!source?.asset?._ref) return fallback;
  try {
    return urlFor(source as never).width(900).url();
  } catch {
    return fallback;
  }
};

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
    `*[_type == "destination"] | order(order asc){ name, "slug": slug.current, image, sub, pill, wide }`,
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
