import { Link } from "react-router-dom";
import sunsAndClouds from '../images/suns_and_clouds.png';

function Nav() {
  return (
    
      <nav>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <div className="nav-img">
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        <img className="suns-and-clouds"src={sunsAndClouds}/>
        </div>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </nav>

  );
}

export default Nav;
