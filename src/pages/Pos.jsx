import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  id: 'Pos',

  name: 'Point Of Sale',

  headline: [
    'Kasir secepat ',
    'pelanggan memesan',
    '.',
  ],

  lead:
    'Layar kasir yang bisa dipelajari karyawan baru dalam 10 menit. Scan, ketuk, cetak struk, selesai.',

  benefits: [
    [
      'Scan barcode atau ketuk produk',
      'Antrean pendek, salah input berkurang.',
    ],
    [
      'Diskon dan promo satu ketuk',
      'Voucher, diskon member, dan promo jam tertentu.',
    ],
    [
      'Tetap jalan saat internet putus',
      'Transaksi disimpan lalu dikirim otomatis saat online.',
    ],
  ],

  mockTitle: 'Keranjang',

  rows: [
    ['Kopi susu × 2', 'Rp44.000'],
    ['Roti bakar × 1', 'Rp20.000'],
    ['Diskon member', '−Rp6.400'],
  ],

  totalLabel: 'Total',
  total: 'Rp57.600',

  cta: 'Coba kasir',
}

export default function Pos() {
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
              Point Of Sale
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
                    {product.cta}
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  {product.name} · {product.mockTitle}
                </h3>

                <div>
                  {product.rows.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm"
                    >
                      <span className="text-slate-600">
                        {label}
                      </span>

                      <span className="font-medium text-slate-900">
                        {value}
                      </span>
                    </div>
                  ))}

                  <div className="flex items-center justify-between pt-5 text-base font-bold">
                    <span>
                      {product.totalLabel}
                    </span>

                    <span className="text-[#0c59a0]">
                      {product.total}
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
              Kasir yang sederhana untuk digunakan setiap hari.
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

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Siap Mengelola Bisnis dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Kelola data, transaksi, inventory, dan laporan dalam satu sistem.
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