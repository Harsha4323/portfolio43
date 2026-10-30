import React, { forwardRef } from 'react';
import { Compass, Search, Palette, Code, CheckCircle2, Rocket, Sparkles } from 'lucide-react';

export const Process = forwardRef<HTMLElement>((_, ref) => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Goals & Scope',
      icon: Search,
      desc: "Understand the client's specific business goals, audience expectations, and functional requirements.",
      details: ['Target audience assessment', 'Scope & requirement definition', 'Deliverable timelines'],
    },
    {
      num: '02',
      title: 'Plan',
      tagline: 'Structure & Flow',
      icon: Compass,
      desc: 'Organize the content architecture, navigation structure, wireframes, and creative design direction.',
      details: ['Content hierarchy mapping', 'Figma layout wireframing', 'Color & typography alignment'],
    },
    {
      num: '03',
      title: 'Design & Develop',
      tagline: 'Code & Interface',
      icon: Code,
      desc: 'Build a responsive interface and implement clean, high-performance, accessible code.',
      details: ['Mobile-first responsive coding', 'Interactive UI and motion effects', 'Clean semantic standards'],
    },
    {
      num: '04',
      title: 'Test & Refine',
      tagline: 'Quality & Audit',
      icon: CheckCircle2,
      desc: 'Check responsiveness, cross-browser compatibility, usability, and mobile performance.',
      details: ['Cross-device screen testing', 'Performance & load optimization', 'Form & interaction checks'],
    },
    {
      num: '05',
      title: 'Deploy',
      tagline: 'Live Launch',
      icon: Rocket,
      desc: 'Prepare and deploy the website to production hosting (e.g. Netlify/Cloud) with DNS setup and handoff.',
      details: ['Netlify CDN production build', 'Domain & SSL verification', 'Documentation & handover'],
    },
  ];

  return (
    <section id="process" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>Methodology</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          How I Bring Ideas <span className="text-brand-red">To Life</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl">
          A disciplined, step-by-step development process designed to deliver high-quality web experiences without guesswork.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>
      </div>

      {/* Step Cards Grid (2 columns on mobile, 5 columns on desktop) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 relative">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="group glass-panel rounded-xl sm:rounded-2xl p-3.5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-brand-red/50 hover:shadow-[0_10px_30px_rgba(255,38,38,0.2)] relative overflow-hidden min-w-0 last:col-span-2 md:last:col-span-1"
            >
              {/* Step Top Bar */}
              <div className="flex items-center justify-between mb-3 sm:mb-6 gap-1">
                <span className="circled-num text-[10px] sm:text-xs text-brand-red border-brand-red font-mono flex-shrink-0">
                  {step.num}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-400 group-hover:text-zinc-200 truncate">
                  {step.tagline}
                </span>
              </div>

              <div>
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-brand-red/40 group-hover:bg-brand-red/10 flex items-center justify-center mb-2.5 sm:mb-4 transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-zinc-300 group-hover:text-brand-red transition-colors" />
                </div>

                <h3 className="font-display font-bold text-sm sm:text-lg text-white mb-1 sm:mb-2 group-hover:text-brand-red transition-colors leading-snug break-words">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-6 font-normal">
                  {step.desc}
                </p>
              </div>

              {/* Step Sub-points */}
              <div className="pt-2.5 sm:pt-4 border-t border-white/[0.06] space-y-1 sm:space-y-1.5 text-[10px] sm:text-[11px] text-zinc-400">
                {step.details.map((item, i) => (
                  <div key={i} className="flex items-start gap-1 sm:gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-brand-red flex-shrink-0 mt-1" />
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
});

Process.displayName = 'Process';
export default Process;
