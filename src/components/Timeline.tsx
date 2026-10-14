import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const timelineCardStyle = {
  background: 'var(--timeline-card-bg)',
  color: 'var(--text)',
  border: '1px solid var(--border)',
  boxShadow: 'var(--shadow-soft)',
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container timeline-section">
        <h1>Career History</h1>
        <VerticalTimeline layout="1-column" lineColor="transparent" animate={false}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">Jul 2026 to Present</p>
            <h3 className="vertical-timeline-element-title">SDE-1</h3>
            <h4 className="vertical-timeline-element-subtitle">Mple.ai, Mumbai, India</h4>
            <p className="timeline-item__body">
              Migrated LLM calls from OpenAI to Google Cloud Vertex AI (Gemini) across 23 production endpoints, with a shared provider interface so models can be swapped without changing app integrations. Deployed workloads in the required GCP region and added usage and audit logging to track model usage and costs. Built an AI powered GitHub PR review bot that uses repository context and diffs to post review comments in the existing workflow, with follow up handling for review threads. Reworked chatbot data processing with DuckDB and Parquet by querying structured data first and sending only relevant results to the LLM.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">Dec 2025 to Jun 2026</p>
            <h3 className="vertical-timeline-element-title">Software Engineering Apprentice</h3>
            <h4 className="vertical-timeline-element-subtitle">Circle, Bangalore, India</h4>
            <p className="timeline-item__body">
              Engineered a rule based recommendation engine that increased engaged sessions by 19.5% and transactions by 21.6%, validated with Google Analytics and production monitoring. Designed the Track My Order subsystem with real time status, SLA extensions, and rescheduling workflows, reducing support tickets by 34% while owning debugging, integration testing, and incident response. Drove full stack work on order tracking and chat analytics with React, ShadCN UI, Recharts, Supabase, and Node.js, including SLA breach monitoring and health dashboards. Launched a Google Maps location picker with a geocoding pipeline that backfilled 2,000+ coordinates and a WhatsApp distribution feature with metadata for 30,000+ products.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">May 2025 to Nov 2025</p>
            <h3 className="vertical-timeline-element-title">Full Stack Developer (Freelance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Webier, Mumbai, India</h4>
            <p className="timeline-item__body">
              Owned end to end delivery across 5+ client projects, from requirements and architecture through RESTful APIs and stakeholder communication. Built responsive frontends and reliable backends with React.js, Node.js, Express.js, and TypeScript. Developed AWS based solutions including S3 infrastructure managing 1,000+ client records and 75,000+ inventory records with a focus on data integrity and scale.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">Apr 2024 to Oct 2024</p>
            <h3 className="vertical-timeline-element-title">Technical Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Computech LLP, Mumbai, India</h4>
            <p className="timeline-item__body">
              Troubleshot OS corruption, driver conflicts, and hardware faults across 500+ devices, reducing turnaround time by 20%. Implemented an updated OS repair workflow that cut repeat failures by 15% and raised first time fix rates by 20%.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">Sep 2024 to Aug 2026</p>
            <h3 className="vertical-timeline-element-title">Master of Computer Applications</h3>
            <h4 className="vertical-timeline-element-subtitle">Sardar Patel Institute of Technology, Mumbai, India</h4>
            <p className="timeline-item__body">CGPA: 8.1</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education timeline-entry"
            contentStyle={timelineCardStyle}
            contentArrowStyle={{ display: 'none' }}
            date=""
            icon={null}
          >
            <p className="timeline-item__date">Jun 2021 to Mar 2024</p>
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">John Wilson College, Mumbai, India</h4>
            <p className="timeline-item__body">CGPA: 8.3</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
