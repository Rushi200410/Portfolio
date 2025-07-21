import React from 'react';
import './Education.css';

export default function Education() {
  return (

    <section id="education" className="py-5 bg-dark text-light position-relative d-flex align-items-center justify-content-center text-center">
      <div className="container">
        <h2 className="section-heading animate-on-scroll text-center mb-5">Education</h2>

        <div className="timeline">

          {/* College */}
          <div className="timeline-item">
            <div className="timeline-icon bg-info mt-5"></div>
            <div className="timeline-content bg-info-subtle text-dark ms-5">
              <h5 className="fw-bold mb-1">Bachelor of Engineering in Electronics and Telecommunication</h5>
              <p className="text-muted mb-1">SVKM’s Dwarkadas J. Sanghvi College of Engineering</p>
              <p className="mb-0"><strong>2023 – 2026</strong></p>
            </div>
          </div>

          {/* Diploma */}
          <div className="timeline-item">
            <div className="timeline-icon bg-success mt-5"></div>
            <div className="timeline-content bg-success-subtle text-dark ms-5">
              <h5 className="fw-bold mb-1">Diploma in Information Technology</h5>
              <p className="text-muted mb-1">Thakur Polytechnic College</p>
              <p className="mb-0"><strong>2020 – 2023</strong></p>
            </div>
          </div>

          {/* SSC */}
          <div className="timeline-item">
            <div className="timeline-icon bg-primary mt-5"></div>
            <div className="timeline-content bg-primary-subtle text-dark ms-5">
              <h5 className="fw-bold mb-1">Secondary School Certificate (SSC)</h5>
              <p className="text-muted mb-1">S.E International School</p>
              <p className="mb-0"><strong>2018 – 2020</strong></p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
