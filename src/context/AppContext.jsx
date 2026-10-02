import { createContext, useContext, useState, useCallback } from 'react'

import { CheckCircle2, XCircle } from 'lucide-react'

const Ctx = createContext(null)

export const useApp = () => useContext(Ctx)

export function AppProvider({ children }) {
  const [authed, setAuthed] = useState(
    () => localStorage.getItem('erp_auth') === '1'
  )

  const [toasts, setToasts] = useState([])

  const toast = useCallback((message, type = 'success') => {
    const id = Date.now() + Math.random()

    setToasts((t) => [...t, { id, message, type }])

    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, 3000)
  }, [])

  const login = () => {
    localStorage.setItem('erp_auth', '1')
    setAuthed(true)
  }

  const logout = () => {
    localStorage.removeItem('erp_auth')
    setAuthed(false)
  }

  return (
    <Ctx.Provider value={{ authed, login, logout, toast }}>
      {children}

      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-lg"
          >
            {t.type === 'success' ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}

            {t.message}
          </div>
        ))}
      </div>
    </Ctx.Provider>
  )
}