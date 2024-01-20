import { fetchProducts } from '../apis/products';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { Product } from '../types';
//this allows us to assgin an options object if we want, but 'queryKey' | 'queryFn' will be ignored, we are hardcoding those here
const useProducts = (
  options?: Omit<UseQueryOptions<Product[]>, 'queryKey' | 'queryFn'>
) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    ...options,
  });
};
export default useProducts;
//the above generic typeing was necessary because spreadng the options made it difficult to infer th etype

//need the search argument here argument may go to fetchProducts
