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
        <p className="mb-4 text-lg leading-relaxed text-foreground/90">
          Аз съм <strong>{siteConfig.owner}</strong>, сертифициран специалист по PhiBrows,
          BoldBrows и PowderBrows. В моето студио в центъра на {siteConfig.address.city}{" "}
          предлагам микроблейдинг, пудрова микропигментация и ламиниране на вежди и мигли.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-foreground/90">
          Първо провеждам консултация — заедно избираме форма, нюанс и техника според типа
          кожа и вашите очаквания. След това работя с премиум пигменти и стерилни
          инструменти, за да постигнем естествен и дълготраен резултат.
        </p>
        <p className="text-sm text-muted-foreground">
          Автор: {siteConfig.owner} · Последна актуализация:{" "}
          {new Date().toLocaleDateString("bg-BG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
}
