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
  featuresLink?: string;
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
        
        {(project.appLink || project.featuresLink) && (
          <div className="project-links">
            {project.appLink && <a href={project.appLink} className="ios-button" target="_blank" rel="noopener noreferrer">App Link</a>}
            {project.featuresLink && <a href={project.featuresLink} className="ios-button" target="_blank" rel="noopener noreferrer">Features</a>}
          </div>
        )}
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