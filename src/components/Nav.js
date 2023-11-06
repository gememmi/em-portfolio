import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav-bar">
            <nav>
                <ul className="nav-bar">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to= "/contact">Contact</Link></li>
                    <li><Link to= "/resume">Resume</Link></li>
                    <li><Link to= "/blog">Blog</Link></li>
                    <li><Link to= "/projects">Projects</Link></li>
                </ul>
            </nav>
            </div>
    )
};

export default Nav