import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "text", title: "Review text", type: "text", rows: 4 }),
    defineField({
      name: "rating",
      type: "number",
      validation: (r) => r.min(1).max(5),
      initialValue: 5,
    }),
    defineField({ name: "trip", title: "Trip label", type: "string" }),
    defineField({ name: "photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
