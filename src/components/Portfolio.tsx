import React, { useState } from 'react';
import { ArrowUpRight, Check, Eye } from 'lucide-react';
import { PORTFOLIO, getWhatsAppUrl } from '../data/mockData';
import { PortfolioItem } from '../types';

interface PortfolioProps {
  onOpenProjectModal: (project: PortfolioItem) => void;
  onRequestQuote: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenProjectModal, onRequestQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const filteredProjects = activeCategory === 'todos' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'lojas', label: 'Lojas & Varejo' },
    { id: 'restaurantes', label: 'Restaurantes' },
    { id: 'barbearias', label: 'Barbearias & Beleza' },
    { id: 'oficinas', label: 'Oficinas & Serviços' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-surface/20 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
              04. Portfólio & Casos de Sucesso
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
              Projetos reais pensados para gerar resultados e encantar seus clientes
            </h2>
            <p className="text-text-secondary text-base">
              Veja como negócios como o seu ganharam presença profissional e triplicaram os contatos pelo WhatsApp.
            </p>
          </div>

          {/* Functional Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-elevated rounded-xl border border-border-subtle self-start md:self-auto">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-surface border border-border-subtle overflow-hidden hover:border-border-accent transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview with Hover Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite-950">
                <img
                  src={project.image}
                  alt={`Demonstração do projeto ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Measured Scrim Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/90 via-graphite-950/20 to-transparent pointer-events-none" />

                {/* Top unboxed metadata */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                  <span className="font-medium bg-graphite-950/80 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10">
                    {project.categoryLabel}
                  </span>
                  <span className="font-mono text-[11px] text-white/70 bg-graphite-950/80 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                    {project.location}
                  </span>
                </div>

                {/* Bottom Metric Callout */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums leading-none">
                      {project.metric}
                    </div>
                    <div className="text-[11px] text-white/80 mt-1 max-w-xs font-medium">
                      {project.metricLabel}
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="p-2.5 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-xl shadow-lg transition-transform group-hover:scale-110 cursor-pointer"
                    aria-label={`Ver detalhes de ${project.title}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Content Description Area */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-text-primary tracking-tight group-hover:text-brand-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="pt-2 border-t border-border-subtle flex flex-wrap items-center gap-2">
                  {project.liveFeatures.map((feat, idx) => (
                    <span 
                      key={idx}
                      className="text-[11px] font-medium text-text-muted bg-surface-elevated px-2 py-0.5 rounded border border-border-subtle"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-4">
                  <button
                    onClick={() => onOpenProjectModal(project)}
                    className="text-xs font-semibold text-text-primary hover:text-brand-accent transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Ver detalhes do projeto</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getWhatsAppUrl(`Olá! Gostei muito do modelo do projeto "${project.title}" e gostaria de criar um similar para o meu negócio.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors"
                  >
                    Quero um igual →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Portfolio Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-secondary mb-4">
            Tem fotos dos seus produtos ou espaço? Montamos seu modelo personalizado ainda hoje.
          </p>
          <button
            onClick={onRequestQuote}
            className="px-6 py-3 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Solicitar meu site personalizado</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
