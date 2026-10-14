import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ScrollReveal, ScrollRevealItem, SectionIntro } from './ScrollReveal';
import '../assets/styles/Timeline.scss';

const timelineCardStyle = {
  background: 'var(--timeline-card-bg)',
  color: 'var(--text)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-soft)',
};

type TimelineEntry = {
  key: string;
  kind: 'work' | 'education';
  date: string;
  title: string;
  subtitle: string;
  body: string;
};

const timelineEntries: TimelineEntry[] = [
  {
    key: 'mple',
    kind: 'work',
    date: 'Jul 2026 to Present',
    title: 'SDE-1',
    subtitle: 'Mple.ai, Mumbai, India',
    body:
      'Migrated LLM calls from OpenAI to Google Cloud Vertex AI (Gemini) across 23 production endpoints, with a shared provider interface so models can be swapped without changing app integrations. Deployed workloads in the required GCP region and added usage and audit logging to track model usage and costs. Built an AI powered GitHub PR review bot that uses repository context and diffs to post review comments in the existing workflow, with follow up handling for review threads. Reworked chatbot data processing with DuckDB and Parquet by querying structured data first and sending only relevant results to the LLM.',
  },
  {
    key: 'circle',
    kind: 'work',
    date: 'Dec 2025 to Jun 2026',
    title: 'Software Engineering Apprentice',
    subtitle: 'Circle, Bangalore, India',
    body:
      'Engineered a rule based recommendation engine that increased engaged sessions by 19.5% and transactions by 21.6%, validated with Google Analytics and production monitoring. Designed the Track My Order subsystem with real time status, SLA extensions, and rescheduling workflows, reducing support tickets by 34% while owning debugging, integration testing, and incident response. Drove full stack work on order tracking and chat analytics with React, ShadCN UI, Recharts, Supabase, and Node.js, including SLA breach monitoring and health dashboards. Launched a Google Maps location picker with a geocoding pipeline that backfilled 2,000+ coordinates and a WhatsApp distribution feature with metadata for 30,000+ products.',
  },
  {
    key: 'webier',
    kind: 'work',
    date: 'May 2025 to Nov 2025',
    title: 'Full Stack Developer (Freelance)',
    subtitle: 'Webier, Mumbai, India',
    body:
      'Owned end to end delivery across 5+ client projects, from requirements and architecture through RESTful APIs and stakeholder communication. Built responsive frontends and reliable backends with React.js, Node.js, Express.js, and TypeScript. Developed AWS based solutions including S3 infrastructure managing 1,000+ client records and 75,000+ inventory records with a focus on data integrity and scale.',
  },
  {
    key: 'computech',
    kind: 'work',
    date: 'Apr 2024 to Oct 2024',
    title: 'Technical Intern',
    subtitle: 'Computech LLP, Mumbai, India',
    body:
      'Troubleshot OS corruption, driver conflicts, and hardware faults across 500+ devices, reducing turnaround time by 20%. Implemented an updated OS repair workflow that cut repeat failures by 15% and raised first time fix rates by 20%.',
  },
  {
    key: 'mca',
    kind: 'education',
    date: 'Sep 2024 to Aug 2026',
    title: 'Master of Computer Applications',
    subtitle: 'Sardar Patel Institute of Technology, Mumbai, India',
    body: 'CGPA: 8.1',
  },
  {
    key: 'bsc',
    kind: 'education',
    date: 'Jun 2021 to Mar 2024',
    title: 'Bachelor of Science in Information Technology',
    subtitle: 'John Wilson College, Mumbai, India',
    body: 'CGPA: 8.3',
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container timeline-section">
        <ScrollReveal>
          <SectionIntro
            index="02"
            eyebrow="Experience"
            title="Career history."
            lead="Roles where I shipped product, owned systems, and measured impact in production."
          />
        </ScrollReveal>
        <VerticalTimeline layout="1-column" lineColor="transparent" animate={false}>
          {timelineEntries.map((entry) => (
            <ScrollRevealItem key={entry.key}>
              <VerticalTimelineElement
                className={`vertical-timeline-element--${entry.kind} timeline-entry`}
                contentStyle={timelineCardStyle}
                contentArrowStyle={{ display: 'none' }}
                date=""
                icon={null}
              >
                <p className="timeline-item__date">{entry.date}</p>
                <h3 className="vertical-timeline-element-title">{entry.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{entry.subtitle}</h4>
                <p className="timeline-item__body">{entry.body}</p>
              </VerticalTimelineElement>
            </ScrollRevealItem>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
