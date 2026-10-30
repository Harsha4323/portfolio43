
import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${className || ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
