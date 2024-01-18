import { useContext, createContext, ReactNode, useState } from 'react';
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  cartItems: CartItem[];
};
const ShoppingCartContext = createContext({});
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 99, quantity: 2 },
  ]);
  function getItemQuantity(id: number) {
    console.log('cart items in cart context ', cartItems);
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    const indx = cartItems.map((e) => e.id).indexOf(id);
    if (indx !== -1) {
      const newArray = [...cartItems];
      newArray[indx].quantity += 1;
      setCartItems(newArray);
    } else {
      const newObj = { id: id, quantity: 1 };
      setCartItems([...cartItems, newObj]);
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{ getItemQuantity, increaseItemQuantity, cartItems }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
