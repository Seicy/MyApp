import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const product = {
  name: "Manajemen Stok",

  headline: [
    "Stok lebih ",
    "terkontrol dan terpantau",
    ".",
  ],

  lead:
    "Pantau persediaan barang secara lebih mudah agar ketersediaan stok selalu dapat diketahui.",

  benefits: [
    [
      "Pantau stok secara real-time",
      "Lihat jumlah persediaan barang yang tersedia dalam satu sistem.",
    ],
    [
      "Kelola pergerakan stok",
      "Catat perubahan stok dari transaksi masuk maupun keluar.",
    ],
    [
      "Kurangi risiko kehabisan stok",
      "Dapatkan informasi stok yang membantu bisnis mengatur persediaan.",
    ],
  ],
};

export default function ManajemenStok() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-16">

          {/* BREADCRUMB */}
          <div className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <Link
              to="/produk"
              className="transition hover:text-blue-600"
            >
              Produk
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-900">
              Manajemen Stok
            </span>
          </div>

          {/* HERO CONTENT */}
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                {product.headline[0]}

                <span className="text-blue-600">
                  {product.headline[1]}
                </span>

                {product.headline[2]}
              </h1>

              <p className="mt-5 max-w-lg text-lg text-slate-600">
                {product.lead}
              </p>

              <a
                href="#platform"
                className="mt-8 inline-flex items-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Pelajari Manajemen Stok
              </a>
            </div>

            {/* RIGHT - MOCKUP */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">

              <h3 className="mb-5 text-sm font-semibold text-slate-600">
                Manajemen Stok · Inventory
              </h3>

              <div className="space-y-3">

                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Kopi Arabica
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      SKU: KOP-001
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      128
                    </p>
                    <p className="text-xs text-green-600">
                      Stok Aman
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Roti Bakar
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      SKU: ROT-002
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      24
                    </p>
                    <p className="text-xs text-yellow-600">
                      Stok Menipis
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Susu Fresh
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      SKU: SUS-003
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">
                      8
                    </p>
                    <p className="text-xs text-red-600">
                      Stok Rendah
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Manajemen Stok
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Kelola persediaan dengan lebih mudah dan terorganisir.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {product.benefits.map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  ✓
                </div>

                <h3 className="font-semibold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PLATFORM */}
      <section id="platform" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Semua Kebutuhan Bisnis dalam Satu Platform
            </h2>

            <p className="mt-3 text-slate-600">
              Kelola stok, transaksi, pesanan, customer,
              supplier, hingga laporan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Point Of Sale
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Setiap transaksi dapat terhubung dengan perubahan persediaan.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Taking Order
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pesanan yang dicatat dapat membantu memperbarui informasi stok.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Laporan
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau informasi persediaan melalui data dan laporan bisnis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-600 px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Stok dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Pantau dan kelola persediaan dalam satu sistem.
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
              "Product",
              [
                { label: "Products", path: "/produk" },
                { label: "Inventory", path: "/inventory" },
                { label: "Purchasing", path: "/purchase-orders" },
                { label: "Reports", path: "/reports" },
              ],
            ],
            [
              "Company",
              [
                { label: "About", path: "/tentang" },
                { label: "Contact", path: "/tentang/kontak" },
                { label: "FAQ", path: "/informasi/faq" },
              ],
            ],
            [
              "Resources",
              [
                { label: "Documentation", path: "/informasi/dokumentasi" },
                { label: "Articles", path: "/informasi/artikel" },
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