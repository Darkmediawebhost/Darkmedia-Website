import type { MetadataRoute } from "next";
import { absoluteUrl, seoPages } from "@/lib/seo";
import { webDevelopmentLocations } from "@/lib/web-development-locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ...Object.values(seoPages).map((page) => ({
      url: absoluteUrl(page.path),
      changeFrequency: page.path === "/" ? "weekly" as const : "monthly" as const,
      priority: page.path === "/" ? 1 : page.path === "/services" || page.path === "/contact-us" ? 0.9 : 0.8,
    })),
    ...webDevelopmentLocations.map((page) => ({
      url: absoluteUrl(page.seo.path),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return pages;
}
