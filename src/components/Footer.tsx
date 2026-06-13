import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="#contact" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Anoop Sonawane </p>
    </footer>
  );
}

export default Footer;
