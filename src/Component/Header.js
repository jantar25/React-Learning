import PropTypes from 'prop-types'
import Button from './Button'

const onClick=()=>{
    console.log("Button clicked")
}
const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Hello" onClick={onClick}/>
        </header>
    )
}
Header.defaultProps={
    title:"Task Tracker System",
}
Header.propTypes={
    title:PropTypes.string,
}
export default Header
