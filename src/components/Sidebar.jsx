import { NavLink, useNavigate } from 'react-router-dom'

import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  ClipboardList,
  Boxes,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react'

import { useApp } from '../context/AppContext.jsx'

const groups = [
  [
    'Main',
    [
      ['/dashboard', 'Dashboard', LayoutDashboard],
    ],
  ],
  [
    'Master Data',
    [
      ['/products', 'Products', Package],
      ['/customers', 'Customers', Users],
      ['/suppliers', 'Suppliers', Truck],
    ],
  ],
  [
    'Operations',
    [
      ['/purchasing', 'Purchase Orders', ClipboardList],
      ['/inventory', 'Inventory', Boxes],
      ['/reports', 'Reports', BarChart3],
    ],
  ],
  [
    'System',
    [
      ['/settings', 'Settings', Settings],
    ],
  ],
]

export default function Sidebar({ open, onClose }) {
  const { logout } = useApp()
  const nav = useNavigate()

  const cls = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
      isActive
        ? 'bg-blue-50 text-blue-600'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`

  const handleLogout = () => {
    logout()
    nav('/login')
  }

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* LOGO */}
        <div className="flex h-16 items-center gap-2 border-b border-slate-100 px-5 text-lg font-extrabold text-slate-900">
          <span className="rounded-lg bg-blue-600 px-2 py-0.5 text-white">
            E
          </span>
          ERP SYSTEM
        </div>

        {/* MENU */}
        <nav className="flex-1 space-y-5 p-4">
          {groups.map(([group, items]) => (
            <div key={group}>
              <p className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {group}
              </p>

              <div className="space-y-1">
                {items.map(([to, label, Icon]) => (
                  <NavLink
                    key={to}
                    to={to}
                    className={cls}
                    onClick={onClose}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* LOGOUT */}
        <div className="border-t border-slate-100 p-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}