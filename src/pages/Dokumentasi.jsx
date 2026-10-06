import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const categories = [
  {
    title: 'Memulai',
    description:
      'Panduan dasar untuk memahami sistem dan mulai menggunakan ERP.',
    items: [
      'Pengenalan ERP',
      'Membuat dan Mengakses Akun',
      'Mengenal Dashboard',
    ],
  },
  {
    title: 'Penjualan',
    description:
      'Dokumentasi untuk mengelola transaksi dan aktivitas penjualan.',
    items: [
      'Point Of Sale',
      'Payment',
      'Taking Order',
    ],
  },
  {
    title: 'Inventory',
    description:
      'Panduan untuk mengelola produk dan persediaan barang.',
    items: [
      'Manajemen Stok',
      'Produk',
      'Pergerakan Stok',
    ],
  },
  {
    title: 'Keuangan',
    description:
      'Dokumentasi mengenai pencatatan dan pengelolaan informasi keuangan.',
    items: [
      'Akuntansi',
      'Transaksi',
      'Laporan',
    ],
  },
]

const quickLinks = [
  {
    title: 'Panduan Memulai',
    description: 'Mulai memahami dasar penggunaan sistem ERP.',
  },
  {
    title: 'Modul ERP',
    description: 'Pelajari fungsi dan penggunaan setiap modul.',
  },
  {
    title: 'FAQ',
    description: 'Temukan jawaban untuk pertanyaan yang sering ditanyakan.',
  },
]

export default function Dokumentasi() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      <main>

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
                Dokumentasi
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Panduan lengkap penggunaan ERP
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                Temukan dokumentasi mengenai fitur, modul, dan penggunaan
                sistem ERP untuk membantu Anda memahami sistem dengan lebih
                mudah.
              </p>
            </div>

          </div>
        </section>

        {/* SEARCH */}
        <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:focus-within:border-blue-500 dark:focus-within:ring-blue-950">
                <input
                  type="text"
                  placeholder="Cari dokumentasi..."
                  className="w-full bg-transparent px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
                />

                <button
                  type="button"
                  className="bg-[#0c59a0] px-5 text-sm font-semibold text-white transition hover:bg-[#0c59a0]/90"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DOCUMENTATION CATEGORIES */}
        <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="max-w-2xl">
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Pelajari setiap bagian sistem
              </h2>

              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Pilih kategori dokumentasi yang ingin Anda pelajari.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-bold text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                    #
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item}
                        to="#"
                        className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-[#0c59a0] dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-blue-400"
                      >
                        <span>{item}</span>
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-slate-900/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">

            <div className="text-center">
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Butuh bantuan untuk memulai?
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
              {quickLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>

                  <Link
                    to={
                      item.title === 'FAQ'
                        ? '/informasi/faq'
                        : '#'
                    }
                    className="mt-4 inline-block text-sm font-semibold text-[#0c59a0] hover:text-[#0c59a0]/80 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Lihat panduan →
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
          <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

            <h2 className="text-2xl font-bold sm:text-3xl">
              Tidak menemukan yang Anda cari?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
              Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai
              penggunaan sistem ERP.
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

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}