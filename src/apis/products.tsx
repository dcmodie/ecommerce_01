import axios from 'axios';
import { Product } from '../utilities/Types';

const fetchProducts = async () =>
  (await axios.get<Product[]>('http://localhost:3001/products')).data;

export { fetchProducts };

//'https://jsonplaceholder.typicode.com/posts'
//in ts, the <> typescript generic dumb word
//dynamic type for ts
//axios get doesn't know what the data will be, but you can tell it with the generics

//let see if the arg gets passed all the way
