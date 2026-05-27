import type { CSSProperties } from "react";
import Link from "next/link";
import { heroImages, siteConfig } from "@/lib/site";
import { GoldenRain } from "./GoldenRain";
import { HeroBackground } from "./HeroBackground";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <HeroBackground images={heroImages} intervalMs={8000} />
      <GoldenRain density="medium" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p
          className="animate-fade-up mb-3 text-sm tracking-widest text-primary uppercase"
          style={{ "--fade-delay": "100ms" } as CSSProperties}
        >
          {siteConfig.owner}
        </p>
        <h1
          id="hero-heading"
          className="text-shimmer animate-fade-up mb-4 text-4xl md:text-6xl"
          style={{ "--fade-delay": "250ms" } as CSSProperties}
        >
          {siteConfig.name} — вежди и мигли в {siteConfig.address.city}
        </h1>
        <p
          className="animate-fade-up mb-8 text-xl text-foreground/90 md:text-2xl"
          style={{ "--fade-delay": "400ms" } as CSSProperties}
        >
          {siteConfig.tagline}. Микроблейдинг, пудрова микропигментация и ламиниране.
        </p>
        <Link
          href="#contact"
          className="btn-glow animate-fade-up inline-block rounded-lg bg-primary px-8 py-4 text-lg text-primary-foreground transition-colors hover:bg-primary/90"
          style={{ "--fade-delay": "550ms" } as CSSProperties}
        >
          Запазете час
        </Link>
      </div>
    </section>
  );
}
