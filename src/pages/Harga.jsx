import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

import Navbar from '../components/Navbar.jsx'

const plans = [
  {
    name: 'Starter',
    description: 'Untuk bisnis kecil yang baru mulai menggunakan ERP.',
    monthly: 199000,
    yearly: 1990000,
    features: [
      'Point Of Sale',
      'Payment',
      'Manajemen Stok',
      'Laporan dasar',
      '1 pengguna',
    ],
  },
  {
    name: 'Professional',
    description: 'Untuk bisnis yang membutuhkan fitur operasional lebih lengkap.',
    monthly: 499000,
    yearly: 4990000,
    popular: true,
    features: [
      'Semua fitur Starter',
      'Taking Order',
      'Akuntansi',
      'Laporan bisnis',
      '5 pengguna',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Untuk perusahaan dengan kebutuhan bisnis dan pengguna lebih besar.',
    monthly: 999000,
    yearly: 9990000,
    features: [
      'Semua fitur Professional',
      'Multi-cabang',
      'Manajemen pengguna',
      'Laporan lanjutan',
      'Pengguna lebih banyak',
    ],
  },
]

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID').format(value)
}

export default function Harga() {
  const [billing, setBilling] = useState('monthly')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:py-24">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Harga
          </p>

          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Pilih paket ERP sesuai kebutuhan bisnis
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Pilih paket yang sesuai dengan kebutuhan operasional bisnis
            dan dapatkan akses ke berbagai modul ERP.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setBilling('monthly')}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                billing === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Bulanan
            </button>

            <button
              onClick={() => setBilling('yearly')}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                billing === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Tahunan
            </button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const price =
              billing === 'monthly'
                ? plan.monthly
                : plan.yearly

            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-7 ${
                  plan.popular
                    ? 'border-blue-600 shadow-xl'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                    Paling Populer
                  </div>
                )}

                <h2 className="text-xl font-bold">
                  {plan.name}
                </h2>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className="text-3xl font-extrabold">
                    Rp{formatRupiah(price)}
                  </span>

                  <span className="text-sm text-slate-500">
                    /{billing === 'monthly' ? 'bulan' : 'tahun'}
                  </span>
                </div>

                <Link
                  to="/login"
                  className={`mt-7 flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  Mulai Sekarang
                </Link>

                <div className="my-7 border-t border-slate-200" />

                <p className="mb-4 text-sm font-semibold">
                  Termasuk:
                </p>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

                      <span className="text-sm text-slate-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold text-blue-600">
              Perbandingan
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Bandingkan fitur setiap paket
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold">
              <span>Fitur</span>
              <span className="text-center">Starter</span>
              <span className="text-center">Professional</span>
              <span className="text-center">Enterprise</span>
            </div>

            {[
              ['Point Of Sale', '✓', '✓', '✓'],
              ['Payment', '✓', '✓', '✓'],
              ['Taking Order', '—', '✓', '✓'],
              ['Manajemen Stok', '✓', '✓', '✓'],
              ['Akuntansi', '—', '✓', '✓'],
              ['Multi-cabang', '—', '—', '✓'],
              ['Laporan Bisnis', 'Dasar', '✓', 'Lanjutan'],
              ['Manajemen Pengguna', '—', '✓', '✓'],
            ].map(([feature, starter, professional, enterprise]) => (
              <div
                key={feature}
                className="grid grid-cols-4 border-b border-slate-100 px-5 py-4 text-sm last:border-b-0"
              >
                <span className="font-medium">{feature}</span>

                <span className="text-center text-slate-500">
                  {starter}
                </span>

                <span className="text-center text-slate-500">
                  {professional}
                </span>

                <span className="text-center text-slate-500">
                  {enterprise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold">
            Masih bingung memilih paket?
          </h2>

          <p className="mt-4 text-slate-600">
            Hubungi kami untuk mendapatkan informasi lebih lanjut
            mengenai kebutuhan bisnis Anda.
          </p>

          <Link
            to="/tentang/kontak"
            className="mt-7 inline-flex rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 text-lg font-extrabold">
              <span className="rounded-lg bg-blue-600 px-2 py-0.5 text-white">
                E
              </span>
              qwerty
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Sistem ERP untuk membantu mengelola bisnis secara lebih
              terintegrasi.
            </p>
          </div>

          {[
            [
              'Product',
              [
                { label: 'Products', path: '/produk' },
                { label: 'Inventory', path: '/inventory' },
                { label: 'Purchasing', path: '/purchase-orders' },
                { label: 'Reports', path: '/reports' },
              ],
            ],
            [
              'Company',
              [
                { label: 'About', path: '/tentang' },
                { label: 'Contact', path: '/tentang/kontak' },
                { label: 'FAQ', path: '/informasi/faq' },
              ],
            ],
            [
              'Resources',
              [
                {
                  label: 'Documentation',
                  path: '/informasi/dokumentasi',
                },
                {
                  label: 'Articles',
                  path: '/informasi/artikel',
                },
              ],
            ],
          ].map(([heading, links]) => (
            <div key={heading}>
              <p className="mb-3 font-semibold">{heading}</p>

              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block py-1 text-sm text-slate-600 transition hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <p className="border-t border-slate-100 py-5 text-center text-sm text-slate-500">
          © 2026 ERP System. All rights reserved.
        </p>
      </footer>
    </div>
  )
}