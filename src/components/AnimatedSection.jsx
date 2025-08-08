import React, { useEffect, useState } from 'react';
import 'animate.css';

const AnimatedSection = ({ children, delay = 0 }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <div
      className={`animate__animated ${
        loaded ? 'animate__fadeInUp' : ''
      }`}
      style={{ animationDuration: '0.8s' }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
