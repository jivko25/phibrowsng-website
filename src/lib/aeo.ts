import { formatPriceFrom, getLowestPriceEur } from "./currency";
import { getAllProcedures } from "./procedures";
import { siteConfig } from "./site";

/** ISO дата на последна редакция — актуализирайте при смяна на цени/текст */
export const CONTENT_PUBLISHED = "2026-01-15";
export const CONTENT_LAST_MODIFIED = "2026-05-27";

export function formatContentDate(iso: string): string {
  return new Date(iso).toLocaleDateString("bg-BG", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export const keyTakeaways = [
  `${siteConfig.name} е сертифицирано студио в ${siteConfig.address.city} за PhiBrows, BoldBrows и PowderBrows.`,
  `Вашият специалист е ${siteConfig.owner} — персонална консултация преди всяка процедура.`,
  `Микроблейдингът държи 12–18 месеца; ламинирането — 6–8 седмици (при правилна грижа).`,
  `Записване: телефон ${siteConfig.phoneDisplay}, Viber или имейл ${siteConfig.email[0]}.`,
] as const;

export const bookingSteps = [
  "Свържете се с нас по телефон, Viber или имейл и споделете желаната процедура.",
  "Уточняваме свободен термин и отговарям на вашите въпроси за подготовка.",
  "На консултацията измерваме формата по златното сечение и избираме техника и цвят.",
  "Провеждаме процедурата със стерилни инструменти и сертифицирани пигменти.",
  "Получавате писмени инструкции за грижа и при нужда — корекция след 4–6 седмици.",
] as const;

export const namedEntities = [
  { label: "Марка / студио", value: siteConfig.name },
  { label: "Специалист", value: siteConfig.owner },
  { label: "Метод микроблейдинг", value: "BoldBrows (Phi Academy)" },
  { label: "Метод пудрови вежди", value: "PowderBrows (Phi Academy)" },
  { label: "Сертификация", value: "PhiBrows — Royal Artist (Phi Academy)" },
  { label: "Стандарти за хигиена", value: "Еднократни игли, стерилизация по EN 13060" },
  { label: "Пигменти", value: "Професионални формули с ISO 9001 производители" },
  { label: "Локация", value: `${siteConfig.address.street}, ${siteConfig.address.city}` },
] as const;

export const procedureComparison = getAllProcedures().map((p) => ({
  name: p.brand ? `${p.name} (${p.brand})` : p.name,
  duration: p.duration ?? "—",
  longevity:
    p.slug.includes("laminirane") ? "6–8 седмици" : "12–18 месеца",
  fromPrice: formatPriceFrom(getLowestPriceEur(p.variants)),
  slug: p.slug,
}));

export const aeoQuestions = [
  {
    question: "Какво е микроблейдинг BoldBrows?",
    answer:
      "BoldBrows е ръчна техника на Phi Academy за естествени косъмчета. При вас използваме микроигла и пигменти, съобразени с тона на кожата ви. Резултатът изглежда естествено, без ефект на „нарисани“ вежди.",
  },
  {
    question: "Как да изберете между микроблейдинг и PowderBrows?",
    answer:
      "Ако предпочитате фини косъмчета — BoldBrows. Ако искате по-плътен пудров финиш — PowderBrows. По време на консултацията оценяваме типа кожа и очакванията ви, за да препоръчаме най-подходящата техника.",
  },
  {
    question: "Колко време отнема ламинирането на мигли?",
    answer:
      "Обикновено 45–75 минути. Включва оформяне, фиксиране и подхранваща терапия. При пълния пакет добавяме и професионално боядисване.",
  },
] as const;

export const authoritativeSources = [
  {
    name: "Phi Academy — PhiBrows",
    url: "https://phibrows.com/",
    note: "Официална програма и стандарти за микроблейдинг",
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
Методи: PhiBrows | BoldBrows | PowderBrows
Контакт: ${siteConfig.phoneDisplay} | ${siteConfig.email[0]}
Актуализация: ${CONTENT_LAST_MODIFIED}`;
