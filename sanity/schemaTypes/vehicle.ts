import { defineField, defineType } from "sanity";

const ICON_OPTIONS = [
  "users", "briefcase", "snow", "music", "fuel", "road", "mountain",
  "star", "tag", "car", "bus",
];

export const vehicle = defineType({
  name: "vehicle",
  title: "Vehicle",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Sedan", value: "sedan" },
          { title: "SUV", value: "suv" },
          { title: "Tempo Traveller", value: "tempo" },
          { title: "Bus", value: "bus" },
        ],
      },
    }),
    defineField({
      name: "badge",
      title: "Badge (optional)",
      type: "object",
      fields: [
        defineField({ name: "label", type: "string" }),
        defineField({ name: "icon", type: "string", options: { list: ICON_OPTIONS } }),
        defineField({ name: "filled", type: "boolean" }),
      ],
    }),
    defineField({
      name: "meta",
      title: "Meta features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", type: "string", options: { list: ICON_OPTIONS } }),
            defineField({ name: "label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "tags", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "price", title: "Price label (e.g. ₹14/km)", type: "string" }),
    defineField({ name: "overview", type: "text", rows: 4 }),
    defineField({ name: "specs", type: "array", of: [{ type: "labelValue" }] }),
    defineField({ name: "idealFor", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "pricing", type: "array", of: [{ type: "labelValue" }] }),
    defineField({ name: "gallery", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "faqs", type: "array", of: [{ type: "faq" }] }),
    defineField({ name: "popular", type: "boolean" }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
