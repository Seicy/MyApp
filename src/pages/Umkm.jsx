import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const benefits = [
  {
    title: 'Kelola Penjualan',
    description:
      'Catat transaksi penjualan dengan lebih cepat dan terorganisir dalam satu sistem.',
  },
  {
    title: 'Pantau Stok',
    description:
      'Pantau ketersediaan barang agar stok masuk dan keluar lebih mudah dikontrol.',
  },
  {
    title: 'Kelola Keuangan',
    description:
      'Bantu mencatat transaksi dan melihat kondisi keuangan bisnis dengan lebih rapi.',
  },
]

const modules = [
  'Point Of Sale',
  'Payment',
  'Taking Order',
  'Manajemen Stok',
  'Akuntansi',
]

export default function Umkm() {
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
                UMKM
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* LEFT */}
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                  Solusi untuk UMKM
                </p>

                <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                  Kelola bisnis UMKM lebih{' '}
                  <span className="text-white">
                    mudah dan terorganisir.
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-lg leading-8 text-white/90">
                  Gunakan satu sistem untuk membantu mengelola penjualan,
                  pembayaran, stok, dan keuangan bisnis UMKM.
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
                        Dashboard UMKM
                      </p>

                      <p className="text-xs text-slate-500">
                        Ringkasan bisnis hari ini
                      </p>
                    </div>

                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                      Aktif
                    </span>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Penjualan
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        Rp2,4jt
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Transaksi
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        86
                      </p>
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4">
                      <p className="text-xs text-slate-500">
                        Stok
                      </p>

                      <p className="mt-2 text-xl font-bold text-slate-900">
                        124
                      </p>
                    </div>

                  </div>

                  <div className="mt-4 rounded-xl border border-slate-200 p-4">

                    <p className="text-sm font-semibold text-slate-900">
                      Aktivitas Terbaru
                    </p>

                    <div className="mt-3 space-y-3">
                      {[
                        ['Penjualan', 'Rp350.000'],
                        ['Pembelian stok', 'Rp125.000'],
                        ['Pembayaran', 'Rp275.000'],
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
                Dibuat untuk UMKM
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Semua kebutuhan bisnis dalam satu sistem
              </h2>

              <p className="mt-4 text-slate-600">
                Kelola aktivitas bisnis sehari-hari tanpa harus menggunakan
                banyak sistem yang berbeda.
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

        {/* MODULES */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
                Modul ERP
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Pilih fitur sesuai kebutuhan bisnis
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Gunakan modul yang dibutuhkan untuk membantu menjalankan
                operasional bisnis UMKM.
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
                    Kelola aktivitas {module.toLowerCase()} dalam satu sistem.
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
              Siap mengelola bisnis dengan lebih mudah?
            </h2>

            <p className="mt-3 text-blue-100">
              Mulai gunakan sistem ERP untuk membantu mengelola operasional
              bisnis UMKM dalam satu tempat.
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