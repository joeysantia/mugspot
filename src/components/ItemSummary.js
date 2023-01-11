import QuantityManager from "./QuantityManager";
import deleteIcon from "../img/delete.png";
import './ItemSummary.css'
const ItemSummary = ({ item, cart, setCart }) => {
  let img = Object.values(item.img)[0];

  function deleteItem(itemId) {
    let copyCart = JSON.parse(JSON.stringify(cart));
    copyCart = copyCart.filter((item) => item.id !== itemId);
    setCart(copyCart);
  }

  let subtotal = parseFloat(item.price * item.quantity).toFixed(2);

  return (
    <div className="item-summary">
      <div id="delete-box">
        <img
          src={deleteIcon}
          alt="delete"
          onClick={(e) => deleteItem(item.id)}
        />
      </div>
      <div id="main-box">
        <div id="left-box">
          <img src={img} alt={item.name}></img>
        </div>
        <div id="right-box">
          <h3>{item.name}</h3>
          <QuantityManager
            itemId={item.id}
            quantity={item.quantity}
            cart={cart}
            setCart={setCart}
          />
          <p>Subtotal: {subtotal}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemSummary;
