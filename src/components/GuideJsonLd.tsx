import { aeoQuestions, CONTENT_LAST_MODIFIED, CONTENT_PUBLISHED } from "@/lib/aeo";
import { authorProfile, howToBooking } from "@/lib/geo-content";
import { guideMetaDescription, guideTitle, guideUrl } from "@/lib/guide";
import { siteConfig } from "@/lib/site";

const base = siteConfig.url;

export function GuideJsonLd() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${guideUrl}#webpage`,
        url: guideUrl,
        name: `${guideTitle} | ${siteConfig.name}`,
        description: guideMetaDescription,
        inLanguage: siteConfig.language,
        datePublished: CONTENT_PUBLISHED,
        dateModified: CONTENT_LAST_MODIFIED,
        isPartOf: { "@id": `${base}/#website` },
        about: { "@id": `${base}/#organization` },
        author: { "@id": `${base}/#author` },
        publisher: { "@id": `${base}/#org` },
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: [".speakable-summary", "#tldr", ".aeo-answer"],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${guideUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Начало", item: base },
          { "@type": "ListItem", position: 2, name: guideTitle, item: guideUrl },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${guideUrl}#howto-booking`,
        name: howToBooking.name,
        description: howToBooking.description,
        totalTime: howToBooking.totalTime,
        step: howToBooking.steps.map((text, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          text,
        })),
        author: { "@id": `${base}/#author` },
      },
      {
        "@type": "FAQPage",
        "@id": `${guideUrl}#faq`,
        mainEntity: aeoQuestions.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
      {
        "@type": "Article",
        "@id": `${guideUrl}#article`,
        headline: guideTitle,
        description: guideMetaDescription,
        datePublished: CONTENT_PUBLISHED,
        dateModified: CONTENT_LAST_MODIFIED,
        author: {
          "@type": "Person",
          "@id": `${base}/#author`,
          name: authorProfile.name,
        },
        publisher: { "@id": `${base}/#org` },
        mainEntityOfPage: { "@id": `${guideUrl}#webpage` },
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
