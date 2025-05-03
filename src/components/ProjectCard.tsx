import React, { useState } from 'react';
import '../styles/ProjectCard.css';

interface Project {
  id: number;
  title: string;
  role: string;
  language: string;
  technology: string;
  description: string;
  appLink?: string;
  featuresLink?: string;
  screenshots: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const technologies = [project.language, project.technology].join(', ').split(', ');

  return (
    <div className={`project-card ios-card ${isExpanded ? 'expanded' : ''}`}>
      <h3 className="project-title">{project.title}</h3>
      
      <div className="project-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="project-tag">{tech}</span>
        ))}
      </div>

      <img 
        src={project.screenshots[0]} 
        alt={`${project.title} screenshot`} 
        className="project-main-image" 
      />
      
      <div className="project-header" onClick={() => setIsExpanded(!isExpanded)}>
        <span className="view-details">{isExpanded ? 'Hide Details' : 'View Details'}</span>
        <div className="project-expand-icon">{isExpanded ? '−' : '+'}</div>
      </div>
      
      {isExpanded && (
        <div className="project-details">
          <div className="project-meta">
            <p><strong>Role:</strong> {project.role}</p>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          {(project.appLink || project.featuresLink) && (
            <div className="project-links">
              {project.appLink && <a href="#" className="ios-button">App Link</a>}
              {project.featuresLink && <a href="#" className="ios-button">Features</a>}
            </div>
          )}
          
          <div className="project-screenshots">
            <h4>Additional Screenshots</h4>
            <div className="screenshots-grid">
              {project.screenshots.slice(1).map((screenshot, index) => (
                <img 
                  key={index} 
                  src={screenshot} 
                  alt={`${project.title} screenshot ${index + 2}`} 
                  className="screenshot-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;