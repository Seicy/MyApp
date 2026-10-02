import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import Navbar from '../components/Navbar.jsx'

export default function Kontak() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Kontak
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Hubungi kami
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Punya pertanyaan mengenai sistem ERP? Kirimkan pesan melalui
              formulir dan kami akan membantu memberikan informasi yang
              dibutuhkan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Informasi Kontak
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Mari terhubung dengan kami
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600">
              Gunakan informasi kontak berikut atau kirimkan pertanyaan
              melalui formulir yang tersedia.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-sm text-slate-500">
                    info@erp-system.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Telepon</p>
                  <p className="mt-1 text-sm text-slate-500">
                    +62 812 0000 0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold">Alamat</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold">
              Kirim Pesan
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Isi formulir berikut untuk mengirimkan pertanyaan.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="font-semibold text-emerald-700">
                  Pesan berhasil dikirim.
                </p>

                <p className="mt-1 text-sm text-emerald-600">
                  Terima kasih telah menghubungi kami.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-emerald-700 hover:underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Nama
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subjek
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Subjek pesan"
                    className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Pesan
                  </label>

                  <textarea
                    required
                    rows="5"
                    placeholder="Tulis pesan Anda..."
                    className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold">
            Masih punya pertanyaan?
          </h2>

          <p className="mt-3 text-slate-600">
            Lihat halaman FAQ untuk menemukan jawaban atas pertanyaan
            yang sering ditanyakan.
          </p>

          <Link
            to="/informasi/faq"
            className="mt-6 inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Lihat FAQ
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <span className="rounded-lg bg-blue-600 px-2 py-0.5 text-white">
                E
              </span>
              qwerty
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sistem ERP untuk membantu mengelola bisnis secara lebih
              terintegrasi.
            </p>
          </div>

          {[
            [
              'Product',
              [
                { label: 'Products', path: '/produk' },
                { label: 'Inventory', path: '/inventory' },
                { label: 'Purchasing', path: '/purchase-orders' },
                { label: 'Reports', path: '/reports' },
              ],
            ],
            [
              'Company',
              [
                { label: 'About', path: '/tentang' },
                { label: 'Contact', path: '/tentang/kontak' },
                { label: 'FAQ', path: '/informasi/faq' },
              ],
            ],
            [
              'Resources',
              [
                {
                  label: 'Documentation',
                  path: '/informasi/dokumentasi',
                },
                {
                  label: 'Articles',
                  path: '/informasi/artikel',
                },
              ],
            ],
          ].map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-3 font-semibold">{heading}</p>

              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-1 text-sm text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <p className="border-t border-slate-100 py-5 text-center text-sm text-slate-500">
          © 2026 ERP System. All rights reserved.
        </p>
      </footer>
    </div>
  )
}