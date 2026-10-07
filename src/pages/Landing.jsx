import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import DashMockup from '../components/DashMockup.jsx'

import {
  Store,
  Truck,
  Calculator,
  ClipboardCheck,
  Database,
  Zap,
  Eye,
  Layers,
  Hand,
  FileCheck2,
} from 'lucide-react'

const features = [
  [
    Store,
    'Retail & FnB',
    'Kelola penjualan, produk, stok, dan operasional bisnis retail dan F&B dalam satu sistem.',
    '/produk/retail-fnb',
  ],
  [
    Truck,
    'Logistic',
    'Pantau proses pengiriman, distribusi, dan pergerakan barang agar lebih terorganisir.',
    '/produk/logistic',
  ],
  [
    Calculator,
    'Akuntansi',
    'Catat transaksi dan pantau kondisi keuangan bisnis dengan lebih mudah dan teratur.',
    '/produk/akuntansi',
  ],
  [
    ClipboardCheck,
    'Absensi',
    'Catat kehadiran karyawan dan pantau data absensi secara praktis dan terpusat.',
    '/produk/Absensi',
  ],
]

const benefits = [
  [Database, 'Data lebih terorganisir'],
  [Zap, 'Proses bisnis lebih efisien'],
  [Eye, 'Monitoring inventory lebih mudah'],
  [Layers, 'Informasi bisnis terpusat'],
  [Hand, 'Mengurangi pekerjaan manual'],
  [FileCheck2, 'Laporan lebih mudah dipantau'],
]

export default function Landing() {
  const [mockupIndex, setMockupIndex] = useState(0)
  const [isMockupHover, setIsMockupHover] = useState(false)

  useEffect(() => {
    if (isMockupHover) return

    const interval = setInterval(() => {
      setMockupIndex((prev) => (prev + 1) % 5)
    }, 5000)

    return () => clearInterval(interval)
  }, [isMockupHover])

  return (
    <div className="bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_0.9fr] lg:gap-10 lg:py-24">

          {/* TEKS KIRI */}
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Aplikasi Mudah Bisnis Meningkat
            </h1>

            <p className="mt-5 max-w-lg text-lg text-white">
              Tidak perlu lagi banyak memiliki aplikasi terpisah,
              BukaNota menyatukan semuanya dalam satu layar yang mudah dipahami
              pemilik bisnis.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#fitur">
                <Button
                  variant="primary"
                  className="border-3 border-white bg-[#f8481c] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8481c]/90 hover:shadow-md"
                >
                  Coba Sekarang
                </Button>
              </a>
            </div>
          </div>

          {/* CAROUSEL MOCKUP KANAN */}
          <div
            className="relative min-w-0 w-full overflow-hidden"
            onMouseEnter={() => setIsMockupHover(true)}
            onMouseLeave={() => setIsMockupHover(false)}
          >
            <div className="w-full overflow-hidden">
              <div
                className="flex w-full transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${mockupIndex * 100}%)`,
                }}
              >
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="flex w-full min-w-0 shrink-0 justify-center"
                  >
                    <div className="w-full max-w-[520px]">
                      <DashMockup />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PREVIOUS */}
            <button
              type="button"
              onClick={() =>
                setMockupIndex((prev) => (prev - 1 + 5) % 5)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[#0c59a0] shadow-md transition hover:bg-white"
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              type="button"
              onClick={() =>
                setMockupIndex((prev) => (prev + 1) % 5)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[#0c59a0] shadow-md transition hover:bg-white"
            >
              ›
            </button>

            {/* DOTS */}
            <div className="mt-3 flex justify-center gap-1.5">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMockupIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    mockupIndex === index
                      ? 'w-6 bg-white'
                      : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="fitur"
        className="bg-slate-50 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold text-slate-900 dark:text-white">
            Semua Kebutuhan Bisnis dalam Satu Platform
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, text, path]) => (
              <FeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
                path={path}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold text-black">
            Kenapa Menggunakan ERP?
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(([Icon, title]) => (
              <div
                key={title}
                className="flex items-center gap-3"
              >
                <div className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="font-medium text-black">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-10 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Siap Mengelola Bisnis dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Kelola data, transaksi, inventory, dan laporan dalam satu sistem.
          </p>

          <Link to="/login">
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