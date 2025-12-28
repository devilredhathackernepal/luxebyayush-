import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-heading text-5xl md:text-8xl font-bold mb-8 text-gray-900 uppercase leading-[0.9]">
          Let's Talk <br/><span className="text-stroke text-gray-300">Business</span>
        </h2>
        <p className="text-gray-500 mb-16 text-lg max-w-xl mx-auto font-normal">Ready to elevate your brand? Send me a message and let's start the conversation about your next big move.</p>
        
        <form 
          action="https://formspree.io/f/mnnbkjgz" 
          method="POST" 
          className="space-y-6 text-left max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input 
                type="text" 
                name="name" 
                placeholder="NAME" 
                required
                className="w-full bg-white border border-gray-200 text-gray-900 p-6 text-sm focus:border-primary outline-none transition-all placeholder-gray-400 uppercase tracking-wider rounded-lg shadow-sm"
            />
            <input 
                type="email" 
                name="email" 
                placeholder="EMAIL" 
                required
                className="w-full bg-white border border-gray-200 text-gray-900 p-6 text-sm focus:border-primary outline-none transition-all placeholder-gray-400 uppercase tracking-wider rounded-lg shadow-sm"
            />
          </div>
          <textarea 
            name="message" 
            rows={5} 
            placeholder="TELL ME ABOUT YOUR VISION..." 
            required
            className="w-full bg-white border border-gray-200 text-gray-900 p-6 text-sm focus:border-primary outline-none transition-all placeholder-gray-400 uppercase tracking-wider rounded-lg shadow-sm"
          />
          <button 
            type="submit" 
            className="w-full gradient-bg text-white font-bold py-6 text-sm uppercase tracking-[0.2em] hover:shadow-xl transition-all hover:scale-[1.01] hover-trigger rounded-lg"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;