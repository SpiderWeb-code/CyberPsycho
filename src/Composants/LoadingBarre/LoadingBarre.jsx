import React, { useEffect, useState } from 'react';
import './LoadingBarre.scss';

function LoadingBarre(){
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / totalHeight) * 100;
    setScroll(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
    </div>
  );
};

export default LoadingBarre;