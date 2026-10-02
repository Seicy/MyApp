import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const tutorials = [
  {
    category: 'Getting Started',
    title: 'Memulai Menggunakan ERP',
    description:
      'Pelajari langkah dasar untuk mulai menggunakan sistem ERP dan memahami fitur yang tersedia.',
    level: 'Pemula',
    duration: '5 menit',
  },
  {
    category: 'Point Of Sale',
    title: 'Cara Menggunakan Point Of Sale',
    description:
      'Pelajari cara membuat transaksi penjualan dan mengelola proses pembayaran melalui POS.',
    level: 'Pemula',
    duration: '8 menit',
  },
  {
    category: 'Inventory',
    title: 'Mengelola Stok Produk',
    description:
      'Pelajari cara melihat stok, mencatat perubahan persediaan, dan memantau ketersediaan produk.',
    level: 'Pemula',
    duration: '7 menit',
  },
  {
    category: 'Taking Order',
    title: 'Mengelola Pesanan Pelanggan',
    description:
      'Pelajari cara mencatat dan mengelola pesanan pelanggan agar lebih terorganisir.',
    level: 'Pemula',
    duration: '6 menit',
  },
  {
    category: 'Payment',
    title: 'Mengelola Pembayaran',
    description:
      'Pelajari proses pembayaran dan cara melihat informasi transaksi yang telah dilakukan.',
    level: 'Menengah',
    duration: '6 menit',
  },
  {
    category: 'Accounting',
    title: 'Memahami Modul Akuntansi',
    description:
      'Pelajari fungsi dasar modul akuntansi untuk membantu mengelola informasi keuangan bisnis.',
    level: 'Menengah',
    duration: '10 menit',
  },
]

export default function Tutorial() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-blue-600">
                Tutorial
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Pelajari cara menggunakan sistem ERP
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Temukan panduan penggunaan berbagai fitur ERP mulai dari
                transaksi, stok, pesanan, hingga pengelolaan keuangan.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorial List */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Tutorial
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Panduan penggunaan
                </h2>
              </div>

              <span className="text-sm text-slate-500">
                {tutorials.length} tutorial
              </span>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tutorials.map((tutorial) => (
                <article
                  key={tutorial.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    ▶
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                      {tutorial.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold leading-7 transition group-hover:text-blue-600">
                    {tutorial.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {tutorial.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <span>{tutorial.level}</span>
                    <span>{tutorial.duration}</span>
                  </div>

                  <Link
                    to="#"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Mulai tutorial →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Mulai dari Dasar
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Belajar sesuai kebutuhan
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Pilih tutorial berdasarkan modul yang ingin dipelajari.
                  Setiap panduan dibuat secara bertahap agar lebih mudah
                  diikuti.
                </p>

                <Link
                  to="/login"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Mulai Sekarang
                </Link>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-900">
                  Alur Belajar
                </p>

                <div className="mt-5 space-y-4">
                  {[
                    ['01', 'Pahami dasar sistem ERP'],
                    ['02', 'Pilih modul yang ingin dipelajari'],
                    ['03', 'Ikuti panduan langkah demi langkah'],
                    ['04', 'Praktikkan langsung di sistem'],
                  ].map(([number, title]) => (
                    <div
                      key={number}
                      className="flex items-center gap-4 rounded-xl bg-slate-50 p-4"
                    >
                      <span className="font-bold text-blue-600">
                        {number}
                      </span>

                      <span className="text-sm font-medium text-slate-700">
                        {title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center sm:px-6">
          <p className="text-sm text-slate-500">
            © 2026 ERP System. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}