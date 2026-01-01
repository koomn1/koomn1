"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Locale } from "./translations"

interface LanguageStore {
  locale: Locale
  setLocale: (locale: Locale) => void
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      locale: "ar", // Arabic as default
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "zoghdan-language",
    },
  ),
)
