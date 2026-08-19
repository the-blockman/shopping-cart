export default function ProductCard({
  product,
  cart,
  addToCart,
  updateQuantity,
}) {
  const cartItem = cart.find((item) => item.id === product.id);

  function cartDisplay() {
    if (!cartItem) {
      return <button onClick={() => addToCart(product)}> Add to cart </button>;
    } else if (cartItem.quantity > 1) {
      return (
        <div>
          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity - 1)}
          >
            {" "}
            -{" "}
          </button>
          <p>{cartItem.quantity} in cart</p>
          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => updateQuantity(cartItem.id, 0)}>delete</button>
          <p>{cartItem.quantity} in cart </p>
          <button
            onClick={() => updateQuantity(cartItem.id, cartItem.quantity + 1)}
          >
            +
          </button>
        </div>
      );
    }
  }

  return (
    <>
      <div>
        <div>
          <img src={product.image} alt={product.title} />
        </div>
        <div>
          {product.title}
          {product.price}
          {cartDisplay()}
        </div>
      </div>
    </>
  );
}
