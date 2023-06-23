import '../../Styles/navbar/WhoAmI.styles.scss'
import { useState, useEffect } from 'react'
import { Socials } from './Socials.component'

const WhoAmI = () => {
    let word = "Front-end Developer."
    const wordDB = ['Front-end Developer.', 'Computer Scientist.']
    
    const [profesion, setProfesion] = useState<string>('Front-end Developer.')

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
                        option = option ? 0 : 1;
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
        </div>
    );
}

export default WhoAmI;