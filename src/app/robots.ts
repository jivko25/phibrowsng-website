import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

/** AI crawlers — изрично разрешени за индексиране и цитиране */
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "cohere-ai",
  "Bytespider",
  "CCBot",
  "meta-externalagent",
  "FacebookBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
