import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SliderControls from './SliderControls';
import SliderIndicators from './SliderIndicators';
import SliderItem from './SliderItem';

const images = [
  "https://flowbite.com/docs/images/carousel/carousel-1.svg",
  "https://flowbite.com/docs/images/carousel/carousel-2.svg",
  "https://flowbite.com/docs/images/carousel/carousel-3.svg"
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full h-full rounded-lg overflow-hidden"
    >
      {images.map((image, index) => (
        <SliderItem
          key={index}
          image={image}
          isActive={currentSlide === index}
          index={index}
        />
      ))}
      
      <SliderControls
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
      
      <SliderIndicators
        total={images.length}
        current={currentSlide}
        onSelect={setCurrentSlide}
      />
    </motion.div>
  );
};

export default Slider;