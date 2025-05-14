import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(window.pageYOffset > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <div className="scroll-to-top" onClick={scrollToTop}>
        <FaChevronUp />
      </div>
    )
  );
};

export default ScrollToTop;
