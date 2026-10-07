import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'

import Dropdown from './Dropdown.jsx'
import Button from './Button.jsx'

import { useApp } from '../context/AppContext.jsx'
import { useSettings } from '../context/SettingsContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const { authed, logout } = useApp()
  const { language, setLanguage, theme, setTheme } = useSettings()

  const products = [
    {
      label: 'Point Of Sale',
      path: '/produk/pos',
    },
    {
      label: 'Payment',
      path: '/produk/payment',
    },
    {
      label: 'Taking Order',
      path: '/produk/taking-order',
    },
    {
      label:
        language === 'id'
          ? 'Manajemen Stok'
          : 'Inventory Management',
      path: '/produk/manajemen-stok',
    },
    {
      label:
        language === 'id'
          ? 'Akuntansi'
          : 'Accounting',
      path: '/produk/akuntansi',
    },
    {
      label:
        language === 'id'
          ? 'Semua Produk'
          : 'All Products',
      path: '/produk',
      divider: true,
    },
  ]

  const menus = {
    [language === 'id' ? 'Produk' : 'Products']: products,

    [language === 'id' ? 'Solusi' : 'Solutions']: [
      {
        label: 'UMKM',
        path: '/solusi/umkm',
      },
      {
        label: 'Retail & F&B',
        path: '/solusi/retail-fnb',
      },
      {
        label:
          language === 'id'
            ? 'Perusahaan'
            : 'Companies',
        path: '/solusi/perusahaan',
      },
      {
        label:
          language === 'id'
            ? 'Multi-Cabang'
            : 'Multi-Branch',
        path: '/solusi/multi-cabang',
      },
      {
        label:
          language === 'id'
            ? 'Semua Solusi'
            : 'All Solutions',
        path: '/solusi',
        divider: true,
      },
    ],

    [language === 'id' ? 'Informasi' : 'Information']: [
      {
        label:
          language === 'id'
            ? 'Artikel'
            : 'Articles',
        path: '/informasi/artikel',
      },
      {
        label:
          language === 'id'
            ? 'Tutorial'
            : 'Tutorials',
        path: '/informasi/tutorial',
      },
      {
        label: 'FAQ',
        path: '/informasi/faq',
      },
      {
        label:
          language === 'id'
            ? 'Dokumentasi'
            : 'Documentation',
        path: '/informasi/dokumentasi',
      },
    ],

    [language === 'id' ? 'Tentang' : 'About']: [
      {
        label:
          language === 'id'
            ? 'Tentang ERP'
            : 'About ERP',
        path: '/tentang',
      },
      {
        label:
          language === 'id'
            ? 'Keunggulan'
            : 'Advantages',
        path: '/tentang/keunggulan',
      },
      {
        label:
          language === 'id'
            ? 'Kontak'
            : 'Contact',
        path: '/tentang/kontak',
      },
    ],
  }

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
            alt="My App"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {Object.entries(menus).map(([label, items]) => (
            <Dropdown
              key={label}
              label={label}
              items={items}
            />
          ))}

          <Link
            to="/harga"
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {language === 'id' ? 'Harga' : 'Pricing'}
          </Link>
        </nav>

        {/* Desktop Controls */}
        <div className="hidden items-center gap-2 lg:flex">

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

          {/* Login */}
          <Link to="/login">
            <Button variant="secondary">
              {language === 'id' ? 'Masuk' : 'Login'}
            </Button>
          </Link>

          {/* Get Started */}
          <Link to="/harga">
            <Button className="bg-[#f8481c] hover:bg-[#f8481c]/90 text-white">
              {language === 'id'
                ? 'Mulai Sekarang'
                : 'Get Started'}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-slate-700 dark:text-slate-300 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">

          {Object.entries(menus).map(([label, items]) => (
            <details
              key={label}
              className="border-b border-slate-100 py-2 dark:border-slate-800"
            >
              <summary className="cursor-pointer py-1 font-medium text-slate-800 dark:text-slate-200">
                {label}
              </summary>

              <div className="pl-3">
                {items.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block py-1.5 text-sm ${
                      item.divider
                        ? 'mt-2 border-t border-slate-200 pt-3 font-semibold text-slate-800 dark:border-slate-700 dark:text-slate-200'
                        : 'text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          ))}

          {/* Harga */}
          <Link
            to="/harga"
            onClick={() => setOpen(false)}
            className="block py-3 font-medium text-slate-800 dark:text-slate-200"
          >
            {language === 'id' ? 'Harga' : 'Pricing'}
          </Link>

          {/* Mobile Settings */}
          <div className="flex items-center gap-2 border-t border-slate-200 py-4 dark:border-slate-800">

            {/* Language */}
            <div className="flex rounded-lg border border-slate-200 p-1 dark:border-slate-700">
              <button
                onClick={() => setLanguage('id')}
                className={`rounded-md px-3 py-1 text-xs font-semibold ${
                  language === 'id'
                    ? 'bg-[#0c59a0] text-white'
                    : 'text-slate-500'
                }`}
              >
                ID
              </button>

              <button
                onClick={() => setLanguage('en')}
                className={`rounded-md px-3 py-1 text-xs font-semibold ${
                  language === 'en'
                    ? 'bg-[#0c59a0] text-white'
                    : 'text-slate-500'
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
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile Buttons */}
          <div className="flex gap-2">

            {/* Login */}
            <Link
              to="/login"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              <Button
                variant="secondary"
                className="w-full dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                {language === 'id' ? 'Masuk' : 'Login'}
              </Button>
            </Link>

            {/* Get Started */}
            <Link
              to="/harga"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              <Button className="w-full bg-[#f8481c] hover:bg-[#f8481c]/90 text-white">
                {language === 'id'
                  ? 'Mulai Sekarang'
                  : 'Get Started'}
              </Button>
            </Link>

          </div>
        </div>
      )}
    </header>
  )
}