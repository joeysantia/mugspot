import { Link } from "react-router-dom";

const NavBar = ({ quantity }) => {
  return (
    <nav>
      <div className="logo-box">
        <Link to="/">
          <img></img>
          <h1>Roast</h1>
        </Link>
      </div>
      <div className="link-box">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
            <span>{quantity}</span>
            <img></img>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
