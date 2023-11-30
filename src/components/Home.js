
import emily from '../images/emily.png'
import sunsAndClouds from '../images/suns_and_clouds.png'
import sun from '../images/sunnie.png';
import clouds from '../images/cloudies.png';

function Home() {
    return (
        <div className="home-div">
            <div className="name-div">
            <h2>Emily</h2>
            <h2>Daniels</h2>
            </div>
            <div className="image-div">
                <img className="emily-image"src={emily} alt="photo of Emily"/>
                <img className="cloud-1" src={clouds}/>
                <img  className="cloud-2" src={clouds}/>
                <img  className="sun-1"src={sun}/>
                <img className="sun-2" src={sun}/>
                <img className="sun-3"src={sun}/>
            
            </div>

            <div className="text-div">
                <h2>Hi, there! I'm Emily</h2>
                <h3>I am a full-stack engineer / web dev / educator,</h3>
                <br></br>
                <h3>currently residing in Brooklyn, NY.</h3>
            </div> 
            
        </div>
    )
}

export default Home;