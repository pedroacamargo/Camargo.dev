import React from 'react';
import '../../Styles/skills/Skills.scss';
import techs from '../../skills.json'
import { Siren } from './Siren.component';

export const Skills = () => {
    return (
        <div className='skills'>
            <Siren />
            <h1 className='skills-title'>SKILLS</h1>
            <div className='skills-container'>
                <div className="skills-row">


                    {techs.techs.map((tech, i) => {
                        
                        return (
                            <div className='skill-container'>
                                <div style={{backgroundColor: `${tech.color}`}} className='rotator'></div>
                                <div className='tech-stand'>
                                    <img src={tech.img} alt="" />
                                    <span>{tech.techName}</span>
                                </div>
                            </div>
                        )


                    })}


                </div>
            </div>
        </div>
    )
}
