import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

// Server-only client with write access, used by the inquiry API route to
// store leads. Token must NOT be prefixed NEXT_PUBLIC (never sent to browser).
const token = process.env.SANITY_WRITE_TOKEN;

export const writeClient =
  projectId && token
    ? createClient({ projectId, dataset, apiVersion, token, useCdn: false })
    : null;
