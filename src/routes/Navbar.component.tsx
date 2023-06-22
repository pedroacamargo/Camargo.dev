import { CSSProperties, useState } from 'react';
import '../Styles/navbar/Navbar.styles.scss'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import Balls from '../components/navbar/Balls.component';
import NavbarLinks from '../components/navbar/NavbarLinks.component';
import MobileMenu from '../components/navbar/MobileMenu.component';
import WhoAmI from '../components/navbar/WhoAmI.component';
import ImageDecoration from '../components/navbar/ImageDecoration.component';


const Navbar = () => {
    const [isOpened, setIsOpened] = useState<boolean>(true);
    const navigate = useNavigate(); 

    const navbarStyle: CSSProperties = {
        height: isOpened ? '100vh' : '',
    }
    
    const swipeUpStyle: CSSProperties = {
        top: isOpened ? 'calc(100vh - 300px)' : '70px', // If want to change, go to the sass file
    }
    
    // Functions
    const handleNavbarHeight = (): void => {
        setIsOpened(!isOpened);
    }
    
    return (
        <div style={{position: 'fixed', width: '100%'}}>
            <nav style={navbarStyle}>
                <Balls />

                <div className="navbar-container" style={{
                    backgroundColor: isOpened ? 'black' : '',
                }}>
                    <span className='logo' onClick={handleNavbarHeight} >Camargo.dev</span>
                    <NavbarLinks handleNavbarHeight={handleNavbarHeight} setIsOpened={setIsOpened}/>
                    <MobileMenu />
                </div>

                <div className='profile-container'>
                    <WhoAmI />
                    <ImageDecoration isOpened={isOpened}/>
                </div>
            
                <button className='swipe-up' style={swipeUpStyle} onClick={() => {
                    handleNavbarHeight();
                    navigate('/');
                }}>
                    <FontAwesomeIcon icon={faArrowUpLong} />
                    <span>Navigate</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;

// <div className='strip4'></div>
//<div className='contact-me'>Contact me</div>