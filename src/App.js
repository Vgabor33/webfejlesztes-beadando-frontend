import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItems from "./components/AddItems";
import ModifyItem from "./components/ModifyItem";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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

  const modifyItem = async (itemId, { itemName, rarity, itemClass, count, level }) => {
		const res = await fetch(`/api/v1/gameinventory/${itemId}?itemName=${itemName}&rarity=${rarity}&itemClass=${itemClass}&count=${count}&level=${level}`, { 
      method: 'PUT', 
    })
		const data = await res.json()

		setItems(await fetchItems());
	}

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
            <h1>Webfejlesztés beadandó projekt</h1>
          <div className="container">
            <Header onAdd={() => setShowAddItem(!showAddItem)}
            showAdd={showAddItem}/>
            {showAddItem && <AddItems onAdd={addItem}/>}
            {items.length > 0 ? <Items items={items} onDelete={deleteItem}/> : "No item"}
          </div>
            </>
          }/>
          <Route path="/modifyItem/:id" element={
            <ModifyItem onModify={modifyItem} items={items}/>
          }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
