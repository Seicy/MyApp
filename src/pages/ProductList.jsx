import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const products = [
  {
    name: "Point Of Sale",
    description:
      "Kelola transaksi penjualan dengan cepat, mulai dari scan produk hingga cetak struk.",
    path: "/produk/pos",
  },
  {
    name: "Payment",
    description:
      "Kelola berbagai transaksi pembayaran dalam satu sistem yang terintegrasi.",
    path: "/produk/payment",
  },
  {
    name: "Taking Order",
    description:
      "Permudah proses pemesanan pelanggan agar lebih cepat dan terorganisir.",
    path: "/produk/taking-order",
  },
  {
    name: "Manajemen Stok",
    description:
      "Pantau persediaan barang dan kelola stok dengan lebih mudah.",
    path: "/produk/manajemen-stok",
  },
  {
    name: "Akuntansi",
    description:
      "Kelola pencatatan transaksi dan laporan keuangan bisnis dalam satu sistem.",
    path: "/produk/akuntansi",
  },
];

export default function ProductList() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HEADER */}
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20">
          {/* BREADCRUMB */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
            <Link
              to="/"
              className="transition hover:text-blue-600"
            >
              Beranda
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-900">
              Produk
            </span>
          </div>

          <div className="max-w-3xl">

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Solusi untuk kebutuhan bisnis Anda
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Pilih produk yang sesuai dengan kebutuhan operasional
              bisnis dan kelola semuanya dalam satu ekosistem.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCT LIST */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <span className="text-lg font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-900">
                  {product.name}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>

                <Link
                  to={product.path}
                  className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Lihat Produk →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Kelola bisnis dalam satu platform
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Gunakan solusi yang sesuai dengan kebutuhan bisnis Anda.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Mulai Sekarang
          </Link>
        </div>
      </section>

      {/* FOOTER */}
<footer className="border-t border-slate-200 bg-white">
  <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">

    <div>
      <p className="font-extrabold">
        ERP SYSTEM
      </p>

      <p className="mt-3 text-sm text-slate-500">
        Sistem ERP sederhana untuk membantu pengelolaan bisnis.
      </p>
    </div>

    {[
      [
        'Product',
        [
          { label: 'Products', path: '/produk' },
          { label: 'Inventory', path: '/inventory' },
          { label: 'Purchasing', path: '/purchase-orders' },
          { label: 'Reports', path: '/reports' },
        ],
      ],
      [
        'Company',
        [
          { label: 'About', path: '/tentang' },
          { label: 'Contact', path: '/tentang/kontak' },
          { label: 'FAQ', path: '/informasi/faq' },
        ],
      ],
      [
        'Resources',
        [
          { label: 'Documentation', path: '/informasi/dokumentasi' },
          { label: 'Articles', path: '/informasi/artikel' },
        ],
      ],
    ].map(([heading, links]) => (
      <div key={heading}>
        <p className="mb-3 font-semibold">
          {heading}
        </p>

        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block py-1 text-sm text-slate-600 transition hover:text-blue-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    ))}

  </div>

  <p className="border-t border-slate-100 py-5 text-center text-sm text-slate-500">
    © 2026 ERP System. All rights reserved.
  </p>
</footer>
    </div>
  );
}