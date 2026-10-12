import { useCart } from "../hooks/useCart";

function Cart() {
  const { cart, updateQuantity } = useCart();

  function cartDisplay(item) {
    if (item.quantity > 1) {
      return (
        <div>
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            {" "}
            -{" "}
          </button>
          <p>{item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            {" "}
            +{" "}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={() => updateQuantity(item.id, 0)}>delete</button>
          <p>{item.quantity}</p>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            +
          </button>
        </div>
      );
    }
  }

  return (
    <>
      {cart.length === 0 ? (
        <p>Your Cart is empty</p>
      ) : (
        <div>
          <div>
            {cart.map((item) => {
              return (
                <div key={item.id}>
                  <div>
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    {item.title}
                    {cartDisplay(item)}
                  </div>
                  <div>{item.price}</div>
                </div>
              );
            })}
          </div>
          <div>
            {cart
              .reduce((acc, cur) => {
                return acc + cur.price * cur.quantity;
              }, 0)
              .toFixed(2)}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
