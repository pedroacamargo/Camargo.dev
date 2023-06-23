import '../../Styles/navbar/MobileMenu.styles.scss'
import { Link } from 'react-router-dom'

interface Props {
    isMobileMenuOpened: boolean,
}

const MobileMenu = (props: Props) => {
    const menuStyle = {
        left: props.isMobileMenuOpened ? '0vw' : '-100vw',
    }

    return (
        <div className='mobile-navbar'>
            <div style={menuStyle} className='menu'>
                <Link className='mobile-navbar-link' to='/'>Home</Link>
                <Link className='mobile-navbar-link' to='/about'>About</Link>
                <Link className='mobile-navbar-link' to='/projects'>Projects</Link>
                <Link className='mobile-navbar-link' to='/contacts'>Contact</Link>
            </div>
        </div>
    );
}

export default MobileMenu;