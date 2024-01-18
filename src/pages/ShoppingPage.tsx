import ProductCard from '../components/ProductCard';
import BooksContext from '../context/Books';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import useProducts from '../hooks/useProducts';

const ShoppingPage: React.FC = () => {
  const { count, incrementCount } = useContext(BooksContext);
  const { getItemQuantity, cartItems, increaseItemQuantity } =
    useShoppingCart();
  // useMutation for changing the cart
  //     onSuccess, invalidate the query
  //     look up documentation on react query invaliation

  const { data, error, isLoading, isSuccess, refetch } = useProducts({
    enabled: false,
  });
  console.log('products', data);
  console.log('cartItems:', cartItems);

  useEffect(() => {
    refetch();
  }, []);

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
              return <ProductCard item={item} key={item.id} />;
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
