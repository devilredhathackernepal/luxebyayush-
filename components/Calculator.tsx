import React, { useState } from 'react';
import { Addon, Package, CustomerDetails } from '../types';

const PACKAGES: Package[] = [
    { id: 'premium', name: 'Premium', price: 3500, description: 'Essential Upgrade', features: [] },
    { id: 'ultra', name: 'Ultra', price: 6500, description: 'Flagship Experience', features: [] }
];

const ADDONS: Addon[] = [
    { id: 'seo', name: 'Advanced SEO', price: 500 },
    { id: 'logo', name: 'Logo & Branding', price: 1200 },
    { id: 'copy', name: 'Pro Copywriting', price: 800 },
    { id: 'ai', name: 'AI Chatbot', price: 950 }
];

const Calculator: React.FC = () => {
    const [customer, setCustomer] = useState<CustomerDetails>({ name: '', countryCode: '+977', phone: '' });
    const [selectedPkgId, setSelectedPkgId] = useState<string>('premium');
    const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);
    const [showInvoice, setShowInvoice] = useState(false);

    const toggleAddon = (id: string) => {
        setSelectedAddonIds(prev => 
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

    const selectedPkg = PACKAGES.find(p => p.id === selectedPkgId) || PACKAGES[0];
    const activeAddons = ADDONS.filter(a => selectedAddonIds.includes(a.id));
    const total = selectedPkg.price + activeAddons.reduce((sum, a) => sum + a.price, 0);

    const generateInvoice = () => {
        setShowInvoice(true);
        setTimeout(() => {
            document.getElementById('invoice-container')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <section id="calculator" className="py-32 bg-white relative border-t border-gray-100">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-3xl mb-24">
                    <h2 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-black uppercase tracking-tight">
                        Project <span className="text-stroke">Est.</span>
                    </h2>
                    <p className="text-gray-500 font-light text-lg">Select your preferences to generate a preliminary investment estimate.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-16">
                    {/* Controls */}
                    <div className="lg:col-span-7 space-y-16">
                        {/* Step 1 */}
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] block mb-8">01 — Details</span>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="border-b border-gray-200 focus-within:border-black transition-colors">
                                    <label className="text-[10px] uppercase font-bold text-gray-400">Full Name</label>
                                    <input 
                                        type="text" 
                                        className="w-full bg-transparent py-4 text-black text-lg outline-none font-medium"
                                        value={customer.name}
                                        onChange={(e) => setCustomer({...customer, name: e.target.value})}
                                    />
                                </div>
                                <div className="flex gap-4 border-b border-gray-200 focus-within:border-black transition-colors">
                                    <div className="w-24">
                                        <label className="text-[10px] uppercase font-bold text-gray-400">Code</label>
                                        <select 
                                            className="w-full bg-transparent py-4 text-black text-lg outline-none font-medium appearance-none"
                                            value={customer.countryCode}
                                            onChange={(e) => setCustomer({...customer, countryCode: e.target.value})}
                                        >
                                            <option value="+1">+1</option>
                                            <option value="+44">+44</option>
                                            <option value="+977">+977</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-[10px] uppercase font-bold text-gray-400">Phone</label>
                                        <input 
                                            type="tel" 
                                            className="w-full bg-transparent py-4 text-black text-lg outline-none font-medium"
                                            value={customer.phone}
                                            onChange={(e) => setCustomer({...customer, phone: e.target.value})}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] block mb-8">02 — Package</span>
                            <div className="flex flex-col md:flex-row gap-6">
                                {PACKAGES.map(pkg => (
                                    <div key={pkg.id} className="flex-1">
                                        <input 
                                            type="radio" 
                                            name="pkg" 
                                            id={`pkg-${pkg.id}`} 
                                            checked={selectedPkgId === pkg.id}
                                            onChange={() => setSelectedPkgId(pkg.id)}
                                            className="hidden peer"
                                        />
                                        <label 
                                            htmlFor={`pkg-${pkg.id}`} 
                                            className="block p-8 border border-gray-200 cursor-pointer transition-all peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-gray-400 h-full"
                                        >
                                            <span className="block text-2xl font-heading font-bold uppercase mb-2">{pkg.name}</span>
                                            <span className="text-sm font-mono opacity-60">${pkg.price.toLocaleString()}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div>
                            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] block mb-8">03 — Add-ons</span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {ADDONS.map(addon => (
                                    <label 
                                        key={addon.id} 
                                        className="flex items-center justify-between p-6 border border-gray-200 cursor-pointer transition-all hover:border-black group"
                                    >
                                        <span className="font-medium group-hover:text-primary transition-colors">{addon.name}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs text-gray-400 font-mono">${addon.price}</span>
                                            <div className={`w-4 h-4 border border-gray-300 flex items-center justify-center ${selectedAddonIds.includes(addon.id) ? 'bg-black border-black' : ''}`}>
                                                {selectedAddonIds.includes(addon.id) && <i className="ri-check-line text-white text-[10px]"></i>}
                                            </div>
                                        </div>
                                        <input 
                                            type="checkbox" 
                                            className="hidden"
                                            checked={selectedAddonIds.includes(addon.id)}
                                            onChange={() => toggleAddon(addon.id)}
                                        />
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Summary Sticky */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32 bg-off-white p-12 border border-gray-100">
                             <div className="mb-8">
                                <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">Total Estimate</span>
                                <p className="text-6xl font-heading font-bold text-black mt-4 tracking-tighter gradient-text">${total.toLocaleString()}</p>
                             </div>
                             
                             <div className="space-y-4 mb-12 border-t border-gray-200 pt-8">
                                <div className="flex justify-between text-sm">
                                    <span className="font-bold">{selectedPkg.name}</span>
                                    <span>${selectedPkg.price.toLocaleString()}</span>
                                </div>
                                {activeAddons.map(addon => (
                                    <div key={addon.id} className="flex justify-between text-sm text-gray-500">
                                        <span>+ {addon.name}</span>
                                        <span>${addon.price}</span>
                                    </div>
                                ))}
                             </div>

                             <button 
                                onClick={generateInvoice}
                                className="w-full bg-black text-white py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary transition-colors"
                            >
                                Generate Estimate
                            </button>
                        </div>
                    </div>
                </div>

                {/* Invoice Display */}
                {showInvoice && (
                    <div id="invoice-container" className="animate-fade-in-up mt-24">
                        <div className="max-w-4xl mx-auto bg-white p-16 md:p-24 border border-gray-200 shadow-2xl relative">
                            {/* Decorative Grid on Invoice */}
                            <div className="absolute inset-0 bg-grid-arch opacity-50 pointer-events-none"></div>
                            
                            <div className="relative z-10">
                                <div className="flex justify-between items-end border-b-2 border-black pb-8 mb-16">
                                    <h1 className="font-heading font-bold text-4xl uppercase tracking-tighter">Luxe<span className="text-gray-300">.</span></h1>
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] bg-black text-white px-2 py-1">Estimate</span>
                                </div>

                                <div className="grid grid-cols-2 gap-12 mb-16">
                                    <div>
                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Prepared For</p>
                                        <p className="font-bold text-xl">{customer.name || 'Client'}</p>
                                        <p className="text-sm text-gray-500 mt-1">{customer.phone}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] uppercase font-bold text-gray-400 mb-2">Issue Date</p>
                                        <p className="font-medium">{new Date().toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <table className="w-full mb-16">
                                    <thead>
                                        <tr className="border-b border-gray-200 text-left">
                                            <th className="pb-4 text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em]">Item</th>
                                            <th className="pb-4 text-[10px] uppercase font-bold text-gray-400 tracking-[0.2em] text-right">Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        <tr className="border-b border-gray-100">
                                            <td className="py-6">{selectedPkg.name} Package</td>
                                            <td className="py-6 text-right">${selectedPkg.price.toLocaleString()}</td>
                                        </tr>
                                        {activeAddons.map(addon => (
                                            <tr key={addon.id} className="border-b border-gray-100">
                                                <td className="py-6 text-gray-600">+ {addon.name}</td>
                                                <td className="py-6 text-right text-gray-600">${addon.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="flex justify-between items-center pt-8 border-t-2 border-black">
                                    <p className="text-xs uppercase font-bold tracking-[0.2em]">Total</p>
                                    <p className="text-5xl font-heading font-bold gradient-text tracking-tighter">${total.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Calculator;