import { FaGithubAlt } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function About() {
  return (
    <div className="about-div">
      <div className="about-text">
        <h1>About me...</h1>
        <p>
          My journey into the tech world started just before my boot camp
          at Flatiron School. As a creative and curious individual, I sought
          out online web development classes as a way to add breadth to the
          creative mediums I already practiced. Creating websites with
          interesting, but sometimes totally irrelevant use is a blossoming
          passion of mine, where I can exploremy creativity using
          programming skills. 
          <br />
          Watch her blog for posts on this topic! She is
          currently working as a coding instructor while she learns SwiftUI. Outside of tech, Emily loves being an aimless
          pedestrian in her city where inspiration and really amazing pastries
          are usually found.
        </p>
      </div>
      <div className="icon-div">
        <FaGithubAlt />
        <GoMail />
        <FaLinkedin />
        <FaInstagram />
      </div>
    </div>
  );
}

export default About;
