import { CSSProperties, useState } from 'react';
import '../Styles/navbar/Navbar.styles.scss'
import '../Styles/navbar/MobileMenu.styles.scss'
import { Link } from 'react-router-dom';
import NavbarLinks from '../components/navbar/NavbarLinks.component';
import MobileMenu from '../components/navbar/MobileMenu.component';
import { MobileButton } from '../components/navbar/MobileButton.component';

const Navbar = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

    const handleMenu = () => {
        setIsMobileMenuOpened(!isMobileMenuOpened);
    }

    return (
        <div style={{position: 'fixed', width: '100%', zIndex: '60'}}>
            <nav>
                <div className="navbar-container">
                    <Link className='logo' to="/">Camargo.dev</Link>
                    <NavbarLinks />
                    <MobileButton isMobileMenuOpened={isMobileMenuOpened} handleMenu={handleMenu}/>
                </div>
            </nav>
            <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
        </div>
    );
}

export default Navbar;
