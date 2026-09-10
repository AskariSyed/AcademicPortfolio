import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { PUBLICATIONS } from "@/data/publications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://research-with-askari.vercel.app";

  // 1. Homepage entry: canonical domain root with trailing slash per Google sitemap protocol
  const homeEntry: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // 2. Verified core public static routes
  const staticPaths = [
    "/research",
    "/publications",
    "/projects",
    "/experience",
    "/certificates",
    "/about",
    "/cv",
    "/contact",
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // 3. Dynamic public project routes (filtered to ensure strictly valid, non-empty slugs)
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS
    .filter((project) => typeof project?.slug === "string" && project.slug.trim().length > 0)
    .map((project) => ({
      url: `${baseUrl}/projects/${project.slug.trim()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  // 4. Dynamic public publication routes (filtered to ensure strictly valid, non-empty slugs)
  const publicationRoutes: MetadataRoute.Sitemap = PUBLICATIONS
    .filter((pub) => typeof pub?.slug === "string" && pub.slug.trim().length > 0)
    .map((pub) => ({
      url: `${baseUrl}/publications/${pub.slug.trim()}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const allEntries = [...homeEntry, ...staticRoutes, ...projectRoutes, ...publicationRoutes];

  // Root-cause safeguard: guarantee every entry has a valid, absolute, non-empty URL
  return allEntries.filter(
    (item) =>
      typeof item?.url === "string" &&
      item.url.startsWith(`${baseUrl}/`) &&
      !item.url.includes("//projects") &&
      !item.url.includes("//publications")
  );
}

