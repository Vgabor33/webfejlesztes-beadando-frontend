import { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import  { FaArrowLeft } from 'react-icons/fa';

const ModifyItem = ({ onModify, items }) => {
    const params=useParams()
    const itemId=Number(params.id)
    const item = items.find(other => other.id === itemId)
    const [itemName, setItemName] = useState(item.itemName)
    const [rarity, setRarity] = useState(item.rarity)
    const [itemClass, setItemClass] = useState(item.itemClass)
    const [count, setCount] = useState(item.count)
    const [level, setLevel] = useState(item.level)
    const onSubmit = (e) => {
        e.preventDefault()

        if (!itemName) {
            alert('Please add an item name!')
            return
        }

        onModify(itemId, { itemName, rarity, itemClass, count, level })
    }

    return (
        <>
            <Link to="/"><FaArrowLeft/>Return</Link>
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
        </>
    )
}

export default ModifyItem