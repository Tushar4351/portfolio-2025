import { useState, useEffect } from "react";
import SliderControls from "../components/Slider Components/SliderControls";
import SliderIndicators from "../components/Slider Components/SliderIndicators";
import SliderItem from "../components/Slider Components/SliderItem";
import { motion } from "framer-motion";
const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
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
    setSlide((prev) => [(prev[0] + 1) % slideCount, 1]);
  };

  const previousSlide = () => {
    setSlide((prev) => [(prev[0] - 1 + slideCount) % slideCount, -1]);
  };

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 1 : -1;
    setSlide([index, direction]);
  };

  return (
    <motion.div
      className="relative rounded-xl w-full h-full overflow-hidden"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1],
      }}
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
      <SliderControls onPrevious={previousSlide} onNext={nextSlide} />
      <SliderIndicators
        total={slideCount}
        current={currentIndex}
        onSelect={goToSlide}
      />
    </motion.div>
  );
};

export default Slider;
