import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <p className="section-subtitle">ABOUT US</p>
          <h2 className="section-title">Craftsmanship &<br />Tradition Since 2005</h2>
          <p className="about-description">
            PMC Barber was founded with one mission: to provide exceptional grooming services in an environment
            that celebrates the tradition of barbering while embracing modern techniques and styles.
          </p>
          <p className="about-description">
            Our team of master barbers combines decades of experience with continuous education to ensure you receive the
            highest quality service every time you visit. We take pride in creating a welcoming atmosphere where every client
            feels valued and leaves looking and feeling their best.
          </p>

          <div className="about-stats">
            <div><span>18+</span><p>Years of Experience</p></div>
            <div><span>5</span><p>Master Barbers</p></div>
            <div><span>10k+</span><p>Haircuts Done</p></div>
            <div><span>50+</span><p>Products Used</p></div>
          </div>

          <a href="#booking" className="about-button">Book an Appointment</a>
        </div>

        <div className="about-images">
          <img src="/about-41.jpg" alt="" />
          <img src="/about-2.jpg" alt="" />
          <img src="/about-3.jpg" alt="" />
          <img src="/about-4.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default About;
