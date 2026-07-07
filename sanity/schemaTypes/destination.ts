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
    defineField({ name: "highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "itinerary", title: "Itinerary", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "recommendedVehicle", type: "reference", to: [{ type: "vehicle" }] }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
