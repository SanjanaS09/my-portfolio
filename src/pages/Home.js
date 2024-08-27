import React from 'react';
import './Home.css';
import image from '../assets/image.png';
import githubIcon from '../assets/icons/github.png'; 
import linkedinIcon from '../assets/icons/linkedin.png'; 

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="image">
          <img src={image} alt="Sanjana Shetty" className="profile-image" />
        </div>
        <div className="text">
          <h1>I'm Sanjana Shetty</h1>
          <p>
            Pre-final year student at Usha Mittal Institute of Technology,
            pursuing a B.Tech in Computer Science and Technology, Class of 2026,
            and serving as the IEEE UMIT Co-chairperson for the term 2024-25.
          </p>
          <div className="social-icons">
            <a href="https://github.com/SanjanaS09">
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/sanjana-shetty-1a304b258/">
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Home;
