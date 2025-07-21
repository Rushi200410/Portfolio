import React from 'react';
import './components/Sections.css';
import Header from './components/Header';
import ScrollProgress from './components/ScrollProgress';
import BgVideo from './components/BgVideo';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <BgVideo />
      <Header />
      <ScrollProgress />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  )
}

export default App
