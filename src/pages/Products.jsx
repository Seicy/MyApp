import CrudPage from './CrudPage.jsx'
import { products, rupiah } from '../data/dummy.js'

export default function Products() {
  return (
    <CrudPage
      title="Products"
      singular="Product"
      initial={products}
      filter={{ key: 'category', label: 'Kategori' }}
      fields={[
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'sku',
          label: 'SKU',
        },
        {
          key: 'category',
          label: 'Category',
          type: 'select',
          options: [
            'Electronics',
            'Accessories',
            'Furniture',
          ],
        },
        {
          key: 'price',
          label: 'Price',
          type: 'number',
          render: (r) => rupiah(r.price),
        },
        {
          key: 'stock',
          label: 'Stock',
          type: 'number',
        },
      ]}
    />
  )
}