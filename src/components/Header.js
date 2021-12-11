import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({containerTitle, onAdd, showAdd}) => {
    return (
        <header className="header">
            <h2>{containerTitle}</h2>
            <Button color="skyblue" text={showAdd ? "Close" : "Add"} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    containerTitle: 'Inventory',
}

Header.propTypes ={
    containerTitle: PropTypes.string.isRequired,
}
export default Header
