import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

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
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-blue-600">
                Dokumentasi
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Panduan lengkap penggunaan ERP
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Temukan dokumentasi mengenai fitur, modul, dan penggunaan
                sistem ERP untuk membantu Anda memahami sistem dengan lebih
                mudah.
              </p>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="border-b border-slate-200">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
            <div className="mx-auto max-w-2xl">
              <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <input
                  type="text"
                  placeholder="Cari dokumentasi..."
                  className="w-full px-4 py-3 text-sm outline-none"
                />

                <button
                  type="button"
                  className="bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Cari
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation Categories */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-blue-600">
                Dokumentasi Sistem
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Pelajari setiap bagian sistem
              </h2>

              <p className="mt-4 text-slate-600">
                Pilih kategori dokumentasi yang ingin Anda pelajari.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {categories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-600">
                    #
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {category.items.map((item) => (
                      <Link
                        key={item}
                        to="#"
                        className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
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

        {/* Quick Links */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <p className="text-sm font-semibold text-blue-600">
                Bantuan
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Butuh bantuan untuk memulai?
              </h2>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
              {quickLinks.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <h3 className="font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  <Link
                    to={
                      item.title === 'FAQ'
                        ? '/informasi/faq'
                        : '#'
                    }
                    className="mt-4 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Lihat panduan →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6">
            <h2 className="text-3xl font-bold text-white">
              Tidak menemukan yang Anda cari?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai
              penggunaan sistem ERP.
            </p>

            <Link
              to="/tentang/kontak"
              className="mt-8 inline-block rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Hubungi Kami
            </Link>
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