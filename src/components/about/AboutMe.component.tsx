import React from 'react'
import '../../Styles/about/AboutMe.styles.scss';

export const AboutMe = () => {
    return (
        <>
            <div className='whoami-container'>
                <div className='aboutme-container'>
                    <div className="border-container">
                        <p className='about-text'>I'm a 19 years old programmer studying Computer Science at University of Minho. I've just finished the 1st year of the course. My first contact with programming was when I was 17 years old, while I was at high school (studying economics), I studied by my own web develpment and after that I fell in love with this world. Furthermore, I'm a front-end developer passionate for Cyber Security, an area that I will focus in the future. Nowadays, I'm specialized in developing and designing any kind of website you want with React. If you'd like to check my projects, you can visit my GitHub profile. Also, I'm a Water Polo goalkeeper :) </p>
                        <span className='border'></span>
                        <span className='border'></span>
                    </div>
                </div>
                <div className='img-about-container'>
                    <div className="img-about"></div>
                </div>
            </div>
        </>
    )
}
