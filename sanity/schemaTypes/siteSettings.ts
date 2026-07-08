import { defineField, defineType } from "sanity";

// Icons available in the site sprite — used by icon dropdowns below.
const ICONS = [
  "shield", "car", "tag", "headset", "award", "map", "wrench", "card",
  "road", "nav", "briefcase", "users", "sparkle", "plane", "mountain",
  "mappin", "star", "check", "snow", "music", "fuel", "camera",
];

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact", default: true },
    { name: "hero", title: "Hero" },
    { name: "about", title: "About / Founder" },
    { name: "usps", title: "USP strip" },
    { name: "why", title: "Why Choose Us" },
    { name: "social", title: "Socials" },
  ],
  fields: [
    defineField({ name: "phone", title: "Phone (display)", type: "string", group: "contact" }),
    defineField({ name: "phoneTel", title: "Phone (tel: value)", type: "string", group: "contact" }),
    defineField({ name: "whatsappNumber", title: "WhatsApp number (digits only)", type: "string", group: "contact" }),
    defineField({ name: "email", type: "string", group: "contact" }),
    defineField({ name: "address", type: "string", group: "contact" }),

    defineField({ name: "heroHeading", type: "string", group: "hero" }),
    defineField({ name: "heroSubheading", type: "text", rows: 3, group: "hero" }),
    defineField({ name: "heroMedia", title: "Hero image", type: "image", group: "hero" }),
    defineField({
      name: "stats",
      title: "Hero stats",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", type: "string" }),
            defineField({ name: "label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),

    // ---------------- About / Founder ----------------
    defineField({
      name: "about",
      title: "About / Founder section",
      type: "object",
      group: "about",
      fields: [
        defineField({ name: "founderName", type: "string" }),
        defineField({ name: "founderRole", type: "string" }),
        defineField({ name: "yearsBadge", title: "Years badge (e.g. 15+)", type: "string" }),
        defineField({ name: "portrait", title: "Founder portrait", type: "image" }),
        defineField({ name: "quote", type: "text", rows: 2 }),
        defineField({ name: "story", type: "text", rows: 4 }),
        defineField({
          name: "stats",
          title: "About stats",
          type: "array",
          of: [
            {
              type: "object",
              fields: [
                defineField({ name: "value", type: "string" }),
                defineField({ name: "label", type: "string" }),
              ],
              preview: { select: { title: "value", subtitle: "label" } },
            },
          ],
        }),
      ],
    }),

    // ---------------- USP strip ----------------
    defineField({
      name: "usps",
      title: "USP strip items",
      type: "array",
      group: "usps",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", type: "string", options: { list: ICONS } }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "sub", title: "Subtitle", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "sub" } },
        },
      ],
    }),

    // ---------------- Why Choose Us ----------------
    defineField({
      name: "whyItems",
      title: "Why Choose Us items",
      type: "array",
      group: "why",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", type: "string", options: { list: ICONS } }),
            defineField({ name: "title", type: "string" }),
            defineField({ name: "text", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "text" } },
        },
      ],
    }),

    defineField({
      name: "socials",
      type: "object",
      group: "social",
      fields: [
        defineField({ name: "instagram", type: "url" }),
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "youtube", type: "url" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
