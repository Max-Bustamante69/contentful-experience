import React from "react";
import { classConstructor } from "../../utils/classConstructor";

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={classConstructor(
        "flex-shrink-0 flex-grow-0 w-full", 
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { CarouselItem };
