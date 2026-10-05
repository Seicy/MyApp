import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const plans = [
  {
    name: 'Starter',
    description:
      'Untuk bisnis kecil yang baru mulai menggunakan ERP.',
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
    description:
      'Untuk bisnis yang membutuhkan fitur operasional lebih lengkap.',
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
    description:
      'Untuk perusahaan dengan kebutuhan bisnis dan pengguna lebih besar.',
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

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:py-24">

          {/* BREADCRUMB */}
          <div className="mb-10 flex items-center justify-center gap-2 text-sm text-white/80">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Beranda
            </Link>

            <span>/</span>

            <span className="font-medium text-white">
              Harga
            </span>
          </div>

          <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Harga
            </p>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Pilih paket ERP sesuai kebutuhan bisnis
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Pilih paket yang sesuai dengan kebutuhan operasional bisnis
              dan dapatkan akses ke berbagai modul ERP.
            </p>

            {/* BILLING TOGGLE */}
            <div className="mt-8 inline-flex rounded-xl border border-white/20 bg-white/10 p-1 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setBilling('monthly')}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  billing === 'monthly'
                    ? 'bg-white text-[#0c59a0] shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Bulanan
              </button>

              <button
                type="button"
                onClick={() => setBilling('yearly')}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  billing === 'yearly'
                    ? 'bg-white text-[#0c59a0] shadow-sm'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                Tahunan
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const price =
                billing === 'monthly'
                  ? plan.monthly
                  : plan.yearly

              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border bg-white p-7 transition-all duration-200 hover:-translate-y-1 ${
                    plan.popular
                      ? 'border-[#0c59a0] shadow-xl'
                      : 'border-slate-200 shadow-sm hover:shadow-md'
                  }`}
                >

                  {/* POPULAR */}
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#0c59a0] px-4 py-1 text-xs font-semibold text-white">
                      Paling Populer
                    </div>
                  )}

                  <h2 className="text-xl font-bold text-slate-900">
                    {plan.name}
                  </h2>

                  <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-3xl font-extrabold tracking-tight text-slate-900">
                      Rp{formatRupiah(price)}
                    </span>

                    <span className="ml-1 text-sm text-slate-500">
                      /{billing === 'monthly' ? 'bulan' : 'tahun'}
                    </span>
                  </div>

                  <Link
                    to="/login"
                    className={`mt-7 flex w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-[#0c59a0] text-white hover:-translate-y-0.5 hover:bg-[#0c59a0]/90 hover:shadow-md'
                        : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Mulai Sekarang
                  </Link>

                  <div className="my-7 border-t border-slate-200" />

                  <p className="mb-4 text-sm font-semibold text-slate-900">
                    Termasuk:
                  </p>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0c59a0]" />

                        <span className="text-sm leading-6 text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#0c59a0]">
              Perbandingan
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Bandingkan fitur setiap paket
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 px-5 py-4 text-sm font-semibold text-slate-900">
              <span>Fitur</span>

              <span className="text-center">
                Starter
              </span>

              <span className="text-center">
                Professional
              </span>

              <span className="text-center">
                Enterprise
              </span>
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
                <span className="font-medium text-slate-900">
                  {feature}
                </span>

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
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Masih bingung memilih paket?
          </h2>

          <p className="mt-3 text-blue-100">
            Hubungi kami untuk mendapatkan informasi lebih lanjut
            mengenai kebutuhan bisnis Anda.
          </p>

          <Link to="/tentang/kontak">
            <Button
              variant="secondary"
              className="mt-6 px-6 py-3"
            >
              Hubungi Kami
            </Button>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}