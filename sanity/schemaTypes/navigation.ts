import { defineField, defineType } from "sanity";

const NAV_ICONS = [
  "car", "bus", "mountain", "mappin", "road", "nav", "briefcase",
  "users", "sparkle", "plane", "map", "camera",
];

// A single clickable row inside a dropdown.
const navLink = {
  type: "object" as const,
  name: "navLink",
  fields: [
    defineField({ name: "icon", type: "string", options: { list: NAV_ICONS } }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "sub", title: "Subtitle", type: "string" }),
    defineField({ name: "href", type: "string", validation: (r) => r.required() }),
  ],
  preview: { select: { title: "title", subtitle: "sub" } },
};

export const navigation = defineType({
  name: "navigation",
  title: "Navigation Menu",
  type: "document",
  fields: [
    defineField({
      name: "menus",
      title: "Top-level menus (left to right)",
      description:
        "Add, reorder or delete menu items. Leave 'groups' empty for a plain link (e.g. Tours, About, Contact). Add groups for a dropdown.",
      type: "array",
      of: [
        {
          type: "object",
          name: "menuItem",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "href", title: "Link (top-level)", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "mega",
              title: "Wide (mega) dropdown",
              type: "boolean",
              initialValue: false,
            }),
            defineField({
              name: "groups",
              title: "Dropdown groups (leave empty for a plain link)",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "navGroup",
                  fields: [
                    defineField({ name: "heading", title: "Group heading (optional)", type: "string" }),
                    defineField({ name: "links", type: "array", of: [navLink] }),
                  ],
                  preview: {
                    select: { title: "heading", links: "links" },
                    prepare: ({ title, links }) => ({
                      title: title || "Group",
                      subtitle: `${links?.length || 0} links`,
                    }),
                  },
                },
              ],
            }),
            defineField({ name: "footerTitle", title: "Dropdown footer — title", type: "string" }),
            defineField({ name: "footerSub", title: "Dropdown footer — subtitle", type: "string" }),
            defineField({ name: "footerHref", title: "Dropdown footer — link", type: "string" }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
    }),

    defineField({
      name: "footerColumns",
      title: "Footer link columns",
      description:
        "The link columns shown in the site footer (e.g. Services, Destinations). Add, reorder or delete columns and links.",
      type: "array",
      of: [
        {
          type: "object",
          name: "footerColumn",
          fields: [
            defineField({ name: "heading", type: "string", validation: (r) => r.required() }),
            defineField({
              name: "links",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "footerLink",
                  fields: [
                    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
                    defineField({ name: "href", type: "string", validation: (r) => r.required() }),
                  ],
                  preview: { select: { title: "label", subtitle: "href" } },
                },
              ],
            }),
          ],
          preview: {
            select: { title: "heading", links: "links" },
            prepare: ({ title, links }) => ({
              title: title || "Column",
              subtitle: `${links?.length || 0} links`,
            }),
          },
        },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Navigation Menu" }) },
});
