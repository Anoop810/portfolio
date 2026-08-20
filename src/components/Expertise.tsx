import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
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
    "LLMs",
    "RAG",
    "Agent Orchestration",
    "Prompt Engineering",
    "Gemini API",
    "OpenAI API",
    "Vector Databases",
    "Embeddings",
    "Python",
];

const labelsFourth = [
    "AWS",
    "Docker",
    "Git",
    "Jenkins",
    "CI/CD",
    "Linux",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x" className="skill-icon skill-icon--react"/>
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
                    <FontAwesomeIcon icon={faNodeJs} size="3x" className="skill-icon skill-icon--node"/>
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
                    <FontAwesomeIcon icon={faBrain} size="3x" className="skill-icon skill-icon--ai"/>
                    <h3>AI Systems — RAG, LLMs & Agents</h3>
                    <p>I design retrieval-augmented generation pipelines, LLM integrations, and multi-step agent orchestration — grounding model outputs in real data, coordinating tools and workflows, and shipping reliable AI features into production products.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x" className="skill-icon skill-icon--docker"/>
                    <h3>Cloud & DevOps</h3>
                    <p>I integrate cloud infrastructure and CI/CD into real products — from AWS deployments and Dockerized services to automated pipelines that keep releases fast, repeatable, and production-ready.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFourth.map((label, index) => (
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
