import { useState } from 'react'
import { Boxes, AlertTriangle, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react'
import StatCard from '../components/StatCard.jsx'
import DataTable from '../components/DataTable.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import { products } from '../data/dummy.js'
import { useApp } from '../context/AppContext.jsx'
export default function Inventory() {
  const { toast } = useApp(); const [rows, setRows] = useState(products); const [inn, setIn] = useState(0); const [out, setOut] = useState(0)
  const move = (r, d) => {
    if (r.stock + d < 0) return toast('Stok tidak mencukupi', 'error')
    setRows(rows.map((x) => (x.id === r.id ? { ...x, stock: x.stock + d } : x))); d > 0 ? setIn(inn + d) : setOut(out - d); toast(d > 0 ? 'Stok masuk dicatat' : 'Stok keluar dicatat')
  }
  const cols = [{ key: 'name', label: 'Product' }, { key: 'sku', label: 'SKU' }, { key: 'stock', label: 'Stock' },
    { key: 's', label: 'Status', render: (r) => (r.stock < 10 ? <Badge tone="red">Low</Badge> : <Badge tone="green">OK</Badge>) },
    { key: 'a', label: 'Actions', render: (r) => <div className="flex gap-2"><Button variant="secondary" onClick={() => move(r, 10)}>+10 In</Button><Button variant="secondary" onClick={() => move(r, -5)}>-5 Out</Button></div> }]
  return (
    <div className="space-y-6"><h1 className="text-2xl font-bold">Inventory</h1>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Boxes} label="Current Stock" value={rows.reduce((a, r) => a + r.stock, 0)} />
        <StatCard icon={AlertTriangle} label="Low Stock" value={rows.filter((r) => r.stock < 10).length} tone="bg-amber-50 text-amber-600" />
        <StatCard icon={ArrowDownToLine} label="Stock In" value={inn} tone="bg-emerald-50 text-emerald-600" />
        <StatCard icon={ArrowUpFromLine} label="Stock Out" value={out} tone="bg-red-50 text-red-600" />
      </div><DataTable columns={cols} rows={rows} /></div>
  )
}
