import React from 'react'
import { ContactForms } from '../components/contacts/ContactForms.component';
import { Footer } from './Footer.component';
import { Reveal } from '../components/reveal/Reveal';

const Contact = () => {
    return (
        <div style={{backgroundColor: "black"}}>
            <Reveal>
                <ContactForms />
            </Reveal>
        </div>
    )
}

export default Contact;