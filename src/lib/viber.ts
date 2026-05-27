import { siteConfig } from "./site";

/** Нормализира номер до само цифри с код на държавата (без +) */
export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/**
 * Официален deep link за чат с телефонен номер.
 * @see https://developers.viber.com/docs/tools/deep-links/
 * Не ползвайте vb.me — на desktop често пренасочва към грешни viber.com URL-и.
 */
export function getViberChatUrl(phone = siteConfig.viberNumber): string {
  const digits = normalizePhoneDigits(phone);
  return `viber://chat?number=${digits}`;
}

/** За мобилни браузъри, където + понякога се изисква URL-encoded */
export function getViberChatUrlEncoded(phone = siteConfig.viberNumber): string {
  const digits = normalizePhoneDigits(phone);
  return `viber://chat?number=%2B${digits}`;
}
