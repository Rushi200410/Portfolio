import React from 'react';
import './Experience.css'; // For custom animations and hover effects if needed

const experiences = [
  {
    role: 'Software Developer',
    company: 'Kaizen Infosoft',
    description:
      'Developed a production-ready full-stack web platform using Laravel and JavaScript to manage digital receipts for NGOs and charitable organizations.',
    points: [
      'Engineered secure authentication and role-based access control (RBAC) for admin, NGO, and donor accounts with session-based validation.',
      'Implemented real-time analytics dashboards, PDF receipt generation (TCPDF), and searchable transaction logs.',
      'Streamlined manual processes into a centralized portal, leading to a 50% improvement in operational efficiency.',
      'Worked directly with clients to gather feedback and iterate quickly — deployed the system across 7+ NGOs handling 1000+ transactions.',
      'Optimized database structure and indexing for better performance on high-volume queries.',
    ],
    delay: 100,
  },
  {
    role: 'Intern',
    company: 'StaticInt',
    description:
      'Gained hands-on exposure to Android development (Java), Flutter fundamentals, and modern blockchain principles during a technical internship.',
    points: [
      'Built mini Android apps for login/signup systems, integrating custom UI components, Intents, and SharedPreferences.',
      'Explored basic Flutter UI structure including widgets, stateful components, and routing.',
      'Worked on a simulated blockchain project to understand decentralized ledgers and hashing techniques.',
      'Participated in collaborative team discussions and weekly code reviews, improving Python scripting and documentation skills.',
      'Received mentorship from senior developers which helped sharpen debugging techniques and app deployment workflows.',
    ],
    delay: 200,
  },
];

export default function Experience() {
  return (

    <section id="experience" className="py-5 bg-transparent text-white position-relative overflow-hidden">
      <div className="container position-relative z-1">
        <div className="d-flex align-items-center justify-content-center text-center text-light position-relative">
        <h2 className="section-heading animate-on-scroll text-center fw-bold display-5 mb-5">
            Experience
        </h2>
        </div>


        <div className="d-flex flex-column gap-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-dark rounded-4 p-4 shadow experience-item animate-on-scroll`}
              style={{ animationDelay: `${exp.delay}ms` }}
            >
              <div className="row align-items-center">
                <div className="col-md-3 text-center text-md-start mb-3 mb-md-0">
                  <h4 className="text-info fw-bold">{exp.role}</h4>
                  <p className="text-secondary fs-5 mb-0">{exp.company}</p>
                </div>
                <div className="col-md-9">
                  <p className="lead fw-semibold">{exp.description}</p>
                  <ul className="list-unstyled ms-3 mt-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start">
                        <span className="me-2 text-warning">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
