import './Styles/App.scss'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './routes/Navbar.component';
import Projects from './routes/Projects.component';
import About from './routes/About.component';
import Contact from './routes/Contact.component';
import Home from './routes/Home.component';
import { Spacer } from './components/Spacer.component';
import { Footer } from './components/Footer.componen';


function App() {
  return (
    <Router>
      <Navbar />
      <Spacer />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='*' element></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
