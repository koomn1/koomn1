"use client"

const dictionary: Record<string, Record<string, string>> = {
  en: {
    cart: "Cart",
    checkout: "Checkout",
    total: "Total"
  },
  ar: {
    cart: "عربة التسوق",
    checkout: "إتمام الشراء",
    total: "الإجمالي"
  }
}

export function useTranslation() {
  const locale = "ar"
  const t = (key: string) => dictionary[locale][key] ?? key
  return { t, locale }
}