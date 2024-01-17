import ProductCard from '../components/ProductCard';
import BooksContext from '../context/Books';
import { useContext } from 'react';
import { fetchProducts } from '../apis/products';
import { useQuery } from '@tanstack/react-query';

const ShoppingPage: React.FC = () => {
  const { count, incrementCount } = useContext(BooksContext);
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
  console.log('products', data);

  if (isLoading) {
    return undefined;
  } else if (error) {
    return <div>Error loading inventory</div>;
  } else {
    return (
      <div>
        <button onClick={incrementCount}>incr</button>
        <div className="flex flex-wrap">
          {data?.map((item) => {
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
