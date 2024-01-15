import { useState } from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingPage from './pages/ShoppingPage';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './App.css';

const App = () => {
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
const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  );
};

const About = () => {
  return (
    <>
      <h2>About</h2>
    </>
  );
};

export default App;

// break it up, maybe Routes.tsx, but def break up components
