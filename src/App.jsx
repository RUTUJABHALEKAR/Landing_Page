import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
