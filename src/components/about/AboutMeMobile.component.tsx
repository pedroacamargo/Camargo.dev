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
            <p>I'm a 19 years old programmer studying Computer Science at University of Minho. I've just finished the 1st year of the course. I'm a front-end developer passionate for Cyber Security, an area that I will explore in the future. <br /> Nowadays, I'm specialized in developing and designing any kind of website you want with React. <br />
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
