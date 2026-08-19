import useFetchProducts from "../hooks/useFetchProducts";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import ProductCard from "../components/ProductCard";

function Shop() {
  const { cart, updateQuantity, addToCart } = useContext(CartContext);
  const { products, error, loading } = useFetchProducts();

  if (loading) return <p>loading...</p>;
  if (error) return <p>A network error has occured</p>;
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      ))}
    </>
  );
}

export default Shop;
