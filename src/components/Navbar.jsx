import { NavLink } from "react-router";
import { useCart } from "../hooks/useCart";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
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
              {totalItems > 0 && <div className="cart-count">{totalItems}</div>}
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
