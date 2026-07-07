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
  packages,
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
      slug: { _type: "slug", current: slug(v.name) },
      image: imageField(asset),
      badge: v.badge,
      meta: v.meta.map((m) => ({ _key: slug(m.label), ...m })),
      tags: v.tags,
      price: v.price,
      order: order++,
    });
  }

  order = 0;
  for (const p of packages) {
    const asset = await uploadImage(p.image);
    docs.push({
      _id: `package-${slug(p.name)}-${order}`,
      _type: "tourPackage",
      name: p.name,
      slug: { _type: "slug", current: slug(p.name) },
      image: imageField(asset),
      tag: p.tag,
      route: p.route,
      feats: p.feats,
      price: p.price,
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
      slug: { _type: "slug", current: slug(d.name) },
      image: imageField(asset),
      sub: d.sub,
      pill: d.pill,
      wide: d.wide,
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
