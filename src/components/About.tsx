import Image from "next/image";
import { IMAGE_SIZES } from "@/lib/image-sizes";
import { aboutImage, siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="px-4 py-20" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 id="about-heading" className="mb-6 text-4xl text-primary md:text-5xl">
              За мен
            </h2>
            <p className="mb-4 text-lg text-foreground/90">
              Здравейте, аз съм <strong className="text-primary">{siteConfig.owner}</strong>.
              Сертифициран артист по микроблейдинг (BoldBrows) и PowderBrows на PhiAcademy,
              както и артист по Eyelash Lift and Tint Course, Eyebrow Henna and Mapping
              Course и Eyebrow Lift and Tint Course на Wellty Academy.
            </p>
            <p className="mb-4 text-lg text-foreground/90">
              В моето студио в {siteConfig.address.city} съчетавам прецизност и естетика.
              Целта ми е естествен резултат — вежди и мигли, които подчертават лицето ви.
            </p>
            <p className="text-sm text-muted-foreground">
              Автор: {siteConfig.owner} · Специалист, {siteConfig.name}
            </p>
          </div>
          <figure className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src={aboutImage}
              alt={`${siteConfig.owner} — специалист по вежди в ${siteConfig.address.city}`}
              width={IMAGE_SIZES.about.width}
              height={IMAGE_SIZES.about.height}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <figcaption className="mt-3 text-center text-sm text-muted-foreground">
              {siteConfig.owner} — сертифициран артист BoldBrows и PowderBrows,{" "}
              {siteConfig.name}, {siteConfig.address.city}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
