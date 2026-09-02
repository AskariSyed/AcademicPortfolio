import { MetadataRoute } from "next";
import { PROJECTS } from "@/data/projects";
import { PUBLICATIONS } from "@/data/publications";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://research.askarisyed.com";

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/research",
    "/publications",
    "/projects",
    "/experience",
    "/certificates",
    "/about",
    "/cv",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const publicationRoutes: MetadataRoute.Sitemap = PUBLICATIONS.map((pub) => ({
    url: `${baseUrl}/publications/${pub.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...publicationRoutes];
}
