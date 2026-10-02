import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const benefits = [
  {
    title: 'Penjualan Lebih Cepat',
    description:
      'Proses transaksi pelanggan dengan sistem kasir yang praktis dan mudah digunakan.',
  },
  {
    title: 'Stok Lebih Terpantau',
    description:
      'Pantau ketersediaan produk dan pergerakan stok untuk membantu operasional toko dan restoran.',
  },
  {
    title: 'Pesanan Lebih Terorganisir',
    description:
      'Kelola pesanan pelanggan agar proses dari pemesanan hingga pembayaran lebih teratur.',
  },
]

const modules = [
  'Point Of Sale',
  'Payment',
  'Taking Order',
  'Manajemen Stok',
  'Akuntansi',
]

export default function RetailFnb() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-semibold text-blue-600">
                Solusi Retail & F&B
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Kelola operasional retail dan F&B lebih{' '}
                <span className="text-blue-600">
                  cepat dan terorganisir.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Satu sistem untuk membantu mengelola penjualan, pesanan,
                pembayaran, stok, dan aktivitas operasional bisnis.
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
                    Operational Dashboard
                  </p>

                  <p className="text-xs text-slate-500">
                    Ringkasan operasional hari ini
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
                    Rp8,6jt
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Pesanan</p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    214
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Produk</p>

                  <p className="mt-2 text-xl font-bold text-slate-900">
                    328
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-slate-200 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Aktivitas Terbaru
                </p>

                <div className="mt-3 space-y-3">
                  {[
                    ['Order #1024', 'Rp185.000'],
                    ['Order #1023', 'Rp320.000'],
                    ['Restock Produk', '45 item'],
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
                Untuk Retail & F&B
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Operasional bisnis lebih mudah dalam satu sistem
              </h2>

              <p className="mt-4 text-slate-600">
                Bantu tim mengelola aktivitas bisnis sehari-hari dengan
                sistem yang terintegrasi.
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

        {/* Retail & F&B */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Satu Alur Operasional
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight">
                  Dari pelanggan melakukan order hingga pembayaran
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Sistem membantu menghubungkan proses penjualan, pesanan,
                  pembayaran, dan stok sehingga aktivitas operasional lebih
                  mudah dipantau.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['01', 'Pelanggan Order'],
                  ['02', 'Pesanan Diproses'],
                  ['03', 'Pembayaran'],
                  ['04', 'Stok Terupdate'],
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
                Modul untuk mendukung operasional bisnis
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Gunakan modul sesuai kebutuhan retail maupun bisnis F&B.
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
                    Kelola aktivitas {module.toLowerCase()} dalam satu
                    sistem.
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
              Siap mengelola bisnis dengan lebih terintegrasi?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Gunakan sistem ERP untuk membantu mengelola operasional
              retail dan F&B dalam satu tempat.
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