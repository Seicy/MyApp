import { useState } from 'react'
import { Download } from 'lucide-react'

import Button from '../components/Button.jsx'
import BarChart from '../components/BarChart.jsx'
import { salesData, months, products } from '../data/dummy.js'
import { useApp } from '../context/AppContext.jsx'

export default function Reports() {
  const { toast } = useApp()

  const [type, setType] = useState('Sales')

  const [from, setFrom] = useState('2026-01-01')
  const [to, setTo] = useState('2026-09-30')

  const [report, setReport] = useState(null)

  const generateReport = () => {
    if (!from || !to) {
      toast('Tanggal harus diisi', 'error')
      return
    }

    if (from > to) {
      toast('Tanggal mulai tidak boleh lebih besar dari tanggal akhir', 'error')
      return
    }

    let data
    let labels

    if (type === 'Sales') {
      data = salesData
      labels = months
    } else if (type === 'Purchase') {
      data = salesData.map((v) => Math.round(v * 0.6))
      labels = months
    } else {
      data = products.map((p) => p.stock)
      labels = products.map((p) => p.sku)
    }

    setReport({
      type,
      from,
      to,
      data,
      labels,
    })

    toast(`${type} report berhasil dibuat`)
  }

  const exportReport = () => {
    if (!report) {
      toast('Generate report terlebih dahulu', 'error')
      return
    }

    toast(`Report ${report.type} diexport`)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-slate-900">
          Reports
        </h1>

        <Button onClick={exportReport}>
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Report Type */}
      <div className="flex flex-wrap gap-2">
        {['Sales', 'Purchase', 'Inventory'].map((t) => (
          <button
            key={t}
            onClick={() => {
              setType(t)
              setReport(null)
            }}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              type === t
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            {t} Report
          </button>
        ))}
      </div>

      {/* Date Filter */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 font-semibold text-slate-900">
          Report Period
        </h2>

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              From
            </label>

            <input
              type="date"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              To
            </label>

            <input
              type="date"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <Button onClick={generateReport}>
            Generate Report
          </Button>
        </div>
      </div>

      {/* Report Result */}
      {report && (
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4">
            <h2 className="font-semibold text-slate-900">
              {report.type} Report
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {report.from} s/d {report.to}
            </p>
          </div>

          <BarChart
            data={report.data}
            labels={report.labels}
            height={260}
          />
        </div>
      )}

      {/* Initial State */}
      {!report && (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
          <p className="text-sm text-slate-500">
            Pilih periode tanggal lalu klik Generate Report
          </p>
        </div>
      )}
    </div>
  )
}