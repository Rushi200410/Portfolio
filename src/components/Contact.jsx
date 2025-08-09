import React from 'react';
import './Contact.css';

export default function Contact() {
  return (

    <section id="contact" className="contact-section text-white pt-5 pb-2">
      <div className="container">
        <div className="d-flex align-items-center justify-content-center text-center text-light position-relative">
          <h2 className="section-heading text-center mb-5 animate-on-scroll">Get In Touch</h2>
        </div>

        <div className="row gy-5">
          {/* Left: Contact Info */}
          <div className="col-lg-6 animate-on-scroll delay-100">
            <h3 className="fw-bold mb-4 display-6">Let's Talk</h3>
            <p className="lead text-light mb-4">
              I'm currently open to freelance projects, internships, or any software engineering opportunities. Drop a message — I'll respond as soon as possible!
            </p>
            <ul className="list-unstyled text-light fs-6">
              <li className="mb-3">
                <i className="fas fa-envelope me-2 text-warning"></i>
                <a href="mailto:rushibhansali@gmail.com" className="text-white text-decoration-underline">rushibhansali@gmail.com</a>
              </li>
              <li className="mb-3">
                <i className="fas fa-phone me-2 text-success"></i>
                <a href="tel:+919321542278" className="text-white text-decoration-underline">+91 9321542278</a>
              </li>
              <li className="mb-3">
                <i className="fab fa-github me-2 text-info"></i>
                <a href="https://github.com/Rushi200410" target="_blank" rel="noreferrer" className="text-white text-decoration-underline">GitHub: Rushi200410</a>
              </li>
              <li className="mb-3">
                <i className="fab fa-linkedin me-2 text-primary"></i>
                <a href="https://linkedin.com/in/rushi-bhansali-3189a52ba" target="_blank" rel="noreferrer" className="text-white text-decoration-underline">LinkedIn: rushi-bhansali</a>
              </li>
            </ul>
          </div>

          {/* Right: Contact Form */}
          <div className="col-lg-6 animate-on-scroll delay-200">
            <div className="form-container bg-gray bg-opacity rounded p-4">
              <form action="https://formspree.io/f/mblyvewd" method="POST">
                <div className="mb-3">
                    <label htmlFor="floatingInput" className="text-light">Name</label>
                    <input type="text" name="name" className="form-control form-field" placeholder='Enter your name' id="floatingInput" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="floatingInput" className="text-light">Email address</label>
                    <input type="email" name="email" className="form-control form-field" placeholder='Enter your email' id="floatingInput" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="floatingTextarea2" className="text-light">Message</label>
                  <textarea name="message" className="form-control form-field" placeholder='Enter your message' id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 fw-semibold">Send Message</button>
                <div id="form-message" className="form-text text-success d-none mt-3">Message sent successfully!</div>
              </form>
            </div>
          </div>
        </div>

        <p className="text-center text-light small mt-5 mb-0 animate-on-scroll">&copy; 2024 Rushi Bhansali. All rights reserved.</p>
      </div>
    </section>
  );
}
