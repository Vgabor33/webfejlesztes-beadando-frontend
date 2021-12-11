import { useState } from "react"

const AddItems = ({ onAdd }) => {
    const [itemName, setItemName] = useState("")
    const [rarity, setRarity] = useState(0)
    const [itemClass, setItemClass] = useState("")
    const [count, setCount] = useState(0)
    const [level, setLevel] = useState(0)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!itemName) {
            alert("Please add an item!")
            return
        }

        onAdd({itemName, rarity, itemClass, count, level})

        setItemName("")
        setRarity(0)
        setItemClass("")
        setCount(0)
        setLevel(0)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Item</label>
                <input type="text" placeholder="Add item" value={itemName} onChange={(e) =>
                setItemName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Rarity</label>
                <input type="number" placeholder="Add rarity" value={rarity} onChange={(e) =>
                setRarity(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>ItemClass</label>
                <input type="text" placeholder="Add item class" value={itemClass} onChange={(e) =>
                setItemClass(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Count</label>
                <input type="number" placeholder="Add count" value={count} onChange={(e) =>
                setCount(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Level</label>
                <input type="number" placeholder="Add level" value={level} onChange={(e) =>
                setLevel(e.target.value)}/>
            </div>
            <input type="submit" value="Save Item" className="btn btn-block"/>
        </form>
    )
}

export default AddItems
