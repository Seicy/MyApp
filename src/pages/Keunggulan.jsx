import { Link } from 'react-router-dom'
import {
  BarChart3,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Users,
} from 'lucide-react'

import Navbar from '../components/Navbar.jsx'

const advantages = [
  {
    icon: Layers3,
    title: 'Sistem Terintegrasi',
    description:
      'Berbagai proses bisnis dapat dikelola dalam satu sistem sehingga alur kerja lebih terhubung.',
  },
  {
    icon: Database,
    title: 'Data Terpusat',
    description:
      'Informasi bisnis tersimpan dalam satu sistem sehingga lebih mudah dikelola dan dipantau.',
  },
  {
    icon: Gauge,
    title: 'Operasional Lebih Efisien',
    description:
      'Membantu mengurangi proses pencatatan yang berulang dan membuat pekerjaan lebih terorganisir.',
  },
  {
    icon: BarChart3,
    title: 'Monitoring Bisnis',
    description:
      'Informasi transaksi dan aktivitas bisnis dapat digunakan untuk membantu memantau kondisi operasional.',
  },
  {
    icon: ShieldCheck,
    title: 'Pengelolaan Data',
    description:
      'Data bisnis dikelola melalui sistem yang terstruktur sehingga lebih mudah diakses sesuai kebutuhan.',
  },
  {
    icon: Users,
    title: 'Mendukung Berbagai Bisnis',
    description:
      'Sistem dapat digunakan untuk mendukung kebutuhan operasional bisnis dengan skala dan kebutuhan yang berbeda.',
  },
]

const comparisons = [
  ['Data bisnis', 'Tersebar di berbagai tempat', 'Terpusat dalam satu sistem'],
  ['Proses operasional', 'Banyak dilakukan secara manual', 'Dikelola melalui sistem'],
  ['Monitoring', 'Membutuhkan pengecekan terpisah', 'Informasi lebih mudah dipantau'],
  ['Laporan', 'Perlu menggabungkan berbagai data', 'Data tersedia dalam sistem'],
]

export default function Keunggulan() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
              Keunggulan ERP
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Membantu bisnis bekerja lebih terintegrasi
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Sistem ERP membantu menghubungkan berbagai proses bisnis,
              mengelola data secara terpusat, dan memudahkan pemantauan
              aktivitas operasional.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-blue-600">
              Keunggulan Utama
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Satu sistem untuk berbagai kebutuhan bisnis
            </h2>

            <p className="mt-4 text-slate-600">
              Kelola aktivitas bisnis dengan sistem yang lebih terstruktur
              dan terintegrasi.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="h-6 w-6" />
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

      {/* Comparison */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-600">
              Perbandingan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Pengelolaan bisnis yang lebih terstruktur
            </h2>

            <p className="mt-4 text-slate-600">
              ERP membantu mengurangi kebutuhan untuk mengelola berbagai
              proses bisnis secara terpisah.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold">
              <span>Aspek</span>
              <span>Sebelum ERP</span>
              <span>Dengan ERP</span>
            </div>

            {comparisons.map(([aspect, before, after]) => (
              <div
                key={aspect}
                className="grid grid-cols-3 border-b border-slate-100 px-5 py-5 text-sm last:border-b-0"
              >
                <span className="font-semibold text-slate-900">
                  {aspect}
                </span>

                <span className="text-slate-500">{before}</span>

                <span className="font-medium text-blue-600">
                  {after}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              Modul Terintegrasi
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Berbagai kebutuhan bisnis dalam satu platform
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Sistem ERP dapat menghubungkan berbagai aktivitas bisnis
              sehingga data dari satu proses dapat mendukung proses lainnya.
            </p>

            <Link
              to="/produk"
              className="mt-7 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Lihat Produk
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              'Point Of Sale',
              'Payment',
              'Taking Order',
              'Manajemen Stok',
              'Akuntansi',
              'Laporan Bisnis',
            ].map((module, index) => (
              <div
                key={module}
                className="rounded-xl border border-slate-200 p-5"
              >
                <p className="text-sm font-semibold text-blue-600">
                  0{index + 1}
                </p>

                <p className="mt-2 font-semibold">{module}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-bold text-white">
            Kelola bisnis dalam satu sistem
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Mulai gunakan sistem ERP untuk membantu mengelola aktivitas
            bisnis dengan lebih terorganisir.
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