import { defineField, defineType } from "sanity";

export const tourPackage = defineType({
  name: "tourPackage",
  title: "Tour Package",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "tag", title: "Tag (e.g. Hill Station)", type: "string" }),
    defineField({ name: "route", title: "Route line", type: "string" }),
    defineField({ name: "feats", title: "Highlights", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "price", title: "Price label (e.g. ₹7,200)", type: "string" }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
