export interface Product {
  id: string;
  name: string;
  cost: number;
  image: string;
  description: string;
}
export interface CartObject {
  id: number;
  userId: number;
  selected: string[];
}
//another way is folder types, file Products
