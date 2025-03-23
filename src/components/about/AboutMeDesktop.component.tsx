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
                    <p className='about-text'>I'm a 21 years old programmer studying Computer Science at University of Minho. My first contact with programming was when I was 17 years old, while I was at high school (studying economics), I studied by my own web develpment and after that I fell in love with the world of programming. Currently I'm a full-time fullstack developer at Dtx, doing some freelancing as a Blockchain Game Developer and finishing my computer science degree. In the future I aspire in getting a master degree in Computer Graphics. I also have a Youtube Channel called Aspect Pedro. Check it out ;)</p>
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
