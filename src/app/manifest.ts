import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#1a1614",
    theme_color: "#d4af37",
    lang: "bg",
    orientation: "portrait-primary",
    categories: ["beauty", "lifestyle"],
  };
}
