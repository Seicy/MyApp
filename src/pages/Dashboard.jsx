import { Package, Users, Truck, AlertTriangle } from 'lucide-react'

import StatCard from '../components/StatCard.jsx'
import BarChart from '../components/BarChart.jsx'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'

import {
  products,
  customers,
  suppliers,
  purchaseOrders,
  activities,
  salesData,
  months,
  rupiah,
} from '../data/dummy.js'

export default function Dashboard() {
  const low = products.filter((p) => p.stock < 10)
  const pending = purchaseOrders.filter((p) => p.status === 'Pending')

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">
        Good morning, Admin
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          icon={Package}
          label="Total Products"
          value={products.length}
        />

        <StatCard
          icon={Users}
          label="Total Customers"
          value={customers.length}
        />

        <StatCard
          icon={Truck}
          label="Total Suppliers"
          value={suppliers.length}
        />

        <StatCard
          icon={AlertTriangle}
          label="Low Stock Items"
          value={low.length}
          tone="bg-amber-50 text-amber-600"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-semibold text-slate-900">
            Sales Overview
          </h2>

          <BarChart
            data={salesData}
            labels={months}
            height={180}
          />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-semibold text-slate-900">
            Inventory Overview
          </h2>

          <BarChart
            data={products.map((p) => p.stock)}
            labels={products.map((p) => p.sku)}
            height={180}
          />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          <h2 className="font-semibold text-slate-900">
            Recent Purchase Orders
          </h2>

          <DataTable
            columns={[
              {
                key: 'no',
                label: 'No',
              },
              {
                key: 'supplier',
                label: 'Supplier',
              },
              {
                key: 'total',
                label: 'Total',
                render: (r) => rupiah(r.total),
              },
              {
                key: 'status',
                label: 'Status',
                render: (r) => (
                  <Badge
                    tone={
                      r.status === 'Approved'
                        ? 'green'
                        : 'amber'
                    }
                  >
                    {r.status}
                  </Badge>
                ),
              },
            ]}
            rows={purchaseOrders}
          />
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="mb-3 font-semibold text-slate-900">
              Recent Activities
            </h2>

            {activities.map((a) => (
              <p
                key={a}
                className="border-t border-slate-100 py-2 text-sm first:border-0"
              >
                {a}
              </p>
            ))}
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
            <p className="font-semibold">
              Alerts
            </p>

            {low.map((p) => (
              <p key={p.id}>
                Stok rendah: {p.name} ({p.stock})
              </p>
            ))}

            <p>
              {pending.length} PO menunggu persetujuan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}