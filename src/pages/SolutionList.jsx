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
    <div>
      <Navbar />

      <main className="bg-white">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
              <Link
                to="/"
                className="transition-colors hover:text-[#0c59a0]"
              >
                Beranda
              </Link>

              <span>/</span>

              <span className="font-medium text-slate-700">
                Semua Solusi
              </span>
            </div>

            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Solusi Bisnis
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Solusi untuk berbagai kebutuhan bisnis
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Temukan solusi yang sesuai dengan kebutuhan bisnis Anda untuk
                membantu mengelola operasional secara lebih terintegrasi.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2">
              {solutions.map((solution) => {
                const Icon = solution.icon

                return (
                  <Link
                    key={solution.path}
                    to={solution.path}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#0c59a0]/30 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0c59a0]/10 text-[#0c59a0]">
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
        <section className="bg-[#0c59a0]">  
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">
              Siap mengembangkan bisnis Anda?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Gunakan sistem yang membantu bisnis Anda bekerja lebih teratur,
              terintegrasi, dan efisien.
            </p>

            <Link
              to="/harga"
              className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#0c59a0] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0c59a0]/90 hover:shadow-md"
            >
              Mulai Sekarang

              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}