import ItemSummary from "./ItemSummary";
import './Cart.css'

const Cart = ({ cart, setCart }) => {
  //does not allow user to actually purchase these items
  function fakeBuyNow() {
    alert("Thanks for visiting!");
  }

  //finds the total price of all items and always rounds to two decimal places
  let cartHasItems = cart.length > 0
  let total = parseFloat(
    cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
  ).toFixed(2);

  return (
    <section id="cart">
      <h2>Your Cart</h2>
      {/* checking this bool three times is probably unnecessary */}
      {cartHasItems
        ? cart.map((item, i) => {
            return (
              <ItemSummary key={i} item={item} cart={cart} setCart={setCart} />
            );
          })
        : <p>You have no items in your cart.</p>}
      {cartHasItems ? <h2>Total: {total}</h2> : null}
      {cartHasItems ? <button onClick={(e) => fakeBuyNow()}>Buy Now</button> : null}
    </section>
  );
};

export default Cart;
