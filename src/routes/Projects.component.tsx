import '../Styles/projects/Projects.styles.scss'
import { ProjectsContainer } from '../components/projects/ProjectsContainer.component';
import { Footer } from './Footer.component';

const Projects = () => {
    return (
        <>
            <div style={{backgroundColor: "black"}} className="projects-container">
                <h1 className='main-title-projects'></h1>
                <ProjectsContainer />
            </div>
        </>
    );
}

export default Projects;