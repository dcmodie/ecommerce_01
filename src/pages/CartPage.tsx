import { fetchCart, addItem, testFcn } from '../apis/cart';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

const CartPage = () => {
  // const mutation = useMutation({
  //   mutationFn: (newTodo) => {
  //     return axios.post('http://localhost:3001/cart', {
  //       id: 3,
  //       userId: 1,
  //       selected: ['1', '2', '8', '6'],
  //     });
  //   },
  // });

  const mutation = useMutation({
    mutationFn: addItem,
  });

  return (
    <div>
      cart
      <button
        onClick={() => mutation.mutate({ id: new Date(), title: 'Do Laundry' })}
      >
        mutate
      </button>
    </div>
  );
};
export default CartPage;
