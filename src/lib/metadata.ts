import type { Metadata } from "next";
import { heroImage, siteConfig } from "./site";

const siteUrl = siteConfig.url;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — вежди и мигли в Стара Загора | ${siteConfig.owner}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "микроблейдинг Стара Загора",
    "BoldBrows",
    "PowderBrows",
    "пудрова микропигментация",
    "ламиниране вежди",
    "ламиниране мигли",
    "PhiBrows",
    "перманентен грим вежди",
    "Надежда Георгиева",
    "phibrowsng",
  ],
  authors: [{ name: siteConfig.owner, url: siteUrl }],
  creator: siteConfig.owner,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "bg-BG": "/",
      "x-default": "/",
    },
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — вежди и мигли в Стара Загора`,
    description: siteConfig.metaDescription,
    images: [
      {
        url: heroImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.owner}, Стара Загора`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.metaDescription,
    images: [heroImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "beauty",
  other: {
    "geo.region": "BG-24",
    "geo.placename": "Стара Загора",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
    "llm-txt": `${siteUrl}/llm.txt`,
    "llms-txt": `${siteUrl}/llms.txt`,
    "llms-full": `${siteUrl}/llms-full.txt`,
  },
};
