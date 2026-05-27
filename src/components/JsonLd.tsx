import { authorProfile, authorSameAs, organizationSameAs } from "@/lib/geo-content";
import { guideUrl } from "@/lib/guide";
import { CONTENT_LAST_MODIFIED, CONTENT_PUBLISHED } from "@/lib/aeo";
import { getLowestPriceEur } from "@/lib/currency";
import { geoKnowsAbout } from "@/lib/geo";
import { getAllProcedures } from "@/lib/procedures";
import { faqs, heroImage, siteConfig } from "@/lib/site";

export function JsonLd() {
  const procedures = getAllProcedures();
  const base = siteConfig.url;
  const logoUrl = `${base}/phiBrowsNG_logo.svg`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#org`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: base,
        logo: { "@type": "ImageObject", url: logoUrl },
        image: heroImage,
        email: siteConfig.email[0],
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.countryCode,
        },
        sameAs: [...organizationSameAs],
        founder: { "@id": `${base}/#author` },
      },
      {
        "@type": ["BeautySalon", "LocalBusiness"],
        "@id": `${base}/#organization`,
        name: siteConfig.name,
        alternateName: ["PhiBrows NG", "phibrowsng", siteConfig.owner],
        description: siteConfig.description,
        url: base,
        parentOrganization: { "@id": `${base}/#org` },
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
        founder: { "@id": `${base}/#author` },
        employee: { "@id": `${base}/#author` },
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
        sameAs: [...organizationSameAs],
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
        "@type": ["Person", "Author"],
        "@id": `${base}/#author`,
        name: authorProfile.name,
        jobTitle: authorProfile.role,
        description: `${authorProfile.name} — ${authorProfile.role} в ${siteConfig.name}, ${siteConfig.address.city}`,
        url: base,
        image: heroImage,
        worksFor: { "@id": `${base}/#org` },
        knowsAbout: [...geoKnowsAbout],
        areaServed: siteConfig.address.city,
        sameAs: [...authorSameAs],
        alumniOf: {
          "@type": "Organization",
          name: "Phi Academy",
          url: "https://phibrows.com/",
        },
        hasCredential: authorProfile.credentials.map((name) => ({
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certification",
          name,
          recognizedBy: { "@type": "Organization", name: "Phi Academy" },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${base}/#org` },
        about: { "@id": `${base}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${guideUrl}?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${base}/#webpage`,
        url: base,
        name: `${siteConfig.name} — вежди и мигли в Стара Загора`,
        description: siteConfig.metaDescription,
        inLanguage: siteConfig.language,
        datePublished: CONTENT_PUBLISHED,
        dateModified: CONTENT_LAST_MODIFIED,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#org` },
        mainEntity: { "@id": `${base}/#organization` },
        author: { "@id": `${base}/#author` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".speakable-summary"],
        },
        significantLink: guideUrl,
      },
      {
        "@type": "VideoObject",
        "@id": `${base}/#video-social`,
        name: `${siteConfig.name} — видео в Instagram`,
        description: `Процедури и резултати от ${siteConfig.owner}`,
        contentUrl: siteConfig.social.instagram,
        uploadDate: CONTENT_PUBLISHED,
        publisher: { "@id": `${base}/#org` },
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
