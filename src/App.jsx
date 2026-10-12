import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Outlet />
    </CartProvider>
  );
}

export default App;
