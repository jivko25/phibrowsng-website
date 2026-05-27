import { Check } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/currency";
import type { Procedure } from "@/lib/procedures";
import { getProcedureCardTitle } from "@/lib/procedures";
import { siteConfig } from "@/lib/site";
import { BookingCTA } from "./BookingCTA";
import { ImageSlider } from "./ImageSlider";

type ProcedureDetailProps = {
  procedure: Procedure;
};

export function ProcedureDetail({ procedure }: ProcedureDetailProps) {
  const title = getProcedureCardTitle(procedure);

  return (
    <article>
      <nav className="mb-8 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-primary">
              Начало
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/#proceduri" className="hover:text-primary">
              Процедури
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-primary">{title}</li>
        </ol>
      </nav>

      <header className="mb-10">
        {procedure.brand && (
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            {procedure.brand}
          </p>
        )}
        <h1 className="mb-4 text-4xl text-primary md:text-5xl">{procedure.name}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{procedure.shortDescription}</p>
        {procedure.duration && (
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="text-foreground">Продължителност:</span> {procedure.duration}
          </p>
        )}
      </header>

      <div className="mb-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <ImageSlider images={procedure.images} />

        <div>
          <h2 className="mb-4 text-2xl text-primary">За процедурата</h2>
          <div className="space-y-4 text-foreground/90">
            {procedure.description.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {procedure.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
                  <Check className="h-4 w-4 text-primary" aria-hidden />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <section className="mb-12" aria-labelledby="prices-heading">
        <h2 id="prices-heading" className="mb-6 text-2xl text-primary md:text-3xl">
          Цени и варианти
        </h2>
        <ul className="grid list-none gap-4 sm:grid-cols-2">
          {procedure.variants.map((variant) => (
            <li
              key={variant.name}
              className="card-lift rounded-lg border border-border bg-card p-6 hover:border-primary/50"
            >
              <h3 className="mb-2 text-lg text-foreground">{variant.name}</h3>
              {variant.note && (
                <p className="mb-3 text-sm text-muted-foreground">{variant.note}</p>
              )}
              <p className="text-2xl font-medium text-primary">{formatPrice(variant.priceEur)}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          * Цените могат да бъдат актуализирани. За точна оферта се свържете с {siteConfig.owner}.
        </p>
      </section>

      <BookingCTA
        title="Готови ли сте за нова визия?"
        description={`Запишете час за ${procedure.name.toLowerCase()} при ${siteConfig.owner} в ${siteConfig.address.city}.`}
      />
    </article>
  );
}
