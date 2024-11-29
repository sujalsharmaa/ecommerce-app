// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';

const carouselImages = [
  '/images/Online-Shopping-site-in-India-Shop-Online-for-Mobiles-Books-Watches-Shoes-and-More-Amazon-in.png',
  '/images/Online-Shopping-site-in-India-Shop-Online-for-Mobiles-Books-Watches-Shoes-and-More-Amazon-in (1).png',
  '/images/Online-Shopping-site-in-India-Shop-Online-for-Mobiles-Books-Watches-Shoes-and-More-Amazon-in (2).png',
  '/images/Online-Shopping-site-in-India-Shop-Online-for-Mobiles-Books-Watches-Shoes-and-More-Amazon-in (3).png',
  '/images/Online-Shopping-site-in-India-Shop-Online-for-Mobiles-Books-Watches-Shoes-and-More-Amazon-in (4).png',
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-64">
      {carouselImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 z-10"
        style={{ width: '50px', height: '100px' }}
      >
        ❮
      </button>
      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75 z-10"
        style={{ width: '50px', height: '100px' }}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
