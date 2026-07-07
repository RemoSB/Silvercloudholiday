import { defineField, defineType } from "sanity";

// Reusable Q&A block used by destinations, tours and vehicles.
export const faq = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "q", title: "Question", type: "string" }),
    defineField({ name: "a", title: "Answer", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "q" } },
});

// A single day on a tour itinerary.
export const itineraryDay = defineType({
  name: "itineraryDay",
  title: "Itinerary Day",
  type: "object",
  fields: [
    defineField({ name: "day", title: "Day number", type: "number" }),
    defineField({ name: "title", type: "string" }),
    defineField({ name: "detail", type: "text", rows: 3 }),
  ],
  preview: {
    select: { day: "day", title: "title" },
    prepare: ({ day, title }) => ({ title: `Day ${day ?? "?"}: ${title ?? ""}` }),
  },
});

// A generic label/value pair (fast facts, specs, pricing rows).
export const labelValue = defineType({
  name: "labelValue",
  title: "Label / Value",
  type: "object",
  fields: [
    defineField({ name: "label", type: "string" }),
    defineField({ name: "value", type: "string" }),
  ],
  preview: {
    select: { label: "label", value: "value" },
    prepare: ({ label, value }) => ({ title: `${label ?? ""}: ${value ?? ""}` }),
  },
});

// An attraction with a short blurb (destination detail).
export const attraction = defineType({
  name: "attraction",
  title: "Attraction",
  type: "object",
  fields: [
    defineField({ name: "name", type: "string" }),
    defineField({ name: "blurb", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "name" } },
});
