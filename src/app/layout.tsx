import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { CitableSummary } from "@/components/CitableSummary";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import { rootMetadata } from "@/lib/metadata";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#1a1614",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bg"
      className={`${montserrat.variable} ${cormorant.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt" />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="LLMs full content"
        />
        <meta name="author" content={siteConfig.owner} />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <JsonLd />
        <CitableSummary />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Към основното съдържание
        </a>
        {children}
      </body>
    </html>
  );
}
