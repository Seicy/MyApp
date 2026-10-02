import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const benefits = [
  {
    title: 'Kelola Banyak Cabang',
    description:
      'Pantau aktivitas setiap cabang melalui satu sistem tanpa harus berpindah platform.',
  },
  {
    title: 'Data Lebih Terpusat',
    description:
      'Kelola informasi penjualan, stok, dan operasional dari berbagai cabang dalam satu tempat.',
  },
  {
    title: 'Pantau Performa Cabang',
    description:
      'Bandingkan aktivitas dan hasil operasional setiap cabang untuk membantu proses pemantauan bisnis.',
  },
]

const features = [
  ['01', 'Manajemen Cabang'],
  ['02', 'Penjualan'],
  ['03', 'Inventory'],
  ['04', 'Pembelian'],
  ['05', 'Laporan'],
  ['06', 'Akuntansi'],
]

export default function MultiCabang() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-semibold text-blue-600">
                Solusi Multi-Cabang
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Kelola banyak cabang dari{' '}
                <span className="text-blue-600">
                  satu sistem.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Pantau penjualan, stok, pembelian, dan aktivitas operasional
                dari berbagai cabang dalam satu platform ERP.
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
                    Branch Dashboard
                  </p>

                  <p className="text-xs text-slate-500">
                    Ringkasan seluruh cabang
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  4 Cabang
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Total Penjualan
                  </p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    Rp426jt
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Total Transaksi
                  </p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    2.846
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">
                    Total Cabang
                  </p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    4
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Performa Cabang
                </p>

                <div className="mt-3 space-y-3">
                  {[
                    ['Cabang Batam', 'Rp142jt'],
                    ['Cabang Jakarta', 'Rp128jt'],
                    ['Cabang Bandung', 'Rp96jt'],
                    ['Cabang Medan', 'Rp60jt'],
                  ].map(([branch, value]) => (
                    <div
                      key={branch}
                      className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-slate-600">
                        {branch}
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
                Untuk Bisnis Multi-Cabang
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Satu sistem untuk berbagai lokasi bisnis
              </h2>

              <p className="mt-4 text-slate-600">
                Kelola dan pantau aktivitas dari setiap cabang melalui sistem
                yang terpusat.
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

        {/* Branch Management */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Manajemen Cabang
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Pantau setiap cabang tanpa kehilangan kendali
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Setiap cabang dapat dikelola dalam satu sistem dengan data
                  yang tetap terorganisir. Pantau aktivitas bisnis berdasarkan
                  lokasi dan lihat informasi operasional secara lebih mudah.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {features.map(([number, title]) => (
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

        {/* Comparison */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">
                Terpusat
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Informasi cabang dalam satu dashboard
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Lihat informasi berbagai cabang tanpa perlu menggunakan
                sistem yang berbeda untuk setiap lokasi.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold">
                <span>Cabang</span>
                <span>Transaksi</span>
                <span>Penjualan</span>
              </div>

              {[
                ['Batam', '842', 'Rp142jt'],
                ['Jakarta', '716', 'Rp128jt'],
                ['Bandung', '624', 'Rp96jt'],
                ['Medan', '664', 'Rp60jt'],
              ].map(([branch, transactions, sales]) => (
                <div
                  key={branch}
                  className="grid grid-cols-3 border-b border-slate-100 px-5 py-4 text-sm last:border-0"
                >
                  <span className="font-medium text-slate-900">
                    {branch}
                  </span>

                  <span className="text-slate-600">
                    {transactions}
                  </span>

                  <span className="font-medium text-slate-900">
                    {sales}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">
              Kelola seluruh cabang dalam satu sistem
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Gunakan sistem ERP untuk membantu memantau operasional dan data
              bisnis dari berbagai lokasi.
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