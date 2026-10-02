import { Package, Users, Truck, Boxes } from 'lucide-react'

import BarChart from './BarChart.jsx'

import { salesData, months, purchaseOrders, rupiah } from '../data/dummy.js'

export default function DashMockup({ full = false }) {
  const stats = [
    [Package, 'Products', '1,248', 'text-blue-600', 'bg-blue-50'],
    [Users, 'Customers', '352', 'text-cyan-600', 'bg-cyan-50'],
    [Truck, 'Suppliers', '124', 'text-indigo-600', 'bg-indigo-50'],
    [Boxes, 'Inventory', '8,410', 'text-sky-600', 'bg-sky-50'],
  ]

  return (
    <div className="card flex overflow-hidden bg-white rounded-2xl shadow-xl">

      {full && (
        <div className="hidden w-40 shrink-0 space-y-2 border-r border-slate-200 bg-slate-50 p-3 text-xs text-slate-500 sm:block">
          <p className="font-bold text-ink">ERP SYSTEM</p>

          {[
            'Dashboard',
            'Products',
            'Customers',
            'Suppliers',
            'Purchase',
            'Inventory',
            'Reports',
          ].map((s, i) => (
            <p
              key={s}
              className={`rounded px-2 py-1.5 ${
                i === 0
                  ? 'bg-blue-50 font-semibold text-blue-600'
                  : ''
              }`}
            >
              {s}
            </p>
          ))}
        </div>
      )}

      <div className="min-w-0 flex-1 space-y-3 p-4">

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {stats.map(([I, l, v, iconColor, iconBg]) => (
            <div
              key={l}
              className="rounded-lg border border-slate-200 bg-white p-3"
            >
              <div
                className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}
              >
                <I className={`h-4 w-4 ${iconColor}`} />
              </div>

              <p className="text-[11px] text-slate-500">
                {l}
              </p>

              <p className="text-sm font-bold text-slate-800">
                {v}
              </p>
            </div>
          ))}
        </div>

        {/* Sales Revenue + Recent Transactions */}
        <div className="space-y-3">

          {/* Sales Revenue */}
          <div className="rounded-lg border border-blue-100 bg-white p-3">
            <p className="mb-2 text-xs font-semibold text-slate-700">
              Sales / Revenue
            </p>

            <BarChart
              data={salesData}
              labels={months}
              height={full ? 150 : 110}
            />
          </div>

          {/* Recent Transactions */}
          <div className="rounded-lg border border-slate-200 bg-white p-3 text-xs">
            <p className="mb-2 font-semibold text-slate-700">
              {full ? 'Purchase Orders' : 'Recent Transactions'}
            </p>

            {purchaseOrders.map((p) => (
              <div
                key={p.id}
                className="flex justify-between border-t border-slate-100 py-2 first:border-0"
              >
                <span>{p.no}</span>

                <span className="hidden text-slate-500 sm:inline">
                  {p.supplier}
                </span>

                <span className="font-medium">
                  {rupiah(p.total)}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  )
}