import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./pages/DashboardLayout";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import Customers from "./pages/Customers";
import PurchaseOrders from "./pages/PurchaseOrders";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Pos from "./pages/Pos";
import ProductList from "./pages/ProductList";
import Payment from "./pages/Payment";
import TakingOrder from "./pages/TakingOrder";
import ManajemenStok from "./pages/ManajemenStok";
import Akuntansi from "./pages/Akuntansi";
import Umkm from "./pages/Umkm";
import RetailFnb from "./pages/RetailFnb";
import Perusahaan from "./pages/Perusahaan";
import MultiCabang from "./pages/MultiCabang";
import Artikel from "./pages/Artikel";
import Tutorial from "./pages/Tutorial";
import Faq from "./pages/Faq";
import Dokumentasi from "./pages/Dokumentasi";
import Kontak from "./pages/Kontak";
import Keunggulan from "./pages/Keunggulan";
import Tentang from "./pages/Tentang";
import Harga from "./pages/Harga";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/produk/Pos" element={<Pos />} />
        <Route path="/produk" element={<ProductList />} />
        <Route path="/produk/payment" element={<Payment />} />
        <Route path="/produk/taking-order" element={<TakingOrder />} />
        <Route path="/produk/manajemen-stok" element={<ManajemenStok />} />
        <Route path="/produk/akuntansi" element={<Akuntansi />} />
        <Route path="/solusi/umkm" element={<Umkm />} />
        <Route path="/solusi/retail-fnb" element={<RetailFnb />} />
        <Route path="/solusi/perusahaan" element={<Perusahaan />} />
        <Route path="/solusi/multi-cabang" element={<MultiCabang />} />
        <Route path="/informasi/artikel" element={<Artikel />} />
        <Route path="/informasi/tutorial" element={<Tutorial />} />
        <Route path="/informasi/faq" element={<Faq />} />
        <Route path="/informasi/dokumentasi" element={<Dokumentasi />} />
        <Route path="/tentang/kontak" element={<Kontak />} />
        <Route path="/tentang/keunggulan" element={<Keunggulan />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/harga" element={<Harga />} />

        <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/purchasing" element={<PurchaseOrders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;