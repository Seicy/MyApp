import CrudPage from './CrudPage.jsx'
import Badge from '../components/Badge.jsx'
import { purchaseOrders, rupiah } from '../data/dummy.js'
export default function PurchaseOrders() {
  return <CrudPage title="Purchase Orders" singular="PO" initial={purchaseOrders.map((p) => ({ ...p, name: p.no }))} filter={{ key: 'status', label: 'Status' }}
    fields={[{ key: 'no', label: 'PO No' }, { key: 'supplier', label: 'Supplier' }, { key: 'total', label: 'Total', type: 'number', render: (r) => rupiah(r.total) }, { key: 'date', label: 'Date', type: 'date' }, { key: 'status', label: 'Status', render: (r) => <Badge tone={r.status === 'Approved' ? 'green' : 'amber'}>{r.status}</Badge> }]} />
}
