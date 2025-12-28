import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Showcase from './components/Showcase';
import Process from './components/Process';
import Packages from './components/Packages';
import Calculator from './components/Calculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[10000] bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-5xl text-black tracking-tighter mb-4 animate-pulse uppercase">luxebyayush<span className="text-primary">.</span></h1>
          <div className="w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full gradient-bg origin-left animate-[load_1s_ease-in-out]"></div>
          </div>
          <style>{`
            @keyframes load {
                0% { transform: scaleX(0); }
                100% { transform: scaleX(1); }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900 selection:bg-primary selection:text-white">
      <CustomCursor />
      <ChatWidget />
      <Navbar />
      <main>
        <Hero />
        {/* Default Light/Black Marquee for transition from Hero */}
        <Marquee text="Digital Portfolio" variant="default" theme="light" />
        <Showcase />
        {/* Dark Marquee for seamless transition to About */}
        <Marquee text="Creative Agency" reverse={true} variant="gradient" theme="dark" />
        <About />
        <Process />
        <Packages />
        <Calculator />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;