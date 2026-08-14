import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  );
}

export default App;
