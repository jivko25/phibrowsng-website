import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="bg-card px-4 py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 text-center">
          <h2 id="faq-heading" className="mb-4 text-4xl text-primary md:text-5xl">
            Често задавани въпроси
          </h2>
          <p className="text-lg text-muted-foreground">
            Отговори на най-често срещаните въпроси
          </p>
        </header>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-border bg-background p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg">
                <span className="text-primary">{faq.question}</span>
                <span className="text-2xl text-primary transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
