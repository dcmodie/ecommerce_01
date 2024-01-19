import axios from 'axios';
import { CartItem } from '../utilities/Types';

const fetchCart = async () =>
  await axios.get<CartItem[]>('http://localhost:3001/cart');

const addItem = async (itemId: number) => {
  const cart = await fetchCart();
  const indx = cart.data.map((e) => e.id).indexOf(itemId);
  if (indx !== -1) {
    return axios.put(`http://localhost:3001/cart/${itemId}`, {
      id: itemId,
      amount: cart.data[indx].amount + 1,
    });
  } else {
    const newObj = { id: itemId, amount: 1 };
    //cart.data.push(newObj);
    return axios.post('http://localhost:3001/cart', newObj);
  }
};

// headers: {
//   'Content-Type': 'application/json'
// }

//('{"name": "Lisa", "salary": "8000"}');

const testFcn = () => {
  console.log('test fcn');
};
export { fetchCart, addItem, testFcn };

// axios
//   .put(`http://localhost:3001/cart`, newData)
//   .then((response) => {
//     // Handle the response
//   })
//   .catch((error) => {
//     // Handle errors
//   });

// //'https://jsonplaceholder.typicode.com/posts'
