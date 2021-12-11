import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";

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

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const addItem = (item) => {
    const newItem = { ...item}
    setItems([...items, newItem])
  }
  return (
    <div>
      <h1>Webfejlesztés beadandó projekt</h1>
      <div className="container">
        <Header/>
        <AddItems onAdd={addItem}/>
        {items.length > 0 ? <Items items={items} onDelete={deleteItem}/> : "No item"}
      </div>
    </div>
  );
}

export default App;
