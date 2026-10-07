import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  name: 'Absensi',

  headline: [
    'Kelola absensi ',
    'lebih mudah dan terpantau',
    '.',
  ],

  lead:
    'Catat kehadiran karyawan secara lebih mudah agar data absensi dapat dipantau dalam satu sistem.',

  benefits: [
    [
      'Catat kehadiran dengan mudah',
      'Kelola data kehadiran karyawan dalam satu sistem yang terpusat.',
    ],
    [
      'Pantau data absensi',
      'Lihat informasi kehadiran karyawan secara lebih terorganisir.',
    ],
    [
      'Data absensi lebih terpusat',
      'Simpan dan kelola data kehadiran agar lebih mudah dipantau.',
    ],
  ],
}

export default function Absensi() {
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
              Absensi
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
                    Pelajari Absensi
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  Absensi · Kehadiran Karyawan
                </h3>

                <div className="space-y-3">

                  {/* KARYAWAN 1 */}
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4">
                    <div>
                      <p className="text-sm font-semibold">
                        Andi Pratama
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        ID: EMP-001
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-slate-900">
                        08:02
                      </p>

                      <p className="text-xs text-green-600">
                        Hadir
                      </p>
                    </div>
                  </div>

                  {/* KARYAWAN 2 */}
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4">
                    <div>
                      <p className="text-sm font-semibold">
                        Siti Rahma
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        ID: EMP-002
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-slate-900">
                        08:15
                      </p>

                      <p className="text-xs text-green-600">
                        Hadir
                      </p>
                    </div>
                  </div>

                  {/* KARYAWAN 3 */}
                  <div className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 p-4">
                    <div>
                      <p className="text-sm font-semibold">
                        Budi Santoso
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        ID: EMP-003
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-slate-900">
                        08:31
                      </p>

                      <p className="text-xs text-yellow-600">
                        Terlambat
                      </p>
                    </div>
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
              Kelola absensi karyawan dengan lebih mudah dan terorganisir.
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
              Semua Kebutuhan Absensi dalam Satu Platform
            </h2>

            <p className="mt-3 text-slate-600">
              Kelola kehadiran, data karyawan, dan laporan absensi
              dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Kehadiran
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Catat dan pantau kehadiran karyawan dalam satu sistem.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Data Karyawan
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kelola informasi karyawan yang berkaitan dengan data absensi.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Laporan Absensi
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau riwayat dan informasi absensi melalui laporan.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Absensi dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Catat dan pantau kehadiran karyawan dalam satu sistem.
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