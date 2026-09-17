import type { MetadataRoute } from "next";
import { SITE_URL, isIndexable } from "@/lib/site-config";
export default function robots(): MetadataRoute.Robots {
  return isIndexable
    ? {
        rules: {
          userAgent: "*",
          allow: "/",
          disallow: ["/api/", "/admin/", "/internal/", "/test/", "/preview/"],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
