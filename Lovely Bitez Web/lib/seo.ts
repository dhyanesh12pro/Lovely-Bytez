import type { Metadata } from "next";

import { imageAssets, site } from "@/data/site";
import { isIndexingAllowed } from "@/lib/indexing";

type PageKey = keyof typeof site.pages;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${site.siteUrl}${normalizedPath}`;
}

export function pageMetadata(page: PageKey): Metadata {
  const current = site.pages[page];
  const canonical = absoluteUrl(current.path);
  const image = absoluteUrl(imageAssets.burger.src);

  return {
    title: current.title,
    description: current.description,
    alternates: {
      canonical
    },
    openGraph: {
      type: "website",
      locale: site.defaultLocale,
      url: canonical,
      siteName: site.name,
      title: current.ogTitle,
      description: current.ogDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: imageAssets.burger.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: current.ogTitle,
      description: current.ogDescription,
      images: [image]
    },
    robots: isIndexingAllowed
      ? {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1
          }
        }
      : {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false
          }
        }
  };
}

export function slugFromCategory(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
