import React from 'react';
import { X, Check, ArrowRight, MessageCircle, MapPin, TrendingUp } from 'lucide-react';
import { PortfolioItem } from '../types';
import { getWhatsAppUrl } from '../data/mockData';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/85 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-surface border border-border-medium shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header with image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-graphite-950 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-graphite-950/80 hover:bg-graphite-900 text-white rounded-full transition-colors cursor-pointer border border-white/10"
            aria-label="Fechar detalhes"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-[11px] font-semibold text-brand-accent px-2.5 py-0.5 rounded bg-brand-accent/20 border border-brand-accent/30 inline-block mb-1.5">
              {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-white/70 mt-1">
              <MapPin className="w-3.5 h-3.5 text-brand-accent" />
              <span>{project.location}</span> · <span>Cliente: {project.client}</span>
            </div>
          </div>
        </div>

        {/* Modal content body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Key Metric Card */}
          <div className="p-4 rounded-xl bg-graphite-900 border border-border-subtle flex items-center justify-between gap-4">
            <div>
              <div className="text-[11px] text-text-muted font-semibold uppercase tracking-wider">
                Impacto Medido
              </div>
              <div className="text-sm font-medium text-text-primary mt-0.5">
                {project.metricLabel}
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-accent font-mono tabular-nums shrink-0">
              {project.metric}
            </div>
          </div>

          {/* Case Narrative */}
          <div className="space-y-2">
            <h4 className="font-bold text-text-primary text-sm">Desafio e Solução</h4>
            <p className="text-text-secondary leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-text-primary text-sm">O que foi implementado:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-elevated border border-border-subtle text-xs text-text-secondary">
                  <Check className="w-3.5 h-3.5 text-brand-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-graphite-900 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-text-muted text-center sm:text-left">
            Gostou deste estilo? Adaptamos para as cores e produtos da sua marca.
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(`Olá! Vi o projeto "${project.title}" no portfólio da Vitrine Digital e quero um site com essa mesma estrutura para o meu negócio.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero um site como este</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
