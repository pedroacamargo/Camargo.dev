import React from 'react'
import '../Styles/about/About.styles.scss';
import { Decorations } from '../components/about/Decorations.component';
import { AboutMeDesktop } from '../components/about/AboutMeDesktop.component';
import { AboutMeMobile } from '../components/about/AboutMeMobile.component';
import { TransitionAbout } from '../components/about/TransitionAbout.component';
import { Footer } from './Footer.component';
import { Reveal } from '../components/reveal/Reveal';
import { SectionDecorations } from '../components/about/SectionDecorations.component';

const About = () => {
    return (
        <section style={{backgroundColor: "black"}} className='about-container'>
                <SectionDecorations />
                <Reveal>
                    <AboutMeDesktop />
                </Reveal>
                <AboutMeMobile/>
                <TransitionAbout />
            </section>
    )
}

export default About;