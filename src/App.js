import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import blackRing from './img/black-ring.jpg'
import black from './img/black.jpg'
import boss from './img/boss.jpg'
import camp from './img/camp.jpg'
import clay from './img/clay.jpg'
import coffeeTea from './img/coffee-tea.jpg'
import craft from './img/craft.jpg'
import flamingo from './img/flamingo.jpg'
import goldHandle from './img/gold-handle.jpg'
import pink from './img/pink.jpg'
import surprise from './img/surprise.jpg'
import white from './img/white.jpg'
import "./App.css";

const App = () => {
  //need to populate the itemArray
  const [itemArray, setItemArray] = useState([]);
  const [cart, setCart] = useState([
    {
      name: "BlackRing Brand Mug",
      id: 'black-ring',
      index: 0,
      description: "Limited edition mug from BlackRing Coffee Roasters.",
      img: {blackRing},
      price: 24.95
    },
    {
      name: "Black Clay Mug",
      id: 'black',
      index: 1,
      description: "Simple and elegant black clay mug.",
      img: {black},
      price: 19.95
    }, 
    {
      name: "Boss Mug",
      id: 'boss',
      index: 2,
      description: "White mug with gold 'Boss' lettering.",
      img: {boss},
      price: 17.95
    },
    {
      name: "Campfire Mug",
      id: 'black-ring',
      index: 3,
      description: "A perfect companion for a campout, road trip, or hike.",
      img: {camp},
      price: 14.95
    }, 
    {
      name: "Fill Me Up With Coffee/Tea Set",
      id: 'coffee-tea',
      index: 4,
      description: "White mug with black lettering. One of each per order",
      img: {coffeeTea},
      price: 29.95
    },
    {
      name: "Handcrafted Art Mug",
      id: 'craft',
      index: 5,
      description: "(Back due to high demand!) Handcrafted multicolor mug.",
      img: {craft},
      price: 29.95
    },
    
  ]);

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
