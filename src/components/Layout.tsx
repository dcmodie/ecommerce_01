import { Outlet, NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
        <NavLink to="/cart" className="self-end">
          <ShoppingCartIcon />
        </NavLink>
      </nav>

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;
