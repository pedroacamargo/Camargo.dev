import React, {useContext} from 'react'
import { LinksContext } from '../../utils/contexts/socialLinks.context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DangerousButton } from '../global/DangerousButton.component'
import '../../Styles/about/AboutMeMobile.styles.scss'

export const AboutMeMobile = () => {
    const { github } = useContext(LinksContext)

    return (
        <div className='whoami-container-mobile'>
            <h1>Who am I?</h1>
            <p>I'm a 21 years old programmer studying Computer Science at University of Minho. My first contact with programming was when I was 17 years old, while I was at high school (studying economics), I studied by my own web develpment and after that I fell in love with the world of programming. Currently I'm a full-time fullstack developer at Dtx, doing some freelancing as a Blockchain Game Developer and finishing my computer science degree. In the future I aspire in getting a master degree in Computer Graphics. I also have a Youtube Channel called Aspect Pedro. Check it out ;)<br />
            <span>You can check my projects in my GitHub profile.</span>
            </p>

            <div className="btn-container">
                <DangerousButton link='about' message="Know More"/>
                <a href={`${github}`} target='_blank' className='dangerous-btn github-btn'><FontAwesomeIcon icon={faGithub}/></a>
            </div>

            <div className='danger'>&#x26A0;</div>

            <div className='strip'></div>
            <div className='about-mobile-img'></div>
            <div className='danger danger2'>&#x26A0;</div>
            <div className='danger danger3'>&#x26A0;</div>
        </div>
    )
}
