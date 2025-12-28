import React, { useLayoutEffect, useRef, useState } from 'react';

// Access GSAP
const gsap = (window as any).gsap;
const ScrollTrigger = (window as any).ScrollTrigger;

const projects = [
  {
    id: '01',
    title: 'Aura Collective',
    category: 'Branding / Strategy',
    year: '2024',
    location: 'Paris, France',
    image: 'https://i.ibb.co/whjNzFTL/laptop-6.jpg',
    color: '#fc5c7d'
  },
  {
    id: '02',
    title: 'Nomad Watch Co.',
    category: 'E-Commerce / 3D',
    year: '2023',
    location: 'Tokyo, Japan',
    image: 'https://i.ibb.co/DHtkzZfd/laptop-5.jpg',
    color: '#6a82fb'
  },
  {
    id: '03',
    title: 'ŌUD Fragrance',
    category: 'Art Direction',
    year: '2024',
    location: 'Dubai, UAE',
    image: 'https://i.ibb.co/tfb0FY7/laptop-4.jpg',
    color: '#f77737'
  },
  {
    id: '04',
    title: 'Velvet Interiors',
    category: 'Architecture',
    year: '2023',
    location: 'Milan, Italy',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    color: '#00ffc3'
  },
  {
    id: '05',
    title: 'Carbon Finance',
    category: 'Fintech / WebGL',
    year: '2024',
    location: 'New York, USA',
    image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1600',
    color: '#8a2be2'
  }
];

const Showcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(1);

  useLayoutEffect(() => {
    if (!gsap || !ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray('.project-card');
    
    // Progress Bar Logic
    ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self: any) => {
            const index = Math.min(
                Math.ceil(self.progress * projects.length), 
                projects.length
            );
            setActiveProject(Math.max(1, index));
        }
    });

    cards.forEach((card: any, index: number) => {
      const inner = card.querySelector('.card-inner');
      const img = card.querySelector('.project-img');
      const overlay = card.querySelector('.card-overlay');
      const textContent = card.querySelectorAll('.parallax-item');

      // 1. Stacking & Dimming Animation
      // We animate the CURRENT card when the NEXT card enters the viewport.
      if (index !== cards.length - 1) {
        const nextCard = cards[index + 1];
        
        gsap.to(inner, {
            scale: 0.98, // Very subtle scale to keep image visible
            y: 0,        // Removed upward movement to keep it centered
            ease: "none",
            scrollTrigger: {
                trigger: nextCard,
                start: "top bottom", 
                end: "top top",      
                scrub: true,
            }
        });

        // Reduced opacity significantly so the image is not hidden
        gsap.to(overlay, {
            opacity: 0.25, // Only 25% dark, keeping image very visible
            ease: "none",
            scrollTrigger: {
                trigger: nextCard,
                start: "top bottom",
                end: "top top",
                scrub: true,
            }
        });
      }

      // 2. Cinematic Image Parallax 
      gsap.fromTo(img, 
        { scale: 1.0, yPercent: -5 }, // Reduced movement range
        { 
            scale: 1.1,
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        }
      );

      // 3. Text Parallax
      textContent.forEach((item: any, i: number) => {
          gsap.fromTo(item,
            { y: 30 + (i * 10), opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 65%", 
                }
            }
          );
      });
    });

    return () => {
        ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="showcase" className="bg-black relative pt-32 pb-32">
        
        {/* Intro Header */}
        <div className="container mx-auto px-6 md:px-12 mb-24 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block animate-fade-in-up">Portfolio</span>
                    <h2 className="font-heading font-black text-5xl md:text-7xl text-white uppercase tracking-tighter leading-none">
                        Selected <br/> <span className="text-stroke-white text-transparent">Masterpieces</span>
                    </h2>
                </div>
                <div className="hidden md:block text-right">
                    <p className="text-gray-400 text-sm font-mono max-w-xs ml-auto mb-4">
                        A curated selection of digital experiences engineered for impact.
                    </p>
                    <div className="flex items-center justify-end gap-2 text-xs font-bold uppercase tracking-widest text-white">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        Scroll to Explore
                    </div>
                </div>
            </div>
        </div>

        {/* Floating Progress Indicator */}
        <div className="fixed left-6 md:left-12 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4 mix-blend-difference pointer-events-none">
            <span className="text-white font-heading font-bold text-sm">0{activeProject}</span>
            <div className="w-px h-24 bg-white/20 relative overflow-hidden">
                <div 
                    className="absolute top-0 left-0 w-full bg-white transition-all duration-300"
                    style={{ height: `${(activeProject / projects.length) * 100}%` }}
                ></div>
            </div>
            <span className="text-white/40 font-heading text-xs">0{projects.length}</span>
        </div>

        {/* Cards Container */}
        <div className="px-4 md:px-12 relative">
            {projects.map((project, index) => (
                <div 
                    key={project.id} 
                    className="project-card sticky top-0 h-screen w-full flex items-center justify-center py-6 md:py-8 lg:py-12 perspective-[1000px]"
                    style={{ zIndex: index + 1 }}
                >
                    {/* Inner Card Wrapper */}
                    <div className="card-inner relative w-full h-full bg-gray-900 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 transform-gpu will-change-transform">
                        
                        {/* 1. Background Image Layer */}
                        <div className="absolute inset-0 overflow-hidden bg-black">
                             <img 
                                src={project.image} 
                                alt={project.title} 
                                className="project-img w-full h-full object-cover" 
                            />
                            {/* Static Gradients - Lightened to reveal more image */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
                            
                            {/* Dynamic Overlay for Stacking (Opacity reduced in JS) */}
                            <div className="card-overlay absolute inset-0 bg-black opacity-0 transition-none pointer-events-none z-10"></div>
                        </div>

                        {/* 2. Content Layer */}
                        <div className="absolute inset-0 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-20 pointer-events-none">
                            
                            {/* Top Row */}
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-4 parallax-item">
                                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/5">
                                        <span className="font-mono text-white text-sm">{project.id}</span>
                                    </div>
                                    <div className="hidden md:block">
                                        <p className="text-xs text-gray-400 uppercase tracking-widest">Year</p>
                                        <p className="text-white font-bold text-sm">{project.year}</p>
                                    </div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 parallax-item">
                                    <span className="text-xs font-bold text-white uppercase tracking-widest">{project.location}</span>
                                </div>
                            </div>

                            {/* Center Action (Interactive Button) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                                <a href="#contact" className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center cursor-pointer hover-trigger">
                                    {/* Rotating Ring */}
                                    <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/50 transition-colors duration-500"></div>
                                    <div className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                         <svg viewBox="0 0 100 100" width="100%" height="100%" className="overflow-visible">
                                            <path id={`circlePath-${index}`} d="M 50, 50 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" fill="none" />
                                            <text fontSize="14" fontWeight="bold" letterSpacing="2px" fill="#fff" className="uppercase font-heading">
                                                <textPath href={`#circlePath-${index}`} startOffset="0%">
                                                    View Case Study • View Case Study •
                                                </textPath>
                                            </text>
                                         </svg>
                                    </div>
                                    
                                    {/* Center Button */}
                                    <div className="relative w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-[2.5] group-hover:bg-white">
                                        <i className="ri-arrow-right-line text-2xl text-white group-hover:text-black group-hover:scale-50 transition-all duration-300"></i>
                                    </div>
                                </a>
                            </div>

                            {/* Bottom Row */}
                            <div className="flex flex-col md:flex-row items-end justify-between gap-8">
                                <div className="parallax-item">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span 
                                            className="w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
                                            style={{ backgroundColor: project.color, color: project.color }}
                                        ></span>
                                        <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">{project.category}</span>
                                    </div>
                                    <h3 className="font-heading font-black text-5xl md:text-8xl text-white uppercase tracking-tighter leading-[0.85] drop-shadow-2xl">
                                        {project.title}
                                    </h3>
                                </div>

                                <div className="hidden md:flex items-center gap-4 group/btn cursor-pointer pointer-events-auto parallax-item">
                                    <span className="text-xs font-bold text-white uppercase tracking-[0.2em] group-hover/btn:text-primary transition-colors">Details</span>
                                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:border-white transition-all">
                                        <i className="ri-arrow-right-up-line text-white group-hover/btn:text-black transition-colors"></i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        {/* Outro Text */}
        <div className="text-center py-24 relative z-10">
             <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Want to see more?</p>
             <a href="#contact" className="inline-block font-heading font-bold text-4xl text-white hover:text-primary transition-colors uppercase tracking-tight hover-trigger">
                 View Full Archive
             </a>
        </div>
    </section>
  );
};

export default Showcase;