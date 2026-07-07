import { type SchemaTypeDefinition } from "sanity";
import { vehicle } from "./vehicle";
import { tourPackage } from "./tourPackage";
import { destination } from "./destination";
import { testimonial } from "./testimonial";
import { service } from "./service";
import { siteSettings } from "./siteSettings";
import { faq, itineraryDay, labelValue, attraction } from "./objects";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    vehicle,
    tourPackage,
    destination,
    testimonial,
    service,
    siteSettings,
    // Reusable object types
    faq,
    itineraryDay,
    labelValue,
    attraction,
  ],
};
