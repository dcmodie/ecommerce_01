import { useFetchRepositoriesQuery } from '../store';
import ProductCard from '../components/ProductCard';

const ShoppingPage: React.FC = () => {
  const { data, isLoading, error } = useFetchRepositoriesQuery('vite');

  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);

  let content;

  // possibly return on each condition
  if (isLoading) {
    //content = <div>not ready</div>;
    //return undefined;
  } else if (error) {
    content = <div>Error loading albums</div>;
  } else {
    content = data?.map((item) => {
      //return <ProductCard item={item} key={item.id} />;
    });
  }
};
//watch extra divs
export default ShoppingPage;
//q:when wide cards should spread

//key
//why key? mention virtual DOM
//has to be inside of the map
//cant use index, not assicieate with object so wont work
//order of props matters if you're spreading, if key was first, it would get written oer if item had a key

//explicit vs implicit
