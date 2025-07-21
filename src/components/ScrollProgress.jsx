import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 52,
        left: 0,
        height: '4px',
        backgroundColor: '#0d6efd', // Bootstrap primary
        width: `${scrollWidth}%`,
        zIndex: 9999,
        transition: 'width 0.25s ease-out',
      }}
    ></div>
  );
}
