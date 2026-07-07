import { defineField, defineType } from "sanity";

export const tourPackage = defineType({
  name: "tourPackage",
  title: "Tour Package",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "tag", title: "Tag (e.g. Hill Station)", type: "string" }),
    defineField({ name: "route", title: "Route line", type: "string" }),
    defineField({ name: "duration", title: "Duration (e.g. 6 Days / 5 Nights)", type: "string" }),
    defineField({ name: "feats", title: "Card highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "price", title: "Price label (e.g. ₹18,500)", type: "string" }),
    defineField({ name: "priceNote", type: "string" }),
    defineField({ name: "overview", title: "Overview paragraphs", type: "array", of: [{ type: "text", rows: 3 }] }),
    defineField({ name: "highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "itinerary", type: "array", of: [{ type: "itineraryDay" }] }),
    defineField({ name: "inclusions", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "exclusions", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "destination", type: "reference", to: [{ type: "destination" }] }),
    defineField({ name: "vehicle", type: "reference", to: [{ type: "vehicle" }] }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
