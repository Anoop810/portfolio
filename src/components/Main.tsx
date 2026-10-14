import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { motion, useReducedMotion } from 'framer-motion';
import profileImage from '../assets/images/profile.png';
import BackgroundBoxes from './BackgroundBoxes';
import LayoutTextFlip from './LayoutTextFlip';
import { revealEase } from '../motion/scrollReveal';
import '../assets/styles/Main.scss';

function Main() {
  const reducedMotion = useReducedMotion();

  const heroInitial = reducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 40, filter: 'blur(10px)' };

  const heroAnimate = reducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: 'blur(0px)' };

  return (
    <div className="container" id="about">
      <div className="about-section">
        <div className="about-section__background" aria-hidden="true">
          <BackgroundBoxes />
          <div className="about-section__mask" />
        </div>
        <motion.div
          className="image-wrapper"
          initial={heroInitial}
          animate={heroAnimate}
          transition={{ duration: 0.9, ease: revealEase, delay: 0.05 }}
        >
          <img src={profileImage} alt="Anoop Sonawane" />
        </motion.div>
        <motion.div
          className="content"
          initial={heroInitial}
          animate={heroAnimate}
          transition={{ duration: 0.9, ease: revealEase, delay: 0.18 }}
        >
          <div className="social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#contact" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Anoop Sonawane</h1>
          <LayoutTextFlip
            className="hero-role"
            words={[
              'Full-Stack Developer',
              'AI Engineer',
              'Agent Builder',
            ]}
            duration={1800}
          />

          <div className="mobile_social_icons">
            <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anoopsonawane" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="#contact" rel="noreferrer"><EmailIcon/></a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
