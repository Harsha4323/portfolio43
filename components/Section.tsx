
import React, { forwardRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = forwardRef<HTMLElement, SectionProps>(({ id, title, children }, ref) => {
  return (
    <section id={id} ref={ref} className="py-20 px-[5%] max-w-[1400px] mx-auto">
      <h2 className="text-4xl text-center mb-12 font-bold relative">{title}
        <span className="block w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00e6] mx-auto mt-4"></span>
      </h2>
      {children}
    </section>
  );
});

export default Section;
