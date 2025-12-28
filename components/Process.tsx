import React, { useState } from 'react';

const steps = [
  {
    id: 1,
    title: 'Discovery',
    desc: "We dive deep into your brand's DNA, auditing current performance and defining the strategic roadmap for growth.",
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Visual Design',
    desc: "Crafting a bespoke, ultra-luxury visual identity. Every pixel is intentional, every interaction is cinematic.",
    img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Development',
    desc: "Bringing the vision to life with clean, performant Liquid/React code and seamless WebGL animations.",
    img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    title: 'Launch & Scale',
    desc: "A flawless deployment followed by data-driven iteration to ensure your brand continues to dominate.",
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  }
];

const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="process" className="py-32 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Sticky Image */}
          <div className="lg:w-5/12">
            <span className="text-primary text-xs uppercase tracking-widest mb-4 block font-bold">Methodology</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">
              The Process<br /><span className="gradient-text">Of Scale</span>
            </h2>
            
            <div className="hidden lg:block w-full aspect-[4/5] overflow-hidden relative bg-gray-100 border border-gray-200 mt-8 rounded-2xl shadow-xl">
              {steps.map((step) => (
                <img 
                  key={step.id}
                  src={step.img} 
                  className={`absolute inset-0 w-full h-full object-cover grayscale transition-opacity duration-500 ${activeStep === step.id ? 'opacity-100' : 'opacity-0'}`} 
                  alt={step.title} 
                />
              ))}
              <div className="absolute inset-0 gradient-bg opacity-10 mix-blend-overlay"></div>
            </div>
          </div>

          {/* Right: List */}
          <div className="lg:w-7/12 flex flex-col justify-center pl-0 lg:pl-12">
            {steps.map((step) => (
              <div 
                key={step.id}
                className="group py-12 border-t border-gray-200 last:border-b cursor-pointer transition-all hover-trigger"
                onMouseEnter={() => setActiveStep(step.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-baseline gap-8">
                    <span className={`text-sm font-mono transition-colors ${activeStep === step.id ? 'text-primary' : 'text-gray-400'}`}>
                      0{step.id}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-bold transition-all duration-300 ${activeStep === step.id ? 'text-gray-900 translate-x-4' : 'text-gray-400'}`}>
                      {step.title}
                    </h3>
                  </div>
                  <i className={`ri-arrow-right-line text-2xl transition-all duration-300 ${activeStep === step.id ? 'text-primary -rotate-45 opacity-100' : 'text-gray-300 opacity-0'}`}></i>
                </div>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeStep === step.id ? 'max-h-32 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                   <p className="max-w-md ml-14 text-gray-500 leading-relaxed text-sm font-normal">
                     {step.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;