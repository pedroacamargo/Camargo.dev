import '../Styles/projects/Projects.styles.scss'
import { ProjectsContainer } from '../components/projects/ProjectsContainer.component';

const ProjectsDetailed = () => {
    return (
        <>
            <div style={{backgroundColor: "black"}} className="projects-container">
                <h1 className='main-title-projects'></h1>
                <ProjectsContainer />
                <div style={{height: "50vh"}}></div>
            </div>
        </>
    );
}

export default ProjectsDetailed;