import useFetchProducts from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";

function Shop() {
  const { cart, updateQuantity, addToCart } = useCart();
  const { products, error, loading } = useFetchProducts();

  if (loading) {
    return (
      <div className="product-grid" role="status" aria-label="Loading products">
        {Array.from({ length: 8 }, (_, index) => (
          <div key={index} className="product-card skeleton-card">
            <div className="skeleton skeleton-image" />
            <div className="skeleton skeleton-line" />
            <div className="skeleton skeleton-line short" />
            <div className="skeleton skeleton-button" />
          </div>
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <main className="status-message">
        <h2>Something went wrong</h2>
        <p>
          We couldn't load the products. Check your connection and try again.
        </p>
        <button
          className="btn btn-primary"
          onClick={() => window.location.reload()}
        >
          Try again
        </button>
      </main>
    );
  }
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
}

export default Shop;
