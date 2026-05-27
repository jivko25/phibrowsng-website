import Image from "next/image";
import Link from "next/link";
import { heroImage, siteConfig } from "@/lib/site";
import { ViberButton } from "./ViberButton";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`${siteConfig.name} — ${siteConfig.owner}, специалист по вежди`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-3 text-sm tracking-widest text-primary uppercase">{siteConfig.owner}</p>
        <h1 id="hero-heading" className="mb-6 text-5xl text-primary md:text-7xl">
          {siteConfig.tagline}
        </h1>
        <p className="mb-8 text-xl text-foreground/90 md:text-2xl">
          Микроблейдинг, пудрова микропигментация и ламиниране в {siteConfig.address.city}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-block rounded-lg bg-primary px-8 py-4 text-lg text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Запазете час
          </Link>
          <ViberButton size="lg" />
        </div>
      </div>
    </section>
  );
}
