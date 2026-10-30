import React from 'react';
import WebGonexLogo from './Logo';
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  onLinkClick?: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'projects', label: 'Featured Projects' },
    { id: 'process', label: 'Work Process' },
    { id: 'contact', label: 'Collaboration' },
  ];

  const servicesLinks = [
    'Website Design & Development',
    'Frontend Engineering',
    'UI/UX Interface Prototyping',
    'Netlify Hosting & Deployment',
    'Video Editing',
    'AWS Cloud Fundamentals',
  ];

  return (
    <footer className="relative bg-[#050507] border-t border-white/10 pt-20 pb-12 overflow-hidden select-none">
      {/* Red ambient bottom light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Origami corner accent bottom right */}
      <div className="origami-corner-br hidden sm:block opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand & Freelancer Info */}
          <div className="col-span-2 lg:col-span-5 flex flex-col justify-between min-w-0">
            <div>
              <WebGonexLogo size="md" />
              <p className="mt-6 text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                Independent freelancer and creative developer crafting high-performance, responsive websites and digital experiences that help businesses establish their presence with authority.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 space-y-2 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                <span className="truncate">Bengaluru, Karnataka, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                <a href="mailto:webgonex43@gmail.com" className="hover:text-white transition-colors truncate">
                  webgonex43@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-red flex-shrink-0" />
                <a href="tel:+918277279985" className="hover:text-white transition-colors">
                  +91 8277279985
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-span-1 lg:col-span-3 min-w-0">
            <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
              <span className="truncate">Navigation</span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (onLinkClick) onLinkClick(link.id);
                      else {
                        const el = document.getElementById(link.id);
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-brand-red transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-brand-red transition-colors flex-shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1 lg:col-span-4 min-w-0">
            <h4 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />
              <span className="truncate">Services</span>
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-[11px] sm:text-xs text-zinc-400">
              {servicesLinks.map((s, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
                  <span className="hover:text-zinc-200 transition-colors leading-tight">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="text-[10px] sm:text-xs font-mono text-brand-red uppercase truncate">Professional Connect</div>
              <div>
                <a
                  href="https://www.linkedin.com/in/harsha-t11/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 hover:text-white font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span className="truncate">LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-red flex-shrink-0" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Harsha4323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 hover:text-white font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="truncate">GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-red flex-shrink-0" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/webgonex_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-300 hover:text-white font-medium transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span className="truncate">Instagram (webgonex_)</span>
                  <ArrowUpRight className="w-3 h-3 text-brand-red flex-shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300 font-semibold">WebGonex</strong> · Harsha T. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-zinc-600 hidden md:inline">Ideas into Digital Experiences.</span>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-brand-red hover:text-white border border-white/10 transition-all duration-300 text-zinc-300"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
