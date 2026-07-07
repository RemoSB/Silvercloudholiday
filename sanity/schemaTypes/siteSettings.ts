import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "phone", title: "Phone (display)", type: "string" }),
    defineField({ name: "phoneTel", title: "Phone (tel: value)", type: "string" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number (digits only)", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "address", type: "string" }),
    defineField({ name: "heroHeading", type: "string" }),
    defineField({ name: "heroSubheading", type: "text", rows: 3 }),
    defineField({ name: "heroMedia", title: "Hero image", type: "image" }),
    defineField({
      name: "stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string" }),
            defineField({ name: "label", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "socials",
      type: "object",
      fields: [
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "youtube", type: "url" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
