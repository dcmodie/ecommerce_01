import { useFetchRepositoriesQuery } from '../store';
import ProductCard from '../components/ProductCard';
import BooksContext from '../context/Books';
import { useContext } from 'react';

const ShoppingPage: React.FC = () => {
  const { data, isLoading, error } = useFetchRepositoriesQuery('vite');
  const value = useContext(BooksContext);
  console.log('value', value);
  // console.log('error', error);
  // console.log('isLoading', isLoading);

  if (isLoading) {
    return undefined;
  } else if (error) {
    return <div>Error loading inventory</div>;
  } else {
    return (
      <div className="flex flex-wrap">
        {data?.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
    );
  }
};
export default ShoppingPage;
//q:when wide cards should spread

//key
//why key? mention virtual DOM
//has to be inside of the map
//cant use index, not assicieate with object so wont work
//order of props matters if you're spreading, if key was first, it would get written oer if item had a key

//explicit vs implicit typing in typescript
