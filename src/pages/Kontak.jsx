import { useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

export default function Kontak() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
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
              Kontak
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Hubungi kami
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
              Punya pertanyaan mengenai sistem ERP? Kirimkan pesan melalui
              formulir dan kami akan membantu memberikan informasi yang
              dibutuhkan.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">

          {/* INFO */}
          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Mari terhubung dengan kami
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
              Gunakan informasi kontak berikut atau kirimkan pertanyaan
              melalui formulir yang tersedia.
            </p>

            <div className="mt-8 space-y-5">

              {/* EMAIL */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    info@erp-system.com
                  </p>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Telepon
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    +62 812 0000 0000
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">
                    Alamat
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Indonesia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">

            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Kirim Pesan
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Isi formulir berikut untuk mengirimkan pertanyaan.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
                <p className="font-semibold text-emerald-700 dark:text-emerald-400">
                  Pesan berhasil dikirim.
                </p>

                <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-500">
                  Terima kasih telah menghubungi kami.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-emerald-700 hover:underline dark:text-emerald-400"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-6 space-y-5"
              >

                {/* NAMA */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">
                    Nama
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Nama lengkap"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">
                    Email
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* SUBJEK */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">
                    Subjek
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Subjek pesan"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* PESAN */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-900 dark:text-white">
                    Pesan
                  </label>

                  <textarea
                    required
                    rows="5"
                    placeholder="Tulis pesan Anda..."
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0c59a0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c59a0]/90"
                >
                  <Send className="h-4 w-4" />
                  Kirim Pesan
                </button>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FAQ CTA */}
      <section className="bg-slate-50 py-16 transition-colors duration-200 dark:bg-slate-900/50">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Masih punya pertanyaan?
          </h2>

          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Lihat halaman FAQ untuk menemukan jawaban atas pertanyaan
            yang sering ditanyakan.
          </p>

          <Link to="/informasi/faq">
            <Button
              variant="secondary"
              className="mt-6"
            >
              Lihat FAQ
            </Button>
          </Link>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}