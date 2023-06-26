import React from 'react'
import '../Styles/about/About.styles.scss';
import { Decorations } from '../components/about/Decorations.component';
import { AboutMeDesktop } from '../components/about/AboutMeDesktop.component';
import { AboutMeMobile } from '../components/about/AboutMeMobile.component';


const About = () => {
    return (
        <section className='about-container'>
            <Decorations />
            <AboutMeDesktop />
            <AboutMeMobile/>
        </section>
    )
}

export default About;