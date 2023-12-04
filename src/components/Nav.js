import { Link } from "react-router-dom";
import sunsAndClouds from '../images/suns_and_clouds.png';

function Nav() {
  return (
    
      <nav>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/resume" className="nav-link">Resume</Link>
        <div className="nav-img">
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        </div>
        <Link to="/blog" className="nav-link">Blog</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
      </nav>

  );
}

export default Nav;
