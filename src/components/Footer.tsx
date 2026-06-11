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
        <a href="mailto:anoopsonawane810@gmail.com" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Portfolio of Anoop Sonawane · Built with <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">react-portfolio-template</a></p>
    </footer>
  );
}

export default Footer;
