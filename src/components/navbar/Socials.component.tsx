import React from 'react'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Styles/navbar/Socials.styles.scss'

export const Socials = () => {
    return (
        <div className='socials-container'>
            <a href='https://github.com/pedroacamargo' className='social-btn' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            <a href='https://www.instagram.com/pedroa_camargo/' className='social-btn' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://www.linkedin.com/in/pedro-augusto-camargo-336349255/' className='social-btn'  target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    )
}
