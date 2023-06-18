import { useEffect, useState } from 'react';
import './Navbar.styles.scss'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong, faFontAwesomeLogoFull, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
    let word = "Front-end Developer."
    const wordDB = ['Front-end Developer.', 'Computer Scientist.']
    let totalWaitTime = 60;
    let isIncreasing = false, wait = totalWaitTime, option = 0;
    const [isOpened, setIsOpened] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const [profesion, setProfesion] = useState('Front-end Developer.')
    const navigate = useNavigate();

    const bgSwipeUp = () => {
        if (isDarkMode && isHover) return 'black'
        else if (isDarkMode && !isHover) return 'rgb(0, 255, 0)'
        else if (!isDarkMode && isHover) return 'white'
        return 'black'
    }

    const borderSwipeUp = () => {
        if (isDarkMode && isHover) return '1px solid white'
        else if (isDarkMode && !isHover) return '1px solid rgb(0, 255, 0)'
        else if (!isDarkMode && isHover) return '1px solid white'
        return '1px solid black'
    }

    const bgColorSwipeUp = () => {
        if (isDarkMode && isHover) return 'white'
        else if (isDarkMode && !isHover) return ''
        else if (!isDarkMode && isHover) return 'black'
        return ''
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
        backgroundColor: isDarkMode ? 'rgba(161, 31, 31, 0.664)' : 'rgba(0, 0, 0, 0.8)'
    }

    const navbarStyle = {
        height: isOpened ? '100vh' : '70px',
        backgroundColor: isDarkMode ? 'black' : '#d8d5d5',
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
    
    const changeMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    
    const handleMouseEnter = () => {
        setIsHover(!isHover);
    };
    
    const handleMouseLeave = () => {
        setIsHover(!isHover);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (word.length != 0 && !isIncreasing) {
                word = word.slice(0,-1);
            } else if (word.length == 0 || isIncreasing) {
                isIncreasing = true;
                if (word.length < wordDB[option].length) {
                    word += wordDB[option][word.length];
                } else {
                    if (wait == 0){
                        isIncreasing = false;
                        wait = totalWaitTime;
                        option = option ? 0 : 1;
                    } else {
                        wait--;
                    }
                }
            }
            setProfesion(word);
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);
    
    
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

                    <div className="toggle-switch">
                        <label className="switch-label">
                            <input onClick={changeMode} type="checkbox" className="checkbox" />
                            <span className="slider"></span>
                        </label>
                    </div>  

                </div>

                <div className='profile-container'>
                    <div className='profile-section'>
                        <div className='profile-wordwrapper'>
                            <span>Hello, I am</span>
                            <h1>Pedro Augusto Camargo</h1>
                            <h2 className="subtitle"> {profesion} </h2>
                        </div>
                        <div className='social'>
                            <div className='strip1'></div>
                            <div className='strip2'></div>
                            <div className='strip3'></div>
                            <div className='socials-container'>
                                <a href='#' className='social-btn'><FontAwesomeIcon icon={faGithub} /></a>
                                <a href='#' className='social-btn'><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href='#' className='social-btn'><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            
                        </div>
                    </div>
                    <div className='profile-section'></div>
                </div>
            
                <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='swipe-up' style={swipeUpStyle} onClick={() => {
                    handleNavbarHeight();
                    navigate('/projects');
                }}>
                    <FontAwesomeIcon icon={faArrowUpLong} />
                    <span>Projects</span>
                </button>
            </nav>
        </div>
    );
}

export default Navbar;

// <div className='strip4'></div>
//<div className='contact-me'>Contact me</div>