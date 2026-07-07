import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "icon",
      type: "string",
      options: {
        list: ["road", "nav", "briefcase", "users", "sparkle", "plane", "shield"],
      },
    }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [
    { title: "Manual order", name: "order", by: [{ field: "order", direction: "asc" }] },
  ],
});
