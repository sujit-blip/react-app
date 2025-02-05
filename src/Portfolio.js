import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Twitter, Menu, X, ExternalLink, Mail, Code, Monitor, Server } from 'lucide-react';
import "./Portfolio.css";

// Navigation Items
const NAV_ITEMS = ['Home', 'Skills', 'Projects'];

// Skills Data
const SKILLS_DATA = {
  frontend: [
    { name: 'HTML', level:80},
    { name: 'JavaScript', level:85},
    { name: 'CSS', level:80},
    { name: 'Angular', level:70},
    { name: 'React js', level:70},
    { name: 'XML', level:65},
  ],
  backend: [
    { name: 'Java', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'C Language', level: 75 },
    { name: 'PHP', level: 70 },
  ],
  tools: [
    { name: 'Ecilpse', level: 60 },
    { name: 'Postgrasql', level: 75 },
    { name: 'VisualStudio', level: 70 },
    { name: 'Linux', level: 80 },
  ]
};


// Project Data
const PROJECTS = [
  {
    title: "Maharasthra Cultureal,Tourism Management with Chat Bot Integration",
    description: "It showcase the Culture and Famous Places in Maharathra",
    tech: ["HTML", "CSS", "PHP", "Javascript"],
    image: "logo.jpg"
  },
  {
    title: "Carbon Capture & Photosynthesis Enhancer Eliminate Greenhouse Gases",
    description: "It Reduces the Carbon Present in Atmosphere and Provides to Greenhouse Plants for Photosynthesis",
    tech: ["Provisional Patent"],
    image:""
  },
   {
    title: "Todo List in Angular",
    description: "My First Project in Angular ",
    tech: ["HTML", "CSS", "Typescript", "Boostrap"],
    image: "logo.jpg"
  },
   {
    title: "Analyzing Employment Trends In Public Sector and Goverment Sector ",
    description: "It Showcase the Point of View of Student Back in 2023",
    tech: ["Published in  Emerging Trends in Computer Science and Applications"],
    image: "logo.jpg"
  }, {
    title: "Portfolio",
    description: "It showcase My Skills Projects and My Journey of my Education Background",
    tech: ["HTML", "CSS", "React js", "Javascript"],
    image: "logo.jpg"
  },
];

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [skillTab, setSkillTab] = useState('frontend');

  // Scroll handler
  const handleScroll = useCallback(() => {
    const sections = NAV_ITEMS.map(item => item.toLowerCase());
    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1500);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (isLoading) {
    return <div className="loader" />;
  }

  return (
    <div className="portfolio-container">
       {/* Normal Navigation Bar */}
       <nav className="normal-navbar">
        <ul className="nav-menu">
          {NAV_ITEMS.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={activeSection === item.toLowerCase() ? 'active' : ''}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h1 className="hero-title">
        <span className="greeting">Hello, I'm </span>
        <span className="name">Sujit Sawant </span>
        <span className="title"><br/>Web Developer</span>
      </h1>
      <p className="hero-description">
      A Web Developer designs, builds, and maintains websites and web apps using HTML, CSS, JavaScript, and frameworks like Angular, React <br/>to create responsive and user-friendly experiences.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="primary-btn">View My Work</a>
      </div>
    </div>
    <div className="hero-image">
      <div className="image"></div>
    </div>
  </div>
</section>



      {/* Skills Section */}
      <section id="skills" className="skills">
        <h2 className="section-title">My Expertise</h2>
        <div className="skills-container">
          <div className="skills-tabs">
            <button
              className={`tab-btn ${skillTab === 'frontend' ? 'active' : ''}`}
              onClick={() => setSkillTab('frontend')}
            >
              <Monitor size={20} />
              Frontend
            </button>
            <button
              className={`tab-btn ${skillTab === 'backend' ? 'active' : ''}`}
              onClick={() => setSkillTab('backend')}
            >
              <Server size={20} />
              Backend
            </button>
            <button
              className={`tab-btn ${skillTab === 'tools' ? 'active' : ''}`}
              onClick={() => setSkillTab('tools')}
            >
              <Code size={20} />
              Tools
            </button>
          </div>

          <div className="skills-content">
          
            {SKILLS_DATA[skillTab].map(skill => (
              <div key={skill.name} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <br/>
                <span className="skill-progress1">{skill.level}%</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
               
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* Roadmap Section */}
     <section id="roadmap" className="roadmap">
        <h2 className="section-title">My Education Journey</h2>
        <div className="roadmap-container">
          <div className="roadmap-item">
            <div className="roadmap-content">
              <h3>School</h3>
              <h3>The New Millennium English Medium School,Sangvi</h3>
              <p>Completed my Schooling at The New Millennium English Mediam School,Sangvi , where I built my foundational knowledge and developed a passion for technology.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-content">
              <h3>Junior College</h3>
              <h3>Shri Shivaji Vidyamandir and Kanishtha Mahavidyalaya, Aundh</h3>
              <p>Studied at Shri Shivaji Vidyamandir and Kanishtha Mahavidyalaya,Aundh , focusing on science and mathematics, which strengthened my analytical skills.</p>
            </div>
          </div>
          <div className="roadmap-item">
            <div className="roadmap-content">
              <h3>College</h3>
              <h3>Indira College of Commerce and Science,Pune</h3>
              <p>Graduated from Indira College of Commerce and Science,Pune with a specialization in Computer Science, where I honed my technical skills and worked on several projects.</p>
            </div>
          </div>
        </div>
      </section>

        {/* Unique Footer Section */}
     <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            <p>© 2024 Sujit Sawant. All rights reserved.
            <div className="footer-social">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Portfolio; 