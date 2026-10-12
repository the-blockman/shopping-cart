import { Link } from "react-router";

const features = [
  {
    icon: "🚚",
    title: "Free delivery",
    text: "On every order, with no minimum spend.",
  },
  {
    icon: "↩️",
    title: "Easy returns",
    text: "Changed your mind? Send it back within 30 days.",
  },
  {
    icon: "🔒",
    title: "Secure checkout",
    text: "Your details stay protected from cart to door.",
  },
];

function Home() {
  return (
    <main>
      <section className="home-hero">
        <span className="hero-tag">New season, new arrivals</span>
        <h1>Find something you'll love.</h1>
        <p>
          Clothing, jewelry and electronics, all in one place. Browse the
          collection and add your favorites to the cart.
        </p>
        <Link to="/shop" className="btn btn-primary hero-cta">
          Shop now
        </Link>
      </section>

      <section className="home-features">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <span className="feature-icon">{feature.icon}</span>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Home;
