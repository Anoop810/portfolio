import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Vite",
    "Responsive Web Design",
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Supabase",
    "JWT",
    "OAuth 2.0",
];

const labelsThird = [
    "AWS",
    "Docker",
    "Git",
    "Jenkins",
    "CI/CD",
    "Linux",
    "Gemini API",
    "Python",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend Development</h3>
                    <p>I build responsive, user-focused web interfaces with React.js, TypeScript, and Tailwind CSS — from product dashboards and CRMs to AI-powered platforms with modular, maintainable component architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend & Databases</h3>
                    <p>I design and ship full-stack applications with Node.js and Express, modeling database schemas, building RESTful APIs, and implementing authentication workflows that scale from freelance client projects to production systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Cloud, DevOps & AI</h3>
                    <p>I integrate cloud infrastructure, CI/CD pipelines, and AI APIs into real products — from AWS deployments and Dockerized services to Gemini-powered features and data-driven analytics dashboards.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
