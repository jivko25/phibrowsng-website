import Link from "next/link";
import { keyTakeaways } from "@/lib/aeo";
import { GUIDE_PATH, guideTitle } from "@/lib/guide";
import { siteConfig } from "@/lib/site";

/** Кратко резюме на началната страница — пълният наръчник е на отделен URL за AI/SEO */
export function GuideTeaser() {
  return (
    <section
      className="border-b border-border bg-card/30 px-4 py-12"
      aria-labelledby="guide-teaser-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="guide-teaser-heading" className="mb-4 text-2xl text-primary md:text-3xl">
          {guideTitle}
        </h2>
        <p className="mb-6 text-muted-foreground">
          Сравнения, стъпки за записване, данни и отговори за AI търсачки — на отделна
          страница, за да остане началната ви ясна и лесна за разглеждане.
        </p>
        <ul className="mb-8 list-disc space-y-2 pl-5 text-left text-sm text-foreground/90">
          {keyTakeaways.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <Link
          href={GUIDE_PATH}
          className="btn-glow inline-block rounded-lg bg-primary px-8 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Отворете пълния наръчник →
        </Link>
        <p className="mt-4 text-xs text-muted-foreground">
          {siteConfig.name} · Стара Загора · PhiBrows, BoldBrows, PowderBrows
        </p>
      </div>
    </section>
  );
}
