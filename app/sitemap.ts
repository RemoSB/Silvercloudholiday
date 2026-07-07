import type { MetadataRoute } from "next";
import { destinations, tours, fleet } from "@/lib/data";

const BASE = "https://silvercloudsholiday.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/fleet",
    "/destinations",
    "/tours",
    "/services",
    "/about",
    "/contact",
  ];

  const detailRoutes = [
    ...destinations.map((d) => `/destinations/${d.slug}`),
    ...tours.map((t) => `/tours/${t.slug}`),
    ...fleet.map((v) => `/fleet/${v.slug}`),
  ];

  return [...staticRoutes, ...detailRoutes].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
