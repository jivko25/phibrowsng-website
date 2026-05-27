import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика за поверителност",
  description: `Политика за поверителност на ${siteConfig.name} — как обработваме личните ви данни.`,
  alternates: { canonical: "/politika-poveritelnost" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="px-4 py-24">
        <article className="prose-beauty mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl text-primary">Политика за поверителност</h1>
          <p className="mb-4 text-muted-foreground">
            Последна актуализация:{" "}
            {new Date().toLocaleDateString("bg-BG", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">1. Администратор</h2>
            <p className="text-foreground/90">
              Администратор на лични данни е {siteConfig.owner} ({siteConfig.name}), с
              адрес: {siteConfig.address.street}, {siteConfig.address.city}. Контакт:{" "}
              <a href={`mailto:${siteConfig.email[0]}`}>{siteConfig.email[0]}</a>, тел.{" "}
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">2. Какви данни събираме</h2>
            <p className="text-foreground/90">
              При записване на час може да съберем име, телефон, имейл и информация за
              желаната процедура. Данните се използват само за комуникация и организация на
              посещението.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">3. Правно основание</h2>
            <p className="text-foreground/90">
              Обработваме данни на основание чл. 6, ал. 1, б. „б“ от GDPR — изпълнение на
              договор или преддоговорни отношения при записване на час.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">4. Вашите права</h2>
            <p className="text-foreground/90">
              Имате право на достъп, корекция, изтриване и ограничаване на обработката.
              За упражняване на правата пишете на {siteConfig.email[0]}.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-3 text-2xl text-primary">5. Бисквитки</h2>
            <p className="text-foreground/90">
              Сайтът използва технически необходими бисквитки за работа. Аналитични
              инструменти се добавят само след ваше съгласие, ако бъдат внедрени.
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
