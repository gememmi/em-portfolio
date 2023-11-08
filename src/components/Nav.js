import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-bar">
            <nav>
                <ul> 
                    <li><Link className="links" to='/'>Home</Link></li>
                    <li><Link className="links" to= "/contact">Contact</Link></li>
                    <li><Link className="links" to= "/resume">Resume</Link></li>
                    <li><Link className="links" to= "/blog">Blog</Link></li>
                    <li><Link className="links" to= "/projects">Projects</Link></li>
                </ul>
            </nav>
            </div>
    )
};

export default Nav