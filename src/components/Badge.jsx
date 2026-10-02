export default function Badge({
  children,
  tone = 'blue',
}) {
  const t = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    red: 'bg-red-50 text-red-700',
  }[tone]

  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${t}`}>
      {children}
    </span>
  )
}