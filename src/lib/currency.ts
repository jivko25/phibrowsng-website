/**
 * Режим на показване на цени (env: NEXT_PUBLIC_CURRENCY_DISPLAY):
 * - euro-only  — само евро (по подразбиране)
 * - euro-bgn   — евро и лева
 * - bgn-only   — само лева (изчислени по курса)
 */

export type CurrencyDisplayMode = "euro-only" | "euro-bgn" | "bgn-only";

const VALID_MODES: CurrencyDisplayMode[] = ["euro-only", "euro-bgn", "bgn-only"];

/** Фиксиран курс EUR → BGN (официален валутен борд) */
export function getEurBgnRate(): number {
  const rate = Number.parseFloat(process.env.NEXT_PUBLIC_EUR_BGN_RATE ?? "1.95583");
  return Number.isFinite(rate) && rate > 0 ? rate : 1.95583;
}

export function getCurrencyDisplayMode(): CurrencyDisplayMode {
  const raw = (process.env.NEXT_PUBLIC_CURRENCY_DISPLAY ?? "euro-only").toLowerCase();
  if (VALID_MODES.includes(raw as CurrencyDisplayMode)) {
    return raw as CurrencyDisplayMode;
  }
  return "euro-only";
}

export function eurToBgn(eur: number): number {
  return Math.round(eur * getEurBgnRate());
}

function formatEur(amount: number): string {
  return `${amount} €`;
}

function formatBgn(amount: number): string {
  return `${eurToBgn(amount)} лв`;
}

/** Форматира цена в евро според env настройката */
export function formatPrice(eur: number): string {
  const mode = getCurrencyDisplayMode();

  switch (mode) {
    case "bgn-only":
      return formatBgn(eur);
    case "euro-bgn":
      return `${formatEur(eur)} / ${formatBgn(eur)}`;
    case "euro-only":
    default:
      return formatEur(eur);
  }
}

/** „от X €“ (или съответният режим) */
export function formatPriceFrom(eur: number): string {
  return `от ${formatPrice(eur)}`;
}

export function getLowestPriceEur(variants: { priceEur: number }[]): number {
  if (variants.length === 0) return 0;
  return Math.min(...variants.map((v) => v.priceEur));
}

export function formatLowestPrice(variants: { priceEur: number }[]): string {
  return formatPriceFrom(getLowestPriceEur(variants));
}
