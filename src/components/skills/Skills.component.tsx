import React from 'react';
import '../../Styles/skills/Skills.scss';
import techs from '../../data/skills.json'
import { Siren } from './Siren.component';
import { Reveal } from '../reveal/Reveal';

export const Skills = () => {
    return (
        <div className='skills'>
            <Siren />
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-container'>
                <div className="skills-row">


                    {techs.techs.map((tech, i) => {
                        
                        return (
                            <Reveal>

                            <div className='skill-container'>
                                <div style={{backgroundColor: `${tech.color}`}} className='rotator'></div>
                                <div className='tech-stand'>
                                    <img src={tech.img} alt={`${tech.techName}`} />
                                    <span>{tech.techName}</span>
                                </div>
                            </div>
                            </Reveal>
                        )


                    })}


                </div>
            </div>
        </div>
    )
}
