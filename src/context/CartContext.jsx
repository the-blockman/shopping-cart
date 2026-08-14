import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  updateQuantity: () => {},
  addToCart: () => {},
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) {
      const updatedCart = cart.filter((product) => {
        return product.id !== id;
      });
      setCart(updatedCart);
    } else {
      const updatedCart = cart.map((product) =>
        product.id === id ? { ...product, quantity: newQuantity } : product,
      );
      setCart(updatedCart);
    }
  }

  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      updateQuantity(existingItem.id, existingItem.quantity + 1);
    } else {
      const newProduct = {
        title: product.title,
        id: product.id,
        quantity: 1,
        image: product.image,
        price: product.price,
      };
      setCart([...cart, newProduct]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
