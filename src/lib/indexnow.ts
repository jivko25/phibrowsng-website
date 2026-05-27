import { siteConfig } from "./site";

/** Ключ за IndexNow — файлът е в public/{key}.txt */
export const INDEXNOW_KEY =
  process.env.INDEXNOW_KEY ?? "phibrowsng-indexnow-7f3a2b1c9e4d";

const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
] as const;

export async function submitIndexNow(urls: string[]): Promise<{ ok: boolean; details: string[] }> {
  const host = new URL(siteConfig.url).host;
  const keyLocation = `${siteConfig.url}/${INDEXNOW_KEY}.txt`;
  const details: string[] = [];

  const body = {
    host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: urls,
  };

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(body),
      });
      details.push(`${endpoint}: ${res.status}`);
    } catch (err) {
      details.push(`${endpoint}: ${err instanceof Error ? err.message : "error"}`);
    }
  }

  return { ok: details.some((d) => d.includes(": 200") || d.includes(": 202")), details };
}
