import React, { forwardRef } from 'react';
import { Layout, Code2, Palette, UploadCloud, Film, Server, ArrowUpRight, Sparkles } from 'lucide-react';

interface ServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const Services = forwardRef<HTMLElement, ServicesProps>(({ onSelectService }, ref) => {
  const serviceList = [
    {
      id: 'web-design',
      title: 'Website Design & Development',
      icon: Layout,
      number: '01',
      description:
        'Crafting modern, responsive business websites and high-converting custom landing pages built for clean presentation and structure.',
      points: [
        'Modern, responsive business websites',
        'Custom landing pages with clean layout',
        'Website structure & implementation',
      ],
      tag: 'Core Offering',
    },
    {
      id: 'frontend-dev',
      title: 'Frontend Development',
      icon: Code2,
      number: '02',
      description:
        'Translating designs into responsive, clean code with smooth animations and interactive user interface components.',
      points: [
        'HTML5, CSS3, JavaScript, Bootstrap',
        'Mobile-first responsive layouts',
        'Interactive & accessible user interfaces',
      ],
      tag: 'Client Favorite',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      icon: Palette,
      number: '03',
      description:
        'Designing thoughtful user interfaces and practical UX workflows in Figma, prioritizing clarity and visitor engagement.',
      points: [
        'Interface design & typography hierarchy',
        'User experience & layout optimization',
        'Figma-based wireframing workflows',
      ],
      tag: 'Design First',
    },
    {
      id: 'deployment',
      title: 'Website Deployment',
      icon: UploadCloud,
      number: '04',
      description:
        'Setting up production-ready live websites on Netlify with automated Git / GitHub continuous deployment pipelines.',
      points: [
        'Netlify live hosting & custom domains',
        'Git & GitHub repository workflows',
        'Ongoing website maintenance & updates',
      ],
      tag: 'Production Ready',
    },
    {
      id: 'video-editing',
      title: 'Video Editing',
      icon: Film,
      number: '05',
      description:
        'Creative video editing for reels, promotional videos, brand content, and website showcases.',
      points: [
        'Reels and short-form video editing',
        'Motion graphics and animated text',
        'Promotional and marketing videos',
        'Smooth transitions and visual effects',
      ],
      tag: 'Creative Media',
    },
    {
      id: 'cloud-infra',
      title: 'Cloud Fundamentals',
      icon: Server,
      number: '06',
      description:
        'Applying foundational AWS cloud infrastructure practices, Linux server commands, and continuous integration concepts.',
      points: [
        'AWS IAM, Amazon S3, Amazon EC2',
        'Linux administration (Ubuntu environment)',
        'CI/CD fundamentals & automation',
      ],
      tag: 'Infrastructure',
    },
  ];

  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Services &amp; Capabilities</span>
        </div>
        <h2 className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl text-white tracking-tight break-words">
          What I Can Build <span className="text-brand-red">For You</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl">
          Independent freelance solutions designed to give your business an edge with responsive code and modern digital aesthetics.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>
      </div>

      {/* Services 6-Card Grid (1 col on <=320px, 2 col on 360px+ / iPhone, 3 col on desktop) */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
        {serviceList.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="group relative glass-panel rounded-xl sm:rounded-2xl p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-red/50 hover:shadow-[0_12px_35px_rgba(255,38,38,0.2)] overflow-hidden min-w-0"
            >
              {/* Top Card Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header row: Number badge & Tag */}
                <div className="flex items-center justify-between mb-3 sm:mb-6 gap-1">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-brand-red/40 group-hover:bg-brand-red/10 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-zinc-300 group-hover:text-brand-red group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span className="hidden sm:inline-block font-mono text-xs text-zinc-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/10 truncate">
                      {service.tag}
                    </span>
                    <span className="circled-num text-[10px] sm:text-xs text-zinc-400 group-hover:text-brand-red group-hover:border-brand-red transition-colors flex-shrink-0">
                      {service.number}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-sm sm:text-lg lg:text-xl text-white mb-1.5 sm:mb-3 group-hover:text-brand-red transition-colors duration-200 leading-snug break-words">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 font-normal line-clamp-3 sm:line-clamp-none">
                  {service.description}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-1 sm:space-y-2 mb-3.5 sm:mb-8 pt-2.5 sm:pt-4 border-t border-white/[0.06] text-[10px] sm:text-xs text-zinc-300">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0 mt-1" />
                      <span className="leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link to Contact Form */}
              <button
                onClick={() => onSelectService && onSelectService(service.title)}
                className="w-full py-2 px-2 sm:py-2.5 sm:px-4 rounded-lg sm:rounded-xl bg-white/[0.03] hover:bg-brand-red group-hover:border-brand-red/40 border border-white/10 text-zinc-300 hover:text-white text-[10px] sm:text-xs font-semibold uppercase tracking-normal sm:tracking-wider flex items-center justify-between transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(255,38,38,0.3)] min-w-0 min-h-[38px] active:scale-[0.98]"
              >
                <span className="truncate">Discuss Service</span>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
});

Services.displayName = 'Services';
export default Services;
