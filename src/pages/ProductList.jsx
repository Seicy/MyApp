import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar.jsx'
import Button from '../components/Button.jsx'
import Footer from '../components/Footer.jsx'

const products = [
  {
    name: 'Point Of Sale',
    description:
      'Kelola transaksi penjualan dengan cepat, mulai dari scan produk hingga cetak struk.',
    path: '/produk/pos',
  },
  {
    name: 'Payment',
    description:
      'Kelola berbagai transaksi pembayaran dalam satu sistem yang terintegrasi.',
    path: '/produk/payment',
  },
  {
    name: 'Taking Order',
    description:
      'Permudah proses pemesanan pelanggan agar lebih cepat dan terorganisir.',
    path: '/produk/taking-order',
  },
  {
    name: 'Manajemen Stok',
    description:
      'Pantau persediaan barang dan kelola stok dengan lebih mudah.',
    path: '/produk/manajemen-stok',
  },
  {
    name: 'Akuntansi',
    description:
      'Kelola pencatatan transaksi dan laporan keuangan bisnis dalam satu sistem.',
    path: '/produk/akuntansi',
  },
]

export default function ProductList() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#0c59a0]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24">

          {/* BREADCRUMB */}
          <div className="mb-10 flex items-center gap-2 text-sm text-white/80">
            <Link
              to="/"
              className="transition-colors hover:text-white"
            >
              Beranda
            </Link>

            <span>/</span>

            <span className="font-medium text-white">
              Produk
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Solusi untuk kebutuhan bisnis Anda
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
              Pilih produk yang sesuai dengan kebutuhan operasional
              bisnis dan kelola semuanya dalam satu ekosistem.
            </p>
          </div>

        </div>
      </section>

      {/* PRODUCT LIST */}
      <section className="bg-white py-20 transition-colors duration-200 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
              >
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0c59a0] dark:bg-blue-950/50 dark:text-blue-400">
                  <span className="text-lg font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {product.description}
                </p>

                {/* LINK */}
                <Link
                  to={product.path}
                  className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-[#0c59a0] transition-colors hover:text-[#0c59a0]/80 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  Lihat Produk →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-4 pb-20 transition-colors duration-200 sm:px-6 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl rounded-2xl bg-[#0c59a0] px-6 py-14 text-center text-white">
          <h2 className="text-3xl font-bold">
            Kelola bisnis dalam satu platform
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-white/80">
            Gunakan solusi yang sesuai dengan kebutuhan bisnis Anda.
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