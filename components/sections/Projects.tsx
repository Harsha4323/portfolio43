import React, { forwardRef, useState } from 'react';
import { Layers, ArrowUpRight, ExternalLink, Code2, ChevronLeft, ChevronRight, CheckCircle2, X, Sparkles, Shield, UserCheck, Lock, Building2 } from 'lucide-react';

export const Projects = forwardRef<HTMLElement>((_, ref) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [selectedModalProject, setSelectedModalProject] = useState<any | null>(null);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');

  const projectData = [
    {
      id: 'abhista-infra',
      number: '01',
      title: 'Abhista Infra',
      client: 'Abhista Infrastructure & Construction',
      category: 'Construction / Infrastructure Website',
      overview:
        'Construction and infrastructure website showcasing the company\'s online presence, engineering services, structural capabilities, and client project inquiries.',
      tools: ['Responsive UI', 'Modern Architecture', 'SEO & Performance', 'Online Showcase'],
      sectionsList: ['Hero & Overview', 'Infrastructure Services', 'Project Portfolio', 'Structural Capabilities', 'Client Inquiries'],
      highlights: [
        'Built full online presence for construction & infrastructure brand',
        'Structured service offerings, heavy civil projects, and equipment capabilities',
        'Engineered responsive interface tailored for commercial clients & partners',
        'Active production website deployed at abhistainfra.com',
      ],
      liveUrl: 'https://www.abhistainfra.com/',
      codeUrl: '',
      previewBadge: 'Live Infrastructure Site',
      accentColor: '#FF2626',
      mockupType: 'infrastructure',
    },
    {
      id: 'sparsha-mehendi',
      number: '02',
      title: 'Business Website — Custom Service Platform',
      client: 'Sparsha Mehendi Arts',
      category: 'Web Development & Netlify Live Hosting',
      overview:
        'A comprehensive 6-section responsive business platform built from the ground up for a startup service provider, designed to turn online visitors into booked appointments.',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Netlify Deployment', 'Responsive UI'],
      sectionsList: ['Home', 'About Us', 'Services Offered', 'Interactive FAQ', 'Portfolio Explore', 'Contact & Booking'],
      highlights: [
        'Designed and structured a complete 6-section responsive architecture',
        'Built interactive UI components and mobile-optimized touch navigation',
        'Deployed production-ready live website on Netlify CDN for fast delivery',
        'Cross-browser tested across Safari, Chrome, Edge, and mobile viewports',
      ],
      liveUrl: 'https://sparshamehandiarts.netlify.app/',
      codeUrl: 'https://github.com/Harsha4323',
      previewBadge: 'Production Deployed',
      accentColor: '#FF2626',
      mockupType: 'browser',
    },
    {
      id: 'student-result-mgmt',
      number: '03',
      title: 'Student Result Management System',
      client: 'Academic Institutional Web Portal',
      category: 'Role-Based Web Application & Database',
      overview:
        'A multi-tier role-based academic portal with separated authentication flows for administrators, students, and parents, engineered to streamline academic record management.',
      tools: ['PHP', 'HTML5', 'CSS3', 'JavaScript', 'MySQL Database'],
      sectionsList: ['Admin Dashboard', 'Student Login', 'Parent Portal', 'Result Query Engine', 'Record CRUD System'],
      highlights: [
        'Architected 3 distinct role-based authentication flows (Admin, Student, Parent)',
        'Built secure student/parent result lookup using register number and credentials',
        'Engineered an administrative dashboard for real-time result uploads and record modifications',
        'Significantly minimized manual paperwork and record handling latency',
      ],
      liveUrl: 'https://github.com/Harsha4323',
      codeUrl: 'https://github.com/Harsha4323',
      previewBadge: 'Role-Based Authentication',
      accentColor: '#FF4D4D',
      mockupType: 'dashboard',
    },
  ];

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev + 1) % projectData.length);
  };

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev - 1 + projectData.length) % projectData.length);
  };

  const currentProject = projectData[activeProjectIndex];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Verified Project Portfolio</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Featured <span className="text-brand-red">Creations</span>
        </h2>
        <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-xl">
          Real web applications and live client websites built and deployed from planning through live hosting.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>

        {/* View Mode Switcher & Slider Controls */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex items-center p-1 bg-[#101016] border border-white/10 rounded-full">
            <button
              onClick={() => setViewMode('slider')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'slider'
                  ? 'bg-brand-red text-white shadow-[0_0_12px_rgba(255,38,38,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Slider View
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-red text-white shadow-[0_0_12px_rgba(255,38,38,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Grid View
            </button>
          </div>

          {viewMode === 'slider' && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous project"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-red/40 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-zinc-400">
                0{activeProjectIndex + 1} / 0{projectData.length}
              </span>
              <button
                onClick={handleNext}
                aria-label="Next project"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-brand-red/40 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* SLIDER VIEW MODE */}
      {viewMode === 'slider' && (
        <div className="relative overflow-hidden">
          <div
            key={currentProject.id}
            className="glass-panel-glow rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-12 transition-all duration-500 animate-slide-up min-w-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Project Left Info */}
              <div className="lg:col-span-6 flex flex-col justify-between min-w-0">
                <div>
                  {/* Top Badge & Number */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[10px] sm:text-xs font-semibold truncate">
                      <Sparkles className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{currentProject.previewBadge}</span>
                    </span>
                    <span className="circled-num text-[10px] sm:text-xs text-brand-red border-brand-red font-mono flex-shrink-0">
                      {currentProject.number}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-1 truncate">
                    {currentProject.client}
                  </p>
                  <h3 className="font-display font-black text-xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight break-words">
                    {currentProject.title}
                  </h3>
                  <p className="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-4 sm:mb-6">
                    {currentProject.overview}
                  </p>

                  {/* Sections / Architecture Pills */}
                  <div className="mb-4 sm:mb-6">
                    <div className="text-[10px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Key Modules &amp; Sections:
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {currentProject.sectionsList.map((sec, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/[0.03] border border-white/10 text-zinc-300 text-[10px] sm:text-xs"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-8 pt-3 sm:pt-4 border-t border-white/10 text-[11px] sm:text-xs text-zinc-300">
                    {currentProject.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                    {currentProject.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/[0.04] border border-white/10 text-brand-red font-mono text-[10px] sm:text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-white/10">
                  {currentProject.liveUrl && currentProject.liveUrl.startsWith('http') ? (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-red hover:bg-brand-red-light text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,38,38,0.4)] transition-all hover:scale-105"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => setSelectedModalProject(currentProject)}
                      className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-red hover:bg-brand-red-light text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,38,38,0.4)] transition-all hover:scale-105"
                    >
                      <span>View Project Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  )}

                  <button
                    onClick={() => setSelectedModalProject(currentProject)}
                    className="px-4 py-2.5 sm:px-5 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Architecture Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                  </button>
                </div>
              </div>

              {/* Project Right Mockup Visual */}
              <div className="lg:col-span-6 min-w-0">
                <div className="rounded-2xl border border-white/15 bg-[#09090D] overflow-hidden shadow-2xl relative group">
                  {/* Mockup Window Chrome Header */}
                  <div className="px-4 py-3 bg-[#13131A] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                    </div>
                    <div className="font-mono text-[11px] text-zinc-400 px-3 py-0.5 rounded bg-black/40 border border-white/5 truncate max-w-[200px]">
                      {currentProject.id === 'abhista-infra'
                        ? 'abhistainfra.com'
                        : currentProject.id === 'sparsha-mehendi'
                        ? 'sparshamehandiarts.netlify.app'
                        : 'student-results.internal/auth'}
                    </div>
                    <div className="text-zinc-600 text-xs font-mono">2026.v1</div>
                  </div>

                  {/* Mockup Screen Viewport */}
                  <div className="p-6 sm:p-8 min-h-[340px] flex flex-col justify-between bg-gradient-to-br from-[#0B0B10] to-[#12121A] relative">
                    {/* Watermark Logo */}
                    <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
                      <span className="font-display font-black text-7xl text-white">WG</span>
                    </div>

                    {currentProject.id === 'abhista-infra' ? (
                      /* Abhista Infra Construction & Infrastructure Showcase Visual */
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-brand-red" />
                            <div className="font-display font-bold text-lg text-white">Abhista Infra</div>
                          </div>
                          <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                            Live: abhistainfra.com
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                          <div className="text-brand-red font-mono text-xs uppercase mb-1">
                            Infrastructure Capabilities
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                              🏗️ Commercial Civil Construction
                            </div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                              🏢 Structural Engineering Works
                            </div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                              🚜 Heavy Equipment &amp; Operations
                            </div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                              📋 Client Procurement Portal
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30">
                          <div className="text-xs font-mono text-brand-red font-semibold mb-1">
                            Enterprise Web Presence
                          </div>
                          <p className="text-xs text-zinc-300">
                            Custom digital showcase built to present engineering capabilities, highlight executed projects, and streamline commercial inquiries.
                          </p>
                        </div>
                      </div>
                    ) : currentProject.id === 'sparsha-mehendi' ? (
                      /* Sparsha Mehendi Platform Interface Visual */
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="font-display font-bold text-lg text-white">Sparsha Mehendi Arts</div>
                          <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                            Netlify Live Status: Active
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                          <div className="text-brand-red font-mono text-xs uppercase mb-1">Interactive Sections</div>
                          <div className="grid grid-cols-3 gap-2 text-[11px] text-zinc-300">
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">Home Hero</div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">About Story</div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">Service Tier</div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">Live FAQ</div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">Design Gallery</div>
                            <div className="p-2 rounded bg-white/[0.03] border border-white/5 text-center">Booking Form</div>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-brand-red/10 border border-brand-red/30">
                          <div className="text-xs font-mono text-brand-red font-semibold mb-1">
                            Performance &amp; Responsiveness
                          </div>
                          <p className="text-xs text-zinc-300">
                            Handcrafted with clean semantic HTML5 &amp; CSS3 for zero layout shifts and instant mobile rendering.
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Student Result System Interface Visual */
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="font-display font-bold text-lg text-white">Result Management Engine</div>
                          <div className="text-[11px] font-mono text-brand-red bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/30">
                            PHP + MySQL Stack
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
                            <Shield className="w-5 h-5 text-brand-red mb-1" />
                            <span className="text-xs font-bold text-white">Admin</span>
                            <span className="text-[10px] text-zinc-400">Upload &amp; Edit</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
                            <UserCheck className="w-5 h-5 text-emerald-400 mb-1" />
                            <span className="text-xs font-bold text-white">Student</span>
                            <span className="text-[10px] text-zinc-400">Scorecard View</span>
                          </div>
                          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col items-center text-center">
                            <Lock className="w-5 h-5 text-sky-400 mb-1" />
                            <span className="text-xs font-bold text-white">Parent</span>
                            <span className="text-[10px] text-zinc-400">Secure Access</span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                          <div className="text-xs font-mono text-zinc-400 mb-1">Database Schema:</div>
                          <p className="text-xs text-zinc-300 font-mono">
                            Tables: `users`, `students`, `results`, `semesters`, `audit_logs`
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Bottom Status Row */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono text-zinc-400">
                      <span>CLIENT ARCHITECTURE</span>
                      <span className="text-brand-red flex items-center gap-1">
                        <span>Click to expand</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GRID VIEW MODE (2 columns on mobile, 3 columns on desktop) */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="glass-panel-glow rounded-xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 min-w-0"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-4 gap-1">
                  <span className="font-mono text-[9px] sm:text-xs text-brand-red bg-brand-red/10 border border-brand-red/30 px-2 py-0.5 rounded-full font-semibold truncate">
                    {project.previewBadge}
                  </span>
                  <span className="circled-num text-[10px] sm:text-xs text-brand-red border-brand-red font-mono flex-shrink-0">
                    {project.number}
                  </span>
                </div>
                <h3 className="font-display font-bold text-sm sm:text-xl lg:text-2xl text-white mb-1 sm:mb-2 leading-snug break-words">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-[10px] sm:text-xs font-mono uppercase tracking-wider mb-2.5 sm:mb-4 truncate">
                  {project.client}
                </p>
                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-6 line-clamp-3 sm:line-clamp-none">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                  {project.tools.map((t, i) => (
                    <span key={i} className="px-1.5 py-0.5 sm:px-2 rounded bg-white/5 border border-white/10 text-[9px] sm:text-xs font-mono text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 sm:pt-4 border-t border-white/10 flex items-center justify-between gap-1 text-[10px] sm:text-xs">
                {project.liveUrl && project.liveUrl.startsWith('http') ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-red hover:underline flex items-center gap-1 truncate"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedModalProject(project)}
                    className="font-semibold text-brand-red hover:underline flex items-center gap-1 truncate"
                  >
                    <span>Specifications</span>
                    <ArrowUpRight className="w-3 h-3 flex-shrink-0" />
                  </button>
                )}
                <span className="hidden sm:inline font-mono text-zinc-400 text-xs">Deployed</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DETAIL MODAL */}
      {selectedModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#0F0F16] border border-brand-red/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-brand-red/20 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="font-mono text-xs text-brand-red tracking-widest uppercase">
                {selectedModalProject.category}
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1">
                {selectedModalProject.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Client / Organization: <span className="text-white font-medium">{selectedModalProject.client}</span>
              </p>
            </div>

            <div className="space-y-6 text-sm text-zinc-300">
              <div>
                <h4 className="text-white font-bold font-display text-base mb-2">Project Architecture &amp; Delivery</h4>
                <p className="leading-relaxed">{selectedModalProject.overview}</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="text-brand-red font-mono text-xs uppercase font-semibold mb-3">
                  Scope of Implementation:
                </h4>
                <div className="space-y-2">
                  {selectedModalProject.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold font-display text-base mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModalProject.tools.map((tool: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                {selectedModalProject.liveUrl && selectedModalProject.liveUrl.startsWith('http') && (
                  <a
                    href={selectedModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-brand-red hover:bg-brand-red-light text-white text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <a
                  href={`mailto:webgonex43@gmail.com?subject=Inquiry%20about%20${encodeURIComponent(selectedModalProject.title)}`}
                  className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors text-center"
                >
                  Contact About This Project
                </a>
                <button
                  onClick={() => setSelectedModalProject(null)}
                  className="py-3 px-5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;
