import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const faqs = [
  {
    question: 'Apa itu ERP?',
    answer:
      'ERP adalah sistem yang membantu bisnis mengelola berbagai aktivitas operasional dalam satu platform yang terintegrasi.',
  },
  {
    question: 'Siapa yang dapat menggunakan sistem ERP ini?',
    answer:
      'Sistem dapat digunakan oleh berbagai jenis bisnis, mulai dari UMKM, retail dan F&B, hingga perusahaan dengan banyak cabang.',
  },
  {
    question: 'Modul apa saja yang tersedia?',
    answer:
      'Modul yang tersedia meliputi Point Of Sale, Payment, Taking Order, Manajemen Stok, dan Akuntansi.',
  },
  {
    question: 'Apakah sistem dapat digunakan untuk bisnis multi-cabang?',
    answer:
      'Ya. Sistem dirancang untuk membantu bisnis mengelola dan memantau aktivitas dari beberapa cabang melalui satu sistem.',
  },
  {
    question: 'Apakah data bisnis tersimpan dalam satu sistem?',
    answer:
      'Data dari berbagai aktivitas bisnis dapat dikelola dalam satu sistem sehingga lebih mudah dipantau dan dikelola.',
  },
  {
    question: 'Apakah saya bisa mencoba sistem terlebih dahulu?',
    answer:
      'Anda dapat memulai dengan mengakses sistem melalui halaman login dan mencoba fitur yang tersedia sesuai akses akun.',
  },
  {
    question: 'Bagaimana cara mendapatkan akun?',
    answer:
      'Akun dapat diperoleh setelah melakukan proses pendaftaran atau pembelian layanan sesuai kebutuhan bisnis.',
  },
  {
    question: 'Apakah tersedia bantuan jika mengalami kendala?',
    answer:
      'Ya. Anda dapat menghubungi tim melalui halaman kontak untuk mendapatkan informasi dan bantuan terkait sistem.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
              FAQ
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Pertanyaan yang sering ditanyakan
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Temukan jawaban untuk pertanyaan umum mengenai sistem ERP,
              fitur, dan penggunaannya.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 transition-colors duration-200 sm:py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition-transform dark:bg-slate-800 dark:text-slate-300 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 py-5 dark:border-slate-700">
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">

          <h2 className="text-2xl font-bold sm:text-3xl">
            Masih memiliki pertanyaan?
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
            Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai
            sistem dan layanan yang tersedia.
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