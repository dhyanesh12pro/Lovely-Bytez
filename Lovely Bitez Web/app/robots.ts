import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { isIndexingAllowed } from "@/lib/indexing";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexingAllowed) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/"
      }
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl
  };
}
