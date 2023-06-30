import './Styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navbar.component';
import Projects from './routes/Projects.component';
import About from './routes/About.component';
import Contact from './routes/Contact.component';
import Home from './routes/Home.component';
import Landing from './routes/Landing.component';
import { Spacer } from './components/global/Spacer.component';
import { Footer } from './components/global/Footer.component';
import particlesOptions from './configs/particles.json';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { ISourceOptions } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';



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
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
