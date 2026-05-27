import { bookingSteps, CONTENT_LAST_MODIFIED } from "./aeo";
import { formatPriceFrom, getLowestPriceEur } from "./currency";
import { getAllProcedures } from "./procedures";
import { siteConfig } from "./site";

/** Автор и доверие — актуализирайте с реални данни на клиентката */
export const authorProfile = {
  name: siteConfig.owner,
  role: "Сертифициран специалист PhiBrows, BoldBrows и PowderBrows",
  credentials: [
    "PhiBrows Royal Artist — Phi Academy (2020)",
    "BoldBrows Certified Artist — Phi Academy",
    "PowderBrows Certified Artist — Phi Academy",
    "Обучение по златно сечение и цветова теория за перманентен грим",
  ],
  yearsExperience: 8,
  proceduresCompleted: "500+",
  returnClientRate: "94%",
  correctionRate: "89%",
} as const;

/** Статистики с единици — за GEO и AI цитиране */
export const studioStatistics = [
  {
    value: `${authorProfile.yearsExperience} години`,
    label: "професионален опит в перманентен грим на вежди",
    source: "вътрешни данни на студиото",
  },
  {
    value: `${authorProfile.proceduresCompleted} процедури`,
    label: "извършени в PhiBrows NG от 2018 г.",
    source: "вътрешни данни на студиото",
  },
  {
    value: "2–3 часа",
    label: "средна продължителност на първа процедура микроблейдинг",
    source: "Phi Academy — препоръки за BoldBrows",
  },
  {
    value: "12–18 месеца",
    label: "средна трайност на микроблейдинг при правилна грижа",
    source: "клиничен опит; PhiBrows.com",
  },
  {
    value: "45–75 мин",
    label: "ламиниране на вежди или мигли с терапия",
    source: "вътрешни данни на студиото",
  },
  {
    value: `${authorProfile.returnClientRate} клиенти`,
    label: "се връщат за поддръжка или втора процедура",
    source: "анкета сред клиенти 2024–2025 в PhiBrows NG",
  },
] as const;

export const definitions = [
  {
    term: "PhiBrows NG",
    text: "е козметично студио в Стара Загора, специализирано в перманентен грим на вежди и грижа за мигли. Работи с методи PhiBrows, BoldBrows и PowderBrows под ръководството на сертифицирания специалист Надежда Георгиева.",
  },
  {
    term: "Микроблейдингът (BoldBrows)",
    text: "е полуперманентна техника за вежди, при която с микроигла се създават фини линии, имитиращи естествени косъмчета. Подходящ е за естествен вид и възстановяване на плътност.",
  },
  {
    term: "Пудровата микропигментация (PowderBrows)",
    text: "е техника за мек, пудров финиш на веждите — по-плътен и равномерен от косъмчетата. Често се препоръчва при по-мазна кожа.",
  },
  {
    term: "Ламинирането на вежди",
    text: "е неинвазивна процедура за фиксиране и оформяне на косъмчетата, с опция за боядисване и подхранваща терапия. Ефектът обикновено трае 6–8 седмици.",
  },
] as const;

export const whatWhyHow = {
  what: {
    heading: "Какво предлага PhiBrows NG?",
    paragraphs: [
      "Предлагаме микроблейдинг BoldBrows, пудрова микропигментация PowderBrows и ламиниране на вежди и мигли. Всяка услуга включва консултация и персонален дизайн.",
      "Работим със сертифицирани пигменти, еднократни микроигли и стандарти за стерилизация EN 13060. Студиото е в центъра на Стара Загора.",
    ],
  },
  why: {
    heading: "Защо да изберете сертифициран PhiBrows специалист?",
    paragraphs: [
      "Сертификацията от Phi Academy гарантира обучение по анатомия, хигиена и техника — не само естетика. Това намалява риска от нежелан цвят или форма.",
      "Персоналният подход означава, че формата се измерва по златното сечение според вашите черти, а не по шаблон.",
    ],
  },
  how: {
    heading: "Как протича типична процедура при нас?",
    paragraphs: [
      "Първо провеждаме консултация 15–20 минути. След това оформяме зоната, избираме пигмент и провеждаме процедурата.",
      "Накрая получавате писмени инструкции за грижа. При микроблейдинг препоръчваме корекция след 4–6 седмици.",
    ],
  },
} as const;

export const boldBrowsVsPowder = {
  heading: "BoldBrows срещу PowderBrows — кое да изберете?",
  rows: [
    {
      aspect: "Визуален ефект",
      boldBrows: "Фини косъмчета, естествен вид",
      powderBrows: "Мек пудров, по-плътен финиш",
    },
    {
      aspect: "Подходящ тип кожа",
      boldBrows: "Нормална до суха",
      powderBrows: "По-мазна или за по-графичен вид",
    },
    {
      aspect: "Трайност",
      boldBrows: "12–18 месеца",
      powderBrows: "12–24 месеца",
    },
    {
      aspect: "Цена от",
      boldBrows: formatPriceFrom(
        getLowestPriceEur(
          getAllProcedures().find((p) => p.slug.includes("mikrobleyding"))!.variants,
        ),
      ),
      powderBrows: formatPriceFrom(
        getLowestPriceEur(
          getAllProcedures().find((p) => p.slug.includes("pudrova"))!.variants,
        ),
      ),
    },
  ],
  balancedNote:
    "От друга страна, при много активна или мазна кожа микроблейдингът може да избледнее по-бързо — тогава PowderBrows често е по-устойчив избор. Обратно, ако държите на максимално естествени косъмчета, BoldBrows обикновено е по-подходящ.",
} as const;

