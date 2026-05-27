import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Общи условия",
  description: `Общи условия за ползване на сайта и услугите на ${siteConfig.name}.`,
  alternates: { canonical: "/usloviya" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 py-24">
        <article className="prose-beauty mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl text-primary">Общи условия</h1>
          <p className="mb-4 text-muted-foreground">
            Последна актуализация:{" "}
            {new Date().toLocaleDateString("bg-BG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">1. Услуги</h2>
            <p className="text-foreground/90">
              {siteConfig.name} предоставя козметични процедури за вежди и мигли в{" "}
              {siteConfig.address.city}. Цените и продължителността са посочени на сайта и
              могат да бъдат уточнени при консултация.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">2. Записване на час</h2>
            <p className="text-foreground/90">
              Час се запазва по телефон, Viber или имейл. Моля, уведомете ни при отказ
              поне 24 часа преди часа, за да освободим термина за друг клиент.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">3. Отговорност</h2>
            <p className="text-foreground/90">
              Преди всяка процедура се провежда консултация. Клиентът е длъжен да сподели
              алергии, бременност, медикаменти или скорошни процедури в зоната.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">4. Съдържание на сайта</h2>
            <p className="text-foreground/90">
              Текстовете и снимките са с информационна цел. Резултатите могат да варират
              според индивидуалните особености.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">5. Контакт</h2>
            <p className="text-foreground/90">
              {siteConfig.owner}, {siteConfig.address.street}, {siteConfig.address.city}.{" "}
              <a href={`mailto:${siteConfig.email[0]}`}>{siteConfig.email[0]}</a>
            </p>
          </section>

          <p>
            <Link href="/" className="text-primary hover:underline">
              ← Към началната страница
            </Link>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
