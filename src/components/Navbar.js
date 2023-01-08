import { Link } from "react-router-dom";
import cart from "../img/cart.png"
import mugIcon from "../img/mug-icon.png"
const NavBar = ({ quantity }) => {
  return (
    <nav>
      <div className="logo-box">
        <Link to="/">
          <img src={mugIcon} alt="logo"></img>
          <h1>Mugspot</h1>
        </Link>
      </div>
      <div className="link-box">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
            <span>{quantity}</span>
            <img src={cart} alt="cart"></img>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
