import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import DashMockup from '../components/DashMockup.jsx'
import { useSettings } from '../context/SettingsContext.jsx'

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

const content = {
  id: {
    heroTitle: 'Aplikasi Mudah Bisnis Meningkat',
    heroText:
      'Tidak perlu lagi banyak memiliki aplikasi terpisah, BukaNota menyatukan semuanya dalam satu layar yang mudah dipahami pemilik bisnis.',
    tryNow: 'Coba Sekarang',

    featuresTitle: 'Semua Kebutuhan Bisnis dalam Satu Platform',

    features: [
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
        '/produk/absensi',
      ],
    ],

    benefitsTitle: 'Kenapa Menggunakan ERP?',

    benefits: [
      [Database, 'Data lebih terorganisir'],
      [Zap, 'Proses bisnis lebih efisien'],
      [Eye, 'Monitoring inventory lebih mudah'],
      [Layers, 'Informasi bisnis terpusat'],
      [Hand, 'Mengurangi pekerjaan manual'],
      [FileCheck2, 'Laporan lebih mudah dipantau'],
    ],

    ctaTitle: 'Siap Mengelola Bisnis dengan Lebih Mudah?',
    ctaText:
      'Kelola data, transaksi, inventory, dan laporan dalam satu sistem.',
    startNow: 'Mulai Sekarang',
  },

  en: {
    heroTitle: 'Easy Business, Better Growth',
    heroText:
      'No need to manage multiple separate applications. BukaNota brings everything together in one simple and easy-to-understand platform.',
    tryNow: 'Try Now',

    featuresTitle: 'All Your Business Needs in One Platform',

    features: [
      [
        Store,
        'Retail & FnB',
        'Manage sales, products, inventory, and retail and F&B operations in one system.',
        '/produk/retail-fnb',
      ],
      [
        Truck,
        'Logistics',
        'Monitor shipping, distribution, and product movement to keep operations more organized.',
        '/produk/logistic',
      ],
      [
        Calculator,
        'Accounting',
        'Record transactions and monitor your business finances more easily and systematically.',
        '/produk/akuntansi',
      ],
      [
        ClipboardCheck,
        'Attendance',
        'Record employee attendance and monitor attendance data easily in one centralized system.',
        '/produk/absensi',
      ],
    ],

    benefitsTitle: 'Why Use an ERP?',

    benefits: [
      [Database, 'More organized data'],
      [Zap, 'More efficient business processes'],
      [Eye, 'Easier inventory monitoring'],
      [Layers, 'Centralized business information'],
      [Hand, 'Less manual work'],
      [FileCheck2, 'Easier report monitoring'],
    ],

    ctaTitle: 'Ready to Manage Your Business More Easily?',
    ctaText:
      'Manage data, transactions, inventory, and reports in one system.',
    startNow: 'Get Started',
  },
}

export default function Landing() {
  const { language } = useSettings()
  const t = content[language]

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
          <div className="min-w-0 lg:-translate-y-16">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              {t.heroTitle}
            </h1>

            <p className="mt-5 max-w-lg text-lg text-white">
              {t.heroText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#fitur">
                <Button
                  variant="primary"
                  className="bg-[#f8481c] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8481c]/90 hover:shadow-md"
                >
                  {t.tryNow}
                </Button>
              </a>
            </div>
          </div>

          {/* CAROUSEL MOCKUP KANAN */}
          <div
            className="relative min-h-[180px] min-w-0 w-full overflow-hidden sm:min-h-[230px] md:min-h-[320px] lg:min-h-[520px]"
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
                    <div className="w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[520px] pb-10">
                      <DashMockup />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DOTS */}
            <div className="mt-3 flex justify-center gap-1.5">
              {[0, 1, 2, 3, 4].map((index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMockupIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    mockupIndex === index
                      ? 'w-5 bg-white'
                      : 'w-1.5 bg-white/50'
                  }`}
                  aria-label={`Go to mockup ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="fitur"
        className="bg-slate-50 py-20 dark:bg-slate-900"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.featuresTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map(([Icon, title, text, path]) => (
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
      <section className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              {t.benefitsTitle}
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.benefits.map(([Icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.ctaTitle}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
            {t.ctaText}
          </p>

          <div className="mt-8">
            <Link to="/login">
              <Button
                variant="primary"
                className="bg-[#f8481c] px-6 py-3 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8481c]/90 hover:shadow-md"
              >
                {t.startNow}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}