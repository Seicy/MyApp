import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

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
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="mb-4 text-sm font-semibold text-blue-600">
                Solusi untuk UMKM
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Kelola bisnis UMKM lebih{' '}
                <span className="text-blue-600">mudah dan terorganisir.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Gunakan satu sistem untuk membantu mengelola penjualan,
                pembayaran, stok, dan keuangan bisnis UMKM.
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
                  <p className="text-xs text-slate-500">Penjualan</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    Rp2,4jt
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Transaksi</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">86</p>
                </div>

                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Stok</p>
                  <p className="mt-2 text-xl font-bold text-slate-900">124</p>
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
                      <span className="text-sm text-slate-600">{label}</span>
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
                Dibuat untuk UMKM
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
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

        {/* Modules */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">
                Modul ERP
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Pilih fitur sesuai kebutuhan bisnis
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                Gunakan modul yang dibutuhkan untuk membantu menjalankan
                operasional bisnis UMKM.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold text-slate-900">{module}</h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Kelola aktivitas {module.toLowerCase()} dalam satu sistem.
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
              Siap mengelola bisnis dengan lebih mudah?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Mulai gunakan sistem ERP untuk membantu mengelola operasional
              bisnis UMKM dalam satu tempat.
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

{/* FOOTER */}
<footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">

    <div>
      <p className="font-extrabold">
        ERP SYSTEM
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Sistem ERP sederhana untuk membantu pengelolaan bisnis.
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
          { label: 'Documentation', path: '/informasi/dokumentasi' },
          { label: 'Articles', path: '/informasi/artikel' },
        ],
      ],
    ].map(([heading, links]) => (
      <div key={heading}>
        <p className="mb-3 font-semibold">
          {heading}
        </p>

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
    </>
  )
}