import React, {useContext} from 'react'
import { LinksContext } from '../../utils/contexts/socialLinks.context'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../Styles/navbar/Socials.styles.scss'

export const Socials = () => {
    const { github, instagram, linkedin } = useContext(LinksContext);
    return (
        <div className='socials-container'>
            <a href={`${github}`} className='social-btn' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
            <a href={`${instagram}`} className='social-btn' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href={`${linkedin}`} className='social-btn'  target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
    )
}
