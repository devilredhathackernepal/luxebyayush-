import React, { useState, useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to luxebyayush. I am your personal digital concierge. How may I assist you in building your empire today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, isOpen]);

  // Show hint after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
        setShowHint(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMsg: Message = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate sophisticated bot response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "A compelling vision. We specialize in translating such concepts into high-fidelity digital experiences.",
        "That aligns perfectly with our Ultra-Premium tier. It offers the cinematic depth your brand requires.",
        "Exquisite choice. Our design philosophy is rooted in exactly that kind of minimal luxury.",
        "I'd be delighted to arrange a private consultation to explore this further. Shall we proceed?"
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { id: Date.now() + 1, text: randomResponse, sender: 'bot' }]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end font-sans">
      
      {/* Interaction Hint (Arrow pointing to launcher) */}
      {!isOpen && (
        <div 
            className={`absolute bottom-8 right-20 flex items-center gap-3 transition-all duration-1000 ease-out pointer-events-none ${showHint ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
        >
             <div className="bg-white/90 backdrop-blur border border-white/50 px-4 py-2.5 rounded-xl shadow-xl shadow-black/5 transform -rotate-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-black whitespace-nowrap flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Ask Concierge
                </p>
             </div>
             {/* Hand-drawn style arrow */}
             <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="text-black transform translate-y-4 -translate-x-1">
                <path d="M5 10 C 20 10, 30 25, 40 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M30 38 L 40 40 L 42 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
        </div>
      )}

      {/* Chat Window Container */}
      <div 
        className={`
          mb-6 w-[350px] md:w-[420px] bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] overflow-hidden border border-white/50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-bottom-right
          ${isOpen ? 'opacity-100 scale-100 translate-y-0 translate-x-0' : 'opacity-0 scale-90 translate-y-10 translate-x-10 pointer-events-none h-0'}
        `}
      >
        {/* Header with Gradient */}
        <div className="relative p-6 pb-8 overflow-hidden">
            <div className="absolute inset-0 gradient-bg opacity-10"></div>
            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <div className="flex items-center gap-3 mb-1">
                        <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center text-white shadow-lg">
                            <i className="ri-openai-fill text-lg"></i>
                        </div>
                        <h3 className="font-heading font-bold text-lg text-gray-900">Concierge AI</h3>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 pl-11 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        Active Now
                    </p>
                </div>
                <button 
                    onClick={() => setIsOpen(false)} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 text-gray-500 transition-colors"
                >
                    <i className="ri-close-line text-xl"></i>
                </button>
            </div>
        </div>

        {/* Messages Area */}
        <div className="h-[400px] overflow-y-auto p-6 pt-0 space-y-6 scroll-smooth">
          <div className="text-center py-4">
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div 
                className={`max-w-[85%] p-5 text-sm leading-relaxed shadow-sm relative group transition-all duration-300 ${
                  msg.sender === 'user' 
                    ? 'bg-black text-white rounded-[1.5rem] rounded-br-sm' 
                    : 'bg-white border border-gray-100 text-gray-600 rounded-[1.5rem] rounded-bl-sm hover:shadow-md'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[9px] text-gray-300 mt-2 px-2 uppercase tracking-widest font-bold">
                  {msg.sender === 'user' ? 'You' : 'Concierge'}
              </span>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="bg-white border border-gray-100 self-start rounded-[1.5rem] rounded-bl-sm p-5 shadow-sm w-20">
               <div className="flex gap-1.5 justify-center">
                 <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-[bounce_1s_infinite]"></span>
                 <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-[bounce_1s_infinite_0.2s]"></span>
                 <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-[bounce_1s_infinite_0.4s]"></span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/50 border-t border-gray-100 backdrop-blur-sm">
            <form onSubmit={handleSend} className="relative flex items-center gap-2 bg-white rounded-full p-2 pr-2 border border-gray-200 shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary/20 transition-all">
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask anything..."
                    className="flex-1 bg-transparent pl-6 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
                />
                <button 
                    type="submit" 
                    disabled={!inputValue.trim()}
                    className="w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                >
                    <i className="ri-arrow-up-line text-lg font-bold"></i>
                </button>
            </form>
            <div className="text-center mt-3">
                <p className="text-[9px] text-gray-400">Powered by Luxebyayush AI</p>
            </div>
        </div>
      </div>

      {/* Launcher Button */}
      <button 
        onClick={() => { setIsOpen(!isOpen); setShowHint(false); }}
        className="group relative flex items-center justify-center"
      >
        <div className={`
            w-16 h-16 rounded-full shadow-2xl transition-all duration-500 cubic-bezier(0.19,1,0.22,1) flex items-center justify-center overflow-hidden relative z-10
            ${isOpen ? 'bg-white text-black rotate-90 scale-90' : 'gradient-bg text-white hover:scale-110 animate-subtle-pulse group-hover:animate-none'}
        `}>
             <i className={`text-2xl transition-all duration-300 absolute ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <i className="ri-close-line"></i>
             </i>
             <i className={`text-2xl transition-all duration-300 absolute ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <i className="ri-chat-smile-2-fill"></i>
             </i>
        </div>
        
        {/* Pulsing Rings */}
        {!isOpen && (
            <>
                <div className="absolute inset-0 bg-primary rounded-full animate-ping-slow opacity-20"></div>
                <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            </>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;