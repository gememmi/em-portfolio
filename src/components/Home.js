import GenArt from './GenArt';
import Nav from './Nav';


function Home() {
    return (
        <div>
            <Nav />
            <div className="name-div">
            <h2>Emily Daniels</h2>
            </div>
            <h3>STEAM Educator and Fullstack Software Engineer</h3>
            <GenArt />
            
        </div>
    )
}

export default Home;