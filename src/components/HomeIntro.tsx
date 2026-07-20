import { CONTENT_LAST_MODIFIED, formatContentDate } from "@/lib/aeo";
import { siteConfig } from "@/lib/site";

export function HomeIntro() {
  return (
    <section
      className="border-b border-border bg-background px-4 py-14"
      aria-labelledby="intro-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 id="intro-heading" className="mb-6 text-3xl text-primary md:text-4xl">
          PhiBrows NG — студио за вежди и мигли в {siteConfig.address.city}
        </h2>
        <p className="speakable-summary mb-4 text-lg leading-relaxed text-foreground/90">
          Добре дошли! Аз съм <strong>{siteConfig.owner}</strong> — вашият сертифициран
          артист по BoldBrows и PowderBrows на PhiAcademy — най-голямата и престижна
          академия в света, чийто създател е гурото в бюти индустрията Бранко Бабич. Тя е
          глобално призната със своите уникални пигменти без токсични метали, с делителя
          на златното сечение и дигиталното изчисляване на симетрията за перфектния дизайн
          на веждите. В моето студио в центъра на {siteConfig.address.city} предлагам
          микроблейдинг, пудрова микропигментация и ламиниране на вежди и мигли.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-foreground/90">
          Първо правим консултация — избираме форма, нюанс и техника според вашия тип
          кожа. След това работим с премиум пигменти и стерилни инструменти, за да
          постигнем естествен и дълготраен резултат в полуперманентния грим.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Автор:</strong> {siteConfig.owner} · <strong>Актуализация:</strong>{" "}
          <time dateTime={CONTENT_LAST_MODIFIED}>
            {formatContentDate(CONTENT_LAST_MODIFIED)}
          </time>
        </p>
      </div>
    </section>
  );
}
