import React from 'react';

const Packages: React.FC = () => {
  return (
    <section id="packages" className="py-32 bg-white relative border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Investment</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-black uppercase tracking-tight leading-none">
              Bespoke <br/><span className="text-stroke">Tiers</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8 flex items-end">
             <p className="text-sm text-gray-500 font-light leading-relaxed">
                Transparent pricing for brands ready to scale. No hidden fees, just pure value and exceptional delivery.
             </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          {/* Premium */}
          <div className="bg-white p-12 md:p-16 hover:bg-gray-50 transition-colors duration-500 group relative">
            <div className="mb-12">
                <h3 className="font-heading text-3xl font-bold mb-2 text-black uppercase">Premium</h3>
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">The Essentials</p>
            </div>
            
            <div className="mb-12">
                <p className="text-6xl font-bold gradient-text tracking-tight mb-2">$3,500</p>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Starting Price</span>
            </div>
            
            <ul className="space-y-6 mb-16">
              {['Custom Shopify Theme', 'Advanced UI/UX', 'Core Pages (5-7)', 'Mobile-First Responsive'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-gray-800 font-medium">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full group-hover:bg-primary transition-colors"></span>
                      {item}
                  </li>
              ))}
            </ul>
            
            <a href="#calculator" className="inline-block border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-colors">
              Select Package
            </a>
          </div>

          {/* Ultra */}
          <div className="bg-white p-12 md:p-16 hover:bg-gray-50 transition-colors duration-500 group relative">
             <div className="absolute top-0 right-0 p-6">
                 <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em]">Popular</span>
             </div>

            <div className="mb-12">
                <h3 className="font-heading text-3xl font-bold mb-2 text-black uppercase">Ultra</h3>
                <p className="text-xs text-gray-400 uppercase tracking-[0.2em]">Flagship Experience</p>
            </div>

            <div className="mb-12">
                <p className="text-6xl font-bold gradient-text tracking-tight mb-2">$6,500</p>
                <span className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">Starting Price</span>
            </div>
            
            <ul className="space-y-6 mb-16">
                {['All Premium Features', '3D WebGL Scenes', 'Cinematic Transitions', 'Priority Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-black font-bold">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {item}
                  </li>
              ))}
            </ul>
            
            <a href="#calculator" className="inline-block border-b border-black pb-1 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary hover:border-primary transition-colors">
                Select Package
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;