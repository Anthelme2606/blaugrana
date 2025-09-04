"use client"

import { useLanguage } from "@contexts/language.context"
import { translations } from "@utils/translations"

export const useTranslation = () => {
  const { currentLanguage } = useLanguage()

  const t = (key) => {
    return translations[currentLanguage][key] || key
  }

  return { t, currentLanguage }
}
