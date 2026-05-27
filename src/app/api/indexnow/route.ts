import { NextResponse } from "next/server";
import { submitIndexNow } from "@/lib/indexnow";
import { getAllProcedures } from "@/lib/procedures";
import { guideUrl } from "@/lib/guide";
import { siteConfig } from "@/lib/site";

/** POST — изпраща всички URL към Bing/Yandex IndexNow (извикайте след deploy) */
export async function POST(request: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    const auth = request.headers.get("authorization");
    if (auth !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const base = siteConfig.url;
  const urls = [
    base,
    guideUrl,
    ...getAllProcedures().map((p) => `${base}/proceduri/${p.slug}`),
    `${base}/politika-poveritelnost`,
    `${base}/usloviya`,
  ];

  const result = await submitIndexNow(urls);
  return NextResponse.json({ urls, ...result });
}
