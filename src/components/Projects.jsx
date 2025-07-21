import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Receptify — Receipt Management for NGOs',
    image: 'https://placehold.co/600x350/F3E8FF/9333EA?text=Receptify',
    description: 'Web platform for NGOs to digitize donation records, receipts, and visualize donation trends through dashboards.',
    features: [
      'Multi-role login (admin, donor, NGO)',
      'PDF generation for official donation receipts',
      'Search & filter donation records',
      'Used by 7 NGOs, 1000+ transactions',
    ],
    tech: ['Laravel', 'JavaScript', 'MySQL'],
    colors: 'purple',
    github: 'https://github.com/malayladu/receiptify',
    impact: '✅ Improved NGO workflow efficiency by 50%',
  },
  {
    title: 'AutoFill IPO Web App',
    image: 'https://placehold.co/600x350/FFE4E6/b45309?text=IPO+Web+App',
    description: 'Automates IPO form filling by saving user KYC and generating dynamic PDFs based on IPO companies.',
    features: [
      'Auto-fills forms using templates',
      'Generates downloadable PDFs',
      'Secure user profile storage',
    ],
    tech: ['Laravel', 'TCPDF', 'MySQL'],
    colors: 'orange',
    github: 'https://github.com/Rushi200410/IPO-Form',
  },
  {
    title: 'Smart Voting System (Hackathon Project)',
    image: 'https://placehold.co/600x350/ECFDF5/10B981?text=Smart+Voting',
    description: 'OTP-based secure voting system with role-based login and real-time result visualization.',
    features: ['OTP login for voters', 'Admin dashboard', 'Result publishing system'],
    tech: ['Laravel', 'ESP32', 'MySQL'],
    colors: 'green',
    github: 'https://github.com/Rushi200410/Smart-Voting-System',
  },
  {
    title: 'Learn Through Play (Hackathon 2nd Runner-up)',
    image: 'https://placehold.co/600x350/FFE4E6/EF4444?text=Learn+Through+Play',
    description: 'Interactive history-learning platform with gamified points system, quizzes, and video content uploads.',
    features: ['Teacher/student login', 'Gamified quiz modules', 'Leaderboard & score tracker'],
    tech: ['Laravel', 'Gamification', 'JavaScript'],
    colors: 'red',
    github: 'https://github.com/Rushi200410/OLEB',
  },
  {
    title: 'AI-Based Water Level Monitoring',
    image: 'https://placehold.co/600x350/E0E7FF/3B82F6?text=Water+Monitoring',
    description: 'IoT system using ESP32, ultrasonic sensors, and ML logic to detect water anomalies and trigger alerts.',
    features: [
      'Real-time monitoring dashboard',
      'Sensor integration: pH, level, temp',
      'AI alerting based on deviation',
    ],
    tech: ['ESP32', 'IoT', 'ML'],
    colors: 'blue',
    github: 'https://github.com/Rushi200410/IPD',
  },
  {
    title: 'Attendance Monitoring System',
    image: 'https://placehold.co/600x350/FDE68A/CA8A04?text=Attendance+System',
    description: 'Web system to manage band group class attendance, exams, analytics, and dashboards.',
    features: [
      'Daily attendance tracking',
      'Exam result modules',
      'Dashboard for each class',
    ],
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    colors: 'yellow',
    github: 'https://github.com/Rushi200410/SSJB-Band-Attendance',
  },
    {
    title: 'Modern Calculator (Java GUI)',
    image: 'https://placehold.co/600x350/FFF1F2/BE123C?text=Modern+Calculator',
    description: 'Scientific calculator with keyboard support, multiple themes, and error handling.',
    features: [
      'Dark/light mode toggle',
      'Supports keyboard input',
      'GUI via Java Swing/AWT',
    ],
    tech: ['Java', 'Swing', 'AWT'],
    colors: 'pink',
    github: 'https://github.com/Rushi200410/Modern-Calculator',
  },

  {
    title: 'Rail Track Monitoring (SIH Finalist)',
    image: 'https://placehold.co/600x350/D1FAE5/059669?text=Rail+Track+Monitoring',
    description: 'Smart device to detect and classify cracks in railway tracks using ultrasonic sensors and ML.',
    features: [
      'Real-time data via ESP32',
      'ML model for crack classification',
      'Alert system for unsafe zones',
    ],
    tech: ['ESP32', 'Machine Learning', 'Safety'],
    colors: 'green',
    github: 'https://github.com/Rushi200410/SIH-Final',
  },
    {
    title: 'Smart Quiz App — Adaptive MCQ System',
    image: 'https://placehold.co/600x350/E0F2FE/0891b2?text=Smart+Quiz+App',
    description: 'A Laravel-based quiz platform that adjusts difficulty based on user’s answers. Ideal for exam prep.',
    features: [
      'Role-based login for admin & students',
      'Question pool with tags, levels, categories',
      'Score analytics & performance graph',
      'Adaptive logic to raise/lower difficulty',
    ],
    tech: ['Laravel', 'MySQL', 'JavaScript'],
    colors: 'cyan',
    github: 'https://github.com/Rushi200410/Smart-Quiz-App',
    impact: '✅ Helps students track and improve weak areas dynamically',
  },
  {
  title: 'Personal Portfolio (React + Bootstrap)',
  image: 'https://placehold.co/600x350/E0E7FF/3B82F6?text=Portfolio',
  description: 'Responsive developer portfolio built with React and Bootstrap, showcasing projects, skills, and experience in a sleek modern layout.',
  features: [
    'Smooth scrolling and animated sections',
    'Project cards with hover effects and GitHub links',
    'Responsive layout optimized for all screen sizes',
    'Custom scroll progress indicator',
    'Skills section with dynamic data mapping'
  ],
  tech: ['React', 'Bootstrap', 'JavaScript'],
  colors: 'blue', // Bootstrap's 'info' is typically cyan/blue-green
  github: 'https://github.com/Rushi200410/React-Portfolio',
  impact: '✅ Built to demonstrate frontend development skills and host real-world project showcases.'
  },

];


