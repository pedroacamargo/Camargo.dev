import '../Styles/projects/Projects.styles.scss'
import { ProjectsContainer } from '../components/projects/ProjectsContainer.component';

const Projects = () => {
    return (
        <div className="projects-container">
            <h1 className='main-title-projects'></h1>
            <ProjectsContainer />
        </div>
    );
}

export default Projects;