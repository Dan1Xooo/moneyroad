import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/src/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/calculator",
    "/offers",
    "/how-it-works",
    "/reviews",
    "/about",
    "/safety",
  ];

  return routes.map((route) => ({
    url: absoluteSiteUrl(route || "/"),
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/offers" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/calculator" ? 0.9 : 0.7,
  }));
}
