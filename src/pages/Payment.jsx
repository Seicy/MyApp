import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  name: 'Payment',

  headline: [
    'Pembayaran lebih ',
    'mudah dan terintegrasi',
    '.',
  ],

  lead:
    'Kelola berbagai metode pembayaran dalam satu sistem agar proses transaksi lebih cepat dan mudah dipantau.',

  benefits: [
    [
      'Berbagai metode pembayaran',
      'Dukung proses pembayaran dengan berbagai metode sesuai kebutuhan bisnis.',
    ],
    [
      'Transaksi lebih cepat',
      'Proses pembayaran terintegrasi langsung dengan sistem kasir.',
    ],
    [
      'Data pembayaran tercatat',
      'Setiap transaksi tersimpan sehingga lebih mudah dipantau dan dikelola.',
    ],
  ],
}

export default function Payment() {
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
              Payment
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
                    Pelajari Payment
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  Payment · Pembayaran
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Total Transaksi
                    </span>

                    <span className="font-medium text-slate-900">
                      Rp57.600
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Metode Pembayaran
                    </span>

                    <span className="font-medium text-slate-900">
                      QRIS
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Status
                    </span>

                    <span className="font-medium text-emerald-600">
                      Berhasil
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-5 text-base font-bold">
                    <span>Total Dibayar</span>

                    <span className="text-[#0c59a0]">
                      Rp57.600
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
              Pembayaran yang terintegrasi dengan operasional bisnis.
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
              Kelola pembayaran, transaksi, inventory, customer,
              supplier, hingga laporan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Point Of Sale
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Proses transaksi dan pembayaran langsung dari sistem kasir.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Manajemen Stok
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau perubahan stok berdasarkan aktivitas transaksi.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Laporan
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Data transaksi dapat digunakan untuk membantu membuat laporan bisnis.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* CTA */}
<section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
  <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

    <h2 className="text-3xl font-bold">
      Siap Mengelola Pembayaran dengan Lebih Mudah?
    </h2>

    <p className="mt-3 text-blue-100">
      Kelola transaksi dan pembayaran dalam satu sistem.
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