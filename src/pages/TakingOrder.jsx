import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  name: 'Taking Order',

  headline: [
    'Pesanan lebih ',
    'cepat dan terorganisir',
    '.',
  ],

  lead:
    'Bantu karyawan mencatat pesanan dengan lebih cepat dan akurat, langsung dari satu sistem.',

  benefits: [
    [
      'Input pesanan lebih cepat',
      'Catat pesanan pelanggan dengan tampilan yang sederhana dan mudah digunakan.',
    ],
    [
      'Pesanan lebih terorganisir',
      'Setiap pesanan tercatat dalam sistem sehingga mudah dipantau dan diproses.',
    ],
    [
      'Kurangi kesalahan pesanan',
      'Informasi pesanan tersimpan dengan jelas untuk membantu mengurangi kesalahan input.',
    ],
  ],
}

export default function TakingOrder() {
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
              Taking Order
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
                    Pelajari Taking Order
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  Taking Order · Pesanan Baru
                </h3>

                <div className="space-y-4">

                  <div className="rounded-lg border border-slate-200 p-4">
                    <p className="text-xs text-slate-500">
                      Meja
                    </p>

                    <p className="mt-1 font-semibold text-slate-900">
                      Meja 08
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-slate-700">
                      Pesanan
                    </p>

                    <div className="space-y-2">

                      <div className="flex justify-between rounded-lg bg-slate-50 p-3 text-sm">
                        <span>Kopi Susu × 2</span>

                        <span className="font-medium">
                          Rp44.000
                        </span>
                      </div>

                      <div className="flex justify-between rounded-lg bg-slate-50 p-3 text-sm">
                        <span>Roti Bakar × 1</span>

                        <span className="font-medium">
                          Rp20.000
                        </span>
                      </div>

                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                    <span className="font-semibold">
                      Total
                    </span>

                    <span className="font-bold text-[#0c59a0]">
                      Rp64.000
                    </span>
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-lg bg-[#0c59a0] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0c59a0]/90"
                  >
                    Simpan Pesanan
                  </button>

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
              Sistem pencatatan pesanan yang sederhana dan terorganisir.
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
              Kelola pesanan, transaksi, inventory, customer,
              supplier, hingga laporan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Point Of Sale
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Proses pesanan dan transaksi langsung dari sistem kasir.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Payment
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kelola pembayaran setelah pesanan selesai diproses.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Manajemen Stok
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau perubahan stok berdasarkan aktivitas pesanan dan transaksi.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Pesanan dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Catat dan kelola pesanan dalam satu sistem.
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