import { Link } from 'react-router-dom'
import '../src/Header.css'
function Header() {
    return (
        <>
            <h1>Welcome</h1>
            <Link to="/about" className='span'>About us</Link>
            <Link to="/contact">Contact Us</Link>
        </>
    )
}
export default Header