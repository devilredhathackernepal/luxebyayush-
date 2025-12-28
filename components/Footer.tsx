import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 relative overflow-hidden pt-20">
      
      {/* Background massive scroll text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
         <div className="flex whitespace-nowrap animate-[marquee_40s_linear_infinite]">
             <span className="text-[20vw] font-bold font-heading text-black uppercase leading-none">About Us About Us About Us</span>
             <span className="text-[20vw] font-bold font-heading text-black uppercase leading-none">About Us About Us About Us</span>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
                <h3 className="text-5xl font-heading font-bold text-gray-900 uppercase mb-8 leading-none">
                    Subscribe Our <br/><span className="text-stroke text-gray-300">Newsletter</span>
                </h3>
                <p className="text-gray-500 mb-8 max-w-md font-normal">Welcome to our digital agency. We specialize in helping business most like yours succeed online.</p>
                
                <div className="flex items-center gap-4 border-b border-gray-300 pb-2 max-w-md">
                    <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-transparent text-gray-900 w-full outline-none uppercase text-sm tracking-widest placeholder-gray-400" />
                    <button className="gradient-bg text-white px-6 py-2 text-xs font-bold uppercase rounded-full hover:shadow-lg transition-shadow">
                        Hello
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h4 className="text-gray-900 font-bold mb-6 uppercase text-sm tracking-widest">Discover</h4>
                    <ul className="space-y-4 text-gray-500 text-sm font-normal">
                        <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Award Winning</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">News & Blog</a></li>
                        <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="text-gray-900 font-bold mb-6 uppercase text-sm tracking-widest">Contact</h4>
                    <ul className="space-y-4 text-gray-500 text-sm font-normal">
                        <li>Suite 170, Iowa, USA</li>
                        <li>(406) 555-0120</li>
                        <li>info@luxebyayush.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-gray-100 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest font-normal">
            <p>&copy; 2025 luxebyayush.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-primary transition-colors hover-trigger"><i className="ri-instagram-line text-lg"></i></a>
                <a href="#" className="hover:text-primary transition-colors hover-trigger"><i className="ri-twitter-x-line text-lg"></i></a>
                <a href="#" className="hover:text-primary transition-colors hover-trigger"><i className="ri-linkedin-fill text-lg"></i></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;