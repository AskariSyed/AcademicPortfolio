import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { PUBLICATIONS } from "@/data/publications";

// Static last-modified date — update whenever content changes significantly.
// Using a fixed date (not `new Date()`) prevents unnecessary re-crawl signals on every deploy.
const SITE_LAST_MODIFIED = new Date("2026-09-29");

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://research-with-askari.vercel.app";

  // 1. Homepage — highest priority
  const homeEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // 2. Core research-facing pages — high priority (research & publications are key academic signals)
  const highPriorityPaths = ["/research", "/publications", "/projects"];
  const highPriorityRoutes: MetadataRoute.Sitemap = highPriorityPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Supporting pages — medium priority
  const mediumPriorityPaths = ["/experience", "/about", "/cv", "/contact", "/certificates"];
  const mediumPriorityRoutes: MetadataRoute.Sitemap = mediumPriorityPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // 4. Dynamic project pages
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS
    .filter((project) => typeof project?.slug === "string" && project.slug.trim().length > 0)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug.trim()}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  // 5. Dynamic publication pages
  const publicationRoutes: MetadataRoute.Sitemap = PUBLICATIONS
    .filter((pub) => typeof pub?.slug === "string" && pub.slug.trim().length > 0)
    .map((pub) => ({
      url: `${baseUrl}/publications/${pub.slug.trim()}`,
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const allEntries = [
    ...homeEntry,
    ...highPriorityRoutes,
    ...mediumPriorityRoutes,
    ...projectRoutes,
    ...publicationRoutes,
  ];

  // Safeguard: guarantee every entry has a valid, absolute, non-empty URL
  return allEntries.filter(
    (item) =>
      typeof item?.url === "string" &&
      item.url.startsWith(`${baseUrl}/`) &&
      !item.url.includes("//projects") &&
      !item.url.includes("//publications")
  );
}


