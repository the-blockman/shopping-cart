import { Link } from "react-router";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Store</h1>
      <p>Browse our products and add your favorites to the cart.</p>
      <Link to="/shop">Shop now</Link>
    </main>
  );
}
