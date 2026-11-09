import React from 'react';
import { ArrowRight, Smartphone, Zap, MessageCircle, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

interface HeroProps {
  onRequestQuote: () => void;
  onOpenSimulator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestQuote, onOpenSimulator }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden hero-glow border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split grid: Content & Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copywriting & High-Conversion CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline / Subtitle */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-accent">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              <span>Presença Digital Profissional · Brasil</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-primary tracking-tight leading-[1.15] text-balance">
              Do pequeno empreendedor à grande empresa: todo negócio merece uma presença digital profissional.
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              A <strong className="text-text-primary font-semibold">Vitrine Digital</strong> cria sites modernos, rápidos e adaptados para celulares para lojas, comércios e prestadores de serviços. Divulgue seus produtos, receba pedidos no WhatsApp e aumente suas vendas. Nosso diferencial é a rapidez: <span className="text-brand-accent font-semibold">seu site pode ficar pronto no mesmo dia!</span>
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 text-sm font-bold text-white bg-brand-accent hover:bg-brand-accent-hover active:bg-brand-accent-dark rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer accent-glow-sm"
              >
                <span>Solicitar meu site</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="px-6 py-3.5 text-sm font-semibold text-text-primary bg-surface border border-border-subtle hover:border-border-medium hover:bg-surface-elevated rounded-xl transition-all flex items-center justify-center gap-2"
              >
                Ver modelos e projetos
              </a>

              <button
                onClick={onOpenSimulator}
                className="text-xs font-semibold text-text-muted hover:text-brand-accent transition-colors py-2 text-center sm:text-left cursor-pointer"
              >
                Calcular orçamento estimado →
              </button>
            </div>

            {/* Direct Trust Badges */}
            <div className="pt-4 border-t border-border-subtle flex flex-wrap items-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Entrega a partir de 24 horas</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-brand-accent shrink-0" />
                <span>100% Adaptado para Celular</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-brand-accent shrink-0" />
                <span>Integração Direta ao WhatsApp</span>
              </div>
            </div>

          </div>

          {/* Column 2: High-End Mockup Asset Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-2xl overflow-hidden border border-border-medium bg-surface shadow-2xl group">
              <img
                src="/src/assets/images/hero_agency_devices_1793060894524.jpg"
                alt="Exemplo de site profissional moderno responsivo em laptop e smartphone desenvolvido pela Vitrine Digital"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Highlight Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-graphite-900/90 backdrop-blur-md border border-border-subtle flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-text-primary">Vitrine Digital Express</div>
                  <div className="text-[11px] text-text-muted">Seu negócio pronto para vender na internet hoje</div>
                </div>
                <a
                  href={getWhatsAppUrl("Olá! Vi a demonstração no site e quero solicitar o meu site com entrega no mesmo dia!")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-[11px] font-semibold text-white bg-brand-accent rounded-lg hover:bg-brand-accent-hover transition-colors whitespace-nowrap"
                >
                  Falar Agora
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Column Proof / KPI Strip Below Hero Split */}
        <div className="mt-16 pt-12 border-t border-border-subtle grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          
          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle">
            <div className="flex items-center gap-2 text-brand-accent mb-1">
              <Zap className="w-5 h-5" />
              <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-text-primary">24 Horas</span>
            </div>
            <h4 className="text-xs font-semibold text-text-primary">No Mesmo Dia</h4>
            <p className="text-xs text-text-muted mt-1">Seu site publicado e pronto para receber clientes com rapidez recorde.</p>
          </div>

          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle">
            <div className="flex items-center gap-2 text-brand-accent mb-1">
              <Smartphone className="w-5 h-5" />
              <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-text-primary">100%</span>
            </div>
            <h4 className="text-xs font-semibold text-text-primary">Foco Mobile</h4>
            <p className="text-xs text-text-muted mt-1">Layout perfeito para abrir instantaneamente no WhatsApp e Instagram.</p>
          </div>

          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle">
            <div className="flex items-center gap-2 text-brand-accent mb-1">
              <MessageCircle className="w-5 h-5" />
              <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-text-primary">+3x</span>
            </div>
            <h4 className="text-xs font-semibold text-text-primary">Mais Contatos</h4>
            <p className="text-xs text-text-muted mt-1">Botões estratégicos que guiam o visitante direto para o seu WhatsApp.</p>
          </div>

          <div className="p-4 rounded-xl bg-surface/50 border border-border-subtle">
            <div className="flex items-center gap-2 text-brand-accent mb-1">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xl sm:text-2xl font-bold font-mono tabular-nums text-text-primary">Sem Taxas</span>
            </div>
            <h4 className="text-xs font-semibold text-text-primary">Preço Acessível</h4>
            <p className="text-xs text-text-muted mt-1">Preço justo e transparente, sem mensalidades escondidas ou surpresas.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
