import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl, INSTAGRAM_URL } from '../data/mockData';

interface HeaderProps {
  onOpenSimulator: () => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSimulator, onRequestQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-border-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Strict single element) */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-text-primary whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
          aria-label="Vitrine Digital - Início"
        >
          <span className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M4 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5zm7 13h2v2h3v2H8v-2h3v-2z"/>
            </svg>
          </span>
          <span className="text-lg tracking-tight">
            Vitrine<span className="text-brand-accent">Digital</span>
          </span>
        </a>

        {/* Zone 2: Navigation Links (Clean single-line text links) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-text-secondary" aria-label="Navegação principal">
          <a href="#sobre" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Serviços
          </a>
          <a href="#portfolio" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Portfólio
          </a>
          <a href="#depoimentos" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Depoimentos
          </a>
          <a href="#planos" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Planos
          </a>
          <a href="#blog" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            Conteúdo
          </a>
          <a href="#faq" className="hover:text-text-primary transition-colors whitespace-nowrap shrink-0 py-1">
            FAQ
          </a>
        </nav>

        {/* Zone 3: Primary Action & Interactive Tools */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSimulator}
            className="text-xs font-semibold text-text-secondary hover:text-text-primary px-3 py-2 rounded-lg border border-border-subtle hover:border-border-medium hover:bg-surface transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Simular Orçamento
          </button>
          
          <button
            onClick={onRequestQuote}
            className="px-4 py-2.5 text-xs font-semibold text-white bg-brand-accent hover:bg-brand-accent-hover active:bg-brand-accent-dark rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Solicitar meu site</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onRequestQuote}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-accent rounded-lg"
          >
            Solicitar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-border-subtle px-4 pt-3 pb-6 space-y-3 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2 text-sm font-medium text-text-secondary">
            <a 
              href="#sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Sobre a Vitrine Digital
            </a>
            <a 
              href="#servicos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Nossos Serviços
            </a>
            <a 
              href="#portfolio" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Portfólio & Casos Reais
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Depoimentos de Clientes
            </a>
            <a 
              href="#planos" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Tabela de Preços & Planos
            </a>
            <a 
              href="#blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Artigos & Dicas de Negócio
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-surface-elevated hover:text-text-primary"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-3 border-t border-border-subtle flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSimulator();
              }}
              className="w-full text-center py-2.5 text-xs font-semibold text-text-primary bg-surface-elevated border border-border-subtle rounded-lg"
            >
              Simular Orçamento Interativo
            </button>
            <a
              href={getWhatsAppUrl("Olá! Gostaria de solicitar um site para o meu negócio com a Vitrine Digital.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-brand-accent rounded-lg"
            >
              Chamar no WhatsApp (22) 98163-1084
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
