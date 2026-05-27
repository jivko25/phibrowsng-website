import { getLowestPriceEur } from "@/lib/currency";
import { geoKnowsAbout } from "@/lib/geo";
import { getAllProcedures } from "@/lib/procedures";
import { faqs, heroImage, siteConfig } from "@/lib/site";

export function JsonLd() {
  const procedures = getAllProcedures();
  const base = siteConfig.url;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BeautySalon",
        "@id": `${base}/#organization`,
        name: siteConfig.name,
        alternateName: ["PhiBrows NG", "phibrowsng", siteConfig.owner],
        description: siteConfig.description,
        url: base,
        telephone: siteConfig.phone,
        email: siteConfig.email[0],
        image: heroImage,
        priceRange: "$$",
        currenciesAccepted: "EUR, BGN",
        paymentAccepted: "Cash, Card",
        areaServed: {
          "@type": "City",
          name: siteConfig.address.city,
          containedInPlace: { "@type": "Country", name: "Bulgaria" },
        },
        knowsAbout: [...geoKnowsAbout],
        founder: { "@id": `${base}/#person` },
        employee: { "@id": `${base}/#person` },
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.countryCode,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: siteConfig.openingHours.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.days,
          opens: slot.opens,
          closes: slot.closes,
        })),
        sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Процедури за вежди и мигли",
          itemListElement: procedures.map((procedure, index) => ({
            "@type": "Offer",
            position: index + 1,
            url: `${base}/proceduri/${procedure.slug}`,
            itemOffered: {
              "@type": "Service",
              "@id": `${base}/proceduri/${procedure.slug}#service`,
              name: procedure.name,
              description: procedure.shortDescription,
              provider: { "@id": `${base}/#organization` },
            },
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              minPrice: getLowestPriceEur(procedure.variants),
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${base}/#person`,
        name: siteConfig.owner,
        jobTitle: "Сертифициран специалист по перманентен грим на вежди (PhiBrows, BoldBrows, PowderBrows)",
        worksFor: { "@id": `${base}/#organization` },
        knowsAbout: [...geoKnowsAbout],
        areaServed: siteConfig.address.city,
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${base}/#organization` },
        about: { "@id": `${base}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: base,
        name: `${siteConfig.name} | ${siteConfig.owner} — вежди и мигли, Стара Загора`,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#organization` },
        mainEntity: { "@id": `${base}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${base}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${base}/#services`,
        name: "Процедури",
        itemListElement: procedures.map((procedure, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: procedure.name,
          url: `${base}/proceduri/${procedure.slug}`,
        })),
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
