export default function StatCard({
  icon: Icon,
  label,
  value,
  tone = 'text-blue-600 bg-blue-50',
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className={`rounded-lg p-2.5 ${tone}`}>
        <Icon className="h-5 w-5" />
      </div>

      <div>
        <p className="text-sm text-slate-500">
          {label}
        </p>

        <p className="text-2xl font-bold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  )
}