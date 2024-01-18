import axios from 'axios';
import { CartItem } from '../utilities/Types';

const fetchCart = async () =>
  await axios.get<CartItem[]>('http://localhost:3001/cart');

const addItem = async (itemId: number) => {
  //this should be an insert or an update

  //get index of item
  //return axios.post('http://localhost:3001/cart', itemId);

  const cart = await fetchCart();
  const indx = cart.data.map((e) => e.id).indexOf(itemId);
  if (indx !== -1) {
    //const newArray = [...cart.data];
    cart.data[indx].amount += 1;
    //replace array?
  } else {
    const newObj = { id: itemId, amount: 1 };
    cart.data.push(newObj);
    //setCartItems([...cartItems, newObj]);
  }
  console.log('will add to db: ', cart.data);
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
