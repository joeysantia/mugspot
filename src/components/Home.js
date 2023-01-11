import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main id="home">
      <h2>Mugs made simple.</h2>
      <p>
        We partner with local artists to make simple, quality mugs and ship them
        directly to your door. Check out our shop for current products.
      </p>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </main>
  );
};

export default Home;
