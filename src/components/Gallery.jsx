import React from "react";
import "./gallery.css";

const galleryItems = [
  {
    src: "/gallery-1.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-2.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-3.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-4.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-5.png",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-6.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-7.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-8.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-9.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  },
  {
    src: "/gallery-10.jpg",
    alt: "Curly Texture Styling",
    caption: "Curly Texture Styling"
  }
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <span className="subheading">OUR WORK</span>
        <h2>Style Gallery</h2>
        <p>
          Browse through our portfolio of haircuts and styles to find
          inspiration for your next visit.
        </p>
      </div>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={item.alt} />
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
