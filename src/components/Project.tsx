import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Publications</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="DraftWise thumbnail" width="100%"/></a>
                <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><h2>DraftWise</h2></a>
                <p>AI-powered email generation platform using the Gemini API with customizable tone, style, and intent. Integrated Google OAuth 2.0 and Gmail APIs for secure authentication and direct email delivery, with a responsive React + Tailwind CSS frontend and Express.js backend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="Holidays Tours CRM thumbnail" width="100%"/></a>
                <a href="https://github.com/Anoop810" target="_blank" rel="noreferrer"><h2>Holidays Tours & Travels CRM</h2></a>
                <p>CRM platform managing 100+ customer records with trip management, billing, and workflow automation. Features invoice generation, payment verification, referral rewards, subscription plans, and JWT-secured REST APIs built with Node.js and MongoDB.</p>
            </div>
            <div className="project">
                <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=EcoAlgorithmics" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="EcoAlgorithmics publication thumbnail" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=EcoAlgorithmics" target="_blank" rel="noreferrer"><h2>EcoAlgorithmics</h2></a>
                <p>Published in IEEE Xplore. An energy-aware algorithm benchmarking platform that quantifies the carbon footprint of software algorithms using CPU telemetry and energy consumption estimates.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
