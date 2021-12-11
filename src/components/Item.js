import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Item = ({item, onDelete}) => {
    return(
        <div className="item">
            <h3>{item.itemName} <FaTimes style={{
                color: "red",
                cursor: "pointer"
            }} onClick={() => onDelete(item.id)}/></h3>
            <Link to={`/modifyItem/${item.id}`}>Modify</Link>
            <p>{item.rarity}</p>
            <p>{item.itemClass}</p>
            <p>{item.count}</p>
            <p>{item.level}</p>
        </div>
    )
}

export default Item