import { fetchCart, addItem, testFcn } from '../apis/cart';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const CartPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });

  console.log('data:', data);

  const mutation = useMutation({
    mutationFn: addItem,
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