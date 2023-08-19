import React from 'react'
import { Project } from './Project.component'
import '../../Styles/projects/ProjectsContainer.styles.scss'
import { Reveal } from '../reveal/Reveal'

export const ProjectsContainer = () => {
    return (
        <Reveal>
            <div className='projects-main-container'>
                <Project />
            </div>
        </Reveal>
    )
}
