import '../../Styles/navbar/NavbarLinks.styles.scss'
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    return (
        <div className='navbar-links'>
            <Link className='navbar-link' to='/home' > Home </Link>
            <Link className='navbar-link' to='/about'> About </Link>
            <Link className='navbar-link' to='/projects'> Projects </Link>
            <Link className='navbar-link' to='/contact'> Contact </Link>
        </div>
    );
}


export default NavbarLinks;