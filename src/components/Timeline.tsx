import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faRobot } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const timelineCardStyle = {
  background: 'var(--timeline-card-bg)',
  color: 'var(--text)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-soft)',
};

const timelineArrowStyle = {
  borderRight: '7px solid var(--timeline-card-bg)',
};

const workIconStyle = {
  background: 'linear-gradient(135deg, var(--accent-strong), var(--accent))',
  color: '#fff',
  boxShadow: '0 0 0 4px var(--accent-soft)',
};

const currentRoleIconStyle = {
  background: 'linear-gradient(135deg, #0ea5e9, var(--accent-strong))',
  color: '#fff',
  boxShadow: '0 0 0 4px rgba(14, 165, 233, 0.2)',
};

const educationIconStyle = {
  background: 'var(--bg-elevated)',
  color: 'var(--accent)',
  border: '2px solid var(--border-strong)',
  boxShadow: 'none',
};

function TimelineHighlights({ items }: { items: string[] }) {
  return (
    <ul className="timeline-highlights">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TimelineMetrics({ metrics }: { metrics: string[] }) {
  return (
    <div className="timeline-metrics">
      {metrics.map((metric) => (
        <span key={metric} className="timeline-metric">
          {metric}
        </span>
      ))}
    </div>
  );
}

function Timeline() {
  return (
    <div id="history">
      <div className="items-container timeline-section">
        <div className="timeline-section__header">
          <p className="timeline-section__eyebrow">Career ladder</p>
          <h1>Career History</h1>
          <p className="timeline-section__lead">
            From full-stack product work to AI platform engineering — roles that shaped how I build, ship, and measure impact.
          </p>
        </div>
        <VerticalTimeline lineColor="var(--timeline-line)" animate>
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry timeline-entry--current"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="Jul 2026 – Present"
            iconStyle={currentRoleIconStyle}
            icon={<FontAwesomeIcon icon={faRobot} />}
          >
            <span className="timeline-badge">Current role</span>
            <h3 className="vertical-timeline-element-title">SDE-1</h3>
            <h4 className="vertical-timeline-element-subtitle">Mple.ai · Mumbai, India</h4>
            <TimelineMetrics metrics={['Vertex AI / Gemini', 'GitHub PR bot', 'DuckDB + Parquet']} />
            <TimelineHighlights
              items={[
                'Migrated LLM calls from OpenAI to Google Cloud Vertex AI (Gemini) across 23 production endpoints, with a shared provider interface so models can be swapped without touching app integrations; deployed in the required GCP region with usage and audit logging for cost visibility.',
                'Built an AI-powered GitHub PR review bot that uses repository context and diffs to post review comments in the existing workflow, with follow-up handling for review threads.',
                'Reworked chatbot data processing with DuckDB and Parquet — query structured data first and send only relevant results to the LLM instead of piping whole spreadsheets into prompts.',
              ]}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="Dec 2025 – Jun 2026"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Apprentice</h3>
            <h4 className="vertical-timeline-element-subtitle">Circle · Bangalore, India</h4>
            <TimelineMetrics metrics={['+19.5% engaged sessions', '−34% support tickets', '2k+ geocoded locations']} />
            <TimelineHighlights
              items={[
                'Engineered a rule-based recommendation engine that lifted engaged sessions by 19.5% and transactions by 21.6%, validated end-to-end with Google Analytics and production monitoring.',
                'Designed the “Track My Order” subsystem with real-time status, SLA extensions, and rescheduling — cutting support tickets by 34% while owning debugging, integration testing, and incident response.',
                'Drove full-stack work on order tracking and chat analytics with React, ShadCN/UI, Recharts, Supabase, and Node.js; added SLA-breach monitoring and health dashboards for ops visibility.',
                'Launched a Google Maps location picker with a geocoding pipeline (2,000+ coordinates backfilled) and WhatsApp distribution with metadata for 30,000+ products.',
              ]}
            />
            <p className="timeline-conclusion">
              <strong>Conclusion:</strong> Completed the apprenticeship in June 2026 after shipping production-facing growth, logistics, and analytics systems — a strong full-stack foundation before moving into AI platform work at Mple.ai.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="May 2025 – Nov 2025"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer (Freelance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Webier · Mumbai, India</h4>
            <TimelineHighlights
              items={[
                'Owned end-to-end delivery across 5+ client projects — requirements, architecture, RESTful APIs, and stakeholder communication.',
                'Built responsive frontends and reliable backends with React.js, Node.js, Express.js, and TypeScript; chose stack and patterns per project needs.',
                'Ran AWS-based solutions (including S3) managing 1,000+ client records and 75,000+ inventory records with a focus on integrity and scale.',
              ]}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="Apr 2024 – Oct 2024"
            iconStyle={workIconStyle}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Computech LLP · Mumbai, India</h4>
            <TimelineHighlights
              items={[
                'Troubleshot OS corruption, driver conflicts, and hardware faults across 500+ devices, reducing turnaround time by 20%.',
                'Implemented an updated OS repair workflow that cut repeat failures by 15% and raised first-time fix rates by 20%.',
              ]}
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="Sep 2024 – Aug 2026"
            iconStyle={educationIconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Computer Applications</h3>
            <h4 className="vertical-timeline-element-subtitle">Sardar Patel Institute of Technology · Mumbai, India</h4>
            <p className="timeline-education-detail">CGPA: 8.1</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={timelineArrowStyle}
            date="Jun 2021 – Mar 2024"
            iconStyle={educationIconStyle}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">John Wilson College · Mumbai, India</h4>
            <p className="timeline-education-detail">CGPA: 8.3</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
