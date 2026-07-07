import { type SchemaTypeDefinition } from "sanity";
import { vehicle } from "./vehicle";
import { tourPackage } from "./tourPackage";
import { destination } from "./destination";
import { testimonial } from "./testimonial";
import { service } from "./service";
import { siteSettings } from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [vehicle, tourPackage, destination, testimonial, service, siteSettings],
};
