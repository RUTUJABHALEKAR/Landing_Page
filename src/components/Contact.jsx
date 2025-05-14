import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Message sent:', formData);
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact-section" id='contact'>
      <div className="contact-container">
        <div className="contact-details">
          <h4>CONTACT US</h4>
          <h2>Get In Touch</h2>
          <p>
            Have questions or need more information? Contact us directly or visit our shop.
            Walk-ins are welcome based on availability.
          </p>

        <div className="contact-info">
            <div>
              <FaMapMarkerAlt className="icon" />
              <strong className="title">Location</strong><br />
              <span className="text">123 Main Street</span><br />
              <span className="text">India</span>
            </div>
            <div>
              <FaClock className="icon" />
              <strong className="title">Hours</strong><br />
              <span className="text">Mon–Fri: 9am–7pm</span><br />
              <span className="text">Sat: 10am–6pm</span><br />
              <span className="text">Sun: Closed</span>
            </div>
            <div>
              <FaPhone className="icon" />
              <strong className="title">Phone</strong><br />
              <span className="text">(91) 12345-67890</span>
            </div>
            <div>
              <FaEnvelope className="icon" />
              <strong className="title">Email</strong><br />
              <span className="text">info@pmcbarber.com</span>
            </div>
        </div>


          <div className="contact-social">
            <h3>Follow Us</h3>
            <div className="icons">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
              <FaYoutube />
            </div>
          </div>
        </div>

        <div className="contact-form-box">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              rows="6"
              placeholder="Type your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
