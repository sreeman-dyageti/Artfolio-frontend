export function currencyValue(price: string): number {
  return Number(price.replace(/[$,]/g, ""));
}