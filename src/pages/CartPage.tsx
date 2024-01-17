import { fetchCart } from '../apis/cart';
import { useQuery } from '@tanstack/react-query';
const CartPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });
  console.log('data in cart', data?.data);

  return <div>cart</div>;
};
export default CartPage;
