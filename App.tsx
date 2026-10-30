import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import IntroScreen from './components/IntroScreen';
import CustomCursor from './components/CustomCursor';
import Squares from './src/Component';

export const App: React.FC = () => {
  const [introCompleted, setIntroCompleted] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  const sectionRefs: { [key: string]: React.RefObject<HTMLElement | null> } = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    process: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  // Scrollspy active section detection
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const scrollPosition = window.scrollY + 220;

      Object.keys(sectionRefs).forEach((id) => {
        const el = sectionRefs[id]?.current;
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs[id]?.current;
    if (section) {
      section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForContact(serviceName);
    scrollToSection('contact');
  };

  const handleReplayIntro = () => {
    setIntroCompleted(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const toggleReducedMotion = () => {
    setReducedMotion((prev) => !prev);
  };

  return (
    <div className={`relative min-h-screen bg-[#070709] text-white selection:bg-[#FF2626] selection:text-white ${reducedMotion ? 'reduced-motion' : ''}`}>
      {/* 1. Cinematic Intro Screen (First Visit / On-Demand) */}
      {!introCompleted && (
        <IntroScreen
          onComplete={() => setIntroCompleted(true)}
          reducedMotion={reducedMotion}
        />
      )}

      {/* 2. Custom Red Cursor Follower */}
      <CustomCursor reducedMotion={reducedMotion} />

      {/* 3. Global Animated Squares Background Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <Squares
          speed={0.35}
          squareSize={45}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.12)"
          hoverFillColor="rgba(255, 45, 35, 0.35)"
          reducedMotion={reducedMotion}
        />

        {/* Subtle atmospheric red ambient glow and non-blocking dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,38,38,0.12)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070709]/20 to-[#070709]/60 pointer-events-none" />
      </div>

      {/* 4. Responsive Header & Navigation */}
      <Header
        activeSection={activeSection}
        onLinkClick={scrollToSection}
        onReplayIntro={handleReplayIntro}
        reducedMotion={reducedMotion}
        onToggleReducedMotion={toggleReducedMotion}
      />

      {/* 5. Main Content Sections */}
      <main className="relative z-10">
        <Hero
          ref={sectionRefs.home as React.RefObject<HTMLElement>}
          onExploreClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        <About ref={sectionRefs.about as React.RefObject<HTMLElement>} />

        <Services
          ref={sectionRefs.services as React.RefObject<HTMLElement>}
          onSelectService={handleSelectService}
        />

        <Skills ref={sectionRefs.skills as React.RefObject<HTMLElement>} />

        <Projects ref={sectionRefs.projects as React.RefObject<HTMLElement>} />

        <Process ref={sectionRefs.process as React.RefObject<HTMLElement>} />

        <Contact
          ref={sectionRefs.contact as React.RefObject<HTMLElement>}
          initialService={selectedServiceForContact}
        />
      </main>

      {/* 6. Footer */}
      <Footer onLinkClick={scrollToSection} />
    </div>
  );
};

export default App;
