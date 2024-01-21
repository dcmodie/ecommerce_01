import axios from 'axios';
import { CartItem } from '../types';

const fetchCart = async () =>
  await axios.get<CartItem[]>('http://localhost:3001/cart');

const addItem = async (itemId: number) => {
  const cart = await fetchCart();
  const indx = cart.data.map((e) => e.id).indexOf(itemId);
  if (indx !== -1) {
    return axios.put(`http://localhost:3001/cart/${itemId}`, {
      id: itemId,
      quantity: cart.data[indx].quantity + 1,
    });
  } else {
    const newObj = { id: itemId, quantity: 1 };
    return axios.post('http://localhost:3001/cart', newObj);
  }
};

export { fetchCart, addItem };

// axios
//   .put(`http://localhost:3001/cart`, newData)
//   .then((response) => {
//     // Handle the response
//   })
//   .catch((error) => {
//     // Handle errors
//   });

// //'https://jsonplaceholder.typicode.com/posts'
