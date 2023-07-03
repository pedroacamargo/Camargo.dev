import React, { useRef, useState } from 'react'
import "../../Styles/contact/ContactForms.styles.scss"
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

export const ContactForms = () => {
    const form = useRef<any>();
    const username = useRef<any>();
    const email = useRef<any>();
    const textarea = useRef<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [notificationIsOpened, setNotificationIsOpened] = useState<boolean>(false)

    const clearForms = () => {
        username.current.value = "";
        email.current.value = "";
        textarea.current.value = "";
    }

    const sendEmail = (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        emailjs.sendForm('service_qhoywu6','template_vs1p5gw',form.current,'xLPFLTtIufxxG0Vqn').then(() => {
            clearForms();
            setIsLoading(false);
            setNotificationIsOpened(true);
        })
    }

    return (
        <div className='forms-container'>
            <h1>Send me an Email</h1>

            <form className='send-email-container' ref={form} onSubmit={sendEmail}>
                <div className='form-section'>
                    <div className='input-container'>
                        <input required className='input-field' ref={username} type="text" name="user_name" placeholder='First Name'/>
                        <label className='input-label'>First Name</label>
                        <div className='input-icon'><FontAwesomeIcon icon={faUser} /></div>
                        <span className='linebot'></span>
                    </div>
                    <div className='input-container'>
                        <input required style={{left: "12px"}} className='input-field' ref={email} type="email" name="user_email" placeholder='Your Email' />
                        <label className='input-label'>Your Email</label>
                        <div className='input-icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                        <span style={{left: "22px"}} className='linebot'></span>
                    </div>
                </div>
                <div className='form-section form-section-textarea'>
                    <div className="input-container">
                        <textarea required className='input-field textarea' placeholder='Type your email here' ref={textarea} name="message" />
                        <label className='input-label'>Type your message here</label>
                        <div className='input-icon'><FontAwesomeIcon icon={faEnvelope} /></div>
                        <span className='linebot'></span>
                    </div>
                </div>
                <button className='btn-submit' type="submit" value="Send" disabled={isLoading} >Send</button>
                <div className='light-blink'></div>
            </form>

            <div style={{display: `${isLoading ? "block" : "none"}`}} className="loader"></div>
            <div className='notification-emailer' style={{right: `${notificationIsOpened ? "20px" : "-300px"}`}}>
                <div className='close-btn' onClick={() => setNotificationIsOpened(!notificationIsOpened)}>X</div>
                <h4>Success</h4>
                <p>The message was sent successfully, thanks for your submit! You received an email in the respective email you input.</p>
            </div>
        </div>
    )
}
