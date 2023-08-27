import React from 'react'
import '../../Styles/about/About.styles.scss';
import { Decorations } from './Decorations.component';
import { Reveal } from '../reveal/Reveal';
import { AboutMeDesktop } from './AboutMeDesktop.component';
import { AboutMeMobile } from './AboutMeMobile.component';
import { TransitionAbout } from './TransitionAbout.component';

const AboutPage = () => {
    return (
        <section style={{backgroundColor: "black"}} className='about-container'>
            <Decorations />
            <Reveal>
                <AboutMeDesktop />
            </Reveal>
            <AboutMeMobile/>
            <TransitionAbout />
        </section>
    )
}

export default AboutPage;