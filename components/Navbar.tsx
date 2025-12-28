import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#showcase' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#packages' },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-4' : 'bg-transparent py-6 md:py-8'}`}>
        {/* Full width container to match Hero */}
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-heading text-lg font-bold uppercase tracking-tighter text-black hover:text-primary transition-colors z-50">
            luxe<span className="text-gray-300">.</span>
          </a>

          <div className="hidden md:flex gap-12 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-black hover-line transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 z-50">
            <a 
              href="#contact" 
              className="hidden md:block text-[10px] font-bold uppercase tracking-[0.2em] text-black border border-gray-300 px-6 py-3 hover:bg-black hover:text-white hover:border-black transition-all duration-300"
            >
              Start Project
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-2xl text-black"
            >
              <i className={isOpen ? "ri-close-line" : "ri-menu-4-line"}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center md:hidden transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-5xl font-heading font-bold text-black hover:text-primary transition-colors uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-5xl font-heading font-bold gradient-text mt-8 uppercase tracking-tighter"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;