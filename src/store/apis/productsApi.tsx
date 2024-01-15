import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../components/ProductCard';
const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints(builder) {
    return {
      fetchRepositories: builder.query<Product[], unknown>({
        query: () => {
          return {
            url: '/products',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useFetchRepositoriesQuery } = productsApi;
export { productsApi };
