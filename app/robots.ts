import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you", "/cv/*.pdf"],
      },
    ],
    sitemap: "https://research-with-askari.vercel.app/sitemap.xml",
    host: "https://research-with-askari.vercel.app",
  };
}
