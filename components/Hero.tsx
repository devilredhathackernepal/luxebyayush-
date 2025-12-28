import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen w-full relative bg-white bg-grid-arch flex flex-col justify-between pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 gap-12 md:gap-0">
      
        {/* Top Meta Info - Pinned to Top */}
        <div className="w-full flex justify-between items-start animate-fade-in-up opacity-0 z-20" style={{animationDelay: '0.1s'}}>
             <div className="hidden md:block">
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">Digital Agency</p>
                 <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black mt-1">Est. 2024</p>
             </div>
             <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full bg-white/80 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-black">Available for projects</span>
            </div>
        </div>

        {/* Main Typography - Vertically Centered */}
        <div className="flex-1 flex flex-col justify-center z-10 relative my-8 md:my-0">
            <h1 className="font-heading font-extrabold text-[12vw] leading-[0.85] tracking-tighter text-black uppercase flex flex-col items-start w-full relative z-20">
                {/* Wrapped each word in a padding container to handle the bounce/scale/rotate animation without clipping */}
                <div className="overflow-hidden py-4 -my-4 px-4 -mx-4">
                    <span className="block opacity-0 animate-hero-title origin-bottom-left" style={{animationDelay: '0.2s'}}>Building</span>
                </div>
                <div className="overflow-hidden py-6 -my-6 px-4 -mx-4"> 
                    <span className="inline-block opacity-0 animate-hero-title origin-bottom-left" style={{animationDelay: '0.4s'}}>
                        <span className="gradient-text">7-Figure</span>
                    </span>
                </div>
                <div className="overflow-hidden py-4 -my-4 px-4 -mx-4">
                    <span className="block opacity-0 animate-hero-title origin-bottom-left" style={{animationDelay: '0.6s'}}>Brands</span>
                </div>
            </h1>

             {/* Right Side Visual - Showreel Badge */}
             <div className="absolute right-[5%] top-[40%] -translate-y-1/2 hidden xl:flex flex-col items-center justify-center z-10 group cursor-pointer hover-trigger animate-hero-reveal opacity-0" style={{animationDelay: '1.0s'}}>
                {/* Video Preview / Image Circle */}
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 bg-gray-100">
                    <img 
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                        alt="Showreel"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                    
                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                            <i className="ri-play-fill text-3xl text-white group-hover:text-black ml-1 transition-colors"></i>
                        </div>
                    </div>
                </div>

                {/* Rotating Text Ring */}
                <div className="absolute inset-[-40px] w-[calc(100%+80px)] h-[calc(100%+80px)] animate-[spin_12s_linear_infinite] pointer-events-none">
                     <svg viewBox="0 0 100 100" width="100%" height="100%" className="overflow-visible">
                        <path id="circlePath" d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="none" />
                        <text fontSize="11" fontWeight="bold" letterSpacing="4px" fill="#000" className="uppercase font-heading">
                            <textPath href="#circlePath" startOffset="0%">
                                • Showreel 2025 • Agency Life •
                            </textPath>
                        </text>
                     </svg>
                </div>
            </div>
        </div>
        
        {/* Bottom Info Bar - Pinned to Bottom */}
        <div className="w-full grid md:grid-cols-12 gap-8 items-end animate-fade-in-up opacity-0 z-20" style={{animationDelay: '1.2s'}}>
             <div className="md:col-span-4">
                 <p className="text-black font-sans text-lg md:text-xl font-light leading-relaxed">
                    I engineer digital dominance. A blend of strategic e-commerce design and high-performance development.
                 </p>
             </div>
             
             {/* Spacer */}
             <div className="hidden md:block md:col-span-4"></div>

             <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between h-full">
                <div className="mb-4 md:mb-0 text-left md:text-right">
                     <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">Location</p>
                     <p className="text-sm font-medium">Kathmandu, Nepal — Global</p>
                </div>
                <div className="mt-6">
                     <a href="#showcase" className="group inline-flex items-center gap-4 hover-trigger cursor-pointer">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] hover-line">Scroll to Explore</span>
                        <div className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all duration-300">
                             <i className="ri-arrow-down-line text-lg group-hover:text-white transition-colors"></i>
                        </div>
                     </a>
                </div>
             </div>
        </div>
    </section>
  );
};

export default Hero;