import { getAllProcedures } from "@/lib/procedures";
import { faqs, heroImage, siteConfig } from "@/lib/site";

export function JsonLd() {
  const procedures = getAllProcedures();

  const beautySalon = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email[0],
    image: heroImage,
    priceRange: "$$",
    employee: {
      "@type": "Person",
      name: siteConfig.owner,
      jobTitle: "Сертифициран специалист по перманентен грим на вежди",
    },
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
      name: "Процедури",
      itemListElement: procedures.map((procedure, index) => ({
        "@type": "Offer",
        position: index + 1,
        url: `${siteConfig.url}/proceduri/${procedure.slug}`,
        itemOffered: {
          "@type": "Service",
          name: procedure.name,
          description: procedure.shortDescription,
          provider: { "@id": `${siteConfig.url}/#organization` },
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const graphs = [beautySalon, website, faqPage];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graphs) }}
    />
  );
}
