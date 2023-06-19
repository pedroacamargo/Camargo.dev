import './NavbarLinks.styles.scss'
import { Link } from 'react-router-dom';

const NavbarLinks = (props) => {
    return (
        <div className='navbar-links'>
            <Link className='navbar-link' to='/' onClick={props.handleNavbarHeight}> Home </Link>
            <Link className='navbar-link' to='/about'> About </Link>
            <Link className='navbar-link' to='/projects' onClick={() => {
                props.setIsOpened(false);
            }}> Projects </Link>
            <Link className='navbar-link' to='/contact'> Contact </Link>
        </div>
    );
}


export default NavbarLinks;