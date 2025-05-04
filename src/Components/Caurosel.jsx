import React, { useState } from 'react';

const images = [
  
  'images/s5.jpg',
  'images/s4.jpeg',
  
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="carousel-container mb-3">
        <img 
          src={images[activeIndex]} 
          alt="Main slide" 
          className="w-100 main-carousel-img" 
        />
      </div>

      <div className="d-flex justify-content-center gap-2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`thumb-${index}`}
            className={`thumbnail-img ${activeIndex === index ? 'active-thumb' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
