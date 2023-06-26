import '../../Styles/navbar/NavbarLinks.styles.scss'
import { Link } from 'react-router-dom';

interface Props {
    handleNavbarHeight: React.MouseEventHandler<HTMLAnchorElement>,
    setIsOpened: (open: boolean) => void,
}

const NavbarLinks = (props: Props) => {
    return (
        <div className='navbar-links'>
            <Link className='navbar-link' to='/' onClick={() => {
                props.setIsOpened(false);
            }}> Home </Link>
            <Link className='navbar-link' to='/about' onClick={() => {
                props.setIsOpened(false);
            }}> About </Link>
            <Link className='navbar-link' to='/projects' onClick={() => {
                props.setIsOpened(false);
            }}> Projects </Link>
            <Link className='navbar-link' to='/contact' onClick={() => {
                props.setIsOpened(false);
            }}> Contact </Link>
        </div>
    );
}


export default NavbarLinks;