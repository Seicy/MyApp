import CrudPage from './CrudPage.jsx'
import { suppliers } from '../data/dummy.js'
export default function Suppliers() {
  return <CrudPage title="Suppliers" singular="Supplier" initial={suppliers} fields={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' }, { key: 'city', label: 'City' }]} />
}
