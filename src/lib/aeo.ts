import { formatPriceFrom, getLowestPriceEur } from "./currency";
import { getAllProcedures } from "./procedures";
import { siteConfig } from "./site";

/** ISO дата на последна редакция — актуализирайте при смяна на цени/текст */
export const CONTENT_PUBLISHED = "2026-01-15";
export const CONTENT_LAST_MODIFIED = "2026-07-20";

export function formatContentDate(iso: string): string {
  return new Date(iso).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const keyTakeaways = [
  "PhiBrows NG — сертифицирано студио в Стара Загора за BoldBrows и PowderBrows.",
  `Вашият специалист е ${siteConfig.owner} — персонална консултация преди всяка процедура.`,
  "Микроблейдингът издържа 12–30 мес.; пудровата микропигментация на вежди — 12–36 мес.; ламиниране на вежди — 6–8 седмици (при правилна грижа).",
  `Записване: телефон ${siteConfig.phoneDisplay}, Viber или имейл ${siteConfig.email[0]}.`,
] as const;

/** Кратко — според финалния текст на клиентката */
export const bookingSteps = [
  "Свържете се с мен по телефон, Viber или имейл.",
] as const;

export const namedEntities = [
  { label: "Марка / студио", value: siteConfig.name },
  { label: "Специалист", value: siteConfig.owner },
  { label: "Метод микроблейдинг", value: "BoldBrows (PhiAcademy)" },
  { label: "Метод пудрови вежди", value: "PowderBrows (PhiAcademy)" },
  { label: "Сертификация", value: "BoldBrows – Artist (PhiAcademy)" },
  { label: "Стандарти за хигиена", value: "Еднократни игли, стерилизация по EN 13060" },
  { label: "Пигменти", value: "PhiAcademy формули без токсични метали" },
  { label: "Локация", value: `${siteConfig.address.street}, ${siteConfig.address.city}` },
] as const;

export const procedureComparison = getAllProcedures().map((p) => ({
  name: p.brand ? `${p.name} (${p.brand})` : p.name,
  longevity: p.slug.includes("laminirane")
    ? "6–8 седмици"
    : p.slug.includes("pudrova")
      ? "12–36 месеца"
      : "12–30 месеца",
  fromPrice: formatPriceFrom(getLowestPriceEur(p.variants)),
  slug: p.slug,
  comingSoon: Boolean(p.comingSoon),
}));

/** Q&A в наръчника — финален текст от клиентката */
export const aeoQuestions = [
  {
    question: "Боли ли при направата на микроблейдинг?",
    answer:
      "Много е индивидуално. При някои клиенти не се усеща никаква болка, при други усещането е оприличено като скубане на вежди.",
  },
  {
    question: "Задължително ли е да се спазват правилата преди процедура?",
    answer:
      "Категорично да, защото някои от тях при неспазване допринасят за прекалено кървене, а това от своя страна води до неправилна преценка за дълбочината на работа. А друга част от правилата при неспазване водят до по-бързо изхвърляне и неравномерно задържане на пигмента.",
  },
  {
    question: "Каква упойка се поставя?",
    answer:
      "Упойката е вторична, т.е. тя се поставя след направата на първи пас, за да сведе до минимум усещането при направата на следващите пасове. Тогава клиентът не усеща болка при нанасянето на пигмент върху вече направения разрез.",
  },
  {
    question: "А може ли поставянето на упойка преди процедурата?",
    answer:
      "Не се поставя първична упойка с цел достигане на правилната дълбочина на работа, а това от своя страна е основното за крайния резултат на цвета.",
  },
  {
    question: "Каква е разликата между микроблейдинг и микропигментация на вежди?",
    answer:
      "Разликата е огромна. Микроблейдингът (BoldBrows) е ръчна техника, при която се рисуват тънки линии, имитиращи естествените косъмчета на веждата, и не е подходящ за мазна и пореста кожа. Микропигментацията, т.е. пудровите вежди (PowderBrows), е машинна техника за придаване на мек, пухкав и по-наситен вид на веждата с ombre ефект (по желание на клиента) и е подходяща за всеки тип кожа.",
  },
  {
    question: "Как да избера коя процедура е по-подходяща за мен?",
    answer:
      "Оставете този избор на артиста. Той най-компетентно може да прецени спрямо вашите желания и тип кожа кой метод е най-подходящ.",
  },
] as const;

export const authoritativeSources = [
  {
    name: "Phi Academy — PhiBrows",
    url: "https://phibrows.com/",
    note: "Официална академия — BoldBrows и PowderBrows",
  },
  {
    name: "BoldBrows",
    url: "https://boldbrows.com/",
    note: "Методология за естествени косъмчета",
  },
  {
    name: "Европейски регламент (GDPR)",
    url: "https://gdpr.eu/",
    note: "Защита на личните данни при записване",
  },
  {
    name: "ISO 9001",
    url: "https://www.iso.org/iso-9001-quality-management.html",
    note: "Референция за качество при производители на пигменти",
  },
] as const;

export const studioTechnicalNote = `# ${siteConfig.name} — технически профил
Студио: ${siteConfig.address.street}, ${siteConfig.address.city}
Специалист: ${siteConfig.owner}
Методи: BoldBrows | PowderBrows | ламиниране вежди и мигли
Академии: PhiAcademy | Wellty Academy
Контакт: ${siteConfig.phoneDisplay} | ${siteConfig.email[0]}
Актуализация: ${CONTENT_LAST_MODIFIED}`;
