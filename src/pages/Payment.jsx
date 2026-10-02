import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Button from "../components/Button";

const product = {
  name: "Payment",

  headline: [
    "Pembayaran lebih ",
    "mudah dan terintegrasi",
    ".",
  ],

  lead:
    "Kelola berbagai metode pembayaran dalam satu sistem agar proses transaksi lebih cepat dan mudah dipantau.",

  benefits: [
    [
      "Berbagai metode pembayaran",
      "Dukung proses pembayaran dengan berbagai metode sesuai kebutuhan bisnis.",
    ],
    [
      "Transaksi lebih cepat",
      "Proses pembayaran terintegrasi langsung dengan sistem kasir.",
    ],
    [
      "Data pembayaran tercatat",
      "Setiap transaksi tersimpan sehingga lebih mudah dipantau dan dikelola.",
    ],
  ],
};

export default function Payment() {
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
        Payment
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
          Pelajari Payment
        </a>
      </div>

      {/* RIGHT */}
      {/* mockup kamu tetap di sini */}

    </div>
  </div>
</section>

      {/* BENEFITS */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Payment
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Pembayaran yang terintegrasi dengan operasional bisnis.
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
              Kelola pembayaran, transaksi, inventory, customer,
              supplier, hingga laporan dalam satu sistem ERP.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Point Of Sale
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Proses transaksi dan pembayaran langsung dari sistem kasir.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Manajemen Stok
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Pantau perubahan stok berdasarkan aktivitas transaksi.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <h3 className="font-semibold">
                Laporan
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Data transaksi dapat digunakan untuk membantu membuat laporan bisnis.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-2xl bg-blue-600 px-6 py-14 text-center text-white">

          <h2 className="text-3xl font-bold">
            Siap Mengelola Pembayaran dengan Lebih Mudah?
          </h2>

          <p className="mt-3 text-blue-100">
            Kelola transaksi dan pembayaran dalam satu sistem.
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
                {
                  label: "Documentation",
                  path: "/informasi/dokumentasi",
                },
                {
                  label: "Articles",
                  path: "/informasi/artikel",
                },
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