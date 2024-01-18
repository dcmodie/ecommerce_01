import axios from 'axios';
import { CartObject } from '../utilities/Types';

const fetchCart = async () =>
  await axios.get<CartObject[]>('http://localhost:3001/cart');

const addItem = async (item: CartObject) => {
  return axios.post('http://localhost:3001/cart', item);

  // const indx = cartItems.map((e) => e.id).indexOf(id);
  // if (indx !== -1) {
  //   const newArray = [...cartItems];
  //   newArray[indx].quantity += 1;
  //   setCartItems(newArray);
  // } else {
  //   const newObj = { id: id, quantity: 1 };
  //   setCartItems([...cartItems, newObj]);
  // }
  //
  //await axios.
};

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
