import React from 'react';

const FloatingHello: React.FC = () => {
  return (
    <a href="#contact" className="fixed bottom-8 right-8 z-40 hidden md:flex hover-trigger group">
        <div className="relative">
            <div className="absolute inset-0 bg-primary blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative gradient-bg text-white font-bold font-heading rounded-full px-8 py-4 flex items-center gap-2 transition-transform transform group-hover:scale-105 group-hover:-translate-y-1 shadow-xl">
                <span>Hello</span>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </div>
        </div>
    </a>
  );
};

export default FloatingHello;