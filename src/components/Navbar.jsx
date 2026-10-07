import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import { useSettings } from '../context/SettingsContext.jsx'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useSettings()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? 'border-slate-200 bg-white/90 shadow-md dark:border-slate-800 dark:bg-slate-950/90'
          : 'border-transparent bg-white/95 dark:bg-slate-950/95'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/logo/Logo.png"
            alt="BukaNota"
            className={`w-auto object-contain transition-all duration-300 ${
              scrolled ? 'h-10' : 'h-12'
            }`}
          />
        </Link>

        <div className="flex items-center gap-2">
          <div className="flex items-center rounded-lg border border-slate-200 p-1 dark:border-slate-700">
            <button
              onClick={() => setLanguage('id')}
              className={`rounded-md px-2 py-1 text-xs font-semibold ${
                language === 'id'
                  ? 'bg-[#0c59a0] text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              ID
            </button>

            <button
              onClick={() => setLanguage('en')}
              className={`rounded-md px-2 py-1 text-xs font-semibold ${
                language === 'en'
                  ? 'bg-[#0c59a0] text-white'
                  : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() =>
              setTheme(theme === 'light' ? 'dark' : 'light')
            }
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}