import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  //need to populate the itemArray
  const [itemArray, setItemArray] = useState([]);
  const [cart, setCart] = useState([]);

  let quantity = (cart.length ? cart.reduce((a, b) => a.quantity + b.quantity) : 0);

  return (
    <BrowserRouter>
      <NavBar quantity={quantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop itemArray={itemArray} cart={cart} setCart={setCart} />}
        />
        <Route 
          path="/cart"
          element={<Cart cart={cart} setCart={setCart}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
