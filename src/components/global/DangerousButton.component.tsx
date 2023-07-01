import React from 'react';
import '../../Styles/DangerousButton.scss'
import { Link } from 'react-router-dom';

interface Props {
    message: string;
    link: string;
    class?: string;
}

export const DangerousButton = (props: Props) => {   
    return ( 
        <Link to={`/${props.link}`} className={`dangerous-btn ${props.class}`}>&#x26A0; {props.message}</Link>
    )
}
