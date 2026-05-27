import Image from "next/image";
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
              Здравейте, аз съм <strong className="text-primary">{siteConfig.owner}</strong> —
              сертифициран специалист по перманентен грим на вежди с методи PhiBrows, BoldBrows
              и PowderBrows.
            </p>
            <p className="mb-4 text-lg text-foreground/90">
              В студиото ми в {siteConfig.address.city} съчетавам прецизност, естетика и
              индивидуален подход, за да постигнем вежди и мигли, които подчертават
              естествената ви красота.
            </p>
            <p className="text-lg text-foreground/90">
              Всяка процедура започва с консултация — заедно избираме най-подходящата техника
              и грижа според вашите нужди и очаквания.
            </p>
          </div>
          <figure className="relative h-96 overflow-hidden rounded-lg">
            <Image
              src={aboutImage}
              alt={`${siteConfig.owner} — специалист по вежди в ${siteConfig.address.city}`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
