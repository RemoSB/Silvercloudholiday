/**
 * Bulk-loads built-in content (lib/data.ts) into Sanity, uploading the local
 * WebP images as assets. Idempotent: re-running replaces existing docs.
 *
 * Usage:
 *   1. Create a write token at manage.sanity.io → API → Tokens (Editor role)
 *   2. Add to .env.local:  SANITY_WRITE_TOKEN=sk...
 *   3. npm run seed
 */
import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { config as loadEnv } from "dotenv";
import {
  fleet,
  destinations,
  tours,
  testimonials,
  services,
} from "../lib/data";

loadEnv({ path: ".env.local" });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || !token) {
  console.error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_WRITE_TOKEN in .env.local"
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Upload a /images/*.webp file as a Sanity image asset (cached per path).
const assetCache = new Map<string, string>();
async function uploadImage(publicPath: string): Promise<string> {
  if (assetCache.has(publicPath)) return assetCache.get(publicPath)!;
  const file = path.join("public", publicPath);
  const buf = await readFile(file);
  const asset = await client.assets.upload("image", buf, {
    filename: path.basename(publicPath),
  });
  assetCache.set(publicPath, asset._id);
  return asset._id;
}

const imageField = (assetId: string) => ({
  _type: "image",
  asset: { _type: "reference", _ref: assetId },
});

// Add a stable _key to each array-of-object item (required by Sanity).
const keyed = <T extends object>(arr: T[] = []) =>
  arr.map((x, i) => ({ _key: `k${i}`, ...x }));

const ref = (id: string) => ({ _type: "reference", _ref: id });
const refs = (ids: string[] = []) =>
  ids.map((id, i) => ({ _key: `k${i}`, ...ref(id) }));

// Upload a list of local image paths as keyed image fields (gallery).
async function galleryField(
  paths: string[] = [],
  upload: (p: string) => Promise<string>
) {
  const out = [];
  for (let i = 0; i < paths.length; i++) {
    const asset = await upload(paths[i]);
    out.push({ _key: `g${i}`, ...imageField(asset) });
  }
  return out;
}

async function run() {
  const docs: Record<string, unknown>[] = [];

  console.log("Uploading images + building documents…");

  let order = 0;
  for (const v of fleet) {
    const asset = await uploadImage(v.image);
    docs.push({
      _id: `vehicle-${slug(v.name)}`,
      _type: "vehicle",
      name: v.name,
      slug: { _type: "slug", current: v.slug ?? slug(v.name) },
      image: imageField(asset),
      category: v.category,
      badge: v.badge,
      meta: v.meta.map((m) => ({ _key: slug(m.label), ...m })),
      tags: v.tags,
      price: v.price,
      overview: v.overview,
      specs: keyed(v.specs),
      idealFor: v.idealFor,
      pricing: keyed(v.pricing),
      gallery: await galleryField(v.gallery, uploadImage),
      faqs: keyed(v.faqs),
      order: order++,
    });
  }

  order = 0;
  for (const t of tours) {
    const asset = await uploadImage(t.image);
    const heroAsset = t.heroImage ? await uploadImage(t.heroImage) : asset;
    docs.push({
      _id: `tour-${t.slug}`,
      _type: "tourPackage",
      name: t.name,
      slug: { _type: "slug", current: t.slug },
      image: imageField(asset),
      heroImage: imageField(heroAsset),
      tag: t.tag,
      route: t.route,
      duration: t.duration,
      feats: t.feats,
      price: t.price,
      priceNote: t.priceNote,
      overview: t.overview,
      highlights: t.highlights,
      itinerary: keyed(t.itinerary),
      inclusions: t.inclusions,
      exclusions: t.exclusions,
      faqs: keyed(t.faqs),
      destination: t.destinationSlug ? ref(`destination-${t.destinationSlug}`) : undefined,
      vehicle: t.vehicleSlug ? ref(`vehicle-${t.vehicleSlug}`) : undefined,
      order: order++,
    });
  }

  order = 0;
  for (const d of destinations) {
    const asset = await uploadImage(d.image);
    docs.push({
      _id: `destination-${slug(d.name)}`,
      _type: "destination",
      name: d.name,
      slug: { _type: "slug", current: d.slug ?? slug(d.name) },
      image: imageField(asset),
      sub: d.sub,
      pill: d.pill,
      wide: d.wide,
      region: d.region,
      tagline: d.tagline,
      overview: d.overview,
      bestTime: d.bestTime,
      idealDuration: d.idealDuration,
      whyVisit: d.whyVisit,
      attractions: keyed(d.attractions),
      fastFacts: keyed(d.fastFacts),
      gallery: await galleryField(d.gallery, uploadImage),
      faqs: keyed(d.faqs),
      seoDesc: d.seoDesc,
      relatedTours: refs((d.tourSlugs ?? []).map((s) => `tour-${s}`)),
      recommendedVehicles: refs((d.vehicleSlugs ?? []).map((s) => `vehicle-${s}`)),
      order: order++,
    });
  }

  order = 0;
  for (const t of testimonials) {
    docs.push({
      _id: `testimonial-${slug(t.name)}`,
      _type: "testimonial",
      name: t.name,
      text: t.text,
      rating: t.rating,
      trip: t.trip,
      order: order++,
    });
  }

  order = 0;
  for (const s of services) {
    docs.push({
      _id: `service-${slug(s.title)}`,
      _type: "service",
      title: s.title,
      icon: s.icon,
      description: s.description,
      order: order++,
    });
  }

  docs.push({
    _id: "siteSettings",
    _type: "siteSettings",
    phone: "+91 98765 43210",
    phoneTel: "+919876543210",
    whatsappNumber: "919876543210",
    email: "info@silvercloudsholiday.in",
    address: "Connaught Place, New Delhi",
    heroHeading: "Explore India with Premium Chauffeur Services",
    heroSubheading:
      "From the snow-peaks of Himachal to the beaches of Goa — travel in comfort, safety and style.",
    stats: [
      { _key: "a", value: "10K+", label: "Happy Travellers" },
      { _key: "b", value: "8", label: "States Covered" },
      { _key: "c", value: "5", label: "Vehicle Types" },
    ],
  });

  console.log(`Writing ${docs.length} documents…`);
  const tx = docs.reduce(
    (t, doc) => t.createOrReplace(doc as never),
    client.transaction()
  );
  await tx.commit();
  console.log(`✓ Seeded ${docs.length} documents into "${dataset}".`);
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
