import { defineField, defineType } from "sanity";

// Inquiry leads captured from the website booking form.
export const lead = defineType({
  name: "lead",
  title: "Lead / Inquiry",
  type: "document",
  // Leads are created by the site, not hand-authored.
  readOnly: false,
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "service", title: "Service", type: "string" }),
    defineField({ name: "ref", title: "Reference", type: "string" }),
    defineField({
      name: "status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "🔵 New", value: "new" },
          { title: "🟡 Contacted", value: "contacted" },
          { title: "🟢 Booked", value: "booked" },
          { title: "⚪ Closed", value: "closed" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "summary",
      title: "Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "value", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "value" },
          },
        },
      ],
    }),
    defineField({ name: "submittedAt", title: "Submitted", type: "datetime" }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "newest",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { name: "name", service: "service", phone: "phone", status: "status" },
    prepare({ name, service, phone, status }) {
      return {
        title: `${name || "Unknown"} — ${service || "Inquiry"}`,
        subtitle: `${status || "new"} · ${phone || ""}`,
      };
    },
  },
});
