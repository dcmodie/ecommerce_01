import { useState, useContext, useReducer } from 'react';
import { Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { Provider } from './context/Books.tsx';
import MyRoutes from './MyRoutes.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import './App.css';
const queryClient = new QueryClient();
const App = () => {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <MyRoutes />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;

// TODO break it up, maybe Routes.tsx, but def break up components
