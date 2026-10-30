import React, { forwardRef } from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick?: () => void;
  onContactClick?: () => void;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(({ onExploreClick, onContactClick }, ref) => {
  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Corner Origami Elements from Launch Announcement Poster */}
      <div className="origami-corner-tl" />
      <div className="origami-corner-br hidden sm:block" />

      {/* Atmospheric Red Radiant Glow Behind Hero Headline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] lg:w-[850px] h-[350px] sm:h-[450px] rounded-full bg-gradient-to-tr from-brand-red/20 via-brand-red/10 to-transparent blur-[140px] pointer-events-none -z-10 animate-glow" />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge & Top Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 sm:mb-8 hover:border-brand-red/40 transition-colors animate-slide-up max-w-full">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-widest text-zinc-300 uppercase truncate">
            INDEPENDENT FREELANCER · WEBGONEX
          </span>
          <span className="text-zinc-600 hidden sm:inline">|</span>
          <span className="font-mono text-[10px] sm:text-[11px] text-emerald-400 hidden sm:inline">
            Available for New Projects
          </span>
        </div>

        {/* Main Headline with Editorial Staggered Layout */}
        <h1 className="font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] tracking-tight text-white leading-[1.12] sm:leading-[1.06] mb-5 sm:mb-6 max-w-4xl animate-slide-up delay-100 break-words">
          Building Digital{' '}
          <span className="relative inline-block text-brand-red text-glow">
            Experiences
            {/* Animated accent curve / underline */}
            <svg
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-brand-red pointer-events-none"
              viewBox="0 0 300 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 5 15 C 80 5, 200 4, 295 12"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{' '}
          That Move Businesses Forward.
        </h1>

        {/* Poster Authentic Script Phrase */}
        <div className="mb-5 sm:mb-6 animate-slide-up delay-200">
          <p className="font-script text-brand-red text-xl sm:text-3xl lg:text-4xl -rotate-2 inline-flex items-center gap-1.5 sm:gap-2">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red animate-pulse flex-shrink-0" />
            <span>Let&apos;s Build Your Digital Presence</span>
          </p>
        </div>

        {/* Supporting Paragraph */}
        <p className="text-zinc-300 text-sm sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 text-balance animate-slide-up delay-300">
          I design and develop modern, responsive websites and digital experiences that help businesses establish their online presence with clean code and high performance.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto animate-slide-up delay-400">
          {/* Primary CTA */}
          <button
            onClick={onExploreClick}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-light text-white font-semibold text-xs sm:text-base tracking-wide flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 shadow-[0_0_25px_rgba(255,38,38,0.45)] hover:shadow-[0_0_35px_rgba(255,38,38,0.75)] hover:scale-[1.02]"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onContactClick}
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#12121A]/80 hover:bg-[#1A1A26] border border-white/10 hover:border-brand-red/50 text-white font-medium text-xs sm:text-base tracking-wide flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
          >
            <span>Let&apos;s Work Together</span>
            <span className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform"></span>
          </button>
        </div>

        {/* Quick Identity Badges (Inspired by Absans aesthetic & poster) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/[0.08] w-full max-w-3xl text-left animate-slide-up delay-500">
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-1 truncate">
              <span className="circled-num text-[10px] sm:text-xs text-brand-red flex-shrink-0">01</span>
              <span className="truncate">Founder & Dev</span>
            </div>
            <p className="text-white font-display font-semibold text-xs sm:text-base truncate">Harsha T · WebGonex</p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-1 truncate">
              <span className="circled-num text-[10px] sm:text-xs text-brand-red flex-shrink-0">02</span>
              <span className="truncate">Location</span>
            </div>
            <p className="text-white font-display font-semibold text-xs sm:text-base truncate">Bengaluru, Karnataka</p>
          </div>

          <div className="col-span-2 sm:col-span-1 p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] min-w-0">
            <div className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-1 truncate">
              <span className="circled-num text-[10px] sm:text-xs text-brand-red flex-shrink-0">03</span>
              <span className="truncate">Production Sites</span>
            </div>
            <p className="text-white font-display font-semibold text-xs sm:text-base truncate">100% Responsive & Live</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex flex-col items-center gap-2 text-zinc-400 font-mono text-[11px] tracking-widest uppercase">
          <span>Scroll to explore</span>
          <ChevronDown className="w-4 h-4 text-brand-red animate-bounce" />
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
