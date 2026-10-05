import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

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
                Multi Cabang
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* LEFT */}
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Solusi Multi-Cabang
                </p>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Kelola banyak cabang dari{' '}
                  <span className="text-white">
                    satu sistem.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Pantau penjualan, stok, pembelian, dan aktivitas operasional
                  dari berbagai cabang dalam satu platform ERP.
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

            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Untuk Bisnis Multi-Cabang
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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

        {/* BRANCH MANAGEMENT */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                  Manajemen Cabang
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
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

        {/* COMPARISON */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Terpusat
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Informasi cabang dalam satu dashboard
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Lihat informasi berbagai cabang tanpa perlu menggunakan
                sistem yang berbeda untuk setiap lokasi.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900">
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
        <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

            <h2 className="text-3xl font-bold">
              Kelola seluruh cabang dalam satu sistem
            </h2>

            <p className="mt-3 text-blue-100">
              Gunakan sistem ERP untuk membantu memantau operasional dan data
              bisnis dari berbagai lokasi.
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