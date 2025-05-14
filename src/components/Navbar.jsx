import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">PMC <span>BARBER</span></div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </div>
      
    </nav>
  );
}

export default Navbar;
