import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import {
  getAllProcedures,
  getLowestPrice,
  getProcedureCardTitle,
} from "@/lib/procedures";

export function Services() {
  const procedures = getAllProcedures();

  return (
    <section id="proceduri" className="px-4 py-20" aria-labelledby="proceduri-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h2 id="proceduri-heading" className="mb-4 text-4xl text-primary md:text-5xl">
            Процедури
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            В PhiBrows NG предлагам процедури за вежди и мигли. Всяка услуга започва с
            консултация — така избираме техника, форма и цвят според вашия тип кожа. На
            отделните страници ще намерите цени и подробности.
          </p>
        </header>

        <ul className="grid list-none gap-6 md:grid-cols-2">
          {procedures.map((procedure) => {
            const locked = Boolean(procedure.comingSoon);
            const title = getProcedureCardTitle(procedure);

            return (
              <li key={procedure.slug}>
                <Link
                  href={`/proceduri/${procedure.slug}`}
                  className={`card-lift group relative block overflow-hidden rounded-lg border bg-card ${
                    locked
                      ? "border-border/60 opacity-75 hover:border-primary/40 hover:opacity-90"
                      : "border-border hover:border-primary"
                  }`}
                  aria-label={
                    locked
                      ? `${title} — скоро налична (в процес на сертификация)`
                      : title
                  }
                >
                  <article>
                    <figure className="relative">
                      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#1a1614] md:h-72">
                        <Image
                          src={procedure.cardImage}
                          alt={procedure.cardImageAlt}
                          width={IMAGE_SIZES.card.width}
                          height={IMAGE_SIZES.card.height}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className={`max-h-full w-full object-contain transition-transform duration-300 ${
                            locked ? "opacity-60" : "group-hover:scale-[1.02]"
                          }`}
                        />
                      </div>
                      {locked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/45 backdrop-blur-[1px]">
                          <span className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-card/95 px-4 py-2 text-sm font-medium text-primary shadow-lg">
                            <Lock className="h-4 w-4" aria-hidden />
                            Скоро
                          </span>
                        </div>
                      )}
                      <figcaption className="sr-only">{procedure.cardImageAlt}</figcaption>
                    </figure>
                    <div className="p-6">
                      <h3
                        className={`mb-2 text-xl ${
                          locked
                            ? "text-primary/80"
                            : "text-primary group-hover:underline"
                        }`}
                      >
                        {title}
                      </h3>
                      <p className="mb-4 line-clamp-2 text-muted-foreground">
                        {procedure.shortDescription}
                      </p>
                      {locked ? (
                        <p className="text-sm text-muted-foreground">
                          {procedure.comingSoonLabel ??
                            "В процес на сертификация — скоро ще предлагаме тази процедура."}
                        </p>
                      ) : (
                        <p className="text-lg font-medium text-foreground">
                          <span className="sr-only">Цена: </span>
                          {getLowestPrice(procedure)}
                        </p>
                      )}
                      <span className="mt-3 inline-block text-sm text-primary">
                        {locked ? "Прочетете повече →" : "Вижте детайли →"}
                      </span>
                    </div>
                  </article>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
