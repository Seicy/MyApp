import { useState, useRef, useEffect } from 'react'

import { ChevronDown } from 'lucide-react'

import { Link } from 'react-router-dom'

export default function Dropdown({ label, items = [] }) {
  const [open, setOpen] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
      >
        {label}

        <ChevronDown
          className={`h-4 w-4 transition ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 w-64 pt-1">
          <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
{items.map((item) => (
  <Link
    key={item.path}
    to={item.path}
    onClick={() => setOpen(false)}
    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
      item.divider
        ? 'mt-2 border-t border-slate-200 pt-3 font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600'
        : 'text-slate-700 hover:bg-blue-50 hover:text-blue-600'
    }`}
  >
    {item.label}
  </Link>
))}
          </div>
        </div>
      )}
    </div>
  )
}