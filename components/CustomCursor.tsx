import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC<{ reducedMotion?: boolean }> = ({ reducedMotion = false }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices or if reduced motion is requested
    if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [reducedMotion, isVisible]);

  if (reducedMotion || !isVisible) return null;

  return (
    <>
      {/* Outer subtle red glow ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovered ? 1.6 : 1})`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-300 ${
            isHovered
              ? 'w-10 h-10 border-2 border-brand-red bg-brand-red/20 shadow-[0_0_20px_rgba(255,38,38,0.7)]'
              : 'w-7 h-7 border border-brand-red/40 bg-brand-red/5'
          }`}
        />
      </div>

      {/* Inner red dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_8px_#FF2626]" />
      </div>
    </>
  );
};

export default CustomCursor;
