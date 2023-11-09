import { Link } from 'react-router-dom';

function Nav() {
    return (
            <div className="nav-bar">
                <nav >
                    <ul>
                        <div className="home-resume">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to= "/resume">Resume</Link></li>
                        </div>
                        <div className="blog-projects">
                            <li><Link to= "/blog">Blog</Link></li>
                            <li><Link to= "/projects">Projects</Link></li>
                        </div>
                    </ul>
                </nav>
            </div>
    )
};

export default Nav