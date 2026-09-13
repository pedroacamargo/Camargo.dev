import React, {useContext} from 'react'
import { LinksContext } from '../../utils/contexts/socialLinks.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DangerousButton } from '../global/DangerousButton.component'
import '../../Styles/about/AboutMeDesktop.styles.scss'

export const AboutMeDesktop = () => {

    const { github } = useContext(LinksContext);

    return (
        <div className='whoami-container'>
            <div className='aboutme-container'>

                <div className="border-container">
                    <h1>Who Am I?</h1>
                    <p className='about-text'>I'm a 22 years old graduate finishing my Master's in Cybersecurity at the University of Minho. My programming journey started at 17, while I was studying economics in high school. I began teaching myself web development and fell in love with building things through code. These days, I'm an Invited Assistant Professor at the University of Minho and co-founder and software engineer at Kouci, a water polo analytics app. A lot has changed since those first lines of code, but I still love learning and bringing ideas to life. I also have a YouTube channel called Aspect Pedro. Check it out ;)</p>
                    <div>
                        <DangerousButton link="about" message='Know More'/>
                        <a href={`${github}`}target='_blank' className='dangerous-btn github-btn'><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <span className='border'></span>
                    <span className='border'></span>
                </div>

            </div>

            <div className='img-about-container'>
                <div className="img-about"></div>
            </div>

        </div>
    )
}
