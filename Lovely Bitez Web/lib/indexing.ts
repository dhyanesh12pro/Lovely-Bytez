import { site } from "@/data/site";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const explicitAllow = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
const explicitBlock = process.env.NEXT_PUBLIC_INDEXING_DISABLED === "true";

const previewHostPattern =
  /(localhost|127\.0\.0\.1|0\.0\.0\.0|\.vercel\.app|preview|staging|stage|dev)/i;

export const isPreviewLikeHost = previewHostPattern.test(site.siteUrl);

export const isIndexingAllowed =
  !explicitBlock &&
  (explicitAllow ||
    (process.env.VERCEL_ENV === "production" &&
      Boolean(configuredSiteUrl) &&
      !isPreviewLikeHost));
