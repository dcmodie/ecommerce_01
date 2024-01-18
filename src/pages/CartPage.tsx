import { fetchCart, addItem } from '../apis/cart';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const CartPage = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, []);
  console.log(data);

  return <div>cart</div>;
};
export default CartPage;

//TODO
//connect add to cart button on card
// make cart list items
// add to cart, then check cart for stale data
