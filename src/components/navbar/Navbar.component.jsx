import { useState } from 'react';
import './Navbar.styles.scss'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate();

    const bgSwipeUp = () => {
        if (isDarkMode && isHover) return 'black'
        else if (isDarkMode && !isHover) return 'rgb(0, 255, 0)'
        else if (!isDarkMode && isHover) return 'black'
        return 'black'
    }

    const setNavbarBackground = () => {
        if (isDarkMode && isOpened) {
            return 'black';
        } else if (isDarkMode && !isOpened) {
            return 'rgb(0,0,0,0.6)'
        } else if (!isDarkMode && isOpened) {
            return 'black'
        }
        return 'rgba(0,0,0,0.8)'
    }


    // styles
    const ballsStyle = {
        backgroundColor: isDarkMode ? 'rgba(235, 247, 255, 0.664)' : 'rgba(0, 0, 0, 0.8)'
    }

    const navbarStyle = {
        height: isOpened ? '100vh' : '70px',
        backgroundColor: isDarkMode ? 'black' : '#d8d5d5',
        position: 'sticky'
    }

    
    const swipeUpStyle = {
        top: isOpened ? 'calc(100vh - 100px)' : '70px',
        color: {bgSwipeUp},
    }
    
    
    // Functions
    const handleNavbarHeight = () => {
        setIsOpened(!isOpened);
    }
    
    const changeMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    
    return (
        <div style={{position: 'fixed', width: '100%'}}>
            <nav style={navbarStyle}>
                <div style={ballsStyle} className='navbar-decoration dec1'></div>
                <div style={ballsStyle} className='navbar-decoration dec2'></div>
                <div style={ballsStyle} className='navbar-decoration dec3'></div>
                <div style={ballsStyle} className='navbar-decoration dec4'></div>
                <div style={ballsStyle} className='navbar-decoration dec5'></div>
                <div style={ballsStyle} className='navbar-decoration dec6'></div>
                <div style={ballsStyle} className='navbar-decoration dec7'></div>
                <div style={ballsStyle} className='navbar-decoration dec8'></div>
                <div className="navbar-container" style={
                    {
                        backgroundColor: `${setNavbarBackground()}`,
                    }
                }>
            
                    <div className='navbar-links'>
                        <Link className='navbar-link' to='/' onClick={handleNavbarHeight}> Home </Link>
                        <Link className='navbar-link' to='/projects' onClick={() => {
                            setIsOpened(false);
                        }}> Projects </Link>
                        <Link className='navbar-link' to='/about'> About </Link>
                        <Link className='navbar-link' to='/contact'> Contact </Link>
                    </div>

                    <div class="toggle-switch">
                        <label class="switch-label">
                            <input onClick={changeMode} type="checkbox" class="checkbox" />
                            <span class="slider"></span>
                        </label>
                    </div>  

                </div>
            
                <button className='swipe-up' style={swipeUpStyle} onClick={() => {
                    handleNavbarHeight();
                    navigate('/projects');
                }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <FontAwesomeIcon icon={faArrowUpLong} />
                    <span>Projects</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;