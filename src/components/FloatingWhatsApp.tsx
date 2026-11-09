import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/mockData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    "Olá! Quero um site pronto ainda hoje.",
    "Quanto custa um site para o meu negócio?",
    "Quero ver modelos para meu segmento.",
    "Gostaria de tirar dúvidas com um especialista."
  ];

  const handleSendQuick = (text: string) => {
    window.open(getWhatsAppUrl(text), '_blank');
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) return;
    window.open(getWhatsAppUrl(customMsg), '_blank');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <aside aria-label="Atendimento rápido via WhatsApp" className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[310px] sm:w-[350px] rounded-2xl bg-surface border border-border-medium shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 transition-all">
          
          {/* Header of the popup */}
          <div className="p-4 bg-graphite-900 border-b border-border-subtle flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-graphite-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-text-primary">Vitrine Digital</h4>
                <p className="text-[10px] text-text-muted">Atendimento Comercial Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-text-muted hover:text-text-primary rounded-lg transition-colors cursor-pointer"
              aria-label="Fechar janela do WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-canvas/60 space-y-3">
            <div className="p-3 rounded-xl bg-surface border border-border-subtle text-xs text-text-secondary leading-relaxed">
              Olá! 👋 Como posso te ajudar hoje? Criamos seu site profissional com agilidade e entrega no mesmo dia.
            </div>

            <div className="space-y-1.5 pt-1">
              <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                Respostas rápidas:
              </p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendQuick(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border-subtle hover:border-brand-accent/40 text-xs text-text-primary transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate">{prompt}</span>
                  <Send className="w-3 h-3 text-text-muted group-hover:text-brand-accent shrink-0 ml-1" />
                </button>
              ))}
            </div>

            {/* Custom message input */}
            <form onSubmit={handleCustomSubmit} className="pt-2 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-3 py-2 text-xs bg-surface rounded-lg border border-border-subtle focus:border-brand-accent text-text-primary outline-none"
              />
              <button
                type="submit"
                className="p-2 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Enviar mensagem"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

          {/* Footer note */}
          <div className="px-4 py-2 bg-graphite-900 border-t border-border-subtle text-center text-[10px] text-text-muted font-mono">
            {WHATSAPP_DISPLAY} · Brasil
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="flex items-center gap-3">
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-graphite-900/90 backdrop-blur-md border border-border-medium text-xs text-text-primary shadow-xl cursor-pointer hover:border-brand-accent transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Site pronto no mesmo dia? <strong>Fale agora</strong></span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 group relative focus:outline-none focus:ring-4 focus:ring-emerald-500/30 cursor-pointer"
          aria-label={isOpen ? "Fechar atendimento WhatsApp" : "Abrir atendimento WhatsApp"}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageCircle className="w-7 h-7 fill-current" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-accent text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-canvas">
                1
              </span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
};
