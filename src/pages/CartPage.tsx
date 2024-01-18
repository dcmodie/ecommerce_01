import { fetchCart, addItem, testFcn } from '../apis/cart';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import axios from 'axios';

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

  const mutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      refetch();
    },
  });

  return (
    <div>
      cart
      <button
        onClick={() =>
          mutation.mutate({
            id: 9,
            userId: 1,
            selected: ['1', '4', '8'],
          })
        }
      >
        mutate
      </button>
    </div>
  );
};
export default CartPage;

//TODO
//connect add to cart button on card
// make cart list items
// add to cart, then check cart for stale data
