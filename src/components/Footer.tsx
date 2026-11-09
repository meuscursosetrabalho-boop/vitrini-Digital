import React from 'react';
import { MessageCircle, Instagram, ArrowUp, Heart } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-graphite-950 border-t border-border-subtle text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="#" 
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-text-primary"
            >
              <span className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm7 13h2v2h3v2H8v-2h3v-2z"/>
                </svg>
              </span>
              <span>
                Vitrine<span className="text-brand-accent">Digital</span>
              </span>
            </a>

            <p className="text-xs text-text-muted leading-relaxed max-w-sm">
              Do pequeno empreendedor à grande empresa: todo negócio merece uma presença digital profissional. Criação ágil de sites de alta conversão adaptados para celular.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppUrl("Olá! Vim através do rodapé do site da Vitrine Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle hover:border-brand-accent/50 text-xs font-semibold text-text-primary transition-colors"
                aria-label="Falar no WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-border-subtle hover:border-brand-accent/50 text-xs font-semibold text-text-primary transition-colors"
                aria-label="Acessar Instagram da Vitrine Digital"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Nav Column 1: Navegação */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-text-muted">
              <li><a href="#sobre" className="hover:text-text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" className="hover:text-text-primary transition-colors">Nossos Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Casos & Portfólio</a></li>
              <li><a href="#depoimentos" className="hover:text-text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#planos" className="hover:text-text-primary transition-colors">Planos & Preços</a></li>
              <li><a href="#blog" className="hover:text-text-primary transition-colors">Conteúdo & Dicas</a></li>
              <li><a href="#faq" className="hover:text-text-primary transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Nav Column 2: Segmentos */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Segmentos
            </h4>
            <ul className="space-y-2 text-xs text-text-muted">
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Lojas & Varejo</a></li>
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Restaurantes & Bares</a></li>
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Barbearias & Estética</a></li>
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Oficinas Mecânicas</a></li>
              <li><a href="#portfolio" className="hover:text-text-primary transition-colors">Prestadores de Serviços</a></li>
              <li><a href="#contato" className="hover:text-text-primary transition-colors">Sites Express em 24h</a></li>
            </ul>
          </div>

          {/* Nav Column 3: Atendimento & Região */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-text-primary uppercase tracking-wider">
              Atendimento Brasil
            </h4>
            <p className="text-xs text-text-muted leading-relaxed">
              Desenvolvimento 100% online com suporte próximo, humanizado e entrega para qualquer cidade do Brasil.
            </p>
            <div className="pt-1 text-xs text-text-secondary">
              <div>Segunda a Sábado: 08h às 20h</div>
              <div className="text-[11px] text-text-muted mt-0.5">Plantão de atendimento WhatsApp</div>
            </div>
            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 text-xs text-brand-accent hover:text-brand-accent-hover transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Quiet Sub-Footer */}
        <div className="mt-14 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {new Date().getFullYear()} Vitrine Digital. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Criado com foco em alta conversão e valorização do seu negócio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
