import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

// Import the local image
import portraitImage from '../assets/images/portrait.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          {/* Use the imported image */}
          <img src={portraitImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/vishalorsu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vishalorsu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Vishal Orsu</h1>
          <p>Data Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/vishalorsu" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vishalorsu/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
