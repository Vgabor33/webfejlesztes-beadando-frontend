import PropTypes from "prop-types"
import Button from "./Button"

const Header = ({containerTitle}) => {
    return (
        <header className="header">
            <h2>{containerTitle}</h2>
            <Button color="skyblue" text="Add item"/>
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
