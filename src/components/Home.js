
import emily from '../images/emily.jpg'
import sunsAndClouds from '../images/suns_and_clouds.png'

function Home() {
    return (
        <div>
            <div className="name-div">
            <h2>Emily</h2>
            <h2>Daniels</h2>
            </div>
            <div className="image-div">
                <img className="emily-image"src={emily} alt="photo of Emily"/>
            </div>
            <div clasName="text-div">
                <h2>Hi, there! I'm Emily</h2>
                <h3>I am a full-stack engineer / web dev / educator,</h3>
                <br></br>
                <h3>currently residing in Brooklyn, NY.</h3>
            </div>
            
            
        </div>
    )
}

export default Home;