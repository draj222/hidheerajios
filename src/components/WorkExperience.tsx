import React from 'react';
import '../styles/WorkExperience.css';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Member of Technical Staff',
      company: 'Axio Digital Private Limited',
      location: 'Pune',
      period: 'May 2022 – Present',
      responsibilities: [
        'Developed and maintained a comprehensive iOS application for financial services, including credits, personal loans, and expense tracking.',
        'Provided technical leadership, owning component design, development, and project delivery.',
        'Collaborated with the mobile department manager to provide estimates and status updates.',
        'Improved product quality through code reviews, unit testing, and QA collaboration.'
      ]
    },
    {
      id: 2,
      title: 'Technical Lead',
      company: 'Wipro Limited',
      location: 'Pune',
      period: 'November 2020 – May 2022',
      responsibilities: [
        'Collaborated with cross-functional teams to define, design, and ship new features.',
        'Coordinated project development, prioritizing goals and deadlines.',
        'Ensured application performance, quality, and responsiveness.'
      ]
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'DRC Systems India Limited',
      location: 'Gandhinagar',
      period: 'June 2013 – October 2020',
      responsibilities: [
        'Worked with designers and developers to build new features aligned with the product roadmap.',
        'Designed and developed high-performance iOS applications.',
        'Identified and resolved bottlenecks and bugs to ensure quality.'
      ]
    }
  ];

  return (
    <div className="work-experience-container ios-section">
      <div className="timeline">
        {experiences.map(experience => (
          <div key={experience.id} className="timeline-item ios-card">
            <div className="timeline-content">
              <h3 className="job-title">{experience.title}</h3>
              <div className="company-info">
                <span className="company-name">{experience.company}</span>
                <span className="job-location">{experience.location}</span>
              </div>
              <div className="job-period">{experience.period}</div>
              <ul className="job-responsibilities">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;