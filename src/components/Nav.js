import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav-bar">
      <nav>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
}

export default Nav;
