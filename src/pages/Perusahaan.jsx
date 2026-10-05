import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const benefits = [
  {
    title: 'Operasional Terintegrasi',
    description:
      'Hubungkan berbagai aktivitas bisnis dalam satu sistem agar data lebih mudah dikelola dan dipantau.',
  },
  {
    title: 'Kelola Data Terpusat',
    description:
      'Simpan dan kelola informasi bisnis dalam satu tempat untuk membantu mengurangi pekerjaan yang berulang.',
  },
  {
    title: 'Laporan Lebih Terstruktur',
    description:
      'Gunakan data operasional untuk membantu perusahaan memantau aktivitas dan membuat laporan.',
  },
]

const modules = [
  'Penjualan',
  'Pembelian',
  'Inventory',
  'Customer',
  'Supplier',
  'Akuntansi',
]

export default function Perusahaan() {
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
                to="/solusi"
                className="transition-colors hover:text-white"
              >
                Solusi
              </Link>

              <span>/</span>

              <span className="font-medium text-white">
                Perusahaan
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* LEFT */}
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Solusi untuk Perusahaan
                </p>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Kelola bisnis perusahaan dalam{' '}
                  <span className="text-white">
                    satu sistem terintegrasi.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Bantu perusahaan mengelola operasional, data, dan proses bisnis
                  dengan sistem ERP yang terpusat.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/login">
                    <Button
                      variant="primary"
                      className="border-2 border-white bg-[#0c59a0] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0c59a0]/90 hover:shadow-md"
                    >
                      Mulai Sekarang
                    </Button>
                  </Link>

                  <Link
                    to="/produk"
                    className="inline-flex items-center rounded-lg border border-white/60 bg-white px-6 py-3 text-sm font-semibold text-[#0c59a0] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
                  >
                    Lihat Produk
                  </Link>
                </div>
              </div>

              {/* DASHBOARD PREVIEW */}
              <div className="min-w-0">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Enterprise Dashboard
                      </p>

                      <p className="text-xs text-slate-500">
                        Ringkasan operasional perusahaan
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      Online
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Penjualan
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        Rp248jt
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Pesanan
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        1.284
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Produk
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        2.450
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 rounded-xl border border-slate-200 p-4">

                    <p className="text-sm font-semibold text-slate-900">
                      Ringkasan Aktivitas
                    </p>

                    <div className="mt-3 space-y-3">
                      {[
                        ['Pesanan Baru', '128'],
                        ['Pembelian', 'Rp86jt'],
                        ['Stok Masuk', '450 item'],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                        >
                          <span className="text-sm text-slate-600">
                            {label}
                          </span>

                          <span className="text-sm font-semibold text-slate-900">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Untuk Perusahaan
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Sistem yang membantu mengelola bisnis lebih terstruktur
              </h2>

              <p className="mt-4 text-slate-600">
                Kelola berbagai aktivitas bisnis dengan data yang lebih
                terpusat dan mudah dipantau.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#0c59a0]">
                    ✓
                  </div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* BUSINESS PROCESS */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                  Proses Bisnis
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  Hubungkan aktivitas bisnis dalam satu alur
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Data dari berbagai aktivitas perusahaan dapat dikelola
                  melalui sistem yang terintegrasi sehingga proses bisnis
                  lebih mudah dipantau.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['01', 'Penjualan'],
                  ['02', 'Pembelian'],
                  ['03', 'Pengelolaan Stok'],
                  ['04', 'Laporan Bisnis'],
                ].map(([number, title]) => (
                  <div
                    key={number}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="text-sm font-bold text-[#0c59a0]">
                      {number}
                    </span>

                    <h3 className="mt-3 font-semibold text-slate-900">
                      {title}
                    </h3>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* MODULES */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Modul ERP
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Modul untuk mendukung kebutuhan perusahaan
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Gunakan berbagai modul untuk membantu mengelola proses bisnis
                perusahaan.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="font-semibold text-slate-900">
                    {module}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Kelola data dan aktivitas {module.toLowerCase()} dalam
                    satu sistem.
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

            <h2 className="text-3xl font-bold">
              Bangun operasional perusahaan yang lebih terintegrasi
            </h2>

            <p className="mt-3 text-blue-100">
              Gunakan sistem ERP untuk membantu perusahaan mengelola berbagai
              aktivitas bisnis dalam satu platform.
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

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}