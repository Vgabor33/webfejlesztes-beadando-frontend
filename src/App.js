import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        itemName: 'vmi',
        rarity: 6,
        itemClass: "vmi",
        count: 1,
        level: 1,
    }
  ]) 
  return (
    <div>
      <h1>Webfejlesztés beadandó projekt</h1>
      <div className="container">
        <Header/>
        <Items items={items}/>
      </div>
    </div>
  );
}

export default App;
