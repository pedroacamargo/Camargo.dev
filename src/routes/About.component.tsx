import React from 'react'
import '../Styles/about/About.styles.scss';
import { AboutMe } from '../components/about/AboutMe.component';
import { Decorations } from '../components/about/Decorations.component';

const About = () => {
    return (
        <section className='about-container'>
            <Decorations />
            <AboutMe />
        </section>
    )
}

export default About;