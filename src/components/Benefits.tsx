import { Check } from "lucide-react";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";
import { benefits } from "@/lib/site";

export function Benefits() {
  return (
    <section id="benefits" className="bg-card px-4 py-20" aria-labelledby="benefits-heading">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center">
          <h2 id="benefits-heading" className="mb-4 text-4xl text-primary md:text-5xl">
            Защо да изберете нас
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            В PhiBrows NG вашият комфорт и резултат са мой приоритет. Затова работя с
            сертифицирани методи и премиум продукти. Освен това всяка процедура е
            персонална — подбирам форма, цвят и техника според вашето лице и тип кожа.
            В резултат получавате естествен вид и дълготраен ефект.
          </p>
        </header>

        <ul className="grid list-none gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit.title} delay={index * 100}>
              <li className="flex gap-4">
                <div className="flex-shrink-0" aria-hidden>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 transition-transform duration-300 hover:scale-110">
                    <Check className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </li>
            </AnimateOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
