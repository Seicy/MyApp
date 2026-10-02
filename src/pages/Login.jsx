import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Boxes,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

import Button from '../components/Button.jsx'
import { useApp } from '../context/AppContext.jsx'

export default function Login() {
  const { login, toast } = useApp()
  const nav = useNavigate()

  const [f, setF] = useState({
    email: '',
    password: '',
  })

  const [err, setErr] = useState({})
  const [loading, setLoading] = useState(false)

  const submit = (e) => {
    e.preventDefault()

    const er = {}

    if (!/^\S+@\S+\.\S+$/.test(f.email)) {
      er.email = 'Masukkan email yang valid'
    }

    if (f.password.length < 6) {
      er.password = 'Password minimal 6 karakter'
    }

    setErr(er)

    if (Object.keys(er).length) return

    setLoading(true)

    setTimeout(() => {
      setLoading(false)

      if (
        f.email === 'admin@erp.com' &&
        f.password === 'admin123'
      ) {
        login()
        toast('Login berhasil')
        nav('/dashboard')
      } else {
        toast('Email atau password salah', 'error')
      }
    }, 600)
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="hidden flex-col justify-between bg-blue-700 p-12 text-white lg:flex">
        <Link
          to="/"
          className="text-xl font-extrabold"
        >
          ERP SYSTEM
        </Link>

        <div>
          <h2 className="text-3xl font-bold">
            Semua data bisnis, satu tempat.
          </h2>

          <div className="mt-8 space-y-4 text-blue-100">
            {[
              [Boxes, 'Inventory real-time'],
              [BarChart3, 'Laporan otomatis'],
              [ShieldCheck, 'Akses terkontrol'],
            ].map(([Icon, text]) => (
              <p
                key={text}
                className="flex items-center gap-3"
              >
                <Icon className="h-5 w-5" />
                {text}
              </p>
            ))}
          </div>
        </div>

        <p className="text-sm text-blue-100">
          © 2026 ERP System
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">

        {/* LOGIN CARD */}
        <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-lg">

          <form
            onSubmit={submit}
            className="space-y-4"
            noValidate
          >

            {/* BACK */}
            <button
              type="button"
              onClick={() => nav('/')}
              className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            {/* TITLE */}
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Login
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Test Account: admin@erp.com / admin123
              </p>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                value={f.email}
                onChange={(e) =>
                  setF({
                    ...f,
                    email: e.target.value,
                  })
                }
                placeholder="admin@erp.com"
                className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                  err.email
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />

              {err.email && (
                <p className="mt-1 text-xs text-red-500">
                  {err.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={f.password}
                onChange={(e) =>
                  setF({
                    ...f,
                    password: e.target.value,
                  })
                }
                placeholder="••••••••"
                className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:ring-2 ${
                  err.password
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-100'
                    : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                }`}
              />

              {err.password && (
                <p className="mt-1 text-xs text-red-500">
                  {err.password}
                </p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </Button>

          </form>
        </div>
      </div>
    </div>
  )
} 