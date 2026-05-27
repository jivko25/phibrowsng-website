import Link from "next/link";
import {
  aeoQuestions,
  authoritativeSources,
  bookingSteps,
  CONTENT_LAST_MODIFIED,
  CONTENT_PUBLISHED,
  formatContentDate,
  keyTakeaways,
  namedEntities,
  procedureComparison,
  studioTechnicalNote,
} from "@/lib/aeo";
import {
  actionableTips,
  authorProfile,
  boldBrowsVsPowder,
  caseStudy,
  conclusionVerdict,
  definitions,
  expertQuote,
  extendedSources,
  geoTocItems,
  industryTerms,
  originalInsights,
  studioStatistics,
  trustSignals,
  whatWhyHow,
} from "@/lib/geo-content";
import { guideTitle } from "@/lib/guide";
import { siteConfig } from "@/lib/site";

export function AeoGuide() {
  return (
    <section
      id="aeo-guide"
      className="border-b border-border bg-card/40 px-4 py-20"
      aria-labelledby="aeo-guide-heading"
    >
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Начало
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground/90" aria-current="page">
              {guideTitle}
            </li>
          </ol>
        </nav>

        <header className="mb-10 text-center">
          <h1 id="aeo-guide-heading" className="mb-3 text-4xl text-primary md:text-5xl">
            {guideTitle}
          </h1>
          <p className="speakable-summary mx-auto max-w-2xl text-muted-foreground">
            Дефиниции, данни, сравнения и стъпки — оптимизирано за AI търсачки и Google
            Overview. Актуализирано на{" "}
            <time dateTime={CONTENT_LAST_MODIFIED}>{formatContentDate(CONTENT_LAST_MODIFIED)}</time>.
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <strong>Автор:</strong>{" "}
            <span itemScope itemType="https://schema.org/Person" itemProp="author">
              <span itemProp="name">{authorProfile.name}</span>
            </span>
            , {authorProfile.role} · Публикувано:{" "}
            <time dateTime={CONTENT_PUBLISHED}>{formatContentDate(CONTENT_PUBLISHED)}</time>
          </p>
        </header>

        <nav
          id="table-of-contents"
          className="mb-12 rounded-lg border border-border bg-background p-6"
          aria-label="Съдържание"
        >
          <h3 className="mb-4 text-xl text-primary">Съдържание</h3>
          <ol className="list-decimal space-y-2 pl-5 text-foreground/90">
            {geoTocItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-primary hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article id="tldr" className="mb-12 rounded-lg border border-primary/30 bg-background p-6">
          <h3 className="mb-4 text-2xl text-primary">TL;DR — ключови изводи</h3>
          <ul className="list-disc space-y-2 pl-5 text-foreground/90">
            {keyTakeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article id="definitions" className="mb-12 space-y-6">
          <h3 className="text-2xl text-primary">Дефиниции за AI Overview</h3>
          {definitions.map((d) => (
            <div key={d.term}>
              <h4 className="mb-2 text-lg text-primary">Какво е {d.term}?</h4>
              <p className="aeo-answer leading-relaxed text-foreground/90">
                <strong>{d.term}</strong> {d.text}
              </p>
            </div>
          ))}
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {industryTerms.map((term) => (
              <li key={term}>
                <strong>Термин:</strong> {term}
              </li>
            ))}
          </ul>
        </article>

        <article id="what-why-how" className="mb-12 space-y-8">
          {(["what", "why", "how"] as const).map((key) => (
            <div key={key}>
              <h3 className="mb-3 text-2xl text-primary">{whatWhyHow[key].heading}</h3>
              {whatWhyHow[key].paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="aeo-answer mb-3 leading-relaxed text-foreground/90">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>

        <article id="boldbrows-vs-powder" className="mb-12 overflow-x-auto">
          <h3 className="mb-4 text-2xl text-primary">{boldBrowsVsPowder.heading}</h3>
          <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
            <caption className="mb-3 text-muted-foreground">
              Сравнение BoldBrows и PowderBrows в {siteConfig.name}
            </caption>
            <thead>
              <tr className="border-b border-border bg-background">
                <th className="p-3 text-primary">Критерий</th>
                <th className="p-3 text-primary">BoldBrows</th>
                <th className="p-3 text-primary">PowderBrows</th>
              </tr>
            </thead>
            <tbody>
              {boldBrowsVsPowder.rows.map((row) => (
                <tr key={row.aspect} className="border-b border-border/60">
                  <td className="p-3 font-medium">{row.aspect}</td>
                  <td className="p-3 text-foreground/90">{row.boldBrows}</td>
                  <td className="p-3 text-foreground/90">{row.powderBrows}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4 text-foreground/90">{boldBrowsVsPowder.balancedNote}</p>
        </article>

        <article id="statistics" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Данни от нашата практика</h3>
          <p className="mb-4 text-foreground/90">
            В нашата практика в {siteConfig.name} проследяваме трайност, корекции и
            удовлетвореност от 2018 г. Ето ключови показатели:
          </p>
          <ul className="space-y-4">
            {studioStatistics.map((stat) => (
              <li
                key={stat.label}
                className="rounded-lg border border-border bg-background p-4 text-foreground/90"
              >
                <strong className="text-xl text-primary">{stat.value}</strong> — {stat.label}.{" "}
                <em className="text-sm text-muted-foreground">Източник: {stat.source}</em>
              </li>
            ))}
          </ul>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-foreground/90">
            {originalInsights.map((insight) => (
              <li key={insight}>{insight}</li>
            ))}
          </ul>
        </article>

        <article id="how-to-book" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">
            Как да запазите час при нас в {siteConfig.address.city}?
          </h3>
          <p className="mb-4 text-foreground/90">
            Следвайте тези стъпки — така ще получите бърз отговор и подготвен термин:
          </p>
          <ol className="list-decimal space-y-3 pl-5 text-foreground/90">
            {bookingSteps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </article>

        <article id="expert-quote" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Експертно мнение</h3>
          <blockquote className="border-l-4 border-primary bg-background p-6 italic text-foreground/90">
            <p className="mb-4">&ldquo;{expertQuote.text}&rdquo;</p>
            <footer className="text-sm not-italic text-muted-foreground">
              — <strong>{expertQuote.author}</strong>, {expertQuote.title}
            </footer>
          </blockquote>
        </article>

        <article id="case-study" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">{caseStudy.heading}</h3>
          <p className="mb-3 text-foreground/90">
            <strong>Ситуация:</strong> {caseStudy.scenario}
          </p>
          <p className="mb-2 font-medium text-primary">Подход:</p>
          <ol className="mb-4 list-decimal space-y-2 pl-5 text-foreground/90">
            {caseStudy.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mb-2 text-foreground/90">
            <strong>Резултат:</strong> {caseStudy.outcome}
          </p>
          <p className="text-sm text-muted-foreground">{caseStudy.disclaimer}</p>
        </article>

        <article id="trust-signals" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Сертификати и сигнали за доверие</h3>
          <ul className="mb-4 list-disc space-y-2 pl-5 text-foreground/90">
            {trustSignals.certifications.map((cert) => (
              <li key={cert}>{cert}</li>
            ))}
          </ul>
          <p className="mb-4 text-foreground/90">{trustSignals.reviewsNote}</p>
          <p>
            <a
              href={trustSignals.instagram}
              rel="noopener noreferrer me"
              target="_blank"
              className="text-primary hover:underline"
            >
              Вижте отзиви и снимки в Instagram →
            </a>
          </p>
          <dl className="mt-6 grid gap-3 rounded-lg border border-border bg-background p-6 sm:grid-cols-2">
            {namedEntities.map((item) => (
              <div key={item.label}>
                <dt className="font-medium text-primary">{item.label}</dt>
                <dd className="text-foreground/90">{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article id="tips" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Какво трябва да направите преди процедурата</h3>
          <ul className="list-disc space-y-3 pl-5 text-foreground/90">
            {actionableTips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </article>

        <article id="aeo-questions" className="mb-12 space-y-8">
          <h3 className="text-2xl text-primary">Въпроси и отговори</h3>
          {aeoQuestions.map((item) => (
            <div key={item.question}>
              <h4 className="mb-2 text-lg text-primary">{item.question}</h4>
              <p className="aeo-answer leading-relaxed text-foreground/90">{item.answer}</p>
            </div>
          ))}
        </article>

        <article id="procedure-comparison" className="mb-12 overflow-x-auto">
          <h3 className="mb-4 text-2xl text-primary">Сравнение на всички процедури</h3>
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
            <caption className="mb-3 text-muted-foreground">
              Цени, продължителност и трайност в {siteConfig.name}
            </caption>
            <thead>
              <tr className="border-b border-border bg-background">
                <th className="p-3 text-primary">Процедура</th>
                <th className="p-3 text-primary">Продължителност</th>
                <th className="p-3 text-primary">Трайност</th>
                <th className="p-3 text-primary">Цена от</th>
              </tr>
            </thead>
            <tbody>
              {procedureComparison.map((row) => (
                <tr key={row.slug} className="border-b border-border/60">
                  <td className="p-3">
                    <Link href={`/proceduri/${row.slug}`} className="text-primary hover:underline">
                      {row.name}
                    </Link>
                  </td>
                  <td className="p-3">{row.duration}</td>
                  <td className="p-3">{row.longevity}</td>
                  <td className="p-3">{row.fromPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article id="studio-profile" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Технически профил</h3>
          <pre className="overflow-x-auto rounded-lg border border-border bg-background p-4 text-sm">
            <code>{studioTechnicalNote}</code>
          </pre>
        </article>

        <article id="sources" className="mb-12">
          <h3 className="mb-4 text-2xl text-primary">Източници и авторитетни домейни</h3>
          <ul className="list-disc space-y-3 pl-5">
            {extendedSources.map((src) => (
              <li key={src.url} className="text-foreground/90">
                <a
                  href={src.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-medium text-primary hover:underline"
                >
                  {src.name}
                </a>{" "}
                <span className="text-sm text-muted-foreground">({src.domain})</span>
              </li>
            ))}
            {authoritativeSources.map((src) => (
              <li key={src.url} className="text-foreground/90">
                <a
                  href={src.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-primary hover:underline"
                >
                  {src.name}
                </a>
                {" — "}
                {src.note}
              </li>
            ))}
          </ul>
        </article>

        <article id="conclusion" className="mb-12 rounded-lg border border-primary/20 bg-background p-6">
          <h3 className="mb-4 text-2xl text-primary">{conclusionVerdict.heading}</h3>
          <p className="mb-4 leading-relaxed text-foreground/90">{conclusionVerdict.text}</p>
          <p className="font-medium text-primary">{conclusionVerdict.cta}</p>
        </article>

        <article id="video-gallery">
          <h3 className="mb-4 text-2xl text-primary">Видео и реални резултати</h3>
          <p className="text-foreground/90">
            Вижте процедури в{" "}
            <a
              href={siteConfig.social.instagram}
              rel="noopener noreferrer me"
              target="_blank"
              className="text-primary hover:underline"
            >
              @phibrowsng в Instagram
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
