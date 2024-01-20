import { fetchCart, addItem } from '../apis/cart';
import { fetchOnly } from '../apis/products';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {CartItem} from '../types'
import CartProductCard, {
  CartProductCardProps,
} from '../components/CartProductCard';
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

  const getQuantity = (index:number) => {

    return ((cartData) ? cartData?[index].quantity : 0)

 
  };

  // interface CartProduct {
  //   Product;
  // }
  //crate type and sent with added quantity
  //figure out hwo to send props separately
  const renderProducts = () => {
    return productData?.map((product, index) => {
      const quantity = getQuantity(index);
      const blah: CartProductCardProps = {
        item: product,
        quantity: 3,
      };
      return <CartProductCard {...blah} key={product.id} />;
    });
  };

  useEffect(() => {
    const prods = cartData?.data.map((item) => {
      return item.id;
    });
    setProducts(prods);
  }, [cartData]);

  const renderContent = () => {
    if (isLoading || isLoading0) {
      return <div>Loading</div>;
    } else if (error0 || error) {
      return <div>error</div>;
    } else {
      return <div>{renderProducts()}</div>;
    }
  };

  return <div>{renderContent()}</div>;
};
export default CartPage;

//TODO
//connect add to cart button on card
// make cart list items
// add to cart, then check cart for stale data
