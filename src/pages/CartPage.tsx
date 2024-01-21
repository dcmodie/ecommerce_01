import { fetchCart, addItem } from '../apis/cart';
import { fetchOnly } from '../apis/products';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import CartProductCard from '../components/CartProductCard';
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

  const getQuantity = (index: number) => {
    if (cartData) {
      return cartData.data[index].quantity;
    }
  };

  const renderProducts = () => {
    return productData?.map((product, index) => {
      const quantity = getQuantity(index);
      const cardProps = {
        item: product,
        quantity,
      };
      return <CartProductCard cardProps={cardProps} key={product.id} />;
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
//show as incart
//disable add to card
//fix number bug cart card
//  to repro, just add out of order, add bike 2, then bike one, then go fiddle with arrows
//add decr mutation
//add change mutation
//fix incr decr button and onchange
//add to cart buton position
//add delete button in cart
// typescript fixes
// make custom hook like he did
