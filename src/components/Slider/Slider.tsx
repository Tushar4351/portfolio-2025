import React, { useState, useEffect } from 'react';
import SliderControls from './SliderControls';
import SliderIndicators from './SliderIndicators';
import SliderItem from './SliderItem';

const images = [
  'https://images.unsplash.com/photo-1517841905240-472988babdf9',
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb'
];

const Slider = () => {
  const [[currentIndex, direction], setSlide] = useState([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slideCount = images.length;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setSlide(prev => [(prev[0] + 1) % slideCount, 1]);
  };

  const previousSlide = () => {
    setSlide(prev => [(prev[0] - 1 + slideCount) % slideCount, -1]);
  };

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setSlide([index, direction]);
  };

  return (
    <div 
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {images.map((image, index) => (
        <SliderItem
          key={index}
          image={image}
          isActive={index === currentIndex}
          direction={direction}
        />
      ))}
      <SliderControls
        onPrevious={previousSlide}
        onNext={nextSlide}
      />
      <SliderIndicators
        total={slideCount}
        current={currentIndex}
        onSelect={goToSlide}
      />
    </div>
  );
};

export default Slider;