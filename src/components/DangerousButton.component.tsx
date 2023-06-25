import React from 'react';
import '../Styles/DangerousButton.scss'
import { Link } from 'react-router-dom';

interface Props {
    message: string;
}

export const DangerousButton = (props: Props) => {
    return ( 
        <Link to='/about' className='dangerous-btn'>&#x26A0; {props.message}</Link>
    )
}
