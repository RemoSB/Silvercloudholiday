export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

// True once a real Sanity project id is configured. Until then the site
// renders from hardcoded data in lib/data.ts.
export const isSanityConfigured = projectId.length > 0;
