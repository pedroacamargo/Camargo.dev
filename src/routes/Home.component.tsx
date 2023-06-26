import Projects from "./Projects.component";
import About from "./About.component";
import Contact from "./Contact.component";
import { Footer } from "../components/global/Footer.component";

const Home = () => {
    return (
        <>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;