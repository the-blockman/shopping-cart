export default function ProductCard({
  product,
  cart,
  addToCart,
  updateQuantity,
}) {
  const cartItem = cart.find((item) => item.id === product.id);

  function cartDisplay() {
    if (!cartItem) {
      return (
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to cart
        </button>
      );
    }

    return (
      <div className="qty-control">
        {cartItem.quantity > 1 ? (
          <button
            aria-label="Decrease quantity"
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
          >
            -
          </button>
        ) : (
          <button
            aria-label="Remove from cart"
            onClick={() => updateQuantity(cartItem.id, 0)}
          >
            ✕
          </button>
        )}
        <span>{cartItem.quantity} in cart</span>
        <button
          aria-label="Increase quantity"
          onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <article className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="product-info">
        <div className="product-header">
          <h2 className="product-title">{product.title}</h2>
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
        <p className="product-description">{product.description}</p>
        <span className="product-category">{product.category}</span>
      </div>

      <div className="card-actions">{cartDisplay()}</div>
    </article>
  );
}
