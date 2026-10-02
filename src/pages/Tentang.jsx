import { Link } from 'react-router-dom'
import { CheckCircle2, Database, Layers3, Users } from 'lucide-react'

import Navbar from '../components/Navbar.jsx'

const values = [
  {
    icon: Layers3,
    title: 'Sistem Terintegrasi',
    description:
      'Menghubungkan berbagai proses bisnis dalam satu sistem agar data lebih mudah dikelola.',
  },
  {
    icon: Database,
    title: 'Data Terpusat',
    description:
      'Membantu bisnis menyimpan dan mengelola informasi operasional dalam satu tempat.',
  },
  {
    icon: Users,
    title: 'Mudah Digunakan',
    description:
      'Dirancang dengan tampilan yang sederhana agar dapat digunakan oleh berbagai pengguna.',
  },
]

const modules = [
  'Point Of Sale',
  'Payment',
  'Taking Order',
  'Manajemen Stok',
  'Akuntansi',
]

export default function Tentang() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Tentang ERP
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Satu sistem untuk membantu mengelola bisnis
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ERP adalah sistem yang membantu bisnis mengelola berbagai
              proses operasional dalam satu platform yang terintegrasi.
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Mengenal ERP
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Mengelola bisnis dalam satu sistem
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Enterprise Resource Planning (ERP) merupakan sistem yang
              digunakan untuk membantu mengelola berbagai aktivitas bisnis
              secara terintegrasi.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Dengan ERP, proses seperti penjualan, pembayaran, pengelolaan
              stok, hingga pencatatan keuangan dapat dikelola melalui satu
              sistem sehingga informasi bisnis lebih mudah dipantau.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500">
                Sistem ERP
              </p>

              <div className="mt-5 space-y-3">
                {modules.map((module) => (
                  <div
                    key={module}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium">
                      {module}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-blue-600">
              Mengapa Menggunakan ERP
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Membantu bisnis bekerja lebih terorganisir
            </h2>

            <p className="mt-4 text-slate-600">
              Sistem ERP membantu menghubungkan berbagai aktivitas bisnis
              sehingga proses operasional dapat dikelola dengan lebih mudah.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                Cara Kerja
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                Data bisnis terhubung dalam satu alur
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Setiap modul dapat digunakan untuk mendukung proses bisnis
                yang berbeda. Data dari aktivitas tersebut dapat dikelola
                melalui sistem yang sama.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                'Penjualan',
                'Pembayaran',
                'Pengelolaan Stok',
                'Pencatatan Keuangan',
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 p-5"
                >
                  <span className="text-sm font-semibold text-blue-600">
                    0{index + 1}
                  </span>

                  <p className="mt-2 font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Mulai kelola bisnis dengan lebih terorganisir
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Gunakan sistem ERP untuk membantu mengelola berbagai proses
            bisnis dalam satu platform.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            Mulai Sekarang
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