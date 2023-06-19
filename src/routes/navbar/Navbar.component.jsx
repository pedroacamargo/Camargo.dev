import { useEffect, useState } from 'react';
import './Navbar.styles.scss'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Balls from '../../components/navbar/balls/Balls.component';
import NavbarLinks from '../../components/navbar/navbar-links/NavbarLinks.component';
import MobileMenu from '../../components/navbar/mobile-menu/MobileMenu.component';
import WhoAmI from '../../components/navbar/who-am-i/WhoAmI.component';
import ImageDecoration from '../../components/navbar/who-am-i/imagedecoration/ImageDecoration.component';


const Navbar = () => {
    const [isOpened, setIsOpened] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    const bgSwipeUp = () => {
        return isHover ? 'black' : 'rgb(0,255,0)'
    }

    const borderSwipeUp = () => {
        return isHover ? '1px solid white' : '1px solid rgb(0,255,0)'
    }

    const bgColorSwipeUp = () => {
        return isHover ? 'white' : '' 
    }

    const setNavbarBackground = () => {
        return isOpened ? 'black' : 'rgb(0,0,0,0.6)';
    }

    const navbarStyle = {
        height: isOpened ? '100vh' : '70px',
        backgroundColor: 'black',
        position: 'sticky'
    }
    /* */
    
    const swipeUpStyle = {
        top: isOpened ? 'calc(100vh - 100px)' : '70px',
        color: bgSwipeUp(),
        border: borderSwipeUp(),
        backgroundColor: bgColorSwipeUp(),
    }
    
    // Functions
    const handleNavbarHeight = () => {
        setIsOpened(!isOpened);
    }
    
    const handleMouseEnter = () => {
        setIsHover(!isHover);
    };
    
    const handleMouseLeave = () => {
        setIsHover(!isHover);
    };
    
    
    return (
        <div style={{position: 'fixed', width: '100%'}}>
            <nav style={navbarStyle}>
                <Balls />

                <div className="navbar-container" style={{
                    backgroundColor: `${setNavbarBackground()}`,
                }}>
                    <span className='logo' onClick={handleNavbarHeight} >Camargo.dev</span>
                    <NavbarLinks handleNavbarHeight={handleNavbarHeight} setIsOpened={setIsOpened}/>
                    <MobileMenu />
                </div>

                <div className='profile-container'>
                    <WhoAmI />
                    <ImageDecoration isOpened={isOpened}/>
                </div>
            
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='swipe-up' style={swipeUpStyle} onClick={() => {
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