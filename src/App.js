import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import ProjectsContainer from './components/ProjectsContainer'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Nav from './components/Nav'
import About from './components/About'


function App() {
    return (
    
    <div>
        <Nav />
        <Routes >
            <Route path="/" element= {<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element= { <Resume />} />
            <Route path= '/projects' element= { <ProjectsContainer />} />
            <Route path= "/contact" element= { <Contact />} />
            <Route path= "/blog" element= { <Blog />} />
            <Route path="/contact" element= { <Contact />} />
        
        </Routes>
    </div>
    
    )
};

export default App;