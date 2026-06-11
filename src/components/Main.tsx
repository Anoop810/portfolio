import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/Anoop810.png" alt="Anoop Sonawane" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:anoopsonawane810@gmail.com" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Anoop Sonawane</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="mailto:anoopsonawane810@gmail.com" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
