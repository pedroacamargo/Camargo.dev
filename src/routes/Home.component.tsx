import Projects from "./Projects.component";
import Contact from "./Contact.component";
import AboutPage from "../components/about/AboutPage.compomnent";
import { Skills } from "../components/skills/Skills.component";

const Home = () => {
    return (
        <>
            <AboutPage />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;