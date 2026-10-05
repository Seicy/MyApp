import { Link } from 'react-router-dom'

import {
  Store,
  UtensilsCrossed,
  Building2,
  Network,
  ArrowRight,
} from 'lucide-react'

import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'

const solutions = [
  {
    icon: Store,
    title: 'UMKM',
    description:
      'Kelola operasional bisnis dengan lebih mudah, mulai dari penjualan, stok, hingga laporan.',
    path: '/solusi/umkm',
  },
  {
    icon: UtensilsCrossed,
    title: 'Retail & F&B',
    description:
      'Bantu bisnis retail dan food & beverage mengelola penjualan, persediaan, dan operasional.',
    path: '/solusi/retail-fnb',
  },
  {
    icon: Building2,
    title: 'Perusahaan',
    description:
      'Satukan proses bisnis dan data perusahaan dalam satu sistem yang terintegrasi.',
    path: '/solusi/perusahaan',
  },
  {
    icon: Network,
    title: 'Multi Cabang',
    description:
      'Pantau dan kelola berbagai cabang bisnis dari satu sistem secara lebih terpusat.',
    path: '/solusi/multi-cabang',
  },
]

export default function SolutionList() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="bg-[#005a9e]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">

            {/* BREADCRUMB */}
            <div className="mb-10 flex items-center gap-2 text-sm text-white/80">
              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Beranda
              </Link>

              <span>/</span>

              <span className="font-medium text-white">
                Semua Solusi
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Solusi Bisnis
              </p>

              <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Solusi untuk berbagai kebutuhan bisnis
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
                Temukan solusi yang sesuai dengan kebutuhan bisnis Anda untuk
                membantu mengelola operasional secara lebih terintegrasi.
              </p>
            </div>

          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon

                return (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0c59a0]/30 hover:shadow-md"
                  >
                    <div className="flex items-start gap-5">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-slate-900">
                          {solution.title}
                        </h2>

                        <p className="mt-2 leading-7 text-slate-600">
                          {solution.description}
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0c59a0]">
                          Pelajari lebih lanjut

                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>

                    </div>
                  </Link>
                )
              })}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

            <h2 className="text-3xl font-bold">
              Siap mengembangkan bisnis Anda?
            </h2>

            <p className="mt-3 text-blue-100">
              Gunakan sistem yang membantu bisnis Anda bekerja lebih teratur,
              terintegrasi, dan efisien.
            </p>

            <Link to="/harga">
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#0c59a0] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
              >
                Mulai Sekarang
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}