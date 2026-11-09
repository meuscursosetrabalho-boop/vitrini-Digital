import React from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, getWhatsAppUrl } from '../data/mockData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="planos" className="py-24 bg-surface/30 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
            09. Investimento Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
            Planos acessíveis sem mensalidades abusivas nem surpresas
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Invista na ferramenta de vendas mais importante da sua empresa com parcelamento em até 12x ou desconto especial via Pix.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isPopular
                  ? 'bg-surface border-2 border-brand-accent shadow-2xl scale-[1.02] z-10'
                  : 'bg-surface border border-border-subtle hover:border-border-medium'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    plan.isPopular 
                      ? 'bg-brand-accent text-white shadow-md' 
                      : 'bg-surface-elevated text-brand-accent border border-brand-accent/30'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6 pt-2">
                  <h3 className="text-xl font-bold text-text-primary">{plan.name}</h3>
                  <p className="text-xs text-text-muted mt-1 leading-relaxed">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-border-subtle">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-text-primary font-mono tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs text-text-muted">à vista no Pix</span>
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-medium">
                    {plan.installments}
                  </div>
                  <div className="mt-2 text-xs font-semibold text-brand-accent flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{plan.deliveryTime}</span>
                  </div>
                </div>

                {/* Features Included */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    O que está incluso:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.included.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-snug">
                        <Check className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-border-subtle">
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3.5 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-brand-accent hover:bg-brand-accent-hover text-white shadow-md accent-glow-sm'
                      : 'bg-surface-elevated hover:bg-surface text-text-primary border border-border-subtle hover:border-brand-accent/40'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Security & Guarantee Note */}
        <div className="mt-14 max-w-2xl mx-auto p-5 rounded-xl bg-surface border border-border-subtle text-center space-y-1">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-text-primary">
            <Shield className="w-4 h-4 text-brand-accent" />
            <span>Satisfação e Transparência Garantidas</span>
          </div>
          <p className="text-xs text-text-muted leading-relaxed">
            Seu site só é publicado oficialmente na internet após você testar e aprovar tudo no seu próprio celular.
          </p>
        </div>

      </div>
    </section>
  );
};
