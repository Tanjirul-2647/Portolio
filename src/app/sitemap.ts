import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexmercer-portfolio.example.com";
  const currentDate = new Date().toISOString();

  const routes = [
    "",
    "/about",
    "/projects",
    "/expertise",
    "/resume",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/projects" ? 0.9 : 0.8,
  }));
}
