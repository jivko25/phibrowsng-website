import { guideMetaDescription, guideTitle, guideUrl } from "./guide";
import { getAllProcedures } from "./procedures";
import { siteConfig } from "./site";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function generateRssFeed(): string {
  const base = siteConfig.url;
  const lastBuild = new Date().toUTCString();
  const procedures = getAllProcedures();

  const items = [
    {
      title: `${siteConfig.name} — начало`,
      link: base,
      description: siteConfig.metaDescription,
      pubDate: lastBuild,
    },
    {
      title: `${guideTitle} | ${siteConfig.name}`,
      link: guideUrl,
      description: guideMetaDescription,
      pubDate: lastBuild,
    },
    ...procedures.map((p) => ({
      title: `${p.name} | ${siteConfig.name}`,
      link: `${base}/proceduri/${p.slug}`,
      description: p.shortDescription,
      pubDate: lastBuild,
    })),
  ];

  const itemXml = items
    .map(
      (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.link)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <author>${escapeXml(siteConfig.email[0])} (${escapeXml(siteConfig.owner)})</author>
    </item>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${escapeXml(base)}</link>
    <description>${escapeXml(siteConfig.metaDescription)}</description>
    <language>bg</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <managingEditor>${escapeXml(siteConfig.email[0])} (${escapeXml(siteConfig.owner)})</managingEditor>
    <webMaster>${escapeXml(siteConfig.email[0])}</webMaster>
    <atom:link href="${escapeXml(base)}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemXml}
  </channel>
</rss>`;
}
