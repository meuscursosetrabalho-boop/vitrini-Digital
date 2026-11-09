import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, getWhatsAppUrl } from '../data/mockData';

interface TestimonialsProps {
  onRequestQuote: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onRequestQuote }) => {
  return (
    <section id="depoimentos" className="py-24 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
            05. Depoimentos & Prova Social
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
            Quem contratou a Vitrine Digital recomenda e colhe resultados
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Veja a opinião sincera de empresários que transformaram a forma de se comunicar com seus clientes e alavancaram o faturamento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-border-medium transition-all duration-300 flex flex-col justify-between relative group hover:shadow-lg"
            >
              <div>
                {/* Top Row: Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500" aria-label="Avaliação 5 estrelas">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-brand-accent/30 group-hover:text-brand-accent/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-text-secondary italic leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div>
                {/* Result box */}
                <div className="p-3 mb-5 rounded-xl bg-surface-elevated border border-border-subtle text-xs font-medium text-brand-accent flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent"></span>
                  <span>{item.result}</span>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-xs font-bold text-brand-accent font-mono">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{item.name}</h4>
                    <div className="text-xs text-text-muted">
                      <span>{item.business}</span> · <span>{item.city}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-surface/50 border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <span className="w-9 h-9 rounded-full bg-brand-accent/20 border-2 border-surface flex items-center justify-center text-xs font-bold text-brand-accent">MS</span>
              <span className="w-9 h-9 rounded-full bg-surface-elevated border-2 border-surface flex items-center justify-center text-xs font-bold text-text-primary">CA</span>
              <span className="w-9 h-9 rounded-full bg-brand-accent/30 border-2 border-surface flex items-center justify-center text-xs font-bold text-brand-accent">RN</span>
              <span className="w-9 h-9 rounded-full bg-surface-elevated border-2 border-surface flex items-center justify-center text-xs font-bold text-text-primary">JP</span>
            </div>
            <div>
              <div className="text-xs font-bold text-text-primary">Avaliação média 4.9/5 estrelas</div>
              <div className="text-[11px] text-text-muted">Mais de dezenas de comerciantes atendidos com excelência em todo o país</div>
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl transition-all cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span>Quero ser o próximo case de sucesso</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
