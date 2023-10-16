import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Nav from './components/Nav'

function App() {
    return (
    
    <div>
        <Nav />
        <Routes >
            <Route path="/" element= {<Home />} />
            <Route path="/resume" element= { <Resume />} />
            <Route path= '/projects' element= { <Projects />} />
            <Route path= "/contact" element= { <Contact />} />
            <Route path= "/blog" element= { <Blog />} />
        
        </Routes>
    </div>
    
    )
};

export default App;