import React, { useState, useEffect } from 'react'
import Typed from 'typed.js'

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    const typed = new Typed('#typed-logo-text', {
      strings: ['Rushi Bhansali', 'Portfolio'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: false,
      backDelay: 2000,
    })

    return () => typed.destroy()
  }, [])

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
    document.body.style.overflow = showMobileMenu ? 'auto' : 'hidden'
  }

  return (
    <>
      {/* Header */}
      <header className="bg-dark text-white sticky-top shadow">
        <nav className="container d-flex justify-content-between align-items-center py-2">
          {/* Logo + Typed Text */}
          <a href="#" className="navbar-brand text-info fw-bold fs-4 d-flex align-items-center">
            <i className="fas fa-cube me-2"></i>
            <span id="typed-logo-text" className="text-light"></span>
          </a>

          {/* Desktop Navigation */}
          <ul className="nav d-none d-md-flex gap-3 mb-0">
            {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((id) => (
              <li className="nav-item" key={id}>
                <a className="nav-link text-white" href={`#${id}`}>
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button className="btn btn-outline-info d-md-none" onClick={toggleMobileMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-95 d-flex flex-column justify-content-center align-items-center text-white z-3">
          <button className="btn btn-outline-light position-absolute top-0 end-0 m-4" onClick={toggleMobileMenu}>
            <i className="fas fa-times fa-2x"></i>
          </button>

          {['about', 'skills', 'projects', 'experience', 'education', 'contact'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="fs-3 mb-4 text-info text-decoration-none"
              onClick={toggleMobileMenu}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
