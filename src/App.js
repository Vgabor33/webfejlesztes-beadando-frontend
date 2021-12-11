import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";

function App() {
  const [showAddItem, setShowAddItem] = useState(false)
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

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }
    getItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch(
      "/api/v1/gameinventory")
      const data = await res.json()

      console.log(data)
      return data
  }

  const deleteItem = async (id) => {
    await fetch(`/api/v1/gameinventory/${id}`,{
      method: 'DELETE',
    })
    setItems(items.filter((item) => item.id !== id))
  }

  const addItem = async (item) => {
    const res = await fetch("/api/v1/gameinventory", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(item)
    })
    const data = await res.json()
    setItems([...items, data])
  }
  return (
    <div>
      <h1>Webfejlesztés beadandó projekt</h1>
      <div className="container">
        <Header onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}/>
        {showAddItem && <AddItems onAdd={addItem}/>}
        {items.length > 0 ? <Items items={items} onDelete={deleteItem}/> : "No item"}
      </div>
    </div>
  );
}

export default App;
