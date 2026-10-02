import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

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
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-semibold text-blue-600">
                Solusi untuk Perusahaan
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Kelola bisnis perusahaan dalam{' '}
                <span className="text-blue-600">
                  satu sistem terintegrasi.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Bantu perusahaan mengelola operasional, data, dan proses bisnis
                dengan sistem ERP yang terpusat.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/login"
                  className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Mulai Sekarang
                </Link>

                <Link
                  to="/produk"
                  className="rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Lihat Produk
                </Link>
              </div>
            </div>

            {/* Dashboard Preview */}
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
                  <p className="text-xs text-slate-500">Penjualan</p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    Rp248jt
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Pesanan</p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    1.284
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Produk</p>

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
        </section>

        {/* Benefits */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-blue-600">
                Untuk Perusahaan
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
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
                  className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-600">
                    ✓
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
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

        {/* Business Process */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Proses Bisnis
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
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
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <span className="text-sm font-bold text-blue-600">
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

        {/* Modules */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">
                Modul ERP
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Modul untuk mendukung kebutuhan perusahaan
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Gunakan berbagai modul untuk membantu mengelola proses bisnis
                perusahaan.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">
                    {module}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Kelola data dan aktivitas {module.toLowerCase()} dalam
                    satu sistem.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">
              Bangun operasional perusahaan yang lebih terintegrasi
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Gunakan sistem ERP untuk membantu perusahaan mengelola berbagai
              aktivitas bisnis dalam satu platform.
            </p>

            <Link
              to="/login"
              className="mt-8 inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Mulai Sekarang
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6">
          <p className="text-sm text-slate-500">
            © 2026 ERP System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}