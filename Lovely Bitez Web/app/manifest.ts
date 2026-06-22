import type { MetadataRoute } from "next";

import { site } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lovely Bitez Kundrathur",
    short_name: "Lovely Bitez",
    description: site.business.shortDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#FFF7EC",
    theme_color: "#161616",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}
