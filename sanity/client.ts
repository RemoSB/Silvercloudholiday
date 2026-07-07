import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId, isSanityConfigured } from "./env";

// Read-only client. When no project id is set, callers fall back to lib/data.
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
});

export { isSanityConfigured };
