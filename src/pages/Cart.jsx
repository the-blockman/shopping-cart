import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, updateQuantity } = useCart();

  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  function cartDisplay(item) {
    return (
      <div className="qty-control">
        {item.quantity > 1 ? (
          <button
            aria-label="Decrease quantity"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            -
          </button>
        ) : (
          <button
            aria-label="Remove from cart"
            onClick={() => updateQuantity(item.id, 0)}
          >
            ✕
          </button>
        )}
        <span>{item.quantity}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <main className="cart-empty">
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/shop" className="btn btn-primary">
          Start shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <section className="cart-items">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-info">
              <h2 className="cart-item-title">{item.title}</h2>
              <span className="cart-item-unit">
                ${item.price.toFixed(2)} each
              </span>
              {cartDisplay(item)}
            </div>
            <div className="cart-item-price">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </article>
        ))}
      </section>

      <aside className="cart-summary">
        <h2>Order summary</h2>
        <div className="summary-row">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <button className="btn btn-primary">Proceed to checkout</button>
      </aside>
    </main>
  );
}

export default Cart;
