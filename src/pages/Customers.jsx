import CrudPage from './CrudPage.jsx'
import { customers } from '../data/dummy.js'
export default function Customers() {
  return <CrudPage title="Customers" singular="Customer" initial={customers} fields={[{ key: 'name', label: 'Name' }, { key: 'email', label: 'Email' }, { key: 'phone', label: 'Phone' }, { key: 'city', label: 'City' }]} />
}
