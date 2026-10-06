import { useState, useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'

import Footer from '../components/Footer.jsx'

import gsap from 'gsap'

import {
  Package, Boxes, ClipboardList, Users, Truck, BarChart3, Database,
  Zap, Eye, Layers, Hand, LogIn, LayoutDashboard, Check, Plus, Tag,
  Search, Wallet, Contact, Pencil, MapPin, Building2, Phone, FileCheck2,
  CalendarDays, Filter, ArrowDownToLine, ArrowUpFromLine, AlertTriangle,
  LineChart, Download, Lightbulb
} from "lucide-react";

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import DashMockup from '../components/DashMockup.jsx'

const features = [
  [
    Package,
    'Product Management',
    'Kelola katalog produk, SKU, kategori, dan harga dalam satu tempat.',
  ],
  [
    Boxes,
    'Inventory Management',
    'Pantau stok barang, stok masuk, stok keluar, dan perubahan inventory dengan mudah.',
  ],
  [
    ClipboardList,
    'Purchase Order',
    'Buat dan lacak pesanan pembelian dari draft hingga diterima.',
  ],
  [
    Users,
    'Customer Management',
    'Simpan data pelanggan dan riwayat transaksinya secara terpusat.',
  ],
  [
    Truck,
    'Supplier Management',
    'Kelola data pemasok dan hubungan pembelian dengan rapi.',
  ],
  [
    BarChart3,
    'Reports & Analytics',
    'Laporan penjualan, pembelian, dan inventory yang siap dibaca.',
  ],
]

const modules = {
  Products: {
    icon: Package,
    path: 'products',
    desc: 'Simpan seluruh katalog produk beserta SKU, kategori, harga, dan stok dalam satu tempat.',
    features: [
      [
        Plus,
        'Tambah, ubah, hapus',
        'Kelola data produk lewat form dengan mudah.',
      ],
      [
        Tag,
        'Kategori dan SKU',
        'Beri kode unik dan kelompokkan produk.',
      ],
      [
        Search,
        'Cari dan filter',
        'Temukan produk berdasarkan nama atau kategori.',
      ],
      [
        Wallet,
        'Harga dan stok',
        'Lihat harga dan jumlah stok dalam satu tabel.',
      ],
    ],
    use: 'Cocok untuk bisnis dengan banyak jenis produk.',
  },

  Customers: {
    icon: Users,
    path: 'customers',
    desc: 'Kumpulkan data pelanggan di satu tempat supaya tim tidak perlu mencari kontak di banyak file.',
    features: [
      [
        Contact,
        'Profil pelanggan',
        'Simpan nama, email, telepon, dan kota.',
      ],
      [
        Search,
        'Pencarian cepat',
        'Cari pelanggan berdasarkan nama.',
      ],
      [
        Pencil,
        'Data selalu terbarui',
        'Ubah atau hapus data kapan saja.',
      ],
      [
        MapPin,
        'Informasi kota',
        'Catat domisili pelanggan.',
      ],
    ],
    use: 'Cocok untuk bisnis dengan pelanggan berulang.',
  },

  Suppliers: {
    icon: Truck,
    path: 'suppliers',
    desc: 'Simpan data pemasok dengan rapi agar semua informasi pembelian siap digunakan.',
    features: [
      [
        Building2,
        'Profil supplier',
        'Catat nama perusahaan dan informasi pemasok.',
      ],
      [
        Phone,
        'Kontak pembelian',
        'Simpan email dan nomor telepon supplier.',
      ],
      [
        Search,
        'Pencarian cepat',
        'Temukan supplier berdasarkan nama.',
      ],
      [
        Pencil,
        'Kelola data',
        'Tambah, ubah, atau hapus supplier.',
      ],
    ],
    use: 'Cocok untuk bisnis dengan banyak pemasok.',
  },

  Purchasing: {
    icon: ClipboardList,
    path: 'purchase-orders',
    desc: 'Catat pesanan pembelian ke supplier secara terstruktur lengkap dengan status, total, dan tanggal.',
    features: [
      [
        ClipboardList,
        'Buat PO',
        'Catat pesanan pembelian ke supplier.',
      ],
      [
        FileCheck2,
        'Status PO',
        'Bedakan PO Approved dan Pending.',
      ],
      [
        CalendarDays,
        'Total dan tanggal',
        'Setiap PO mencatat nilai dan tanggal.',
      ],
      [
        Filter,
        'Filter status',
        'Saring daftar PO berdasarkan status.',
      ],
    ],
    use: 'Cocok untuk tim pembelian.',
  },

  Inventory: {
    icon: Boxes,
    path: 'inventory',
    desc: 'Pantau jumlah stok setiap barang, catat pergerakannya, dan dapatkan tanda saat stok mulai menipis.',
    features: [
      [
        ArrowDownToLine,
        'Stok masuk',
        'Catat barang yang datang.',
      ],
      [
        ArrowUpFromLine,
        'Stok keluar',
        'Catat barang yang keluar.',
      ],
      [
        AlertTriangle,
        'Peringatan stok rendah',
        'Barang dengan stok rendah diberi label.',
      ],
      [
        Boxes,
        'Ringkasan stok',
        'Lihat kondisi inventory secara cepat.',
      ],
    ],
    use: 'Cocok untuk bisnis yang perlu memantau persediaan.',
  },

  Reports: {
    icon: BarChart3,
    path: 'reports',
    desc: 'Lihat gambaran bisnis dari laporan penjualan, pembelian, dan inventory tanpa rekap manual.',
    features: [
      [
        BarChart3,
        'Tiga jenis laporan',
        'Penjualan, pembelian, dan inventory.',
      ],
      [
        LineChart,
        'Grafik visual',
        'Data ditampilkan dalam grafik.',
      ],
      [
        CalendarDays,
        'Filter tanggal',
        'Pilih periode laporan.',
      ],
      [
        Download,
        'Export',
        'Siapkan laporan untuk dibagikan.',
      ],
    ],
    use: 'Cocok untuk melihat kondisi bisnis secara cepat.',
  },
}

const benefits = [
  [Database, 'Data lebih terorganisir'],
  [Zap, 'Proses bisnis lebih efisien'],
  [Eye, 'Monitoring inventory lebih mudah'],
  [Layers, 'Informasi bisnis terpusat'],
  [Hand, 'Mengurangi pekerjaan manual'],
  [FileCheck2, 'Laporan lebih mudah dipantau'],
]

const steps = [
  {
    icon: LogIn,
    title: 'Login ke sistem',
    text: 'Masuk dengan akun untuk mengakses sistem ERP.',
    points: [
      'Masuk dengan email dan password',
      'Langsung diarahkan ke dashboard',
      'Akses menu sesuai kebutuhan',
    ],
  },
  {
    icon: Database,
    title: 'Kelola data dan transaksi',
    text: 'Kelola produk, pelanggan, supplier, pembelian, dan inventory.',
    points: [
      'Tambah dan ubah data',
      'Buat purchase order',
      'Catat stok masuk dan keluar',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Pantau bisnis',
    text: 'Pantau kondisi bisnis melalui dashboard dan laporan.',
    points: [
      'Lihat ringkasan data bisnis',
      'Pantau inventory',
      'Lihat laporan penjualan dan pembelian',
    ],
  },
]

function ModuleTable({ tab }) {
  if (tab === 'Products') {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <span>Product</span>
          <span>SKU</span>
          <span>Price</span>
          <span>Stock</span>
        </div>

        {[
          ['Laptop Pro', 'LP-001', 'Rp12.500.000', '24'],
          ['Keyboard', 'KB-002', 'Rp750.000', '58'],
          ['Mouse Wireless', 'MW-003', 'Rp350.000', '41'],
          ['Monitor', 'MN-004', 'Rp2.800.000', '17'],
        ].map((row) => (
          <div
            key={row[1]}
            className="grid grid-cols-4 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  if (tab === 'Customers') {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <span>Name</span>
          <span>Email</span>
          <span>City</span>
        </div>

        {[
          ['PT Maju Jaya', 'maju@email.com', 'Batam'],
          ['CV Sentosa', 'sentosa@email.com', 'Jakarta'],
          ['PT Nusantara', 'nusantara@email.com', 'Bandung'],
          ['CV Makmur', 'makmur@email.com', 'Medan'],
        ].map((row) => (
          <div
            key={row[1]}
            className="grid grid-cols-3 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  if (tab === 'Suppliers') {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <span>Supplier</span>
          <span>City</span>
          <span>Contact</span>
        </div>

        {[
          ['PT Supplier A', 'Batam', '0812-xxx'],
          ['CV Supplier B', 'Jakarta', '0813-xxx'],
          ['PT Supplier C', 'Medan', '0814-xxx'],
          ['CV Supplier D', 'Bandung', '0815-xxx'],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-3 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  if (tab === 'Purchasing') {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <span>PO</span>
          <span>Supplier</span>
          <span>Total</span>
          <span>Status</span>
        </div>

        {[
          ['PO-001', 'PT Supplier A', 'Rp15.000.000', 'Approved'],
          ['PO-002', 'CV Supplier B', 'Rp8.500.000', 'Pending'],
          ['PO-003', 'PT Supplier C', 'Rp12.300.000', 'Approved'],
          ['PO-004', 'CV Supplier D', 'Rp6.700.000', 'Pending'],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-4 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            <span>{row[0]}</span>
            <span>{row[1]}</span>
            <span>{row[2]}</span>
            <span>
              <span
                className={
                  row[3] === 'Approved'
                    ? 'rounded-full bg-emerald-50 px-2 py-1 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                    : 'rounded-full bg-amber-50 px-2 py-1 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400'
                }
              >
                {row[3]}
              </span>
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (tab === 'Inventory') {
    return (
      <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <div className="grid grid-cols-4 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
          <span>Product</span>
          <span>In</span>
          <span>Out</span>
          <span>Stock</span>
        </div>

        {[
          ['Laptop Pro', '30', '6', '24'],
          ['Keyboard', '70', '12', '58'],
          ['Mouse Wireless', '50', '9', '41'],
          ['Monitor', '20', '3', '17'],
        ].map((row) => (
          <div
            key={row[0]}
            className="grid grid-cols-4 border-t border-slate-100 px-3 py-3 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300"
          >
            {row.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          ['Sales', 'Rp42,5 jt'],
          ['Purchasing', 'Rp27,8 jt'],
          ['Inventory', '8.410'],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-lg border border-slate-200 p-3 dark:border-slate-700 dark:bg-slate-800"
          >
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {label}
            </p>

            <p className="mt-1 font-bold text-slate-800 dark:text-white">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="flex h-40 items-end gap-3 rounded-lg border border-slate-200 p-4 dark:border-slate-700">
        {[45, 65, 40, 80, 60, 90, 70].map((height, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-blue-500"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Landing() {
  const [tab, setTab] = useState('Products')
  const [mockupIndex, setMockupIndex] = useState(0)
  const [isMockupHover, setIsMockupHover] = useState(false)

  const statsRef = useRef(null)

  useEffect(() => {
    if (isMockupHover) return

    const interval = setInterval(() => {
      setMockupIndex((prev) => (prev + 1) % 5)
    }, 5000)

    return () => clearInterval(interval)
  }, [isMockupHover])

  useEffect(() => {
    const track = statsRef.current

    if (!track) return

    const items = gsap.utils.toArray('.stat-item', track)

    if (!items.length) return

    const itemWidth = items[0].offsetWidth
    const totalWidth = itemWidth * stats.length

    const tween = gsap.to(track, {
      x: -totalWidth,
      duration: 12,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      tween.kill()
    }
  }, [])

  const m = modules[tab]

  return (
    <div className="bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#005a9e]">
        <div className="mx-auto grid max-w-7xl min-w-0 items-center gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.6fr_0.9fr] lg:gap-10 lg:py-24">

          {/* TEKS KIRI */}
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
              Berhenti buang waktu mengurus sistem yang rumit.{' '}
              <span>
                Saatnya kembali fokus kembangkan bisnis anda.
              </span>
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
                  Bebaskan waktu anda sekarang
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

            <button
              type="button"
              onClick={() =>
                setMockupIndex((prev) => (prev - 1 + 5) % 5)
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[#0c59a0] shadow-md transition hover:bg-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() =>
                setMockupIndex((prev) => (prev + 1) % 5)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-[#0c59a0] shadow-md transition hover:bg-white"
            >
              ›
            </button>

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
        className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-slate-950"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mx-auto max-w-xl text-center text-3xl font-bold text-slate-900 dark:text-white">
            Semua Kebutuhan Bisnis dalam Satu Platform
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([Icon, title, text]) => (
              <FeatureCard
                key={title}
                icon={Icon}
                title={title}
                text={text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ERP MODULES */}
      <section className="bg-[#0c59a0] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mx-auto mt-2 text-center text-3xl font-bold text-white">
            Modul ERP
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-center text-white">
            Setiap modul menangani satu area kerja dan semuanya memakai data yang sama.
          </p>

          <div
            className="mt-8 flex justify-center gap-2 overflow-x-auto pb-2"
            style={{ maxWidth: '100%' }}
          >
            {Object.entries(modules).map(([key, value]) => {
              const Icon = value.icon

              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex flex-none items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    tab === key
                      ? 'border-2 border-white bg-[#f8481c] text-white shadow-sm'
                      : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {key}
                </button>
              )
            })}
          </div>

          <div className="mt-6 grid gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-200 sm:p-8 lg:grid-cols-12 dark:border-slate-700 dark:bg-slate-900">

            {/* LEFT */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-600 p-3 text-white">
                  {(() => {
                    const Icon = m.icon
                    return <Icon className="h-6 w-6" />
                  })()}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {tab}
                </h3>
              </div>

              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {m.desc}
              </p>

              <div className="mt-6 space-y-3">
                {m.features.map(([Icon, title, description]) => (
                  <div
                    key={title}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:border-blue-100 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800"
                  >
                    <div className="h-fit rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      <Icon className="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {title}
                      </p>

                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex gap-3 rounded-xl bg-blue-50 p-4 text-sm text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                <Lightbulb className="h-5 w-5 flex-none" />
                <p>{m.use}</p>
              </div>
            </div>

            {/* RIGHT MOCKUP */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">

                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-slate-700 dark:bg-slate-800">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />

                  <div className="ml-3 flex-1 rounded-md bg-white px-3 py-1 text-xs text-slate-400 dark:bg-slate-700 dark:text-slate-400">
                    app.Buka Nota.com/{m.path}
                  </div>
                </div>

                <div className="p-5">
                  <ModuleTable tab={tab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CARA KERJA */}
      <section className="bg-slate-50 py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Cara Kerja
          </h2>

          <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-400">
            Tiga langkah sederhana dari masuk ke sistem hingga bisnis terpantau.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <div
                  key={step.title}
                  className="rounded-xl bg-white p-6 shadow-sm dark:bg-slate-900"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-700">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {step.text}
                  </p>

                  <ul className="mt-5 space-y-3">
                    {step.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 flex-none text-blue-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* DASHBOARD */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-3xl font-bold text-slate-900 dark:text-white">
            Dashboard yang Siap Dipakai Tim Anda
          </h2>

          <DashMockup full />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-[#0c59a0]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-bold text-white">
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

                <p className="font-medium text-white">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0c59a0] px-4 pb-20 sm:px-6">
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