import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/Education.css';

const Education: React.FC = () => {
  return (
    <div className="education-container ios-section">
      <div className="education-card ios-card">
        <div className="education-icon">
          <GraduationCap size={40} />
        </div>
        <div className="education-details">
          <h3 className="degree-title">Bachelor of Technology (B.Tech.) in Computer Engineering</h3>
          <div className="institution">Dharmsinh Desai University, Nadiad</div>
          <div className="education-period">June 2009 – May 2013</div>
        </div>
      </div>
    </div>
  );
};

export default Education;