import React from 'react'
import '../../Styles/skills/Siren.scss';


export const Siren = () => {
    return (
        <div className='siren-container'>

            <div className='siren-glass'>
                <div className='strip'></div>
                <div className='siren-light siren-light-right'></div>
                <div className='siren-light siren-light-left'></div>
            </div>
            <div className='bottom'></div>
        </div>
    )
}
