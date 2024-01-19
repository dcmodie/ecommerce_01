import { fetchCart, addItem } from '../apis/cart';
import { fetchProducts, fetchOnly } from '../apis/products';
import { useMutation, useQuery, useQueries } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const CartPage = () => {
  const [prods, setProds] = useState(['sadf']);

  //const [data] = useQuery(fetchOnly)
  const {
    data: prodData,
    error: error0,
    isLoading: isLoading0,
    refetch,
  } = useQuery({
    queryKey: ['cartProducts', { productsArray: prods }],
    queryFn: (prods) => fetchOnly(prods),
  });

  // const results = useQueries({
  //   queries: [
  //     { queryKey: ['cart', 1], queryFn: fetchCart, staleTime: Infinity },
  //     {
  //       queryKey: ['products', 2],
  //       queryFn: fetchProducts,
  //       staleTime: Infinity,
  //     },
  //   ],
  // });
  const {
    data: cartData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });

  const renderItems = () => {
    return prodData?.map((product) => {
      return <div>{product.cost}</div>;
    });
  };

  useEffect(() => {
    const prods = cartData?.data.map((item) => {
      return item.id;
    });
    //console.log('arr:', arr);
    //create array and send
    setProds(prods);
    refetch();
    console.log('isLoading0:', isLoading0);
    console.log('asdf: ', prodData);
  }, [cartData]);
  // console.log(results);

  return <div>{renderItems()}</div>;
};
export default CartPage;

//TODO
//connect add to cart button on card
// make cart list items
// add to cart, then check cart for stale data
