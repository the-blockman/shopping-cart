import { NavLink } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <span>Cart</span>
              <div className="cart-count">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
