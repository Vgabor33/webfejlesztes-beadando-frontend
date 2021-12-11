import PropTypes from "prop-types"

const Button = ({color, text}) => {
    return (
        <div>
            <button style={{backgroundColor: color}} className="btn">{text}</button>
        </div>
    )
}

Button.defaultProps = {
    color: 'skyblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
