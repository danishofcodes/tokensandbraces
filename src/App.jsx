import MainSection from './components/MainSection'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import {projects} from './data/projectsdata.js'
import {posts} from './data/posts.js'

function App() {

  
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainSection projects={projects} posts={posts} />
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}

export default App
