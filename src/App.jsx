import './App.css'
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
// import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education';
import Skills from './components/Skills';
import Certification from './components/Certification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Error from './components/Error';
import Home from './components/Home';

function App() {

  return (
    <div>
     <BrowserRouter >
     <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="education" element={<Education />} />
          <Route path="skills" element={<Skills />} />
          <Route path="certification" element={<Certification />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