export default function Projects() {
  return (

    <section id="projects" className="py-5 bg-dark text-white position-relative overflow-hidden d-flex align-items-center justify-content-center text-center text-light">

  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="bg-video"
  >
    <source
      src="https://videos.pexels.com/video-files/852292/852292-hd_1728_1080_25fps.mp4"
      type="video/mp4"
    />
    Your browser does not support HTML5 video.
  </video>

      <div className="container position-relative z-1">
        <h2 className="section-heading animate-on-scroll text-center fw-bold display-5 mb-5">
          Latest Projects
        </h2>

        <div className="masonry-layout">
          {projects.map((proj, idx) => (
            <div className="project-card group" key={idx}>
              <div className="project-image">
                <img src={proj.image} alt={proj.title} loading="lazy" />
                <div className="overlay">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                  >
                    <i className="fab fa-github me-2"></i>GitHub
                  </a>
                </div>
              </div>

              <div className="project-content p-4 text-white">
                <h3 className="h5 fw-bold">{proj.title}</h3>
                <p className="text-light small">{proj.description}</p>
                <ul className="list-unstyled ps-3">
                    {proj.features.map((f, i) => (
                        <li key={i} className="mb-2 d-flex align-items-start">
                        <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                        <span className="text-light">{f}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-3 d-flex flex-wrap gap-2">
                    {proj.tech.map((t, i) => (
                        <span
                        key={i}
                        className={`badge bg-opacity-75 text-white fw-semibold px-3 py-2 rounded-pill`}
                        style={{ fontSize: '0.9rem', backgroundColor: `var(--bs-${proj.colors ? proj.colors : 'info'})` }}
                        >
                        {t}
                        </span>
                    ))}
                </div>

                {proj.impact && (
                    <p className="mt-3 small fst-italic text-light">
                        {proj.impact}
                    </p>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
