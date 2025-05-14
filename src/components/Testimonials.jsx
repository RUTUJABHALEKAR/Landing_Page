import React, { useState } from "react";
import "./Testimonials.css";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonialsData = [
  {
    name: "Michael Thompson",
    role: "Regular Client",
    message:
      "I've been coming to PMC Barber for over a year now, and I've never had a bad experience. James always knows exactly what I want, even when I'm not sure how to explain it.",
  },
  {
    name: "Robert Johnson",
    role: "Regular Client",
    message:
      "The attention to detail is unmatched. From the moment you walk in, you're treated like a VIP. The hot towel service and straight razor finish are incredible touches.",
  },
  {
    name: "Alex Davis",
    role: "New Client",
    message:
      "I was nervous about switching barbers, but PMC Barber made me feel right at home. Best decision I have made in a while.",
  },
  {
    name: "Christopher Wilson",
    role: "New Client",
    message:
      "The atmosphere is amazing - great music, comfortable chairs, and complimentary drinks. It's more than just a haircut; it's an experience worth looking forward to.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const { name, role, message } = testimonialsData[index];

  return (
    <section className="testimonials-section" id="testimonials">
      <h5 className="section-subtitle">TESTIMONIALS</h5>
      <h2 className="section-title">What Our Clients Say</h2>
      <p className="section-description">
        Don't just take our word for it - hear what our satisfied clients have to say
        about their experience at PMC Barber.
      </p>

      <div className="testimonial-card">
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#D4AF37" />
          ))}
        </div>
        <p className="message">"{message}"</p>
        <h4 className="client-name">{name}</h4>
        <p className="client-role">{role}</p>
      </div>

      <div className="testimonial-nav">
        <button onClick={handlePrev}><FaChevronLeft /></button>
        <button onClick={handleNext}><FaChevronRight /></button>
      </div>
    </section>
  );
};

export default Testimonials;
