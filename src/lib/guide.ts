import { siteConfig } from "./site";

/** Публичен URL на пълния GEO/AEO наръчник */
export const GUIDE_PATH = "/naruchnik" as const;

export const guideUrl = `${siteConfig.url}${GUIDE_PATH}`;

export const guideTitle = "Пълен наръчник за вежди и мигли";

export const guideMetaDescription =
  "Дефиниции, сравнения, стъпки и данни за микроблейдинг, PowderBrows и ламиниране в Стара Загора — PhiBrows NG.";
