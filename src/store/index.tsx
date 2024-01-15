import { configureStore } from '@reduxjs/toolkit';
import { useFetchRepositoriesQuery, productsApi } from './apis/productsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    products: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});
setupListeners(store.dispatch);
export { store };
export { useFetchRepositoriesQuery };
