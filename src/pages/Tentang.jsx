import { Link } from 'react-router-dom'

import { CheckCircle2, Database, Layers3, Users } from 'lucide-react'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

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
              Tentang
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Satu sistem untuk membantu mengelola bisnis
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              ERP adalah sistem yang membantu bisnis mengelola berbagai
              proses operasional dalam satu platform yang terintegrasi.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">

          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Mengelola bisnis dalam satu sistem
            </h2>

            <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
              Enterprise Resource Planning (ERP) merupakan sistem yang
              digunakan untuk membantu mengelola berbagai aktivitas bisnis
              secara terintegrasi.
            </p>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Dengan ERP, proses seperti penjualan, pembayaran, pengelolaan
              stok, hingga pencatatan keuangan dapat dikelola melalui satu
              sistem sehingga informasi bisnis lebih mudah dipantau.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
            <div className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-800">

              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Sistem ERP
              </p>

              <div className="mt-5 space-y-3">
                {modules.map((module) => (
                  <div
                    key={module}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 dark:border-slate-700"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#0c59a0] dark:text-blue-400" />

                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {module}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="mx-auto max-w-2xl text-center">

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Membantu bisnis bekerja lebih terorganisir
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
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

      {/* FLOW */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-semibold text-[#0c59a0] dark:text-blue-400">
                Cara Kerja
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Data bisnis terhubung dalam satu alur
              </h2>

              <p className="mt-5 leading-7 text-slate-600 dark:text-slate-400">
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
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                >
                  <span className="text-sm font-semibold text-[#0c59a0] dark:text-blue-400">
                    0{index + 1}
                  </span>

                  <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Mulai kelola bisnis dengan lebih terorganisir
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Gunakan sistem ERP untuk membantu mengelola berbagai proses
            bisnis dalam satu platform.
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