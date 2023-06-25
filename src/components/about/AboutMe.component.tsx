import React from 'react'
import '../../Styles/about/AboutMe.styles.scss';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { DangerousButton } from '../DangerousButton.component';

export const AboutMe = () => {
    return (
        <>
            <div className='whoami-container'>
                <div className='aboutme-container'>

                    <div className="border-container">
                        <h1>Who Am I?</h1>
                        <p className='about-text'>I'm a 19 years old programmer studying Computer Science at University of Minho. I've just finished the 1st year of the course. My first contact with programming was when I was 17 years old, while I was at high school (studying economics), I studied by my own web develpment and after that I fell in love with this world. Furthermore, I'm a front-end developer passionate for Cyber Security, an area that I will focus in the future. Nowadays, I'm specialized in developing and designing any kind of website you want with React. If you'd like to check my projects, you can visit my GitHub profile.</p>
                        <div>
                            <DangerousButton message='Know More'/>
                            <a href='https://github.com/pedroacamargo' target='_blank' className='dangerous-btn github-btn'><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                        <span className='border'></span>
                        <span className='border'></span>
                    </div>

                </div>

                <div className='img-about-container'>
                    <div className="img-about"></div>
                </div>

            </div>

            <div className='whoami-container-mobile'>
                <h1>Who am I?</h1>
                <p>I'm a 19 years old programmer studying Computer Science at University of Minho. I've just finished the 1st year of the course. I'm a front-end developer passionate for Cyber Security, an area that I will explore in the future. <br /> Nowadays, I'm specialized in developing and designing any kind of website you want with React. <br />
                <span>You can check my projects in my GitHub profile.</span>
                </p>

                <div className="btn-container">
                    <DangerousButton message="Know More"/>
                    <a href='https://github.com/pedroacamargo' target='_blank' className='dangerous-btn github-btn'><FontAwesomeIcon icon={faGithub}/></a>
                </div>

                <div className='danger'>&#x26A0;</div>

                <div className='strip'></div>
                <div className='about-mobile-img'></div>
                <div className='danger danger2'>&#x26A0;</div>
                <div className='danger danger3'>&#x26A0;</div>

            </div>
        </>
    )
}
