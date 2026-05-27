import { Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { GoldenRain } from "./GoldenRain";
import { ViberButton } from "./ViberButton";

type BookingCTAProps = {
  title?: string;
  description?: string;
};

export function BookingCTA({
  title = "Запазете своя час",
  description = "Свържете се с Надежда за консултация и свободен термин. Ще ви отговорим възможно най-бързо.",
}: BookingCTAProps) {
  const telHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;

  return (
    <section
      className="relative overflow-hidden rounded-xl border border-primary/25 bg-gradient-to-br from-card via-card to-primary/5 px-6 py-10 text-center md:px-12 md:py-14"
      aria-labelledby="booking-cta-heading"
    >
      <GoldenRain density="light" className="opacity-60" />
      <h2 id="booking-cta-heading" className="relative z-10 mb-3 text-3xl text-primary md:text-4xl">
        {title}
      </h2>
      <p className="relative z-10 mx-auto mb-8 max-w-xl text-muted-foreground">{description}</p>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
        <a
          href={telHref}
          className="btn-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Phone className="h-5 w-5" aria-hidden />
          {siteConfig.phoneDisplay}
        </a>
        <ViberButton size="lg" />
        <Link
          href="/#contact"
          className="inline-flex items-center rounded-lg border border-border px-6 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          Адрес и карта
        </Link>
      </div>

      <p className="relative z-10 mt-6 text-sm text-muted-foreground">
        Натиснете 💜 за директен чат във Viber с {siteConfig.owner}
      </p>
    </section>
  );
}
