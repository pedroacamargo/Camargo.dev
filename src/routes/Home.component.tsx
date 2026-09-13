import Projects from "./Projects.component";
import Contact from "./Contact.component";
import AboutPage from "../components/about/AboutPage.compomnent";
import { Skills } from "../components/skills/Skills.component";
import { Kouci } from "../components/kouci/Kouci.component";

const Home = () => {
    return (
        <>
            <AboutPage />
            <Skills />
            <Kouci />
            <Projects />
            <Contact />
        </>
    );
}

export default Home;
