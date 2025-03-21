import React, { useState, useCallback, Children, useEffect, cloneElement } from "react";
import { CarouselItem } from "./CarouselItem";

interface CarouselProps {
  children: React.ReactNode;
  autoplay?: boolean;
  interval?: number;
  className?: string;
  isContentful?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = false,
  interval = 5000,
  className,
  isContentful=false,
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childrenCount = Children.count(children);

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === childrenCount - 1 ? 0 : prevIndex + 1
    );
  }, [childrenCount]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? childrenCount - 1 : prevIndex - 1
    );
  }, [childrenCount]);

  useEffect(() => {
    if (autoplay && childrenCount > 1) {
      const timer = setInterval(() => {
        nextSlide();
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [autoplay, interval, nextSlide, childrenCount]);

  return (
    <div 
      className={
        "relative  rounded-md"
      }
      {...props}
    >
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {Children.map(children, (child, index) => (
          <CarouselItem key={index}>{child}</CarouselItem>
        ))}
      </div>
      
      {childrenCount > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-plain-primary rounded-full p-2 shadow-md transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-plain-primary rounded-full p-2 shadow-md transition-colors z-10"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export { Carousel };
