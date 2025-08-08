import React from 'react';

export default function Skills() {
  const categories = [
    {
      title: 'Languages',
      icon: 'fas fa-code',
      color: 'info',
      progressColor: 'bg-info',
      skills: [
        { name: 'Laravel (PHP)', percent: 90 },
        { name: 'Java', percent: 85 },
        { name: 'C', percent: 85 },
        { name: 'Python', percent: 75 },
        { name: 'JavaScript', percent: 75 },
      ],
    },
    {
      title: 'Tools',
      icon: 'fas fa-tools',
      color: 'secondary',
      progressColor: 'bg-secondary',
      skills: [
        { name: 'Git & GitHub', percent: 85 },
        { name: 'VS Code', percent: 90 },
        { name: 'Bootstrap', percent: 75 },
        { name: 'Figma', percent: 60 },
        { name: 'Composer', percent: 70 },
      ],
    },
    {
      title: 'Platforms',
      icon: 'fas fa-laptop-code',
      color: 'success',
      progressColor: 'bg-success',
      skills: [
        { name: 'MySQL (XAMPP)', percent: 85 },
        { name: 'Tailwind CSS', percent: 80 },
        { name: 'WordPress', percent: 70 },
        { name: 'NetBeans / IDLE', percent: 60 },
        { name: 'Google Colab', percent: 65 },
      ],
    },
    {
      title: 'Computer Networking',
      icon: 'fas fa-network-wired',
      color: 'primary',
      progressColor: 'bg-primary',
      skills: [
        { name: 'Subnetting & IP Addressing', percent: 90 },
        { name: 'Networking Protocols (TCP/IP, HTTP)', percent: 85 },
        { name: 'OSI Layers & Topologies', percent: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-white">
      <div className="container mb-5">
        <div className="d-flex align-items-center justify-content-center text-center text-light position-relative">
        <h2 className="section-heading text-center fw-bold display-5 animate-on-scroll mb-5">Skills</h2>
        </div>

        <div className="row g-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-3 animate-on-scroll">
              <div className={`bg-${cat.color} bg-opacity-10 p-4 rounded-4 h-100 shadow-sm border border-${cat.color}`}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="fw-bold mb-0">{cat.title}</h5>
                  <div className={`bg-${cat.color} d-flex align-items-center justify-content-center rounded-circle`} style={{ width: '3rem', height: '3rem' }}>
                    <i className={`${cat.icon} text-white`}></i>
                  </div>
                </div>
                {cat.skills.map((skill, i) => (
                  <div key={i} className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="progress bg-secondary bg-opacity-25" style={{ height: '6px' }}>
                      <div
                        className={`progress-bar ${cat.progressColor}`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
