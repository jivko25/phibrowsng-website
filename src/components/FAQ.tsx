import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="bg-card px-4 py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-4xl">
        <header className="mb-16 text-center">
          <h2 id="faq-heading" className="mb-4 text-4xl text-primary md:text-5xl">
            Често задавани въпроси
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Отговори на кратки въпроси за вашия час, подготовка и грижа след процедура. Ако
            имате допълнителни въпроси, пишете ни — ще ви отговорим възможно най-скоро.
          </p>
        </header>

        <div className="space-y-8">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-lg border border-border bg-background p-6"
            >
              <h3 className="mb-3 text-lg text-primary">{faq.question}</h3>
              <p className="aeo-answer text-muted-foreground">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
