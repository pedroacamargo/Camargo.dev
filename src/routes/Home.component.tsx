import Projects from "./Projects.component";
import About from "./About.component";
import Contact from "./Contact.component";
import { Skills } from "../components/skills/Skills.component";

const Home = () => {
    return (
        <>
            <About />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;