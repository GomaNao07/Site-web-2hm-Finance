import React, { useState, useRef, useEffect } from 'react';
import { Bot, Sparkles, X, Send, RefreshCw, MessageSquare } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    sender: 'ai',
    text: "Bonjour ! Je suis l'assistant virtuel 2HM.FINANCE. Comment puis-je vous éclairer sur nos expertises financières pétrolières ou nos offres de formation ?",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const SUGGESTIONS = [
  "Qu'est-ce que le diagnostic 5 jours ?",
  "Comment fonctionne le Contrat de Performance ?",
  "Quelles sont vos offres de formation ?",
  "Où est situé le cabinet ?"
];

const KNOWLEDGE_RESPONSES = {
  diagnostic: "Notre diagnostic « Prix subi, coût maîtrisé » se déroule sur 5 jours ouvrés avec 3 sondes ciblées : 1. Recouvrabilité du Cost Oil, 2. Certification du R-Factor, 3. Lifting cost par centre de coûts. Vous obtenez un rapport chiffré et un plan d'action immédiatement exploitables.",
  performance: "Avec le Contrat de Performance Coûts, nous ne facturons que ce que vous récupérez ! Notre rémunération est strictement indexée sur l'Économie Nette Vérifiée après audit et contradictoire. Aucun gain vérifié = aucun honoraire de performance.",
  formation: "Nous proposons des séminaires intra-entreprise sur mesure et des cursus via AFRIKAN CAMPUS (niveau MBA). Nos 4 axes principaux sont : 1. Contrat de partage de production, 2. Contrôle des coûts pétroliers, 3. Contrôle de gestion & stratégie, 4. Contenu local.",
  cabinet: "Le siège social et le bureau opérationnel de 2HM.FINANCE sont établis à Pointe-Noire (106, rue Benoît Loembet, Km4), au République du Congo, au plus près des opérations pétrolières de la zone CEMAC-OHADA.",
  default: "Merci pour votre message ! Un expert de 2HM.FINANCE peut analyser vos besoins précis. Souhaitez-vous planifier un échange d'une heure sans engagement ou être rappelé par nos équipes ?"
};

export default function AiChatDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Dynamic answer matching
    setTimeout(() => {
      const lower = query.toLowerCase();
      let responseText = KNOWLEDGE_RESPONSES.default;

      if (lower.includes('diagnostic') || lower.includes('5 jour') || lower.includes('méthode') || lower.includes('methode')) {
        responseText = KNOWLEDGE_RESPONSES.diagnostic;
      } else if (lower.includes('performance') || lower.includes('factur') || lower.includes('tarif') || lower.includes('remuneration') || lower.includes('rémunération')) {
        responseText = KNOWLEDGE_RESPONSES.performance;
      } else if (lower.includes('formation') || lower.includes('campus') || lower.includes('cours') || lower.includes('séminaire')) {
        responseText = KNOWLEDGE_RESPONSES.formation;
      } else if (lower.includes('cabinet') || lower.includes('adresse') || lower.includes('pointe') || lower.includes('bureau') || lower.includes('où')) {
        responseText = KNOWLEDGE_RESPONSES.cabinet;
      }

      const aiMsg = {
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-0 z-40 bg-[#E8A33D] hover:bg-[#FAB44E] text-[ text-[#2A0B2C] shadow-3xl p-3.5 sm:px-5 sm:py-3.5 rounded-tl-full rounded-bl-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 transform font-mono text-xs tracking-wider uppercase cursor-pointer"
        aria-label="Ouvrir l'assistant IA"
      >
        <div className="relative flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-[#2A0B2C] animate-pulse" />
        </div>
        <span className="hidden sm:inline font-semibold">Assistant IA</span>

      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50  z-50 transition-opacity"
        />
      )}

      {/* Slide-over Drawer Panel */}
      <div
        className={`fixed top-0 mb-6 right-0 h-full w-full sm:w-[420px] bg-[#FAF7F9] text-[#F3E6F3] z-50 shadow-2xl flex flex-col  transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Header */}
        <div className="px-5 py-1 flex items-center justify-between bg-[#1A061C]">
          <div className="flex items-center gap-3">
            <Bot className="w-4 h-4 text-[#E8A33D]" />
            <div>
              <h3 className="font-display font-bold text-base text-white m-0 flex items-center gap-2">
                Assistant IA
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleReset}
              className="p-2 text-[#C9A8C9] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              title="Réinitialiser la discussion"
            >
              <RefreshCw size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#C9A8C9] hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Fermer le volet"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Message Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 font-corps text-[#1A1418] ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-4  rounded-2xl leading-relaxed text-[15.5px] ${msg.sender === 'user'
                  ? 'bg-[#862586] text-white rounded-br-none'
                  : 'bg-[#DDDDD94D] border border-white/12   rounded-bl-none'
                  }`}
              >
                {msg.text}
              </div>
              <span className="font-mono text-[10px]   mt-1 px-1">
                {msg.timestamp}
              </span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start">
              <div className="bg-white/8 border border-white/12 p-3.5 rounded-[4px] text-xs text-[#E8A33D] font-mono flex items-center gap-2">
                <span className="animate-pulse">IA 2HM en train d'écrire...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggestions Pills
        <div className="px-5 py-2.5 border-t border-white/5 bg-[#1A061C]/50 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {SUGGESTIONS.map((sugg, i) => (
            <button
              key={i}
              onClick={() => handleSend(sugg)}
              className="whitespace-nowrap font-mono text-[11px] px-3 py-1.5 bg-white/6 hover:bg-[#862586]/40 border border-white/15 text-[#EAD8EA] rounded-full transition-colors cursor-pointer"
            >
              {sugg}
            </button>
          ))}
        </div> */}

        {/* Input Footer */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="bg-[#1A061C] m-3 h-11 flex items-center rounded-md overflow-hidden left-0 right-0 bottom-0 absolute"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Posez votre question à l'IA..."
            className="flex-1 bg-white/10 px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#E8A33D] font-sans"
          />
          <button
            type="submit"
            disabled={!input.trim() || isTyping}
            className="p-3.5 bg-[#E8A33D] hover:bg-[#F4B85C] disabled:opacity-40 text-[#2A0B2C] transition-colors cursor-pointer font-semibold"
            aria-label="Envoyer"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
}
