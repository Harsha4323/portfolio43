import React, { useState, useEffect } from 'react';
import WebGonexLogo from './Logo';
import { Menu, X, ArrowUpRight, Zap, RefreshCw } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onLinkClick: (id: string) => void;
  onReplayIntro?: () => void;
  reducedMotion?: boolean;
  onToggleReducedMotion?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onLinkClick,
  onReplayIntro,
  reducedMotion = false,
  onToggleReducedMotion,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onLinkClick(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <WebGonexLogo
          size="sm"
          onClick={() => onLinkClick('home')}
          className="cursor-pointer"
        />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#101016]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-brand-red/20 border border-brand-red/50 rounded-full shadow-[0_0_12px_rgba(255,38,38,0.4)] -z-10" />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Contact CTA */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Replay Intro button */}
          {onReplayIntro && (
            <button
              onClick={onReplayIntro}
              title="Replay Cinematic Intro"
              className="p-2 text-zinc-400 hover:text-brand-red hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-white/10 text-xs flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Reduced Motion Toggle */}
          {onToggleReducedMotion && (
            <button
              onClick={onToggleReducedMotion}
              title={reducedMotion ? 'Enable Full Motion' : 'Reduce Motion'}
              className={`p-2 rounded-full border transition-all text-xs flex items-center gap-1 ${
                reducedMotion
                  ? 'text-yellow-400 border-yellow-400/40 bg-yellow-400/10'
                  : 'text-zinc-400 hover:text-white border-white/10 hover:bg-white/5'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Primary CTA — WhatsApp Let's Talk */}
          <a
            href="https://wa.me/918277279985"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-red-light text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(255,38,38,0.4)] hover:shadow-[0_0_30px_rgba(255,38,38,0.7)] hover:scale-[1.02]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white focus:outline-none focus:ring-1 focus:ring-brand-red active:scale-95 transition-all"
            aria-label="Toggle mobile navigation menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-brand-red" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 w-full bg-[#0A0A0F]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 shadow-2xl ${
          isMenuOpen
            ? 'max-h-[calc(100dvh-4rem)] py-6 opacity-100 overflow-y-auto'
            : 'max-h-0 py-0 opacity-0 overflow-hidden pointer-events-none'
        }`}
      >
        <div className="px-5 sm:px-6 flex flex-col gap-2.5 sm:gap-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-colors flex items-center justify-between min-h-[40px] ${
                  isActive
                    ? 'bg-brand-red/15 text-white border-l-4 border-brand-red font-semibold'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-red flex-shrink-0" />}
              </a>
            );
          })}

          <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                onLinkClick('contact');
                setIsMenuOpen(false);
              }}
              className="w-full min-h-[44px] py-3 rounded-lg bg-brand-red hover:bg-brand-red-light text-white text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,38,38,0.5)] active:scale-[0.98] transition-all"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 px-1">
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-brand-red" />
                  <span>Replay Intro</span>
                </button>
              )}
              {onToggleReducedMotion && (
                <button
                  onClick={onToggleReducedMotion}
                  className="flex items-center gap-1.5 hover:text-white"
                >
                  <Zap className={`w-3.5 h-3.5 ${reducedMotion ? 'text-yellow-400' : 'text-zinc-400'}`} />
                  <span>{reducedMotion ? 'Motion: Off' : 'Motion: On'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
