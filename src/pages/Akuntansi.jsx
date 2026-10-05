import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  name: 'Akuntansi',

  headline: [
    'Keuangan bisnis lebih ',
    'rapi dan terkontrol',
    '.',
  ],

  lead:
    'Kelola transaksi dan informasi keuangan bisnis dalam satu sistem agar pencatatan lebih mudah dan terorganisir.',

  benefits: [
    [
      'Pencatatan transaksi',
      'Catat transaksi bisnis secara terorganisir dalam satu sistem.',
    ],
    [
      'Pantau kondisi keuangan',
      'Lihat informasi keuangan bisnis untuk membantu memantau aktivitas operasional.',
    ],
    [
      'Laporan lebih terorganisir',
      'Data transaksi dapat digunakan untuk membantu menghasilkan laporan keuangan.',
    ],
  ],
}

export default function Akuntansi() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">

          {/* BREADCRUMB */}
          <div className="mb-10 flex items-center gap-2 text-sm text-white/80">
            <Link
              to="/produk"
              className="transition-colors hover:text-white"
            >
              Produk
            </Link>

            <span>/</span>

            <span className="font-medium text-white">
              Akuntansi
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div className="min-w-0">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {product.headline[0]}

                <span className="text-white">
                  {product.headline[1]}
                </span>

                {product.headline[2]}
              </h1>

              <p className="mt-5 max-w-lg text-lg leading-8 text-white/90">
                {product.lead}
              </p>

              <div className="mt-8">
                <a href="#platform">
                  <Button
                    variant="primary"
                    className="border-2 border-white bg-[#0c59a0] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0c59a0]/90 hover:shadow-md"
                  >
                    Pelajari Akuntansi
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  Akuntansi · Ringkasan Keuangan
                </h3>

                <div className="grid grid-cols-2 gap-3">

                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">
                      Pendapatan
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Rp18.500.000
                    </p>

                    <p className="mt-1 text-xs text-green-600">
                      Bulan ini
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">
                      Pengeluaran
                    </p>

                    <p className="mt-2 text-lg font-bold text-slate-900">
                      Rp7.250.000
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Bulan ini
                    </p>
                  </div>

                </div>

                <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <p className="text-xs text-slate-500">
                    Saldo Bersih
                  </p>

                  <p className="mt-1 text-2xl font-bold text-[#0c59a0]">
                    Rp11.250.000
                  </p>
                </div>

                <div className="mt-4 space-y-2">

                  <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
                    <span className="text-slate-600">
                      Penjualan
                    </span>

                    <span className="font-medium">
                      Rp12.000.000
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">
                      Pembelian
                    </span>

                    <span className="font-medium">
                      Rp4.500.000
                    </span>
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
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kelola keuangan bisnis dengan lebih mudah dan terorganisir.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.benefits.map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-[#0c59a0]">
                  ✓
                </div>

                <h3 className="font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        className="bg-slate-50 py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Semua Kebutuhan Bisnis dalam Satu Platform
            </h2>

            <p className="mt-3 text-slate-600">
              Kelola transaksi, pembayaran, stok, customer,
              supplier, hingga informasi keuangan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Point Of Sale
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Data transaksi penjualan dapat digunakan sebagai bagian dari pencatatan keuangan.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Pembelian
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Catat aktivitas pembelian dan pengeluaran bisnis dalam satu sistem.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Laporan
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Gunakan data transaksi untuk membantu memantau kondisi keuangan bisnis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Keuangan Bisnis?
          </h2>

          <p className="mt-3 text-blue-100">
            Kelola transaksi dan informasi keuangan dalam satu sistem.
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