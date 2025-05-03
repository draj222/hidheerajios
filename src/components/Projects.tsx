import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'axio: BNPL, Personal Loan & Expense Tracker',
      role: 'iOS Developer',
      language: 'Swift, SwiftUI, Combine',
      technology: 'iOS',
      description: 'A comprehensive financial services app offering Buy Now Pay Later (BNPL), personal loans, expense tracking, shopping, and group expense splitting. Features include EMI management, budget planning, and real-time transaction tracking.',
      screenshots: [
        'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/8867430/pexels-photo-8867430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 2,
      title: 'My Telstra - Universal App for Telstra Telecommunication',
      role: 'Module Lead',
      language: 'Swift, RxSwift',
      technology: 'iOS',
      description: 'A universal app serving over 4.5 million users to manage Telstra accounts, track bills, shop devices, and access support. Features include secure account management and Telstra Plus points tracking.',
      appLink: 'My Telstra on App Store',
      featuresLink: 'telstra.com.au/mytelstra',
      screenshots: [
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 3,
      title: 'Sun Keeper - Health & Fitness Mobile App',
      role: 'Senior iOS Developer',
      language: 'Swift',
      technology: 'iOS',
      description: 'A user-friendly app to manage daily sun exposure for optimal vitamin D production and skin health. Features location-based recommendations and alerts for sunscreen reapplication.',
      screenshots: [
        'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/11294786/pexels-photo-11294786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/3758104/pexels-photo-3758104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 4,
      title: 'LECA Consultant App - Energy Projects',
      role: 'Senior iOS Developer',
      language: 'Swift',
      technology: 'iOS',
      description: 'A tool for consultants to manage energy project consultations, create installation jobs, and calculate ideal system sizes using the LECA Calculator.',
      screenshots: [
        'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 5,
      title: 'LECA Installer App - Energy Projects',
      role: 'Senior iOS Developer',
      language: 'Swift',
      technology: 'iOS',
      description: 'A tool for installers to manage and schedule energy project installations, track job progress, and handle post-installation documentation.',
      screenshots: [
        'https://images.pexels.com/photos/2874998/pexels-photo-2874998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/9875424/pexels-photo-9875424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/9875358/pexels-photo-9875358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    },
    {
      id: 6,
      title: 'PlayBill - Broadway Theater Experience',
      role: 'Senior iOS Developer',
      language: 'Swift',
      technology: 'iOS',
      description: 'Enhances the Broadway theater experience with contextual and non-contextual modes using beacon technology. Features include show listings, theater details, and nearby attractions.',
      screenshots: [
        'https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/11131753/pexels-photo-11131753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/210157/pexels-photo-210157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ]
    }
  ];

  return (
    <div className="projects-container ios-section">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;