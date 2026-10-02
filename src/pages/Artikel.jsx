import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'

const articles = [
  {
    category: 'ERP',
    title: 'Apa Itu ERP dan Bagaimana Cara Kerjanya?',
    description:
      'Mengenal sistem ERP dan bagaimana teknologi ini membantu bisnis mengelola berbagai aktivitas dalam satu sistem.',
    date: '12 September 2026',
  },
  {
    category: 'UMKM',
    title: 'Cara Mengelola Bisnis UMKM dengan Lebih Terorganisir',
    description:
      'Pelajari bagaimana sistem digital dapat membantu UMKM mengelola penjualan, stok, dan aktivitas operasional.',
    date: '8 September 2026',
  },
  {
    category: 'Retail & F&B',
    title: 'Mengelola Operasional Retail dan F&B dalam Satu Sistem',
    description:
      'Bagaimana sistem terintegrasi dapat membantu mengelola pesanan, pembayaran, stok, dan penjualan.',
    date: '3 September 2026',
  },
  {
    category: 'Inventory',
    title: 'Mengapa Manajemen Stok Penting untuk Bisnis?',
    description:
      'Memahami pentingnya pengelolaan stok untuk menjaga ketersediaan barang dan mendukung aktivitas operasional.',
    date: '28 Agustus 2026',
  },
  {
    category: 'Bisnis',
    title: 'Manfaat Digitalisasi untuk Operasional Bisnis',
    description:
      'Mengenal beberapa manfaat penggunaan sistem digital dalam membantu mengelola aktivitas bisnis sehari-hari.',
    date: '21 Agustus 2026',
  },
  {
    category: 'ERP',
    title: 'Memilih Modul ERP Sesuai Kebutuhan Bisnis',
    description:
      'Panduan memahami berbagai modul ERP dan menentukan fitur yang sesuai dengan kebutuhan bisnis.',
    date: '15 Agustus 2026',
  },
]

export default function Artikel() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-blue-600">
                Artikel
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Wawasan untuk membantu mengembangkan bisnis
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Temukan berbagai informasi tentang ERP, digitalisasi bisnis,
                manajemen operasional, dan teknologi untuk bisnis.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  Artikel Terbaru
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  Informasi dan wawasan bisnis
                </h2>
              </div>

              <span className="text-sm text-slate-500">
                {articles.length} artikel
              </span>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Image Placeholder */}
                  <div className="flex h-48 items-center justify-center bg-slate-100">
                    <span className="text-sm font-semibold text-slate-400">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {article.category}
                      </span>

                      <span className="text-xs text-slate-400">
                        {article.date}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-7 transition group-hover:text-blue-600">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {article.description}
                    </p>

                    <Link
                      to="#"
                      className="mt-5 inline-flex text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Baca selengkapnya →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold">
              Dapatkan informasi terbaru
            </h2>

            <p className="mt-4 text-slate-600">
              Ikuti informasi terbaru seputar ERP, teknologi, dan
              perkembangan bisnis.
            </p>

            <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />

              <button
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Berlangganan
              </button>
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