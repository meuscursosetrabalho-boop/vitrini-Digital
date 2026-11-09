import React from 'react';
import { CheckCircle2, Clock, Users, Target, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

interface AboutProps {
  onRequestQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onRequestQuote }) => {
  return (
    <section id="sobre" className="py-20 bg-surface/30 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Studio / Agency Workspace Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-border-medium bg-surface shadow-xl">
              <img
                src="/src/assets/images/about_agency_founder_1793060896841.jpg"
                alt="Ambiente de criação e desenvolvimento de sites da Vitrine Digital"
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/70 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-graphite-900/90 backdrop-blur-md border border-border-subtle">
                <p className="text-xs font-semibold text-text-primary">
                  Compromisso com o pequeno e médio empresário brasileiro
                </p>
                <p className="text-[11px] text-text-muted mt-0.5">
                  Atendimento ágil, linguagem simples e foco no seu faturamento diário.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Mission */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
              02. Quem Somos & Nossa Missão
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary tracking-tight text-balance">
              Criamos a vitrine digital que o seu negócio precisa para crescer e ser valorizado
            </h2>

            <div className="space-y-4 text-text-secondary text-base leading-relaxed">
              <p>
                A <strong className="text-text-primary">Vitrine Digital</strong> é uma empresa especializada na criação de sites profissionais para comerciantes, empreendedores e empresas que desejam fortalecer sua presença na internet.
              </p>
              <p>
                Nosso objetivo é ajudar negócios de diferentes segmentos a apresentarem seus produtos e serviços de maneira profissional, moderna e organizada, facilitando o contato com clientes e ampliando suas oportunidades de crescimento.
              </p>
              <p>
                Na Vitrine Digital, você tem criação de sites profissionais com agilidade, preços acessíveis e design moderno. Desenvolvemos páginas adaptadas para celulares, com integração ao WhatsApp e foco em valorizar seu negócio. <strong className="text-brand-accent">Nosso diferencial é a rapidez: seu site pode ficar pronto no mesmo dia!</strong>
              </p>
            </div>

            {/* Target Segments Grid */}
            <div className="pt-2">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
                Feito especialmente para o seu segmento:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-text-secondary font-medium">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Lojas & Comércio</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Restaurantes & Bares</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Barbearias & Salões</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Oficinas Mecânicas</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Prestadores de Serviço</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-surface border border-border-subtle">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>Clínicas & Estética</span>
                </div>
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>Falar sobre meu negócio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#servicos"
                className="text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors"
              >
                Conhecer todos os serviços ↓
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
