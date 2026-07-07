import { defineField, defineType } from "sanity";

export const destination = defineType({
  name: "destination",
  title: "Destination",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "sub", title: "Sub-line (cities)", type: "string" }),
    defineField({
      name: "pill",
      title: "Pill (optional)",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "star", type: "boolean" }),
      ],
    }),
    defineField({ name: "wide", title: "Wide card", type: "boolean" }),
    defineField({ name: "region", type: "string" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "overview", title: "Overview paragraphs", type: "array", of: [{ type: "text", rows: 3 }] }),
    defineField({ name: "bestTime", type: "string" }),
    defineField({ name: "idealDuration", type: "string" }),
    defineField({ name: "whyVisit", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "attractions", type: "array", of: [{ type: "attraction" }] }),
    defineField({ name: "fastFacts", type: "array", of: [{ type: "labelValue" }] }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "seoDesc", title: "SEO description", type: "text", rows: 2 }),
    defineField({ name: "relatedTours", type: "array", of: [{ type: "reference", to: [{ type: "tourPackage" }] }] }),
    defineField({ name: "recommendedVehicles", type: "array", of: [{ type: "reference", to: [{ type: "vehicle" }] }] }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
