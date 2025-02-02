import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHJdOexQzD5uw/profile-displayphoto-shrink_400_400/B56ZRnYrSjH0Ag-/0/1736901310072?e=1743033600&v=beta&t=mKY4ardJlltb7JrFctZenGj3_bcSqjRqanG_vroCqEE" alt="Avatar" />
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