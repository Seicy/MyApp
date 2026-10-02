export const products = [
  { id: 1, name: 'Laptop Pro 14', sku: 'LP-014', category: 'Electronics', price: 15500000, stock: 42 },
  { id: 2, name: 'Wireless Mouse', sku: 'WM-201', category: 'Accessories', price: 250000, stock: 8 },
  { id: 3, name: 'Office Chair', sku: 'OC-330', category: 'Furniture', price: 1750000, stock: 25 },
  { id: 4, name: 'Monitor 27"', sku: 'MN-270', category: 'Electronics', price: 3200000, stock: 5 },
  { id: 5, name: 'Mechanical Keyboard', sku: 'KB-110', category: 'Accessories', price: 890000, stock: 60 },
]
export const customers = [
  { id: 1, name: 'PT Maju Bersama', email: 'info@majubersama.co.id', phone: '021-555-0101', city: 'Jakarta' },
  { id: 2, name: 'CV Sinar Abadi', email: 'sales@sinarabadi.id', phone: '0778-555-022', city: 'Batam' },
  { id: 3, name: 'Toko Sejahtera', email: 'halo@sejahtera.com', phone: '031-555-0303', city: 'Surabaya' },
]
export const suppliers = [
  { id: 1, name: 'PT Global Supply', email: 'sales@globalsupply.co.id', phone: '021-555-0909', city: 'Bekasi' },
  { id: 2, name: 'CV Tekno Utama', email: 'order@teknoutama.id', phone: '022-555-0808', city: 'Bandung' },
]
export const purchaseOrders = [
  { id: 1, no: 'PO-2026-001', supplier: 'PT Global Supply', total: 42000000, date: '2026-09-20', status: 'Approved' },
  { id: 2, no: 'PO-2026-002', supplier: 'CV Tekno Utama', total: 18500000, date: '2026-09-24', status: 'Pending' },
  { id: 3, no: 'PO-2026-003', supplier: 'PT Global Supply', total: 7300000, date: '2026-09-27', status: 'Pending' },
]
export const activities = [
  'Stok Wireless Mouse menipis (8 unit)', 'PO-2026-003 dibuat oleh Admin',
  'Customer baru: CV Sinar Abadi', 'Stok masuk 40 unit Laptop Pro 14',
]
export const salesData = [32, 45, 38, 60, 52, 74, 68, 88, 79, 96, 90, 110]
export const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des']
export const rupiah = (n) => 'Rp ' + n.toLocaleString('id-ID')
