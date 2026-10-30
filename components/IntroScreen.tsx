import React, { useState, useEffect } from 'react';
import WebGonexLogo from './Logo';
import Squares from '../src/Component';

interface IntroScreenProps {
  onComplete: () => void;
  reducedMotion?: boolean;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete, reducedMotion = false }) => {
  const [step, setStep] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    // If reduced motion is requested, complete immediately
    if (reducedMotion) {
      onComplete();
      return;
    }

    // Sequence stages:
    // 0ms: Step 1 - Pitch black screen
    // 250ms: Step 2 - Reveal WebGonex Logo
    // 700ms: Step 3 - Thin red light sweep
    // 1100ms: Step 4 - Reveal background squares & tagline "Ideas into Digital Experiences"
    // 1400ms: Step 5 - Loading progress line completes smoothly
    // 2300ms: Step 6 - Fade, blur, and scale transition into main homepage
    // 2800ms: Step 7 - onComplete callback

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setStep(1), 200));
    timers.push(setTimeout(() => setStep(2), 700));
    timers.push(setTimeout(() => setStep(3), 1100));

    // Progress bar animation from 0 to 100% over ~1.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 5, 100);
      });
    }, 60);

    timers.push(
      setTimeout(() => {
        setIsFadingOut(true);
      }, 2350)
    );

    timers.push(
      setTimeout(() => {
        onComplete();
      }, 2850)
    );

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(interval);
    };
  }, [onComplete, reducedMotion]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(onComplete, 200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070709] transition-all duration-700 ease-out select-none ${
        isFadingOut ? 'opacity-0 scale-105 blur-md pointer-events-none' : 'opacity-100 scale-100 blur-0'
      }`}
    >
      {/* Background Animated Squares (revealed at step 3) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          step >= 3 ? 'opacity-35' : 'opacity-0'
        }`}
      >
        <Squares
          speed={0.4}
          squareSize={42}
          direction="diagonal"
          borderColor="rgba(255, 255, 255, 0.07)"
          hoverFillColor="rgba(255, 38, 38, 0.4)"
        />
      </div>

      {/* Atmospheric Central Red Ambient Glow */}
      <div
        className={`absolute w-[450px] h-[450px] rounded-full bg-brand-red/15 blur-[120px] pointer-events-none transition-all duration-1000 ${
          step >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      />

      {/* Thin Red Light Sweep Across the Screen (Triggered at step 2) */}
      {step >= 2 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
          <div className="w-[180%] h-full bg-gradient-to-r from-transparent via-[#FF2626]/40 to-transparent blur-sm animate-sweep" />
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF2626] to-transparent shadow-[0_0_15px_#FF2626]" />
        </div>
      )}

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[10px] sm:text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors border border-white/10 hover:border-brand-red/40 px-3.5 py-2 min-h-[40px] flex items-center rounded-full backdrop-blur-md z-30 active:scale-95"
      >
        Skip Intro &gt;&gt;
      </button>

      {/* Central Content */}
      <div className="relative z-20 flex flex-col items-center px-4 sm:px-6 text-center max-w-[calc(100vw-2rem)] sm:max-w-lg">
        {/* Step 1 & 2: WebGonex Logo */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            step >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
          }`}
        >
          <WebGonexLogo size="xl" variant="stacked" />
        </div>

        {/* Step 3: Tagline "Ideas into Digital Experiences." */}
        <div
          className={`mt-6 transition-all duration-700 ease-out delay-150 transform ${
            step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <p className="font-display text-base xs:text-lg md:text-xl font-medium tracking-wide text-zinc-300">
            Ideas into <span className="text-brand-red font-bold text-glow-subtle">Digital Experiences.</span>
          </p>
          <p className="font-mono text-[11px] xs:text-xs text-zinc-400 tracking-wider uppercase mt-1">
            Independent Creative Freelancer
          </p>
        </div>

        {/* Minimalist Progress Line */}
        <div className="w-48 xs:w-56 max-w-full h-[3px] bg-zinc-800/80 rounded-full overflow-hidden mt-8 relative border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-brand-red to-orange-500 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_#FF2626]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Circled Counter (Absans style) */}
        <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-zinc-400 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
          <span>INITIALIZING {progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;
