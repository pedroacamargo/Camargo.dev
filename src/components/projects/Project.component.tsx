import React from 'react'
import '../../Styles/projects/Project.styles.scss'
import projectsDB from '../../projectsDB.json';

export const Project = () => {
    
    return (
        <>
            {projectsDB.projects.map((project) => (
                <div className='project'>
                    <div className='project-image-container'>
                        <img src={`${project.background}`} alt="" />
                        <div className='hover-container'>
                            <h1 className='project-title'>{`${project.title}`}</h1>
                            <span className='project-subtitle'>{`${project.subtitle}`}</span>
                            <div className='tech-container'>
                                {project.technologies.map((img) => (
                                    <img className='tech-img' src={`${img.value}`} alt="" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
