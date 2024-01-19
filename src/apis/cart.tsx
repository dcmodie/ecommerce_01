import axios from 'axios';
import { CartItem } from '../utilities/Types';

const fetchCart = async () =>
  await axios.get<CartItem[]>('http://localhost:3001/cart');

const addItem = async (itemId: number) => {
  //this should be an insert or an update

  //get index of item
  //return axios.post('http://localhost:3001/cart', itemId);

  const cart = await fetchCart();
  //return await axios.post('http://localhost:3001/cart/', { id: 3, amount: 1 });

  const hello = await axios.get('http://localhost:3001/cart/1');
  console.log('hello: ', hello);
  //return;
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
  return;
  //setCartItems([...cartItems, newObj]);
  //}
  //console.log('will add to db: ', cart.data);
  //return axios.post('http://localhost:3001/cart/', { id: 1, amount: 22 });
  // const options = {
  //   headers: { 'content-type': 'application/json' },
  // };
  //const hello = await axios.get('http://localhost:3001/cart/1', options);
  // const a = 1;
  //return axios.put('http://localhost:3001/cart/1', { id: 1, amount: 22 });
  // return axios.post('http://localhost:3001/cart', '{ "id": 5, "amount": 99 }');
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
