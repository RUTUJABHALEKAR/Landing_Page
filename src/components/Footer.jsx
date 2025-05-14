import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="brand"><span>PMC</span> BARBER</h2>
          <p>Premium barbershop services delivering exceptional grooming experiences since 2005.</p>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#booking">Book Online</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Signature Haircut</li>
            <li>Luxury Shave</li>
            <li>Beard Styling</li>
            <li>Hair & Beard Combo</li>
            <li>Color & Highlights</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li><FaMapMarkerAlt />123 Main Street<br />India</li>
            <li><FaPhone />(91) 12345-67890</li>
            <li><FaEnvelope />info@pmcbarber.com</li>
            <li><FaClock />Mon–Fri: 9am – 7pm<br />Sat: 10am – 6pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 PMC Barber. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
