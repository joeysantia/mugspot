import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import QuantityManager from "./QuantityManager";
import "./ItemPage.css";

const ItemPage = ({ itemArray, cart, setCart }) => {
  let { itemId } = useParams();
  const [item, setItem] = useState({});
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    let item = getItem(itemId);
    setItem(item);
  }, []);

  function getItem(id) {
    let copyArr = JSON.parse(JSON.stringify(itemArray));
    let copyCart = JSON.parse(JSON.stringify(cart));

    for (const item1 of copyArr) {
      if (item1.id === id) {
        let item = item1;

        for (const item2 of copyCart) {
          if (item2.id === id) {
            item.quantity = item2.quantity;
          }
        }
        return item;
      }
    }
  }

  function updateCart(e) {
    e.preventDefault();
    let quantity = document.querySelector(`#${item.id}-quantity`).value;

    if (quantity > 0) {
      let updatedItem = JSON.parse(JSON.stringify(item));

      updatedItem.quantity = parseInt(quantity);

      let updatedCart = JSON.parse(JSON.stringify(cart));

      let isInCart = false;

      for (let i = 0; i < updatedCart.length; i++) {
        if (updatedItem.id === updatedCart[i].id) {
          updatedCart[i] = updatedItem;
          isInCart = true;
        }
      }

      if (!isInCart) {
        updatedCart.push(updatedItem);
      }

      setCart(updatedCart);
      setAddedToCart(true);
    }
  }

  //this is inefficient, but solves a tricky bug. Revisit later
  let img = Object.values(getItem(itemId).img)[0];
  return (
    <form onSubmit={(e) => updateCart(e)}>
      {addedToCart && <Navigate to="/shop" replace={true} />}
      <img src={img} alt={item.name}></img>
      <div>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <QuantityManager itemId={item.id} quantity={item.quantity} />
        <button id="submit" type="submit">
          Add to Cart
        </button>
      </div>
    </form>
  );
};

export default ItemPage;
