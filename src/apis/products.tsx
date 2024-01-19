import axios from 'axios';
import { Product } from '../utilities/Types';

const fetchProducts = async () =>
  (await axios.get<Product[]>('http://localhost:3001/products')).data;

const fetchOnly = async (args) => {
  const productList = args.queryKey[1].productsArray;
  //const arrr = [1, 3];
  const allProds = await axios.get<Product[]>('http://localhost:3001/products');
  const products = allProds.data.filter((prod) => {
    if (productList.includes(prod.id)) {
      return prod;
    }
  });
  // const productB: Product = {
  //   id: 777,
  //   name: 'werwer',
  //   cost: 34,
  //   image: '',
  //   description: '',
  // };
  // let fruits: Product[] = [productB];
  console.log('returning fruits: ', products);
  return products;
};

export { fetchProducts, fetchOnly };

//'https://jsonplaceholder.typicode.com/posts'
//in ts, the <> typescript generic dumb word
//dynamic type for ts
//axios get doesn't know what the data will be, but you can tell it with the generics

//let see if the arg gets passed all the way
