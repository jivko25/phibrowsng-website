import type { Procedure } from "@/lib/procedures";
import { getProcedureCardTitle } from "@/lib/procedures";
import { siteConfig } from "@/lib/site";

type ProcedureJsonLdProps = {
  procedure: Procedure;
};

export function ProcedureJsonLd({ procedure }: ProcedureJsonLdProps) {
  const base = siteConfig.url;
  const url = `${base}/proceduri/${procedure.slug}`;
  const title = getProcedureCardTitle(procedure);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: title,
        description: procedure.shortDescription,
        provider: { "@id": `${base}/#organization` },
        areaServed: siteConfig.address.city,
        offers: procedure.variants.map((v) => ({
          "@type": "Offer",
          name: v.name,
          price: v.priceEur,
          priceCurrency: "EUR",
          url,
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${title} | ${siteConfig.name}`,
        description: procedure.shortDescription,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${url}#service` },
        mainEntity: { "@id": `${url}#service` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Начало",
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Процедури",
            item: `${base}/#proceduri`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
