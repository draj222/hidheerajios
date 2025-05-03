import React, { useState, useEffect } from 'react';
import TabBar from './components/TabBar';
import PhoneFrame from './components/PhoneFrame';
import About from './components/About';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Contact from './components/Contact';
import Header from './components/Header';
import './styles/App.css';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
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
      <Header activeTab={activeTab} />
      <main className="ios-content">
        {renderContent()}
      </main>
      <TabBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );

  return isDesktop ? <PhoneFrame>{appContent}</PhoneFrame> : appContent;
}

export default App;