import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    barber: '',
    requests: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a date';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="booking-section" id='booking'>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="full-width header-block">
          <h4>BOOK YOUR VISIT</h4>
          <h2>Schedule An Appointment</h2>
          <p>Complete the form below to request an appointment with one of our master barbers.</p>
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
            placeholder="John Doe"
          />
          {errors.name && <div className="error-text">{errors.name}</div>}
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
            placeholder="john@example.com"
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
            placeholder="(91) 12345-67890"
          />
          {errors.phone && <div className="error-text">{errors.phone}</div>}
        </div>

        <div className="form-group">
          <label placeholder='laoal'>Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={errors.date ? 'error' : ''}
          />
          {errors.date && <div className="error-text">{errors.date}</div>}
        </div>

        <div className="form-group">
          <label>Preferred Time</label>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={errors.time ? 'error' : ''}
          >
            <option value="" disabled hidden>Select a time</option>
            <option value="9:00 AM">9:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="1:00 PM">1:00 PM</option>
            <option value="3:00 PM">3:00 PM</option>
            <option value="5:00 PM">5:00 PM</option>
          </select>
          {errors.time && <div className="error-text">{errors.time}</div>}
        </div>

        <div className="form-group">
          <label>Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={errors.service ? 'error' : ''}
          >
            <option value="" disabled hidden>Select a service</option>
            <option value="Haircut">Haircut</option>
            <option value="Beard Trim">Beard Trim</option>
            <option value="Shave">Shave</option>
            <option value="Haircut & Beard">Haircut & Beard</option>
          </select>
          {errors.service && <div className="error-text">{errors.service}</div>}
        </div>

        <div className="form-group">
          <label>Preferred Barber</label>
          <select
            name="barber"
            value={formData.barber}
            onChange={handleChange}
          >
            <option value="">Any Available</option>
            <option value="Mike">Mike</option>
            <option value="Chris">Chris</option>
            <option value="Sam">Sam</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Special Requests</label>
          <textarea
            name="requests"
            value={formData.requests}
            onChange={handleChange}
            placeholder="Any special requests or notes..."
          />
        </div>

        <div className="submit-btn">
          <button type="submit">Request Appointment</button>
        </div>
      </form>
    </section>
  );
};

export default Booking;
