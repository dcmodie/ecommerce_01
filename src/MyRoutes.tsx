import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<HomePage />} />
        <Route path="shopping" element={<ShoppingPage />} />
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
//TODO diff file for this...
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <>
      <h2>Logo here</h2>
      <nav className="flex space-x-4 ">
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/shopping" style={style}>
          Shopping
        </NavLink>
        <NavLink to="/shopping" className="self-end">
          <ShoppingCartIcon />
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};
export default MyRoutes;
