import { FaTimes } from "react-icons/fa"


const Item = ({item, onDelete}) => {
    return(
        <div className="item">
            <h3>{item.itemName} <FaTimes style={{
                color: "red",
                cursor: "pointer"
            }} onClick={() => onDelete(item.id)}/></h3>
            <p>{item.rarity}</p>
            <p>{item.itemClass}</p>
            <p>{item.count}</p>
            <p>{item.level}</p>
        </div>
    )
}

export default Item