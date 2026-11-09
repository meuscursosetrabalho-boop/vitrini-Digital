import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, getWhatsAppUrl } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
            10. Dúvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
            Tudo o que você precisa saber antes de solicitar seu site
          </h2>
          <p className="text-text-secondary text-base max-w-2xl mx-auto leading-relaxed">
            Respostas diretas e sem juridiquês para as principais dúvidas dos nossos clientes.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl bg-surface border border-border-subtle overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-surface-elevated/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-text-primary">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-accent shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle/40 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? WhatsApp card */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-elevated border border-border-subtle text-center space-y-3">
          <h4 className="text-sm font-bold text-text-primary">
            Ainda tem alguma dúvida específica sobre o seu projeto?
          </h4>
          <p className="text-xs text-text-secondary max-w-md mx-auto">
            Fale diretamente com nossa equipe no WhatsApp. Nós esclarecemos tudo em poucos minutos.
          </p>
          <a
            href={getWhatsAppUrl("Olá! Tenho uma dúvida sobre a criação de sites com a Vitrine Digital.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar dúvidas pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
