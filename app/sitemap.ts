import type { MetadataRoute } from "next";

const BASE = "https://silvercloudsholiday.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/fleet", "/destinations", "/services", "/about", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
