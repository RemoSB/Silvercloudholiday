import type { MetadataRoute } from "next";

const BASE = "https://silvercloudsholiday.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/studio" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
