import React from 'react';

interface MarqueeProps {
  text: string;
  reverse?: boolean;
  variant?: 'default' | 'gradient';
  theme?: 'light' | 'dark';
}

const Marquee: React.FC<MarqueeProps> = ({ text, reverse = false, variant = 'default', theme = 'light' }) => {
  // Generate enough items to ensure smooth looping on large screens
  const items = [...Array(8)];
  const isGradient = variant === 'gradient';
  const isDark = theme === 'dark';

  // Determine borders: 
  // Light theme (after Hero) -> No Top Border, Yes Bottom Border
  // Dark theme (between Showcase/About) -> Top and Bottom Borders for separation
  const borderClasses = isDark 
    ? 'border-y border-white/5' 
    : 'border-b border-gray-100'; // Removed border-t for light mode to blend with Hero

  return (
    <div className={`relative w-full overflow-hidden py-16 md:py-24 group select-none ${borderClasses} ${isDark ? 'bg-black' : 'bg-white'}`}>
        
        {/* Gradient Masks for Depth */}
        <div className={`absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r to-transparent z-10 pointer-events-none ${isDark ? 'from-black' : 'from-white'} ${isGradient ? 'w-32 md:w-60' : ''}`}></div>
        <div className={`absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l to-transparent z-10 pointer-events-none ${isDark ? 'from-black' : 'from-white'} ${isGradient ? 'w-32 md:w-60' : ''}`}></div>

        <div className="flex w-max">
            <MarqueeContent 
                items={items} 
                text={text} 
                reverse={reverse} 
                isGradient={isGradient} 
                isDark={isDark} 
            />
            <MarqueeContent 
                items={items} 
                text={text} 
                reverse={reverse} 
                isGradient={isGradient} 
                isDark={isDark} 
            />
        </div>
    </div>
  );
};

// Extracted for cleaner render logic
const MarqueeContent = ({ items, text, reverse, isGradient, isDark }: any) => (
    <div className={`flex items-center gap-16 md:gap-32 pr-16 md:pr-32 shrink-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} group-hover:[animation-play-state:paused] md:group-hover:[animation-play-state:running] md:group-hover:[animation-duration:60s]`}>
        {items.map((_: any, i: number) => (
            <div key={i} className="flex items-center gap-16 md:gap-32">
                <span 
                    className={`
                        font-heading text-[10vw] md:text-[7vw] font-black uppercase tracking-tighter leading-none transition-all duration-500
                        ${i % 2 === 0 
                            ? (isGradient 
                                ? 'gradient-text drop-shadow-sm' 
                                : (isDark ? 'text-white' : 'text-black')
                              )
                            : (isGradient 
                                ? (isDark 
                                    ? 'text-stroke-white text-transparent group-hover:gradient-text group-hover:text-stroke-0 transition-all duration-500'
                                    : 'text-stroke text-transparent group-hover:gradient-text group-hover:text-stroke-0 transition-all duration-500' 
                                  )
                                : (isDark 
                                    ? 'text-stroke-white text-transparent group-hover:text-white group-hover:text-stroke-0'
                                    : 'text-stroke text-transparent group-hover:text-black group-hover:text-stroke-0'
                                  )
                              )
                        }
                    `}
                >
                    {text}
                </span>
                <span className={`text-xl md:text-3xl transition-opacity duration-300 ${isGradient ? 'gradient-text opacity-100' : (isDark ? 'text-primary opacity-50' : 'text-primary opacity-50')}`}>
                    {i % 2 === 0 ? '✦' : '—'}
                </span>
            </div>
        ))}
    </div>
);

export default Marquee;