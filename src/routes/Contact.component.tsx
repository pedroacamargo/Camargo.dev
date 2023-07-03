import React from 'react'
import { ContactForms } from '../components/contacts/ContactForms.component';
import { Footer } from './Footer.component';

const Contact = () => {
    return (
    <>
        <div style={{height: "100vh", backgroundColor: "black"}}>
            <ContactForms />
        </div>
    </>
    )
}

export default Contact;