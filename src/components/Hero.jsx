import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Hero.css';

export default function Hero() {
  useEffect(() => {
    const typed = new Typed('#typed-hero-text', {
      strings: ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'],
      typeSpeed: 60,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      backDelay: 2000,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section id="about" className="d-flex align-items-center justify-content-center text-center text-light position-relative">
      <div className="container-sm position-relative z-1 px-3" style={{ maxWidth: '900px', marginTop: '60px', marginBottom: '60px' }}>
        {/* Profile Circle */}
        <div className="rounded-circle d-flex justify-content-center align-items-center mx-auto mb-4 shadow border border-5 border-info"
          style={{ width: '8rem', height: '8rem', backgroundColor: '#282f3aff' }}>
          <span className="fs-1 fw-bold text-info">RB</span>
        </div>

        {/* Headings */}
        <h1 className="display-4 fw-bold">Hi, I'm <span className="text-info">Rushi</span></h1>
        <h2 className="fs-3 mt-3">
          <span id="typed-hero-text"></span>
        </h2>

        {/* Description */}
        <p className="text-light fs-5 mt-4 mb-4 lh-lg">
          An engineering student with strong hands-on experience in <b>full-stack web development</b> using Laravel and JavaScript.
          I have a proven track record in developing scalable web applications and participating in national-level hackathons.
          Familiar with IoT integrations and foundational AI concepts, I am actively seeking a role as a <b>Software Developer</b>
          or <b>Assistant System Engineer</b> to contribute to high-quality enterprise solutions.
        </p>

        {/* Social Icons */}
        <div className="d-flex justify-content-center gap-4 fs-3 mt-4">
          <a href="https://github.com/Rushi200410" target="_blank" className="social-icon-wrapper" aria-label="GitHub" rel="noopener noreferrer">
            <div className="icon-layer layer-1"><i className="fab fa-github"></i></div>
            <div className="icon-layer layer-2"><i className="fab fa-github"></i></div>
            <div className="icon-layer layer-3"><i className="fab fa-github"></i></div>
          </a>
          <a href="https://in.linkedin.com/in/rushi-bhansali-3189a52ba" target="_blank" className="social-icon-wrapper" aria-label="LinkedIn" rel="noopener noreferrer">
            <div className="icon-layer layer-1"><i className="fab fa-linkedin-in"></i></div>
            <div className="icon-layer layer-2"><i className="fab fa-linkedin-in"></i></div>
            <div className="icon-layer layer-3"><i className="fab fa-linkedin-in"></i></div>
          </a>
          <a href="mailto:rushibhansali@gmail.com" className="social-icon-wrapper" aria-label="Email">
            <div className="icon-layer layer-1"><i className="fas fa-envelope"></i></div>
            <div className="icon-layer layer-2"><i className="fas fa-envelope"></i></div>
            <div className="icon-layer layer-3"><i className="fas fa-envelope"></i></div>
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1RAiyEhZJoDb5g1q4ENFshjUxQ0k3GHBs"
            className="social-icon-wrapper"
            aria-label="Resume"
            download="Rushi_Bhansali_Resume.pdf"
          >
            <div className="icon-layer layer-1"><i className="fas fa-download"></i></div>
            <div className="icon-layer layer-2"><i className="fas fa-download"></i></div>
            <div className="icon-layer layer-3"><i className="fas fa-download"></i></div>
          </a>
        </div>
      </div>

      {/* Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-0"></div>
    </section>
  );
}
