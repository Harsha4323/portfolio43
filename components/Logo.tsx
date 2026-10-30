import React, { useState } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'horizontal' | 'stacked';
  className?: string;
  onClick?: () => void;
}

export const WebGonexLogo: React.FC<LogoProps> = ({
  size = 'md',
  variant = 'horizontal',
  className = '',
  onClick,
}) => {
  const [imgError, setImgError] = useState(false);

  // Dimension presets to ensure zero stretching and crisp aspect ratios
  const sizeConfig = {
    sm: {
      emblemHeight: 'h-8 sm:h-9',
      emblemWidth: 'w-auto',
      textSize: 'text-xl sm:text-2xl',
      gap: 'gap-2.5',
    },
    md: {
      emblemHeight: 'h-10 sm:h-11',
      emblemWidth: 'w-auto',
      textSize: 'text-2xl sm:text-3xl',
      gap: 'gap-3',
    },
    lg: {
      emblemHeight: 'h-14 sm:h-16',
      emblemWidth: 'w-auto',
      textSize: 'text-3xl sm:text-4xl',
      gap: 'gap-3.5',
    },
    xl: {
      emblemHeight: 'h-20 sm:h-24',
      emblemWidth: 'w-auto',
      textSize: 'text-4xl sm:text-5xl',
      gap: 'gap-4',
    },
  };

  const current = sizeConfig[size];

  if (variant === 'stacked') {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
      >
        {/* Emblem from uploaded brand asset */}
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 bg-brand-red/25 rounded-full blur-xl pointer-events-none" />
          {!imgError ? (
            <img
              src="./webgonex-emblem.png"
              alt="WebGonex Emblem"
              className={`${current.emblemHeight} ${current.emblemWidth} object-contain relative z-10 transition-transform duration-300 hover:scale-105`}
              onError={() => setImgError(true)}
            />
          ) : (
            /* Clean fallback if asset fails */
            <div className="w-16 h-16 border-2 border-brand-red rounded-xl rotate-45 flex items-center justify-center">
              <span className="font-display font-black text-brand-red -rotate-45 text-2xl">W</span>
            </div>
          )}
        </div>

        {/* Brand Name Text: Web in pure white, Gonex in vibrant red */}
        <div className={`mt-3 flex items-baseline font-display font-extrabold tracking-tight ${current.textSize}`}>
          <span className="text-white">Web</span>
          <span className="text-brand-red">Gonex</span>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center ${current.gap} select-none ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Emblem from uploaded brand asset */}
      <div className="relative flex items-center justify-center flex-shrink-0">
        <div className="absolute inset-0 bg-brand-red/20 rounded-full blur-md pointer-events-none" />
        {!imgError ? (
          <img
            src="./webgonex-emblem.png"
            alt="WebGonex Emblem"
            className={`${current.emblemHeight} ${current.emblemWidth} object-contain relative z-10 transition-transform duration-300 hover:scale-105`}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-9 h-9 border-2 border-brand-red rounded-lg rotate-45 flex items-center justify-center">
            <span className="font-display font-black text-brand-red -rotate-45 text-base">W</span>
          </div>
        )}
      </div>

      {/* Brand Name Text: Web in pure white, Gonex in vibrant red */}
      <div className={`flex items-baseline font-display font-extrabold tracking-tight ${current.textSize}`}>
        <span className="text-white">Web</span>
        <span className="text-brand-red">Gonex</span>
      </div>
    </div>
  );
};

export default WebGonexLogo;
