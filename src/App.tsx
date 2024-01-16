import { useState, useContext, useReducer } from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

import BooksContext from './context/Books.tsx';
import MyRoutes from './MyRoutes.tsx';
//import TestContext from './context/TestContext';

import './App.css';
const App = () => {
  return (
    <BooksContext.Provider value={3}>
      <MyRoutes />
    </BooksContext.Provider>
  );
};

export default App;

// TODO break it up, maybe Routes.tsx, but def break up components
