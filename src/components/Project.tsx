import React from "react";
import draftWise from '../assets/images/draftWise.png';
import Holidays from '../assets/images/Holidays.png';
import Eco from '../assets/images/Eco.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects & Publications</h1>
        <div className="projects-grid">
            <div className="project project--draftwise">
                <a href="https://draft-wise-dqqa.vercel.app" target="_blank" rel="noreferrer"><img src={draftWise} className="zoom" alt="DraftWise thumbnail" width="100%"/></a>
                <a href="https://draft-wise-dqqa.vercel.app/" target="_blank" rel="noreferrer"><h2>DraftWise</h2></a>
                <p>AI-powered email generation platform using the Gemini API with customizable tone, style, and intent. Integrated Google OAuth 2.0 and Gmail APIs for secure authentication and direct email delivery, with a responsive React + Tailwind CSS frontend and Express.js backend.</p>
            </div>
            <div className="project project--holidays">
                <a href="https://crmportfolio.netlify.app/" target="_blank" rel="noreferrer"><img src={Holidays} className="zoom" alt="Holidays Tours CRM thumbnail" width="100%"/></a>
                <a href="https://crmportfolio.netlify.app/" target="_blank" rel="noreferrer"><h2>Holidays Tours & Travels CRM</h2></a>
                <p>CRM platform managing 100+ customer records with trip management, billing, and workflow automation. Features invoice generation, payment verification, referral rewards, subscription plans, and JWT-secured REST APIs built with Node.js and MongoDB.</p>
            </div>
            <div className="project project--eco">
                <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=EcoAlgorithmics" target="_blank" rel="noreferrer"><img src={Eco} className="zoom" alt="EcoAlgorithmics publication thumbnail" width="100%"/></a>
                <a href="https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=EcoAlgorithmics" target="_blank" rel="noreferrer"><h2>EcoAlgorithmics</h2></a>
                <p>Published in IEEE Xplore. An energy-aware algorithm benchmarking platform that quantifies the carbon footprint of software algorithms using CPU telemetry and energy consumption estimates.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
