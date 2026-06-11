import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Dec 2025 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Circle · Bangalore, India</h4>
            <p>
              Built a product recommendation carousel driving 50%+ growth in impressions and 25%+ checkout improvement. Streamlined 90%+ of order lifecycle interactions via WhatsApp workflows, created ticket insights dashboards, and conducted a Google Analytics audit that lifted completed transactions by 1,200/month.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2025 – Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Freelance Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Webier · Mumbai, India</h4>
            <p>
              Led end-to-end product delivery across multiple clients — gathering requirements, designing system architecture and database schemas, and shipping full-stack apps with React.js, Node.js, Express.js, MongoDB, and RESTful APIs.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2024 – Oct 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Technical Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Computech LLP · Mumbai, India</h4>
            <p>
              Troubleshot OS corruption, driver conflicts, and hardware faults across 500+ devices, reducing turnaround time by 20%. Implemented an updated OS repair workflow that cut repeat failures by 15% and raised first-time fix rates by 20%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 – Jun 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Computer Applications</h3>
            <h4 className="vertical-timeline-element-subtitle">Sardar Patel Institute of Technology · Mumbai, India</h4>
            <p>CGPA: 8.1</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2021 – Mar 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">John Wilson College · Mumbai, India</h4>
            <p>CGPA: 8.3</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
