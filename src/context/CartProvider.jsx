import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function updateQuantity(id, newQuantity) {
    setCart((prevCart) => {
      if (newQuantity < 1) {
        return prevCart.filter((item) => item.id !== id);
      }
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      );
    });
  }

  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [
        ...prevCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
