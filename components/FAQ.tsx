import React, { useState } from 'react';

const FAQs = [
    { 
        q: "What is the typical timeline?", 
        a: "A Premium Experience project typically takes 4-6 weeks. Ultra-Premium projects involving 3D WebGL can take 8-12 weeks depending on complexity." 
    },
    { 
        q: "Do you support Headless Commerce?", 
        a: "Yes, I specialize in both standard Shopify Liquid themes and Headless setups using Hydrogen or Next.js for maximum performance and design freedom." 
    },
    {
        q: "Do you provide post-launch support?",
        a: "Absolutely. We offer tailored maintenance packages to ensure your digital flagship remains performant, secure, and up-to-date."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="font-heading text-4xl font-bold text-center mb-16 text-gray-900 uppercase">
                    Common <span className="text-stroke text-gray-300">Questions</span>
                </h2>
                <div className="space-y-4">
                    {FAQs.map((faq, i) => (
                        <div key={i} className="border-b border-gray-200 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex justify-between items-center py-8 text-left group hover-trigger"
                            >
                                <span className="font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">{faq.q}</span>
                                <i className={`ri-arrow-down-line text-2xl transition-all duration-300 ${openIndex === i ? 'rotate-180 text-primary' : 'text-gray-400'}`}></i>
                            </button>
                            <div className={`transition-all duration-500 overflow-hidden ${openIndex === i ? 'max-h-40 pb-8' : 'max-h-0'}`}>
                                <p className="text-gray-600 text-base leading-relaxed font-normal">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;