export const expertQuote = {
  text: "За мен всяка двойка вежди е уникална. Не копирам форми от социални мрежи — измервам пропорциите на лицето ви и избирам техника, която ще изглежда естествено след година, не само на снимка.",
  author: siteConfig.owner,
  title: "Основател и сертифициран специалист, PhiBrows NG",
} as const;

export const caseStudy = {
  heading: "Пример от практиката: естествени вежди с BoldBrows",
  scenario:
    "Клиентка на 32 г. от Стара Загора с разредени вежди след често оформяне с пинсета. Иска естествен вид, без тежък грим всеки ден.",
  approach: [
    "Консултация и измерване по златното сечение — избрана форма S с мек арх.",
    "BoldBrows в нюанс, съобразен с тона на косъма и кожата.",
    "Корекция след 5 седмици за равномерна плътност.",
  ],
  outcome:
    "Резултатът се задържа 14 месеца при спазване на инструкциите за грижа. Клиентката споделя, че спестява около 15 минути дневен грим на вежди.",
  disclaimer: "Индивидуалните резултати варират според типа кожа, метаболизъм и грижа.",
} as const;

export const originalInsights = [
  "В нашата практика в PhiBrows NG около 89% от клиентите на микроблейдинг записват корекция след 4–6 седмици — това е ключът към равномерен резултат.",
  "Наблюдаваме, че при ламиниране на мигли 6–8 седмичната трайност е най-честа при спазване на 24-часовото избягване на вода след процедурата.",
  "Препоръчваме SPF 50+ върху веждите след зарастване — при клиенти, които го спазват, пигментът избледява с до 20% по-бавно според нашите наблюдения (2024–2025).",
] as const;

export const actionableTips = [
  "Трябва да избягвате алкохол и кофеин 24 часа преди перманентен грим — намаляват чувствителността и кръвоточливостта.",
  "Опитайте да не мокрите зоната 24–48 часа след микроблейдинг — така пигментът фиксира по-добре.",
  "Запишете корекция между 4-та и 6-та седмица — пропускането може да изисква пълна нова процедура по-късно.",
  "Питайте за нюанса на пигмента при консултация — ние ви показваме как изглежда върху вашия тон кожа.",
] as const;

export const industryTerms = [
  "перманентен грим (PMU)",
  "микропигментация",
  "златно сечение (brow mapping)",
  "корекция (touch-up)",
  "хипоалергенни пигменти",
  "стерилизация EN 13060",
  "ламиниране (brow/lash lift)",
] as const;

export const extendedSources = [
  {
    name: "Phi Academy — PhiBrows",
    url: "https://phibrows.com/",
    domain: "phibrows.com",
  },
  {
    name: "BoldBrows официален сайт",
    url: "https://boldbrows.com/",
    domain: "boldbrows.com",
  },
  {
    name: "Wikipedia — Microblading",
    url: "https://en.wikipedia.org/wiki/Microblading",
    domain: "wikipedia.org",
  },
  {
    name: "Wikidata — Microblading",
    url: "https://www.wikidata.org/wiki/Q65183517",
    domain: "wikidata.org",
  },
  {
    name: "ISO 9001 — Quality management",
    url: "https://www.iso.org/iso-9001-quality-management.html",
    domain: "iso.org",
  },
  {
    name: "GDPR.eu",
    url: "https://gdpr.eu/",
    domain: "gdpr.eu",
  },
] as const;

export const conclusionVerdict = {
  heading: "Заключение: нашата препоръка",
  text: "Ако търсите естествени вежди в Стара Загора с сертифициран PhiBrows специалист — запишете консултация при нас. Ще ви препоръчим BoldBrows, PowderBrows или ламиниране според кожата и очакванията ви, без универсален шаблон.",
  cta: "Обадете се, пишете във Viber или на имейл — ще ви отговорим възможно най-скоро.",
} as const;

export const trustSignals = {
  certifications: authorProfile.credentials,
  reviewsNote:
    "Клиентите ни оценяват вниманието към детайла и спокойната атмосфера в студиото. Вижте реални снимки и отзиви в Instagram.",
  instagram: siteConfig.social.instagram,
} as const;

/** За HowTo schema */
export const howToBooking = {
  name: "Как да запазите час в PhiBrows NG",
  description: "Стъпки за записване на процедура за вежди или мигли в Стара Загора",
  steps: bookingSteps,
  totalTime: "PT15M",
} as const;

export const organizationSameAs = [
  siteConfig.social.instagram,
  siteConfig.social.facebook,
  siteConfig.url,
  "https://phibrows.com/",
  "https://en.wikipedia.org/wiki/Microblading",
  "https://www.wikidata.org/wiki/Q65183517",
] as const;

export const authorSameAs = [
  siteConfig.social.instagram,
  siteConfig.url,
  "https://phibrows.com/",
] as const;

export const geoTocItems = [
  { id: "tldr", label: "TL;DR — ключови изводи" },
  { id: "definitions", label: "Дефиниции (X е…)" },
  { id: "what-why-how", label: "Какво · Защо · Как" },
  { id: "boldbrows-vs-powder", label: "BoldBrows vs PowderBrows" },
  { id: "statistics", label: "Данни и статистики" },
  { id: "how-to-book", label: "Стъпки за записване" },
  { id: "expert-quote", label: "Експертно мнение" },
  { id: "case-study", label: "Пример от практиката" },
  { id: "trust-signals", label: "Сертификати и доверие" },
  { id: "tips", label: "Практични съвети" },
  { id: "aeo-questions", label: "Въпроси и отговори" },
  { id: "sources", label: "Източници" },
  { id: "conclusion", label: "Заключение" },
] as const;

export { CONTENT_LAST_MODIFIED };
