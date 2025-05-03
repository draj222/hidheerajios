import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container ios-section">
      <div className="contact-cards">
        <a href="tel:+919428242130" className="contact-card ios-card">
          <div className="contact-icon">
            <Phone size={24} />
          </div>
          <div className="contact-info">
            <h3>Phone</h3>
            <p>+919428242130</p>
          </div>
        </a>
        
        <a href="mailto:princehsojitra@gmail.com" className="contact-card ios-card">
          <div className="contact-icon">
            <Mail size={24} />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <p>princehsojitra@gmail.com</p>
          </div>
        </a>
        
        <div className="contact-card ios-card">
          <div className="contact-icon">
            <MapPin size={24} />
          </div>
          <div className="contact-info">
            <h3>Location</h3>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
        
        <a href="https://linkedin.com/in/prince-sojitra-120404107" target="_blank" rel="noopener noreferrer" className="contact-card ios-card">
          <div className="contact-icon">
            <Linkedin size={24} />
          </div>
          <div className="contact-info">
            <h3>LinkedIn</h3>
            <p>prince-sojitra-120404107</p>
          </div>
        </a>
        
        <a href="https://github.com/princesojitra" target="_blank" rel="noopener noreferrer" className="contact-card ios-card">
          <div className="contact-icon">
            <Github size={24} />
          </div>
          <div className="contact-info">
            <h3>GitHub</h3>
            <p>princesojitra</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;