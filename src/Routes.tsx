import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import CartPage from './pages/CartPage';
import Layout from './components/Layout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<HomePage />} />
        <Route path="shopping" element={<ShoppingPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

//TODO diff file here
const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

export default AppRoutes;
