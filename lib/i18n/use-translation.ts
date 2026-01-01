"use client"

import { useLanguage } from "./use-language"
import { translations } from "./translations"

export function useTranslation() {
  const { locale, setLocale } = useLanguage()
  const t = translations[locale]
  const isRTL = locale === "ar"

  return {
    t,
    locale,
    setLocale,
    isRTL,
    dir: isRTL ? "rtl" : "ltr",
  }
}
