import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

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
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">

          {/* BREADCRUMB */}
          <div className="mb-10 flex flex-wrap items-center gap-2 text-sm text-white/80">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Beranda
            </Link>

            <span>/</span>

            <span className="font-medium text-white">
              Tutorial
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Pelajari cara menggunakan sistem ERP
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Temukan panduan penggunaan berbagai fitur ERP mulai dari
              transaksi, stok, pesanan, hingga pengelolaan keuangan.
            </p>
          </div>
        </div>
      </section>

      {/* TUTORIAL LIST */}
      <section className="bg-white py-16 transition-colors duration-200 sm:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* SECTION HEADER */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Panduan penggunaan
              </h2>
            </div>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {tutorials.length} tutorial
            </span>
          </div>

          {/* TUTORIAL GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial) => (
              <article
                key={tutorial.title}
                className="group flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-6 dark:border-slate-700 dark:bg-slate-900"
              >
                {/* ICON */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                  <span className="text-sm font-bold">
                    ▶
                  </span>
                </div>

                {/* CATEGORY */}
                <div className="mt-5 flex items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                    {tutorial.category}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-[#0c59a0] sm:text-xl dark:text-white dark:group-hover:text-blue-400">
                  {tutorial.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {tutorial.description}
                </p>

                {/* META */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  <span>{tutorial.level}</span>
                  <span>{tutorial.duration}</span>
                </div>

                {/* LINK */}
                <Link
                  to="#"
                  className="mt-5 inline-flex w-fit text-sm font-semibold text-[#0c59a0] transition-colors hover:text-[#0c59a0]/80 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Mulai tutorial →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="bg-slate-50 py-16 transition-colors duration-200 sm:py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Belajar sesuai kebutuhan
              </h2>

              <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
                Pilih tutorial berdasarkan modul yang ingin dipelajari.
                Setiap panduan dibuat secara bertahap agar lebih mudah
                diikuti.
              </p>

              <Link to="/login">
                <Button
                  variant="primary"
                  className="mt-6 px-5 py-3"
                >
                  Mulai Sekarang
                </Button>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
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
                    className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
                  >
                    <span className="font-bold text-[#0c59a0] dark:text-blue-400">
                      {number}
                    </span>

                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Siap mulai menggunakan ERP?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Pelajari berbagai fitur dan kelola kebutuhan bisnis Anda dalam
            satu platform.
          </p>

          <Link to="/harga">
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