import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#021929]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-slate-400 sm:px-6 md:grid-cols-4">

        {/* Brand */}
        <div>
          <img
            src="/logo/Logo.png"
            alt="Logo"
            className="h-10 w-auto"
          />

          <p className="mt-3 text-lg font-medium text-white">
            Stay connect with us
          </p>

          <div className="mt-4 flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <img
                src="/logo/instagram.svg"
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <img
                src="/logo/facebook.svg"
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <img
                src="/logo/youtube.svg"
                alt="YouTube"
                className="h-5 w-5"
              />
            </a>

            <a
              href="#"
              aria-label="WhatsApp"
              className="transition-all duration-200 hover:-translate-y-0.5 hover:opacity-80"
            >
              <img
                src="/logo/whatsapp.svg"
                alt="WhatsApp"
                className="h-5 w-5"
              />
            </a>
          </div>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Product
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/produk"
              className="text-sm transition-colors hover:text-white"
            >
              Products
            </Link>

            <Link
              to="/inventory"
              className="text-sm transition-colors hover:text-white"
            >
              Inventory
            </Link>

            <Link
              to="/purchasing"
              className="text-sm transition-colors hover:text-white"
            >
              Purchasing
            </Link>

            <Link
              to="/reports"
              className="text-sm transition-colors hover:text-white"
            >
              Reports
            </Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/tentang"
              className="text-sm transition-colors hover:text-white"
            >
              About
            </Link>

            <Link
              to="/tentang/kontak"
              className="text-sm transition-colors hover:text-white"
            >
              Contact
            </Link>

            <Link
              to="/informasi/faq"
              className="text-sm transition-colors hover:text-white"
            >
              FAQ
            </Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Resources
          </h3>

          <div className="mt-4 flex flex-col gap-3">
            <Link
              to="/informasi/dokumentasi"
              className="text-sm transition-colors hover:text-white"
            >
              Documentation
            </Link>

            <Link
              to="/informasi/artikel"
              className="text-sm transition-colors hover:text-white"
            >
              Articles
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm sm:px-6 md:flex-row md:items-center md:justify-between">

          {/* Kiri */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-white">
            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Kebijakan Privasi
            </a>

            <a
              href="/syarat-ketentuan"
              className="transition-colors hover:text-white"
            >
              Syarat dan Ketentuan
            </a>

            <a
              href="#"
              className="transition-colors hover:text-white"
            >
              Pengaturan Cookie
            </a>
          </div>

          {/* Kanan */}
          <div className="text-left text-slate-500 md:text-right">
            <p>
              © 2024 Buka Nota. All Rights Reserved.
            </p>

            <p className="mt-1">
              BukaNota is a product of PT Meta Digital Informasi.
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}