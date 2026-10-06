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
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

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
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">

          {/* BREADCRUMB */}
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Beranda
            </Link>

            <span>/</span>

            <span className="font-medium text-white">
              Keunggulan
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Membantu bisnis bekerja lebih terintegrasi
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Sistem ERP membantu menghubungkan berbagai proses bisnis,
              mengelola data secara terpusat, dan memudahkan pemantauan
              aktivitas operasional.
            </p>
          </div>

        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mx-auto max-w-2xl text-center">

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Satu sistem untuk berbagai kebutuhan bisnis
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
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
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="max-w-2xl">

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Pengelolaan bisnis yang lebih terstruktur
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              ERP membantu mengurangi kebutuhan untuk mengelola berbagai
              proses bisnis secara terpisah.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
            <div className="min-w-[640px]">

              {/* HEADER */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                <span>Aspek</span>
                <span>Sebelum ERP</span>
                <span>Dengan ERP</span>
              </div>

              {/* ROWS */}
              {comparisons.map(([aspect, before, after]) => (
                <div
                  key={aspect}
                  className="grid grid-cols-3 border-b border-slate-100 px-5 py-5 text-sm last:border-b-0 dark:border-slate-800"
                >
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {aspect}
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    {before}
                  </span>

                  <span className="font-medium text-[#0c59a0] dark:text-blue-400">
                    {after}
                  </span>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      {/* MODULES */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Berbagai kebutuhan bisnis dalam satu platform
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Sistem ERP dapat menghubungkan berbagai aktivitas bisnis
              sehingga data dari satu proses dapat mendukung proses lainnya.
            </p>

            <Link
              to="/produk"
              className="mt-7 inline-flex rounded-lg bg-[#0c59a0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c59a0]/90"
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
                className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
              >
                <p className="text-sm font-semibold text-[#0c59a0] dark:text-blue-400">
                  0{index + 1}
                </p>

                <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                  {module}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Kelola bisnis dalam satu sistem
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Mulai gunakan sistem ERP untuk membantu mengelola aktivitas
            bisnis dengan lebih terorganisir.
          </p>

          <Link to="/login">
            <Button
              variant="secondary"
              className="mt-6 px-6 py-3"
            >
              Mulai Sekarang
            </Button>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}