import { Check, Lock } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/currency";
import type { Procedure } from "@/lib/procedures";
import { getProcedureCardTitle } from "@/lib/procedures";
import { siteConfig } from "@/lib/site";
import { BookingCTA } from "./BookingCTA";
import { MediaSlider } from "./MediaSlider";

type ProcedureDetailProps = {
  procedure: Procedure;
};

export function ProcedureDetail({ procedure }: ProcedureDetailProps) {
  const title = getProcedureCardTitle(procedure);
  const locked = Boolean(procedure.comingSoon);

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

      {locked && (
        <div
          className="mb-8 flex flex-col gap-3 rounded-xl border border-primary/35 bg-primary/10 px-5 py-4 sm:flex-row sm:items-center"
          role="status"
        >
          <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
            <Lock className="h-5 w-5" aria-hidden />
          </span>
          <div>
            <p className="font-medium text-primary">
              {procedure.comingSoonLabel ?? "Скоро налична"}
            </p>
            <p className="mt-1 text-sm text-foreground/90">
              В момента се сертифицирам по PowderBrows в PhiAcademy. Информацията и цените
              по-долу са подготвени предварително — записването ще бъде отворено след
              завършване на курса. За сега можете да запазите час за микроблейдинг (BoldBrows)
              или ламиниране.
            </p>
          </div>
        </div>
      )}

      <header className="mb-10">
        {procedure.brand && (
          <p className="mb-2 text-sm font-medium tracking-widest text-primary uppercase">
            {procedure.brand}
          </p>
        )}
        <h1 className="mb-4 text-4xl text-primary md:text-5xl">{procedure.name}</h1>
        <p className="max-w-2xl text-lg text-muted-foreground">{procedure.shortDescription}</p>
      </header>

      <div className="mb-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <MediaSlider media={procedure.media} />

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

      {(procedure.importantNotes?.length ||
        procedure.professionalAdvice ||
        procedure.rebuildNote) && (
        <section className="mb-12 space-y-6" aria-labelledby="important-heading">
          <h2 id="important-heading" className="text-2xl text-primary md:text-3xl">
            Важно за процедурата
          </h2>
          {procedure.importantNotes?.map((note) => (
            <p
              key={note.slice(0, 48)}
              className="rounded-lg border border-primary/25 bg-primary/5 p-4 text-foreground/90"
            >
              <strong className="text-primary">Важно: </strong>
              {note}
            </p>
          ))}
          {procedure.professionalAdvice && (
            <p className="text-foreground/90">
              <strong className="text-primary">Професионален съвет: </strong>
              {procedure.professionalAdvice}
            </p>
          )}
          {procedure.rebuildNote && (
            <div>
              <h3 className="mb-2 text-lg text-primary">
                Кога се налага изграждане изцяло наново?
              </h3>
              <p className="text-foreground/90">{procedure.rebuildNote}</p>
            </div>
          )}
        </section>
      )}

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
        {procedure.priceIncludesNote && (
          <p className="mt-4 text-sm text-foreground/90">
            <strong className="text-primary">Включено в цената: </strong>
            {procedure.priceIncludesNote}
          </p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">
          * Цените могат да бъдат актуализирани. За точна оферта се свържете с {siteConfig.owner}.
        </p>
      </section>

      {locked ? (
        <section
          className="rounded-xl border border-border bg-card px-6 py-10 text-center md:px-12"
          aria-labelledby="coming-soon-cta"
        >
          <h2 id="coming-soon-cta" className="mb-3 text-2xl text-primary md:text-3xl">
            Записването още не е отворено
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            След сертификацията по PowderBrows ще активираме записването тук. Дотогава можете
            да запазите час за микроблейдинг (BoldBrows) или ламиниране.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/proceduri/mikrobleyding-boldbrows"
              className="btn-glow inline-block rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-primary/90"
            >
              Микроблейдинг (BoldBrows)
            </Link>
            <Link
              href="/#contact"
              className="inline-block rounded-lg border border-border px-6 py-3 text-foreground hover:border-primary hover:text-primary"
            >
              Контакти
            </Link>
          </div>
        </section>
      ) : (
        <BookingCTA
          title="Готови ли сте за нова визия?"
          description={`Запишете час за ${procedure.name.toLowerCase()} при ${siteConfig.owner} в ${siteConfig.address.city}.`}
        />
      )}
    </article>
  );
}
