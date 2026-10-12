import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";

function Shop() {
  const { cart, updateQuantity, addToCart } = useCart();
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
