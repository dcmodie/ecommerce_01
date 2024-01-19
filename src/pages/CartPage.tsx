import { fetchCart, addItem } from '../apis/cart';
import { fetchOnly } from '../apis/products';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const [products, setProducts] = useState();

  const {
    data: cartData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });

  const {
    data: productData,
    error: error0,
    isLoading: isLoading0,
  } = useQuery({
    queryKey: ['cartProducts', { productsArray: products }],
    queryFn: (prods) => fetchOnly(prods),
  });

  const renderProducts = () => {
    return productData?.map((product) => {
      return <div>{product.cost}</div>;
    });
  };

  useEffect(() => {
    const prods = cartData?.data.map((item) => {
      return item.id;
    });
    setProducts(prods);
  }, [cartData]);

  return <div>{renderProducts()}</div>;
};
export default CartPage;

//TODO
//connect add to cart button on card
// make cart list items
// add to cart, then check cart for stale data
