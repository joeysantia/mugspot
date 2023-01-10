import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemPage from './components/ItemPage'
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
  const [itemArray, setItemArray] = useState([
    
    //I don't think that the index key is being used at all. revisit later 
    {
      name: "BlackRing Brand Mug",
      id: 'black-ring',
      index: 0,
      description: "(Limited edition) Mug from BlackRing Coffee Roasters.",
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
      id: 'camp',
      index: 3,
      description: "A perfect companion for a campout, road trip, or hike.",
      img: {camp},
      price: 14.95
    }, 
    {
      name: "Handcrafted Clay Mug",
      id: 'clay',
      index: 4,
      description: "Handcrafted grey clay mug with a brown base",
      img: {clay},
      price: 18.95
    },
    {
      name: "Fill Me Up With Coffee/Tea Set",
      id: 'coffee-tea',
      index: 5,
      description: "White mug with black lettering. One of each per order",
      img: {coffeeTea},
      price: 29.95
    },
    {
      name: "Handcrafted Art Mug",
      id: 'craft',
      index: 6,
      description: "(Limited Edition) Handcrafted multicolor mug.",
      img: {craft},
      price: 29.95
    },
    {
      name: "'Be A Flamingo In A Pack of Pigeons' Mug",
      id: 'flamingo',
      index: 7,
      description: "Pink mug with a gold handle, with black lettering and flamingo art.",
      img: {flamingo},
      price: 19.95
    },
    {
      name: "Gold Handle Mug",
      id: 'gold-handle',
      index: 8,
      description: "White porcelain mug with a gold handle.",
      img: {goldHandle},
      price: 14.95
    },
    {
      name: "Pink Mug",
      id: 'pink',
      index: 9,
      description: "Pink clay mug.",
      img: {pink},
      price: 16.95
    },
    {
      name: "'Let Life Surprise You' Mug",
      id: 'surprise',
      index: 10,
      description: "White clay mug with black rim and black lettering.",
      img: {surprise},
      price: 17.95
    },
    {
      name: "Simple Whtie Mug",
      id: 'white',
      index: 11,
      description: "Simple white porcelain mug.",
      img: {white},
      price: 12.95
    },
  ]);
  const [cart, setCart] = useState([]);

  let quantity = (cart.length ? cart.reduce((acc, cur) => { return acc + cur.quantity}, 0) : 0);

  function getItem(id) {
    for (const item of itemArray) {
      if (item.id === id) {
        return item 
      }
    }
  }
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
          path="/shop/:itemId"
          element={<ItemPage 
                      itemArray={itemArray}
                      cart={cart}
                      setCart={setCart}
                  />}
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
