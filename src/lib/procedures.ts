import { formatLowestPrice } from "./currency";

export type PriceVariant = {
  name: string;
  /** Основна цена в евро */
  priceEur: number;
  note?: string;
};

export type ProcedureImage = {
  src: string;
  alt: string;
};

export type Procedure = {
  slug: string;
  name: string;
  brand?: string;
  shortDescription: string;
  description: string[];
  duration?: string;
  highlights: string[];
  variants: PriceVariant[];
  images: ProcedureImage[];
  cardImage: string;
  cardImageAlt: string;
};

/** Цените са примерни — актуализирайте според ценоразписа на Надежда */
export const procedures: Procedure[] = [
  {
    slug: "mikrobleyding-boldbrows",
    name: "Микроблейдинг",
    brand: "BoldBrows",
    shortDescription:
      "Ръчна техника за естествени, фини косъмчета с метод BoldBrows — перфектна форма и плътност.",
    description: [
      "Микроблейдингът (BoldBrows) е техника за полуперманентен грим на вежди, при която с микроигла се създават фини линии, имитиращи естествени косъмчета.",
      "Процедурата е подходяща за възстановяване на плътност, коригиране на формата и постигане на естествен, свеж вид без ефект на „нарисани“ вежди.",
      "Преди процедурата се провежда детайлна консултация — измерване по златното сечение, избор на форма и нюанс според типа кожа и личните предпочитания.",
      "Резултатът се задържа между 12 и 18 месеца при правилна грижа и препоръчителна корекция след 4–6 седмици.",
    ],
    duration: "2–3 часа (първа процедура)",
    highlights: [
      "Метод BoldBrows",
      "Естествен ефект на косъмчета",
      "Персонален дизайн на формата",
      "Корекция след 4–6 седмици",
    ],
    variants: [
      { name: "Първа процедура", priceEur: 143 },
      { name: "Корекция (след 4–6 седмици)", priceEur: 61 },
      { name: "Поддръжка / ретуш", priceEur: 92, note: "след изтичане на пигмента" },
    ],
    cardImage:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    cardImageAlt: "Микроблейдинг BoldBrows — естествени вежди",
    images: [
      {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Микроблейдинг BoldBrows — преди и след",
      },
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Детайл на естествени косъмчета при микроблейдинг",
      },
      {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Професионална процедура за вежди",
      },
    ],
  },
  {
    slug: "pudrova-mikropigmentatsiya-powderbrows",
    name: "Пудрова микропигментация",
    brand: "PowderBrows",
    shortDescription:
      "Мек пудров ефект с техника PowderBrows — плътност, мекота и перфектно запълване.",
    description: [
      "Пудровата микропигментация (PowderBrows) създава ефект на фин пудров грим — мек, равномерен и елегантен вид на веждите.",
      "Техниката е отличен избор за по-мазна кожа или за клиенти, които предпочитат по-плътен и графичен резултат в сравнение с микроблейдинга.",
      "Пигментът се нанася на няколко слоя за постигане на дълбочина и нюанс, съобразен с естествения цвят на косъма и кожата.",
      "Трайността е между 12 и 24 месеца в зависимост от типа кожа, грижите и излагането на слънце.",
    ],
    duration: "2–3 часа (първа процедура)",
    highlights: [
      "Метод PowderBrows",
      "Мек пудров финиш",
      "Подходящ за по-мазна кожа",
      "Дълготраен цвят",
    ],
    variants: [
      { name: "Първа процедура", priceEur: 153 },
      { name: "Корекция (след 4–6 седмици)", priceEur: 66 },
      { name: "Поддръжка / ретуш", priceEur: 102 },
    ],
    cardImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    cardImageAlt: "Пудрова микропигментация PowderBrows",
    images: [
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Пудрова микропигментация PowderBrows",
      },
      {
        src: "https://images.unsplash.com/photo-1596704017256-9b0119e1a48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Пудров ефект на вежди",
      },
      {
        src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Професионално оформяне на вежди",
      },
    ],
  },
  {
    slug: "laminirane-vezhdi",
    name: "Ламиниране, боядисване и подхранваща терапия",
    brand: "Вежди",
    shortDescription:
      "Фиксиране, оформяне и подхранване на вежди — с опция за професионално боядисване.",
    description: [
      "Ламинирането на вежди оформя и фиксира косъмчетата в желаната посока, създавайки по-пълен и подреден вид.",
      "Подхранващата терапия възстановява и укрепва косъма, а при избор на комбиниран вариант се добавя и професионално боядисване за по-изразен и гъст вид.",
      "Процедурата е подходяща за клиенти, които искат дисциплинирани, грижовно оформени вежди без ежедневна работа с гел или сапун.",
      "Ефектът се задържа около 6–8 седмици при спазване на препоръките за домашна грижа.",
    ],
    duration: "45–75 мин",
    highlights: [
      "Оформяне и фиксиране",
      "Подхранваща терапия",
      "Опция за боядисване",
      "Ефект 6–8 седмици",
    ],
    variants: [
      {
        name: "Ламиниране + подхранваща терапия",
        priceEur: 28,
        note: "без боядисване",
      },
      {
        name: "Ламиниране + подхранваща терапия + боядисване",
        priceEur: 38,
        note: "пълен пакет",
      },
    ],
    cardImage:
      "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    cardImageAlt: "Ламиниране и оформяне на вежди",
    images: [
      {
        src: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Ламиниране на вежди",
      },
      {
        src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Оформени и подхранени вежди",
      },
      {
        src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Професионална грижа за вежди",
      },
    ],
  },
  {
    slug: "laminirane-migli",
    name: "Ламиниране, боядисване и подхранваща терапия",
    brand: "Мигли",
    shortDescription:
      "Извит, подхранен и визуално по-гъст поглед — с или без боядисване на мигли.",
    description: [
      "Ламинирането на мигли придава красив извив, фиксира косъмчетата и създава оптично по-дълъг и изразителен поглед.",
      "Подхранващата терапия укрепва естествените мигли, а боядисването добавя дълбочина и контраст — идеално за клиенти със светли или по-редки мигли.",
      "Процедурата е нежна, бърза и не изисква поддръжка на ежедневна основа с кърли или туш.",
      "Резултатът обикновено се задържа между 6 и 8 седмици.",
    ],
    duration: "45–75 мин",
    highlights: [
      "Естествен извив",
      "Подхранваща терапия",
      "Опция за боядисване",
      "Без ежедневен туш",
    ],
    variants: [
      {
        name: "Ламиниране + подхранваща терапия",
        priceEur: 31,
        note: "без боядисване",
      },
      {
        name: "Ламиниране + подхранваща терапия + боядисване",
        priceEur: 41,
        note: "пълен пакет",
      },
    ],
    cardImage:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    cardImageAlt: "Ламиниране на мигли",
    images: [
      {
        src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Ламиниране на мигли",
      },
      {
        src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Изразителен поглед след ламиниране",
      },
      {
        src: "https://images.unsplash.com/photo-1596704017256-9b0119e1a48b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
        alt: "Професионална грижа за мигли",
      },
    ],
  },
];

export function getAllProcedures(): Procedure[] {
  return procedures;
}

export function getProcedureBySlug(slug: string): Procedure | undefined {
  return procedures.find((p) => p.slug === slug);
}

export function getProcedureCardTitle(procedure: Procedure): string {
  if (procedure.brand === "Вежди" || procedure.brand === "Мигли") {
    return `${procedure.name} — ${procedure.brand}`;
  }
  return procedure.brand ? `${procedure.name} (${procedure.brand})` : procedure.name;
}

export function getLowestPrice(procedure: Procedure): string {
  return formatLowestPrice(procedure.variants);
}
