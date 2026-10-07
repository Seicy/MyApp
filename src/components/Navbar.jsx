import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'

import { useSettings } from '../context/SettingsContext.jsx'

export default function Navbar() {
  const { language, setLanguage, theme, setTheme } = useSettings()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src="/logo/Logo.png"
            alt="BukaNota"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Controls */}
        <div className="flex items-center gap-2">

          {/* Language */}
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

          {/* Theme */}
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