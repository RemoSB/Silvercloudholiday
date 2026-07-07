import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

// Accepts a Sanity image object/reference; callers pass CMS image fields.
export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
