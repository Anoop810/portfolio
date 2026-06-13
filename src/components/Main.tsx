import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import profileImage from '../assets/images/profile.png';
import BackgroundBoxes from './BackgroundBoxes';
import LayoutTextFlip from './LayoutTextFlip';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="about-section__background" aria-hidden="true">
          <BackgroundBoxes />
          <div className="about-section__mask" />
        </div>
        <div className="image-wrapper">
          <img src={profileImage} alt="Anoop Sonawane" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#contact" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Anoop Sonawane</h1>
          <LayoutTextFlip
            className="hero-role"
            words={[
              'Developer',
              'Designer',
              'Coder',
            ]}
            duration={1800}
          />

          <div className="mobile_social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#contact" rel="noreferrer"><EmailIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
