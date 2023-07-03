import { CSSProperties, useState } from 'react';
import '../Styles/navbar/Navbar.styles.scss'
import '../Styles/navbar/MobileMenu.styles.scss'
import { Link } from 'react-router-dom';
import NavbarLinks from '../components/navbar/NavbarLinks.component';
import MobileMenu from '../components/navbar/MobileMenu.component';
import { MobileButton } from '../components/navbar/MobileButton.component';
import logo from "./pedrocamargo.png"

const Navbar = () => {
    const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);
    let logoName = "Camargo.dev"
    let lettersLogo = [];

    for (let i = 0; i < logoName.length; i++) {
        lettersLogo.push(logoName[i]);
    }


    const handleMenu = () => {
        setIsMobileMenuOpened(!isMobileMenuOpened);
    }

    return (
        <div style={{position: 'fixed', width: '100%', zIndex: '60', backdropFilter: "blur(10px)"}}>
            <nav>
                <div className="navbar-container">
                    <Link to="/" className='logo-container'>

                        <img src={logo} alt="Logo" />

                        {lettersLogo.map((letter) => (
                            <span className='logo'>{letter}</span>
                        ))}

                    </Link>


                    <NavbarLinks />
                    <MobileButton isMobileMenuOpened={isMobileMenuOpened} handleMenu={handleMenu}/>
                </div>
            </nav>
            <MobileMenu isMobileMenuOpened={isMobileMenuOpened}/>
        </div>
    );
}

export default Navbar;
