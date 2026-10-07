import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const product = {
  name: 'Logistic',

  headline: [
    'Kelola logistik ',
    'lebih terorganisir',
    '.',
  ],

  lead:
    'Kelola proses pengiriman, distribusi, dan pergerakan barang dalam satu sistem agar aktivitas logistik lebih mudah dipantau.',

  benefits: [
    [
      'Pantau proses pengiriman',
      'Pantau status dan proses pengiriman barang agar lebih mudah dikontrol.',
    ],
    [
      'Kelola distribusi barang',
      'Atur pergerakan barang dari satu lokasi ke lokasi lainnya secara lebih terorganisir.',
    ],
    [
      'Data logistik lebih terpusat',
      'Informasi pengiriman dan distribusi tersimpan dalam satu sistem sehingga lebih mudah dipantau.',
    ],
  ],
}

export default function Logistic() {
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
              Logistic
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
                    Pelajari Logistic
                  </Button>
                </a>
              </div>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

                <h3 className="mb-5 text-sm font-semibold text-slate-600">
                  Logistic · Pengiriman
                </h3>

                <div>
                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Total Pengiriman
                    </span>

                    <span className="font-medium text-slate-900">
                      24
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Dalam Pengiriman
                    </span>

                    <span className="font-medium text-slate-900">
                      8
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-slate-100 py-4 text-sm">
                    <span className="text-slate-600">
                      Berhasil Dikirim
                    </span>

                    <span className="font-medium text-emerald-600">
                      16
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-5 text-base font-bold">
                    <span>
                      Status Pengiriman
                    </span>

                    <span className="text-[#0c59a0]">
                      Terpantau
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
              Pengelolaan logistik yang lebih mudah dan terorganisir.
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
              Semua Kebutuhan Logistik dalam Satu Platform
            </h2>

            <p className="mt-3 text-slate-600">
              Kelola pengiriman, distribusi, inventory, supplier,
              customer, hingga laporan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Pengiriman
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau proses pengiriman barang dan statusnya dalam satu sistem.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Distribusi
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Kelola pergerakan barang agar proses distribusi lebih terorganisir.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <h3 className="font-semibold text-slate-900">
                Monitoring
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau aktivitas logistik dan kondisi pengiriman dengan lebih mudah.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Logistik dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Kelola pengiriman dan distribusi barang dalam satu sistem.
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