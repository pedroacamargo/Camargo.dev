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
            <p>I'm 22 and studying Cybersecurity at the University of Minho. My programming journey started at 17, while I was studying economics in high school. I began teaching myself web development and fell in love with building things through code. These days, I'm an Invited Assistant Professor and co-founder and software engineer at Kouci, a water polo analytics app. A lot has changed since those first lines of code, but I still love learning and bringing ideas to life. I also have a YouTube channel called Aspect Pedro. Check it out ;)<br />
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
