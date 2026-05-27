import Image from "next/image";
import Link from "next/link";
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
          <p className="text-lg text-muted-foreground">
            Специализирани услуги за вежди и мигли при Надежда Георгиева
          </p>
        </header>

        <ul className="grid list-none gap-6 md:grid-cols-2">
          {procedures.map((procedure) => (
            <li key={procedure.slug}>
              <Link
                href={`/proceduri/${procedure.slug}`}
                className="group block overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10"
              >
                <article>
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={procedure.cardImage}
                      alt={procedure.cardImageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
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
