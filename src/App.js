import './App.scss'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './routes/navbar/Navbar.component';
import Projects from './routes/Projects.component';

function App() {
  return (
    <Router>
      <main>
        <Navbar />

        <Routes>
          <Route path='/' element></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/about' element></Route>
          <Route path='/contact' element></Route>
          <Route path='*' element></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
