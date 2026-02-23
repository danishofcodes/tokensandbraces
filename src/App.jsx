
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import {projects} from './data/projectsdata.js'
import {posts} from './data/posts.js'
import HeroSection from './components/AboutPage/HeroSection.jsx';
import ExperienceSection from './components/AboutPage/ExperienceSection.jsx';
import TechStackSection from './components/AboutPage/TechStackSection.jsx';
import Pinboard from './components/Pinboard/Pinboard.jsx'
import Projects from './components/ProjectsPage/Projects.jsx'
import About from './components/AboutPage/About.jsx';
import Error404 from './components/Err404.jsx';


function App() {




  return (
    <>
    <BrowserRouter>
        <Navbar />
        
         <Routes>
        <Route path="/" element={<About />} />     
        <Route path="/projects" element={<Projects />} />
        <Route path="/pinboard" element={<Pinboard />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
     
        <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
