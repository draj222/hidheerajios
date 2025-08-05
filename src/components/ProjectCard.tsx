import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../styles/ProjectCard.css';

interface Project {
  id: number;
  title: string;
  role: string;
  language: string;
  technology: string;
  description: string;
  folderName: string;
  appLink?: string;
  githubLink?: string;
  screenshots: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const technologies = [project.language, project.technology].join(', ').split(', ');
  
  // Use local images from project folders with fallback to remote URLs
  const getImagePath = (index: number) => {
    // If there was an error loading the local image, use the remote URL as fallback
    if (imageError[index]) {
      return project.screenshots[index] || '';
    }
    
    // Try to load from public folder
    return `/assets/projects/${project.folderName}/screenshot-${index + 1}.png`;
  };

  const handleImageError = (index: number) => {
    setImageError(prev => ({
      ...prev,
      [index]: true
    }));
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };

  // Prepare images for lightbox
  const lightboxImages = project.screenshots.map((_, index) => ({
    src: getImagePath(index)
  }));

  return (
    <div className="project-card ios-card">
      <h3 className="project-title">{project.title}</h3>
      
      <div className="project-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="project-tag">{tech}</span>
        ))}
      </div>
      
      <div className="project-info">
        <div className="project-meta">
          <p><strong>Role:</strong> {project.role}</p>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-links">
          {project.appLink && (
            <a href={project.appLink} className="app-link-button" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16" fill="currentColor" className="app-link-icon">
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H8.1C38 85.6 101.7 28.7 180 8.1C154.5 42.3 134.7 95.8 124.7 160h0zm0 96H8.1C38 341.4 101.7 398.3 180 418.9c-25.5-34.2-45.2-87.7-55.3-151.6h0zm32.6 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H344.3c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64H157.3zm151.1 0c6.1 36.4 15.5 68.6 27 94.7c10.5 23.6 22.2 40.7 33.5 51.5C380.6 508.8 371.3 512 364 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5c-11.6-26-20.9-58.2-27-94.7zm209 32H376.7c10 63.9 29.8 117.4 55.3 151.6C353.7 475.3 417 418.7 446.9 320z"/>
              </svg>
              <span>Visit Website</span>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} className="github-link-button" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="github-link-icon">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>View on GitHub</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Thumbnail row for all screenshots */}
      <div className="project-thumbnails">
        {project.screenshots.map((_, index) => (
          <img
            key={index}
            src={getImagePath(index)}
            alt={`${project.title} thumbnail ${index + 1}`}
            onError={() => handleImageError(index)}
            className="project-thumbnail"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox for fullscreen viewing */}
      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={lightboxImages}
        index={currentImageIndex}
      />
    </div>
  );
};

export default ProjectCard;