import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/confirma-tu-email", "/confirmado"],
    },
    sitemap: "https://marialipiz.com/sitemap.xml",
  };
}
