import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchCart } from '../apis/cart';
import { Product, CartItem } from '../types/';

import useProducts from '../hooks/useProducts';
import { listItemAvatarClasses } from '@mui/material';

const ShoppingPage: React.FC = () => {
  const { data, error, isLoading, isSuccess, refetch } = useProducts({
    enabled: false,
  });
  const {
    data: cartData,
    error: fetchCartError,
    isLoading: fetchCartIsLoading,
  } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
  });

  console.log('products', data);
  console.log('cartItems:', cartData);

  useEffect(() => {
    refetch();
  }, []);

  const itemInCart: boolean = (item: Product) => {
    const inCart: CartItem[] = cartData?.data.filter((cartItem) => {
      return cartItem.id === item.id;
    });
    return inCart.length > 0;
  };

  if (isLoading) {
    //TODO add loading spinner
    return undefined;
  } else if (error) {
    return <div>Error loading inventory</div>;
  } else {
    return (
      <div>
        <button
          onClick={() => {
            increaseItemQuantity(99);
          }}
        >
          increment
        </button>
        <div className="flex flex-wrap">
          {isSuccess &&
            data.map((item) => {
              return (
                <ProductCard
                  item={item}
                  key={item.id}
                  itemInCart={itemInCart(item)}
                />
              );
            })}
        </div>
      </div>
    );
  }
};
export default ShoppingPage;

//NOTES:
//intro react query
//https://www.youtube.com/watch?v=kmWIGom-7lU

//fetch on button click
//https://www.youtube.com/watch?app=desktop&v=4ovMmHfTxoA

//q:when wide cards should spread

//key
//why key? mention virtual DOM
//has to be inside of the map
//cant use index, not assicieate with object so wont work
//order of props matters if you're spreading, if key was first, it would get written oer if item had a key

//explicit vs implicit typing in typescript
