import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return Object.values(site.pages).map((page) => ({
    url: absoluteUrl(page.path),
    lastModified: now,
    changeFrequency: page.path === "/menu" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : page.path === "/menu" ? 0.9 : 0.75
  }));
}
