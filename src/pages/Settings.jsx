import { useState } from 'react'

import Button from '../components/Button.jsx'

import { useApp } from '../context/AppContext.jsx'

export default function Settings() {
  const { toast } = useApp()

  const [n, setN] = useState({
    email: true,
    lowStock: true,
    po: false,
  })

  const save = (e) => {
    e.preventDefault()
    toast('Pengaturan disimpan')
  }

  return (
    <form onSubmit={save} className="max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Settings
      </h1>

      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-900">
          Profile
        </h2>

        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          defaultValue="Admin"
        />

        <input
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          defaultValue="admin@erp.com"
        />
      </div>

      <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-900">
          Account settings
        </h2>

        <input
          type="password"
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          placeholder="Password baru"
        />
      </div>

      <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="font-semibold text-slate-900">
          Notification settings
        </h2>

        {[
          ['email', 'Notifikasi email'],
          ['lowStock', 'Peringatan stok rendah'],
          ['po', 'Update purchase order'],
        ].map(([k, l]) => (
          <label
            key={k}
            className="flex items-center gap-2 text-sm text-slate-700"
          >
            <input
              type="checkbox"
              checked={n[k]}
              onChange={() =>
                setN({
                  ...n,
                  [k]: !n[k],
                })
              }
            />

            {l}
          </label>
        ))}
      </div>

      <Button>
        Save changes
      </Button>
    </form>
  )
}