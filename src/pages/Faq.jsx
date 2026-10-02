import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'

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
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        {/* Hero */}
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold text-blue-600">
                FAQ
              </p>

              <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Pertanyaan yang sering ditanyakan
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Temukan jawaban untuk pertanyaan umum mengenai sistem ERP,
                fitur, dan penggunaannya.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-xl border border-slate-200"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition hover:bg-slate-50"
                    >
                      <span className="font-semibold text-slate-900">
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-600 transition-transform ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        +
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-200 px-5 py-5">
                        <p className="text-sm leading-7 text-slate-600">
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
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-bold">
              Masih memiliki pertanyaan?
            </h2>

            <p className="mt-4 text-slate-600">
              Hubungi kami untuk mendapatkan informasi lebih lanjut mengenai
              sistem dan layanan yang tersedia.
            </p>

            <a
              href="/tentang/kontak"
              className="mt-7 inline-block rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Hubungi Kami
            </a>
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