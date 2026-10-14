import React from "react";
import draftWise from '../assets/images/draftWise.png';
import Holidays from '../assets/images/Holidays.png';
import Eco from '../assets/images/Eco.png';
import { ScrollReveal, ScrollRevealGroup, SectionIntro } from './ScrollReveal';
import '../assets/styles/Project.scss';

const projects = [
    {
        index: '01',
        className: 'project project--draftwise',
        href: 'https://draft-wise-dqqa.vercel.app/',
        image: draftWise,
        alt: 'DraftWise thumbnail',
        title: 'DraftWise',
        description:
            'AI-powered email generation platform using the Gemini API with customizable tone, style, and intent. Integrated Google OAuth 2.0 and Gmail APIs for secure authentication and direct email delivery, with a responsive React + Tailwind CSS frontend and Express.js backend.',
    },
    {
        index: '02',
        className: 'project project--holidays',
        href: 'https://crmportfolio.netlify.app/',
        image: Holidays,
        alt: 'Holidays Tours CRM thumbnail',
        title: 'Holidays Tours & Travels CRM',
        description:
            'CRM platform managing 100+ customer records with trip management, billing, and workflow automation. Features invoice generation, payment verification, referral rewards, subscription plans, and JWT-secured REST APIs built with Node.js and MongoDB.',
    },
    {
        index: '03',
        className: 'project project--eco',
        href: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=EcoAlgorithmics',
        image: Eco,
        alt: 'EcoAlgorithmics publication thumbnail',
        title: 'EcoAlgorithmics',
        description:
            'Published in IEEE Xplore. An energy-aware algorithm benchmarking platform that quantifies the carbon footprint of software algorithms using CPU telemetry and energy consumption estimates.',
    },
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <ScrollReveal>
            <SectionIntro
                index="03"
                eyebrow="Selected work"
                title="Projects & publications."
                lead="Products and research that show how I think about UX, data, and shipping real software."
            />
        </ScrollReveal>
        <ScrollRevealGroup className="projects-grid">
            {projects.map((project) => (
                <div key={project.title} className={project.className}>
                    <span className="project__index" aria-hidden="true">{project.index}</span>
                    <a href={project.href} target="_blank" rel="noreferrer">
                        <img src={project.image} className="zoom" alt={project.alt} width="100%"/>
                    </a>
                    <a href={project.href} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
                    <p>{project.description}</p>
                </div>
            ))}
        </ScrollRevealGroup>
    </div>
    );
}

export default Project;
