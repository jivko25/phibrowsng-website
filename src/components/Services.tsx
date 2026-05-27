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
            В PhiBrows NG предлагам четири основни процедури за вежди и мигли. Всяка услуга
            започва с консултация — така избираме техника, форма и цвят според вашия тип кожа.
            Освен това можете да разгледате цени, продължителност и подробности за всяка
            процедура на отделната страница.
          </p>
        </header>

        <ul className="grid list-none gap-6 md:grid-cols-2">
          {procedures.map((procedure) => (
            <li key={procedure.slug}>
              <Link
                href={`/proceduri/${procedure.slug}`}
                className="card-lift group block overflow-hidden rounded-lg border border-border bg-card hover:border-primary"
              >
                <article>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={procedure.cardImage}
                      alt={procedure.cardImageAlt}
                      width={IMAGE_SIZES.card.width}
                      height={IMAGE_SIZES.card.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl text-primary group-hover:underline">
                      {getProcedureCardTitle(procedure)}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-muted-foreground">
                      {procedure.shortDescription}
                    </p>
                    <p className="text-lg font-medium text-foreground">
                      <span className="sr-only">Цена: </span>
                      {getLowestPrice(procedure)}
                    </p>
                    <span className="mt-3 inline-block text-sm text-primary">
                      Вижте детайли →
                    </span>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
