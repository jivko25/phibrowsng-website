import type { Metadata } from "next";
import { heroImage, siteConfig } from "./site";

const siteUrl = siteConfig.url;

export const rootMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.owner} — вежди и мигли, Стара Загора`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
    languages: { "bg-BG": "/" },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
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
    description: siteConfig.description,
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
  },
};
