import React from 'react';
import { ArrowRight, Check, Clock, Sparkles } from 'lucide-react';
import { SERVICES, getWhatsAppUrl } from '../data/mockData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="servicos" className="py-24 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
            03. Soluções & Serviços Oferecidos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
            Tudo o que sua empresa precisa para se destacar e vender todos os dias
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Desenvolvemos páginas modernas, adaptadas para celulares, com divulgação de produtos, serviços e integração com WhatsApp. Seu site pode ficar pronto no mesmo dia!
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-subtle hover:border-border-accent transition-all duration-300 flex flex-col justify-between group hover:shadow-xl relative"
            >
              <div>
                {/* Top Row: Editorial Number & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-accent tracking-widest">
                    {service.number}
                  </span>
                  {service.badge && (
                    <span className="text-[11px] font-semibold text-brand-accent px-2 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-text-primary tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-text-secondary mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-text-muted">
                      <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer: Delivery Time & Action Button */}
              <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-text-muted">
                  <Clock className="w-3.5 h-3.5 text-brand-accent" />
                  <span className="font-mono text-[11px]">{service.deliveryTime}</span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors group-hover:translate-x-1 cursor-pointer"
                >
                  <span>Solicitar este site</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Banner with Differential Quote */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-elevated border border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-sm font-bold text-text-primary">
              Não sabe exatamente qual modelo é ideal para você?
            </h4>
            <p className="text-xs text-text-secondary">
              Nossa equipe analisa seu segmento e indica o formato de maior conversão em menos de 5 minutos pelo WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Olá! Gostaria de uma indicação sobre qual tipo de site é ideal para a minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-all whitespace-nowrap shrink-0"
          >
            Consultoria Rápida Grátis
          </a>
        </div>

      </div>
    </section>
  );
};
