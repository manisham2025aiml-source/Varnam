import React, { useState, useRef, useEffect } from 'react';
import { getVarnamAiResponse, ChatMessage } from '../../services/ai/culturalChat';
import { Sparkles, X, Send, Bot, User, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VarnamAiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-msg',
      sender: 'assistant',
      text: 'Namaste! I am your Varnam Cultural Assistant. Ask me anything about India’s 40+ GI-tagged crafts, regional weaving traditions, artisan lineages, or gifting guidance.',
      timestamp: 'Just now',
      suggestedActions: [
        'Kanchipuram vs. Banarasi Silk',
        'Caring for Tanjore Paintings',
        'Swamimalai Lost-Wax Casting',
        'Heirloom Gifts under ₹10,000'
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getVarnamAiResponse(query);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 650);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-gradient-to-r from-[#1B2A4A] to-[#131E35] text-white rounded-full shadow-2xl border border-[#C59B27]/50 hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group ring-4 ring-[#C59B27]/20"
          title="Open Varnam AI Cultural Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C85A32] to-[#C59B27] flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-xs font-serif font-bold text-[#D4AF37] block leading-none">
              Varnam AI
            </span>
            <span className="text-[10px] text-white/70">
              Cultural Guide
            </span>
          </div>
        </button>
      )}

      {/* Floating Heritage Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] bg-[#FAF6F0] rounded-3xl shadow-2xl border-2 border-[#C59B27]/40 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#1B2A4A] via-[#1B2A4A] to-[#131E35] text-white flex items-center justify-between border-b border-[#C59B27]/40">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C85A32] to-[#C59B27] flex items-center justify-center text-white ring-2 ring-[#C59B27]/40 shadow-xs">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-serif text-sm font-bold text-[#D4AF37]">
                    Varnam AI Cultural Assistant
                  </h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <p className="text-[10px] text-white/70">
                  Grounded in authentic Indian GI craft heritage
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-[#C85A32] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#C85A32] text-white rounded-tr-none'
                      : 'bg-white border border-[#C59B27]/25 text-stone-800 rounded-tl-none font-sans'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Contextual Action Shortcut */}
                  {msg.suggestedCraftId && (
                    <div className="mt-3 pt-2.5 border-t border-stone-100">
                      <Link
                        to={`/craft/${msg.suggestedCraftId}`}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C85A32] hover:text-[#7A2021] transition"
                      >
                        <span>View Verified Craft Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {msg.suggestedStateSlug && (
                    <div className="mt-2">
                      <Link
                        to={`/explore-india/${msg.suggestedStateSlug}`}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B2A4A] hover:text-[#C85A32] transition"
                      >
                        <span>Explore State Culture Hub</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}

                  {/* Suggested Query Buttons */}
                  {msg.suggestedActions && (
                    <div className="mt-3 pt-2.5 border-t border-stone-100 flex flex-wrap gap-1.5">
                      {msg.suggestedActions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(action)}
                          className="px-2 py-1 rounded-md bg-[#FAF6F0] hover:bg-[#C85A32] text-stone-700 hover:text-white border border-[#C59B27]/30 text-[10px] font-medium transition"
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  )}

                  <span
                    className={`block text-[9px] mt-1.5 ${
                      msg.sender === 'user' ? 'text-white/70 text-right' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-xs text-stone-500 italic p-2">
                <Bot className="w-4 h-4 text-[#C85A32] animate-bounce" />
                <span>Consulting verified craft archives...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-[#C59B27]/25 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about crafts, weaves, care advice..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs bg-[#FAF6F0] border border-[#C59B27]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C85A32] text-[#1C1917]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 bg-[#C85A32] hover:bg-[#B34724] disabled:opacity-40 text-white rounded-xl shadow-xs transition"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};
