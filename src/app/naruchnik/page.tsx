import type { Metadata } from "next";
import { AeoGuide } from "@/components/AeoGuide";
import { Footer } from "@/components/Footer";
import { GuideJsonLd } from "@/components/GuideJsonLd";
import { Header } from "@/components/Header";
import { CONTENT_LAST_MODIFIED } from "@/lib/aeo";
import {
  guideMetaDescription,
  guideTitle,
  guideUrl,
  GUIDE_PATH,
} from "@/lib/guide";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: guideTitle,
  description: guideMetaDescription,
  alternates: {
    canonical: GUIDE_PATH,
  },
  openGraph: {
    title: `${guideTitle} | ${siteConfig.name}`,
    description: guideMetaDescription,
    url: guideUrl,
    siteName: siteConfig.name,
    type: "article",
    modifiedTime: CONTENT_LAST_MODIFIED,
  },
  robots: { index: true, follow: true },
};

export default function GuidePage() {
  return (
    <>
      <GuideJsonLd />
      <Header />
      <main id="main-content" className="pt-20">
        <AeoGuide />
      </main>
      <Footer />
    </>
  );
}
