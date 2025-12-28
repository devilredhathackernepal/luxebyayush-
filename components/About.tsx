import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-black text-white overflow-hidden py-32 selection:bg-white selection:text-black">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[150px] opacity-20 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900 rounded-full blur-[150px] opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header - Asymmetrical */}
        <div className="flex flex-col md:flex-row gap-16 mb-24 md:mb-32">
            <div className="md:w-1/2 z-10">
                <div className="overflow-hidden mb-6">
                    <span className="block text-primary text-xs font-bold uppercase tracking-[0.3em] animate-fade-in-up">The Vision</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.85] tracking-tighter">
                    Crafting <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Digital</span> <br/>
                    <span className="italic font-light text-primary">Legacies</span>
                </h2>
            </div>
            <div className="md:w-1/2 flex items-end">
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md ml-auto border-l border-gray-800 pl-8">
                    We exist at the intersection of <span className="text-white font-medium">brute perfectionism</span> and <span className="text-white font-medium">artistic chaos</span>. We don't just build websites; we engineer the digital soul of 7-figure brands.
                </p>
            </div>
        </div>

        {/* The Creative Deconstructed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Stats Column - Interactive Stroke Text */}
            <div className="lg:col-span-3 space-y-12 order-2 lg:order-1">
                <div className="group cursor-default">
                    <h3 className="text-6xl md:text-7xl font-heading font-bold text-transparent transition-all duration-500 group-hover:text-white" style={{ WebkitTextStroke: '1px #374151' }}>
                        50+
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 border-t border-gray-800 pt-3 inline-block group-hover:text-primary transition-colors">
                        Global Brands
                    </p>
                </div>
                <div className="group cursor-default">
                    <h3 className="text-6xl md:text-7xl font-heading font-bold text-transparent transition-all duration-500 group-hover:text-white" style={{ WebkitTextStroke: '1px #374151' }}>
                        $10M
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 border-t border-gray-800 pt-3 inline-block group-hover:text-primary transition-colors">
                        Client Revenue
                    </p>
                </div>
                 <div className="group cursor-default">
                    <h3 className="text-6xl md:text-7xl font-heading font-bold text-transparent transition-all duration-500 group-hover:text-white" style={{ WebkitTextStroke: '1px #374151' }}>
                        4yr
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-2 border-t border-gray-800 pt-3 inline-block group-hover:text-primary transition-colors">
                        Market Dominance
                    </p>
                </div>
            </div>

            {/* Central Image - The Portal Effect */}
            <div className="lg:col-span-5 relative group perspective-[1000px] order-1 lg:order-2">
                <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden transform transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:rotate-1 shadow-2xl shadow-primary/5 border border-gray-800 group-hover:border-primary/30">
                    
                    {/* Image Overlay/Filter */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <img 
                        src="https://i.ibb.co/rGQMmhhB/534674876-18055236935416228-2730097180798377958-n.jpg" 
                        alt="Ayush Agrawal" 
                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                    />
                    
                    {/* Floating Glass Card */}
                    <div className="absolute bottom-6 right-6 bg-black/60 backdrop-blur-xl border border-white/10 p-6 max-w-[220px] z-20 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 rounded-sm">
                         <p className="font-heading font-bold text-white text-lg leading-none mb-1">Ayush Agrawal</p>
                         <p className="text-[10px] uppercase tracking-widest text-primary font-bold">Founder & Creative Lead</p>
                    </div>
                </div>

                {/* Decorative Geometrics */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-primary/50 -z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500 opacity-50"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-white/50 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500 opacity-50"></div>
            </div>

            {/* Text Column - The Philosophy */}
            <div className="lg:col-span-4 pl-0 lg:pl-12 mt-12 lg:mt-0 order-3">
                 <div className="relative mb-8">
                    <i className="ri-double-quotes-l text-7xl text-gray-800 absolute -top-10 -left-6 opacity-50"></i>
                    <p className="text-2xl md:text-3xl font-heading font-bold leading-tight text-white relative z-10">
                        "Elegance is not just about how it looks. It's about how it <span className="gradient-text">feels</span>."
                    </p>
                 </div>
                 
                 <div className="space-y-6 text-gray-400 font-light leading-relaxed text-sm md:text-base">
                    <p>
                        In a world of noise, silence is luxury. We strip away the unnecessary to reveal the essential.
                    </p>
                    <p>
                        From Kathmandu to the global stage, I've dedicated my craft to bridging the gap between raw functionality and cinematic beauty. Your brand deserves a digital home that commands respect.
                    </p>
                 </div>

                 <div className="mt-12">
                    <a href="#contact" className="group inline-flex items-center gap-4 text-white hover:text-primary transition-colors">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] relative pb-1">
                            Read Full Story
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </span>
                        <i className="ri-arrow-right-line transition-transform duration-300 group-hover:translate-x-2"></i>
                    </a>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default About;