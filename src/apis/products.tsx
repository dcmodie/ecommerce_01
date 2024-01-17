import axios from 'axios';

const fetchProducts = async () =>
  (await axios.get('http://localhost:3001/products')).data;

export { fetchProducts };

//'https://jsonplaceholder.typicode.com/posts'
