"use client"

import { createContext, useContext, useState, useEffect } from "react"

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

const getCookieValue = (name) => {
  if (typeof document === "undefined") return null
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(";").shift()
  return null
}

const setCookie = (name, value, days = 365) => {
  if (typeof document === "undefined") return
  const expires = new Date()
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`
}

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("fr") // Français par défaut

  useEffect(() => {
    const savedLanguage = getCookieValue("egeria-language")
    if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const switchLanguage = (lang) => {
    setCurrentLanguage(lang)
    setCookie("egeria-language", lang) // Sauvegarde dans les cookies
  }

  const toggleLanguage = () => {
    const newLang = currentLanguage === "fr" ? "en" : "fr"
    setCurrentLanguage(newLang)
    setCookie("egeria-language", newLang) // Sauvegarde dans les cookies
  }

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        switchLanguage,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}
