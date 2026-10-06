import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

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
    Artikel
  </span>
</div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Wawasan untuk membantu mengembangkan bisnis
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Temukan berbagai informasi tentang ERP, digitalisasi bisnis,
              manajemen operasional, dan teknologi untuk bisnis.
            </p>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-white py-16 transition-colors duration-200 sm:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          {/* SECTION HEADER */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
                Informasi dan wawasan bisnis
              </h2>
            </div>

            <span className="text-sm text-slate-500 dark:text-slate-400">
              {articles.length} artikel
            </span>
          </div>

          {/* ARTICLE GRID */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                {/* IMAGE PLACEHOLDER */}
                <div className="flex h-44 shrink-0 items-center justify-center bg-slate-100 sm:h-48 dark:bg-slate-800">
                  <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    {article.category}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                      {article.category}
                    </span>

                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-[#0c59a0] sm:text-xl dark:text-white dark:group-hover:text-blue-400">
                    {article.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {article.description}
                  </p>

                  <Link
                    to="#"
                    className="mt-5 inline-flex w-fit text-sm font-semibold text-[#0c59a0] transition-colors hover:text-[#0c59a0]/80 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Baca selengkapnya →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-slate-50 py-16 transition-colors duration-200 sm:py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
            Dapatkan informasi terbaru
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-400">
            Ikuti informasi terbaru seputar ERP, teknologi, dan
            perkembangan bisnis.
          </p>

          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email Anda"
              className="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-[#0c59a0] focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-950"
            />

            <button
              type="button"
              className="rounded-lg bg-[#0c59a0] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0c59a0]/90"
            >
              Berlangganan
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Kelola bisnis dalam satu platform
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Gunakan solusi yang sesuai dengan kebutuhan bisnis Anda.
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