export const siteConfig = {
  name: "PhiBrows NG",
  owner: "Надежда Георгиева",
  legalName: "Надежда Георгиева",
  tagline: "Перфектни вежди, естествена красота",
  /** Meta description — до ~155 знака за Google */
  metaDescription:
    "PhiBrows NG в Стара Загора: микроблейдинг, пудрови вежди и ламиниране. Запишете час при Надежда Георгиева.",
  /** По-дълго описание за JSON-LD и llms.txt */
  description:
    "Сертифициран PhiBrows и BoldBrows специалист в Стара Загора — микроблейдинг, пудрова микропигментация, ламиниране на вежди и мигли. Запишете час при Надежда Георгиева.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://phibrowsng.com",
  locale: "bg_BG",
  language: "bg",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+359888037085",
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? "+359 88 803 7085",
  /** Само цифри с код на държавата — за Viber */
  viberNumber: process.env.NEXT_PUBLIC_VIBER_NUMBER ?? "359888037085",
  email: ["info@phibrowsng.com"],
  address: {
    street: 'ул. „Света Богородица" 65',
    city: "Стара Загора",
    postalCode: "6000",
    country: "България",
    countryCode: "BG",
  },
  geo: {
    latitude: 42.431,
    longitude: 25.6285,
  },
  openingHours: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    { days: ["Saturday"], opens: "10:00", closes: "17:00" },
  ],
  social: {
    instagram: "https://www.instagram.com/phibrowsng",
    facebook: "https://www.facebook.com/phibrowsng",
  },
  mapEmbedUrl:
    "https://maps.google.com/maps?q=%D1%83%D0%BB.+%D0%A1%D0%B2%D0%B5%D1%82%D0%B0+%D0%91%D0%BE%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%86%D0%B0+65,+%D0%A1%D1%82%D0%B0%D1%80%D0%B0+%D0%97%D0%B0%D0%B3%D0%BE%D1%80%D0%B0&t=&z=15&ie=UTF8&iwloc=&output=embed",
} as const;

export const navLinks = [
  { href: "/#proceduri", label: "Процедури" },
  { href: "/#benefits", label: "Предимства" },
  { href: "/#about", label: "За мен" },
  { href: "/#faq", label: "Въпроси" },
  { href: "/#contact", label: "Контакти" },
] as const;

export const benefits = [
  {
    title: "Сертифициран специалист",
    description:
      "Обучение и сертификация по методите PhiBrows, BoldBrows и PowderBrows с международно признание",
  },
  {
    title: "Естествен резултат",
    description:
      "Персонален подход и внимание към формата, цвета и особеностите на вашето лице",
  },
  {
    title: "Премиум продукти",
    description: "Работа с професионални пигменти и грижи от водещи световни марки",
  },
  {
    title: "Уютна атмосфера",
    description: "Комфортна обстановка в центъра на Стара Загора за вашата релаксация",
  },
] as const;

export const faqs = [
  {
    question: "Как да запазя час?",
    answer:
      "Обадете се на телефона, пишете във Viber (💜) или използвайте контактите в долната част на страницата.",
  },
  {
    question: "Колко време отнема микроблейдингът?",
    answer:
      "Първата процедура отнема 2–3 часа. Включва консултация и избор на форма и цвят.",
  },
  {
    question: "Има ли нужда от корекция?",
    answer:
      "Да. Препоръчвам корекция след 4–6 седмици. Така резултатът е по-перфектен и дълготраен.",
  },
  {
    question: "Колко държи ламинирането на мигли или вежди?",
    answer: "Ефектът обикновено се задържа между 6 и 8 седмици при правилна домашна грижа.",
  },
  {
    question: "Къде се намира студиото?",
    answer: `Студиото е в ${siteConfig.address.city}, ${siteConfig.address.street}.`,
  },
] as const;

export const heroImage =
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

export const heroImages = [
  {
    src: heroImage,
    alt: "Професионален грим и козметика — PhiBrows NG",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    alt: "Оформяне на вежди — микроблейдинг",
  },
  {
    src: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    alt: "Луксозен beauty студио",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    alt: "Процедури за красота и вежди",
  },
] as const;

export const aboutImage =
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
