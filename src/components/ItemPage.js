import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router";
import QuantityManager from "./QuantityManager";
const ItemPage = ({ itemArray, cart, setCart }) => {
  let params = useParams();

  useEffect(() => {
    getItem(params.itemId);
  }, []);

  function getItem(id) {
    let copyArr = JSON.parse(JSON.stringify(itemArray))
    let copyCart = JSON.parse(JSON.stringify(cart))
    
    for (const item of copyArr) {
      if (item.id === id) {

        for (const item2 of copyCart) {
          if (item2.id === id) {
            item.quantity = item2.quantity
          }
        }

        setItem(item);
      }
    }
  }

  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(item.quantity);
  const [addedToCart, setAddedToCart] = useState(false);

  function updateCart(e) {
    e.preventDefault();
    let quantity = document.querySelector("#quantity").value;
    
    if (quantity > 0) {
      let updatedItem = JSON.parse(JSON.stringify(item));
      
      updatedItem.quantity = parseInt(quantity);
        
      let updatedCart = JSON.parse(JSON.stringify(cart));
      
      let isInCart = false
      for (let item of updatedCart) {
        if (updatedItem.id === item.id) {
            item = updatedItem
            isInCart = !isInCart
        }
      }
      if (!isInCart) {
        updatedCart.push(updatedItem)
      }      
      setCart(updatedCart)
      setAddedToCart(true)
      
    }
    
  }

  return (
    <form onSubmit={(e) => updateCart(e)}>
      {addedToCart && (<Navigate to="/shop" replace={true} />)}
      <img src={item.img} alt={item.name}></img>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <QuantityManager quantity={quantity} setQuantity={setQuantity} />
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default ItemPage;
