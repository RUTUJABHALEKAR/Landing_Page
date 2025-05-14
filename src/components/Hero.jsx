import React, { useEffect } from 'react';
import './Hero.css';
import feather from 'feather-icons';
import Navbar from './Navbar';

function Hero() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="hero-section">
      <Navbar />
      <div className="hero-content">
        <p className="tagline">GET PREMIUM BARBERSHOP EXPERIENCE</p>
        <h1>Classic Cuts<br />Modern Style</h1>
        <p className="subtext">
          Experience the perfect blend of traditional craftsmanship and contemporary styling at PMC Barber.
        </p>
        <div className="buttons">
          <button onClick={() => window.location.href = '#booking'} className="book-btn">Book Now</button>
          <button onClick={() => window.location.href = '#services'} className="services-btn">Our Services</button>
        </div>
      </div>

      <div className="icon-wrapper">
        <a href="#services" className="bounce-link">
          <i className="icon" data-feather="chevron-down"></i>
        </a>
      </div>
    </div>
  );
}

export default Hero;
