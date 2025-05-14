import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Signature Haircut",
    description: "Expert consultation, precision cut, hot towel, styling and aftercare advice.",
    price: "35",
    icon: "✂️",
  },
  {
    title: "Luxury Shave",
    description: "Hot towel preparation, premium shave cream, straight razor shave, and cooling aftercare.",
    price: "30",
    icon: "🪒",
  },
  {
    title: "Beard Styling",
    description: "Beard trim, shape, hot towel treatment and premium beard oil application.",
    price: "25",
    icon: "🧔",
  },
  {
    title: "Hair & Beard Combo",
    description: "Complete package including signature haircut and premium beard styling.",
    price: "55",
    icon: "💇",
  },
  {
    title: "Color & Highlights",
    description: "Professional coloring or highlighting, toning, and finish with style advice.",
    price: "60+",
    icon: "💈",
  },
  {
    title: "Junior Haircut",
    description: "Kid-friendly service with precision cut and styling for boys under 12.",
    price: "25",
    icon: "👦",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h4 className="section-subtitle">OUR SERVICES</h4>
        <h2 className="section-title">Premium Grooming Services</h2>
        <p className="section-description">
          We offer a range of premium services to keep you looking your best.
          Our skilled barbers are trained in classic and contemporary techniques.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-price">&#8377;{service.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
