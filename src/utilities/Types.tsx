export interface Product {
  id: number;
  name: string;
  cost: number;
  image: string;
  description: string;
}
export type CartItem = {
  id: number;
  amount: number;
};

// export interface CartObject {
//   userId: number;
//   items: CartItem[];
// }
//another way is folder types, file Products
