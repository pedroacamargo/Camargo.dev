import '../../Styles/landing/WhoAmI.styles.scss'
import { useState, useEffect } from 'react'
import { Socials } from '../Socials.component'
import { Link } from 'react-router-dom'
import { DangerousButton } from '../global/DangerousButton.component'

const WhoAmI = () => {
    let word = "Software Engineer."
    const wordDB = ['Software Engineer.', 'Computer Scientist.', 'Graphics Engineer.', 'Everything, I\'m a machine.'];
    
    const [profesion, setProfesion] = useState<string>('Software Engineer.');

    let totalWaitTime = 60;
    let isIncreasing = false, wait = totalWaitTime, option = 0;


    useEffect(() => {
        const interval = setInterval(() => {
            if (word.length !== 0 && !isIncreasing) {
                word = word.slice(0,-1);
            } else if (word.length === 0 || isIncreasing) {
                isIncreasing = true;
                if (word.length < wordDB[option].length) {
                    word += wordDB[option][word.length];
                } else {
                    if (wait === 0){
                        isIncreasing = false;
                        wait = totalWaitTime;
                        option = ( option + 1 ) % wordDB.length;
                    } else {
                        wait--;
                    }
                }
            }
            setProfesion(word);
        }, 50);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='profile-section'>
            <div className='profile-wordwrapper'>
                <span>Hello, I am</span>
                <h1>Pedro Augusto Camargo</h1>
                <h2 className="subtitle"> {profesion} </h2>
            </div>

            {/* Desktop Social icons */}
            <div className='social'>
                <div className='strip1'></div>
                <div className='strip2'></div>
                <div className='strip3'></div>
                <Socials />
            </div>
            <DangerousButton message='Explore' link='home' class='explore-btn'/>
        </div>
    );
}

export default WhoAmI;