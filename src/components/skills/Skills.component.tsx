import React from 'react';
import '../../Styles/skills/Skills.scss';
import { ShieldCheck, ScanSearch, Bug, Terminal, Database, Blocks } from 'lucide-react';
import skills from '../../data/skills.json';
import { Siren } from './Siren.component';
import { Reveal } from '../reveal/Reveal';

const icons = {
    shield: ShieldCheck,
    scan: ScanSearch,
    bug: Bug,
    terminal: Terminal,
    database: Database,
    blocks: Blocks,
};

export const Skills = () => {
    return (
        <div className='skills'>
            <Siren />
            <h1 className='skills-title'>SKILLS</h1>
            <p className='skills-intro'>{skills.intro}</p>
            <div className='skills-container'>
                <div className="skills-row">


                    {skills.areas.map((area) => {
                        const Icon = icons[area.icon as keyof typeof icons];
                        return (
                            <Reveal key={area.title}>

                            <div className='skill-container'>
                                <div style={{backgroundColor: area.color}} className='rotator' aria-hidden='true'></div>
                                <div className='tech-stand'>
                                    <Icon size={32} color={area.color} aria-hidden='true' />
                                    <h2>{area.title}</h2>
                                    <p>{area.description}</p>
                                    <span className='skill-focus'>{area.focus}</span>
                                </div>
                            </div>
                            </Reveal>
                        )


                    })}


                </div>
            </div>
            <p className='skills-studying'>{skills.studying}</p>
        </div>
    )
}
