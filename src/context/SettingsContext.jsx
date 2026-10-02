import { createContext, useContext, useEffect, useState } from 'react'

const SettingsContext = createContext(null)

export function SettingsProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('language') || 'id'
  )

  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  useEffect(() => {
    localStorage.setItem('theme', theme)

    document.documentElement.classList.toggle(
      'dark',
      theme === 'dark'
    )
  }, [theme])

  return (
    <SettingsContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
      }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

export function useSettings() {
  const context = useContext(SettingsContext)

  if (!context) {
    throw new Error(
      'useSettings harus digunakan di dalam SettingsProvider'
    )
  }

  return context
}