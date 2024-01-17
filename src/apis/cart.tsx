import axios from 'axios';

const fetchCart = async () => await axios.get('http://localhost:3001/cart');
export { fetchCart };

//'https://jsonplaceholder.typicode.com/posts'
