import { Link } from 'react-router-dom'

export default function FeatureCard({
  icon: Icon,
  title,
  text,
  path,
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex w-fit rounded-lg bg-blue-50 p-3 text-blue-600">
        <Icon className="h-5 w-5" />
      </div>

      <h3 className="text-lg font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {text}
      </p>

      <Link
        to={path}
        className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-[#0c59a0] transition-colors hover:text-[#0c59a0]/80"
      >
        Lihat Produk →
      </Link>
    </div>
  )
}