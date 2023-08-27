import './Styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navbar.component';
import Projects from './routes/Projects.component';
import ProjectsDetailed from './routes/ProjectsDetailed.component';
import Contact from './routes/Contact.component';
import Home from './routes/Home.component';
import Landing from './routes/Landing.component';
import { Footer } from './routes/Footer.component';
import particlesOptions from './configs/particles.json';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { ISourceOptions } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import About from './routes/About.component';



function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

  const viewportSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }

  const { width, height } = viewportSize();

  return (
    <Router>
      { width < 600 ? (
        <></>
      ) : (
        <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      )}
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing viewportSize={viewportSize()}/>} ></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/projects' element={<ProjectsDetailed />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
