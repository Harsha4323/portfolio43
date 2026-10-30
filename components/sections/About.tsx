import React, { forwardRef, useState } from 'react';
import { User, GraduationCap, Award, MapPin, Globe, CheckCircle2, FileText, ArrowUpRight, X, ExternalLink } from 'lucide-react';

export const About = forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'certifications'>('profile');
  const [avatarError, setAvatarError] = useState<boolean>(false);
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    issuer: string;
    image?: string;
    date: string;
  } | null>(null);

  return (
    <section id="about" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-mono uppercase tracking-widest mb-3">
          <User className="w-3.5 h-3.5" />
          <span>About Me</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Architecting Clean Code &amp; <span className="text-brand-red">Modern Interfaces</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-brand-red to-orange-500 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Profile Card & Quick Stats */}
        <div className="lg:col-span-5 flex flex-col gap-6 min-w-0">
          <div className="glass-panel-glow p-4 sm:p-6 lg:p-8 rounded-2xl relative overflow-hidden">
            {/* Red Accent gradient in card top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-transparent" />

            {/* Profile Avatar / Badge Graphic */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-red via-brand-red/40 to-zinc-900 p-0.5 shadow-[0_0_25px_rgba(255,38,38,0.4)] flex items-center justify-center flex-shrink-0 group overflow-hidden">
                {!avatarError ? (
                  <img
                    src="./developer-avatar.png"
                    alt="Harsha T · WebGonex Developer"
                    className="w-full h-full object-cover rounded-[14px] bg-[#0D0D12] transition-transform duration-300 group-hover:scale-105"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-[#0D0D12] rounded-[14px] flex items-center justify-center font-display font-black text-xl sm:text-2xl text-brand-red">
                    HT
                  </div>
                )}
                {/* Online availability pulse indicator on avatar corner */}
                <span className="absolute bottom-1 right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-[#0D0D12]"></span>
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="font-display font-bold text-lg sm:text-xl text-white truncate">Harsha T</h3>
                <p className="text-brand-red text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold truncate">
                  WebGonex Freelancer &amp; Developer
                </p>
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                  <span className="truncate">Bengaluru, Karnataka</span>
                </div>
              </div>
            </div>

            {/* Resume Summary Text */}
            <p className="text-zinc-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 font-normal">
              I am an independent developer and freelancer with a <strong className="text-white font-semibold">B.Voc in Software and Application Development (CGPA 8.4/10)</strong>. I specialize in building fast, responsive, and visually compelling websites, paired with hands-on exposure to cloud fundamentals and deployment workflows.
            </p>

            {/* Key Attributes List */}
            <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-zinc-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Hands-on project experience building responsive websites from scratch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Independently planned, built, and deployed 10+ full web applications live</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>AWS core infrastructure fundamentals (IAM, S3, EC2) &amp; Linux administration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span>Languages: English &amp; Kannada</span>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 pt-4 border-t border-white/10 flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://www.linkedin.com/in/harsha-t11/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              </a>
              <a
                href="https://github.com/Harsha4323"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              </a>
              <a
                href="https://www.instagram.com/webgonex_/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
              </a>
              <a
                href="mailto:webgonex43@gmail.com"
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-brand-red/20 hover:bg-brand-red/30 border border-brand-red/40 text-brand-red text-[11px] sm:text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <span>webgonex43@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tabs for Background Details */}
        <div className="lg:col-span-7 flex flex-col gap-6 min-w-0">
          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 bg-[#0F0F16] border border-white/10 rounded-xl w-full max-w-md">
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-medium transition-all truncate text-center ${
                activeTab === 'profile'
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Professional Focus
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-medium transition-all truncate text-center ${
                activeTab === 'education'
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex-1 py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-medium transition-all truncate text-center ${
                activeTab === 'certifications'
                  ? 'bg-brand-red text-white shadow-[0_0_15px_rgba(255,38,38,0.4)]'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Certifications
            </button>
          </div>

          {/* Tab 1: Professional Focus Content */}
          {activeTab === 'profile' && (
            <div className="glass-panel p-4 sm:p-6 lg:p-8 rounded-2xl space-y-5 sm:space-y-6 animate-slide-up">
              <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>The WebGonex Freelancer Mindset</span>
              </h4>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                As the creative frontend developer behind WebGonex, I work with startups and local businesses looking to establish a credible, high-impact digital presence. I focus on clean semantic code, high cross-device responsiveness, and reliable deployment workflows that make websites fast, maintainable, and memorable.
              </p>

              {/* 2-Column Responsive Specializations Grid on Mobile & Desktop */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] min-w-0">
                  <div className="text-brand-red font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 truncate">
                    Specialization 01
                  </div>
                  <h5 className="text-white font-semibold text-xs sm:text-sm mb-1 leading-snug break-words">Frontend Engineering</h5>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                    Building responsive, pixel-accurate interfaces using HTML5, CSS3, JavaScript, and Bootstrap.
                  </p>
                </div>

                <div className="p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] min-w-0">
                  <div className="text-brand-red font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-1 truncate">
                    Specialization 02
                  </div>
                  <h5 className="text-white font-semibold text-xs sm:text-sm mb-1 leading-snug break-words">Cloud &amp; Deployment</h5>
                  <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed">
                    Hosting setup on Netlify, AWS IAM/S3/EC2 fundamentals, Linux troubleshooting, and Git pipelines.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Education Content */}
          {activeTab === 'education' && (
            <div className="glass-panel p-4 sm:p-6 lg:p-8 rounded-2xl space-y-4 sm:space-y-6 animate-slide-up">
              <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Academic Qualifications</span>
              </h4>

              {/* B.Voc Entry */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#13131B]/70 border border-white/10 relative overflow-hidden min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white">
                    Bachelor of Vocational (B.Voc) — Software &amp; Application Development
                  </h5>
                  <span className="text-brand-red font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/30 w-fit">
                    2023 – 2026
                  </span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm mb-2">SDM College, Ujire</p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span>CGPA:</span>
                  <span className="font-bold text-xs sm:text-sm bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    8.4 / 10.0
                  </span>
                </div>
              </div>

              {/* Pre-University Entry */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#13131B]/70 border border-white/10 relative overflow-hidden min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h5 className="font-display font-bold text-sm sm:text-base text-white">
                    Pre-University Course — Commerce
                  </h5>
                  <span className="text-zinc-400 font-mono text-[11px] sm:text-xs font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 w-fit">
                    2021 – 2023
                  </span>
                </div>
                <p className="text-zinc-300 text-xs sm:text-sm mb-2">SDM PU College, Ujire</p>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span>CGPA:</span>
                  <span className="font-bold text-xs sm:text-sm bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    8.5 / 10.0
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Certifications Content */}
          {activeTab === 'certifications' && (
            <div className="glass-panel p-4 sm:p-6 lg:p-8 rounded-2xl space-y-4 animate-slide-up">
              <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-brand-red flex-shrink-0" />
                <span>Verified Certifications</span>
              </h4>

              <div className="space-y-3">
                {/* Magic Bus Tech Fundamentals & Employability Skilling Certificate */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-brand-red/30 hover:border-brand-red/60 transition-all min-w-0 group relative overflow-hidden">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-brand-red/15 text-brand-red border border-brand-red/30">
                          Verified Credential
                        </span>
                      </div>
                      <h5 className="text-white font-semibold text-xs sm:text-sm truncate">
                        Tech Fundamentals &amp; Employability Skilling Programme
                      </h5>
                      <p className="text-zinc-400 text-[11px] sm:text-xs mt-0.5">
                        Magic Bus (Bangalore Livelihood Centre)
                      </p>
                      <p className="text-zinc-400 text-[10px] font-mono mt-1">
                        June 2026 – August 2026
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2 flex-shrink-0">
                      <span className="text-brand-red font-mono text-[11px] sm:text-xs font-semibold">2026</span>
                      <button
                        onClick={() =>
                          setPreviewCert({
                            title: 'Tech Fundamentals and Employability Skilling Programme',
                            issuer: 'Magic Bus (Bangalore Livelihood Centre)',
                            image: './magic-bus-certificate.png',
                            date: '10/06/2026 – 24/08/2026',
                          })
                        }
                        className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-brand-red border border-white/10 hover:border-brand-red text-zinc-300 hover:text-white text-[10px] font-medium flex items-center gap-1 transition-all"
                        title="View Certificate"
                      >
                        <span>View</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-red/40 transition-colors min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="text-white font-semibold text-xs sm:text-sm truncate">
                      AI Fundamentals: Language and Vision in AI
                    </h5>
                    <span className="text-brand-red font-mono text-[11px] sm:text-xs flex-shrink-0">2026</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] sm:text-xs mt-1">IBM SkillsBuild</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-red/40 transition-colors min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="text-white font-semibold text-xs sm:text-sm truncate">Python For Beginners</h5>
                    <span className="text-brand-red font-mono text-[11px] sm:text-xs flex-shrink-0">2024</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] sm:text-xs mt-1">SimplyLearn</p>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-red/40 transition-colors min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h5 className="text-white font-semibold text-xs sm:text-sm truncate">
                      Front End Web Application Development
                    </h5>
                    <span className="text-brand-red font-mono text-[11px] sm:text-xs flex-shrink-0">2023</span>
                  </div>
                  <p className="text-zinc-400 text-[11px] sm:text-xs mt-1">Innovians Technologies</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-scale-fade">
          <div className="relative w-full max-w-2xl bg-[#0F0F16] border border-brand-red/40 rounded-2xl p-4 sm:p-6 shadow-2xl shadow-brand-red/20 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10"
              aria-label="Close certificate modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-10">
              <span className="font-mono text-xs text-brand-red tracking-widest uppercase font-semibold">
                Verified Certificate of Completion
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white mt-1">
                {previewCert.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Issued by: <span className="text-white font-medium">{previewCert.issuer}</span> · <span className="text-zinc-400">{previewCert.date}</span>
              </p>
            </div>

            {previewCert.image && (
              <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 p-1 sm:p-2 shadow-inner">
                <img
                  src={previewCert.image}
                  alt={previewCert.title}
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Credential Authenticated</span>
              </span>
              <a
                href={previewCert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-brand-red hover:bg-brand-red-light text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-lg"
              >
                <span>Open Full Certificate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

About.displayName = 'About';
export default About;
