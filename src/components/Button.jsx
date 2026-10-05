export default function Button({
  variant = 'primary',
  className = '',
  children,
  ...p
}) {
  const v = {
    primary:
      'bg-[#0c59a0] text-white shadow-sm hover:bg-[#0c59a0]/90',

    secondary:
      'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50',

    danger:
      'bg-red-600 text-white hover:bg-red-700',

    ghost:
      'text-slate-600 hover:bg-slate-100',
  }[variant]

  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 disabled:opacity-50 ${v} ${className}`}
      {...p}
    >
      {children}
    </button>
  )
}