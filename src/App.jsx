import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ShopsList from './pages/ShopsList';
import Store from './pages/Store';
import ShopSettings from './pages/ShopSettings';
import AddShop from './pages/AddShop';
import MyShops from './pages/MyShops';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/shops" element={<ShopsList />} />
          <Route path="/shop/:id" element={<Store />} />
          <Route path="/shop/:id/settings" element={<ShopSettings />} />
          <Route path="/add-shop" element={<AddShop />} />
          <Route path="/my-shops" element={<MyShops />} />
        </Routes>
      </Layout>
    </Router>
  );
}
