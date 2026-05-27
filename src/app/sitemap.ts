import type { MetadataRoute } from "next";
import { getAllProcedures } from "@/lib/procedures";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteConfig.url;

  const procedurePages = getAllProcedures().map((p) => ({
    url: `${base}/proceduri/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...procedurePages,
    {
      url: `${base}/politika-poveritelnost`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/usloviya`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${base}/feed.xml`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${base}/llm.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${base}/llms.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${base}/llms-full.txt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
