import React, {useContext} from 'react'
import "../Styles/Footer.scss";
import { Socials } from '../components/Socials.component';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinksContext } from '../utils/contexts/socialLinks.context'
import logo from './pedrocamargo.png'


export const Footer = () => {
    const { github, instagram, linkedin } = useContext(LinksContext)


    return (
        <footer>
            <div className='copyright-container' style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={logo} alt="" style={{marginRight: "20px"}}/>
                <h3> Created by <strong>Pedro Augusto Camargo</strong> &copy; 2023-2025</h3>
            </div>
            <div className="footer-socials">
                <a href={`${github}`} className='footer-social-btn' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
                <a href={`${instagram}`} className='footer-social-btn' target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
                <a href={`${linkedin}`} className='footer-social-btn'  target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </footer>
    )
}
