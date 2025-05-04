import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabBar from './components/TabBar';
import PhoneFrame from './components/PhoneFrame';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { ThemeProvider } from './components/ThemeContext';
import './styles/App.css';
import resumeData from './resume.json';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Dynamically determine the base path from the current URL pathname
  const getBasePath = () => {
    // Extract the first path segment (e.g., from "/ios-portfolio/something" get "/ios-portfolio")
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    return pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
  };

  const basePath = getBasePath();

  useEffect(() => {
    // Set document title based on resume data
    const { name, title } = resumeData.basics;
    document.title = `${name} - ${title}`;
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <WorkExperience />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  const appContent = (
    <div className="ios-app">
      <main className="ios-content">
        {renderContent()}
      </main>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );

  return (
    <ThemeProvider>
      <Router basename={basePath}>
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={isDesktop ? <PhoneFrame>{appContent}</PhoneFrame> : appContent} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;