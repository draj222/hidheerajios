import React from 'react';
import '../styles/About.css';
import profileImage from '../assets/profile-placeholder.jpg';

const About: React.FC = () => {
  return (
    <div className="about-container ios-section">
      <div className="profile-section">
        <div className="profile-image-container">
          <img 
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Prince Sojitra" 
            className="profile-image" 
          />
        </div>
        <h2 className="profile-name">Prince Sojitra</h2>
        <p className="profile-title">iOS Developer</p>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Professional Summary</h3>
        <p className="section-content">
          Experienced software engineer with a proven track record in the computer software industry. 
          Expertise includes 11+ years of IT experience in analysis, architecture, design, development, 
          testing, and implementation of iOS applications. Proficient in Swift, SwiftUI, Objective-C, 
          and basic knowledge of Flutter. Skilled in full-cycle development from ideation to deployment 
          using Agile methodology. Demonstrated leadership in managing onsite/offshore teams and collaborating 
          with QA and business analysts. Committed to enhancing product quality through code reviews and 
          effective unit testing. Adept at translating client requirements into actionable user stories 
          within Scrum teams.
        </p>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Key Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <h4>Coding Languages</h4>
            <ul>
              <li>Objective-C</li>
              <li>Swift</li>
              <li>SwiftUI</li>
              <li>Dart</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Frameworks/Systems</h4>
            <ul>
              <li>MVC, MVVM, MVP, VIPER</li>
              <li>RxSwift</li>
              <li>Xcode</li>
              <li>Visual Studio</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Others</h4>
            <ul>
              <li>Object-Oriented Design</li>
              <li>Agile Methodology</li>
              <li>Software Testing and Debugging</li>
              <li>Communication</li>
              <li>Leadership</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ios-card">
        <h3 className="section-title">Languages</h3>
        <ul className="language-list">
          <li><span className="language">English:</span> Proficient</li>
          <li><span className="language">Hindi:</span> Proficient</li>
          <li><span className="language">Gujarati:</span> Native</li>
        </ul>
      </div>
    </div>
  );
};

export default About;