import Item from "./Item"

const Items = ({items}) => {
    return (
        <>
        {items.map((item) => (
            <Item key={item.id} item={item.itemName}/>
        ))}
        </>
        )
}

export default Items