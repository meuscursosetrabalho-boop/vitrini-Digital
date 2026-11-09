import React from 'react';
import { X, Clock, ArrowRight, MessageCircle, BookOpen } from 'lucide-react';
import { BlogPost } from '../types';
import { getWhatsAppUrl } from '../data/mockData';

interface ArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onRequestQuote: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ post, onClose, onRequestQuote }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/85 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-surface border border-border-medium shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-graphite-900 border-b border-border-subtle flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="font-semibold text-brand-accent">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1 font-mono text-[11px]">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight leading-snug">
              {post.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Fechar artigo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-text-secondary leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}

          {/* Action Tip Box */}
          <div className="p-4 mt-6 rounded-xl bg-brand-accent/10 border border-brand-accent/30 space-y-1">
            <div className="text-xs font-bold text-brand-accent uppercase tracking-wider">
              Dica prática da Vitrine Digital:
            </div>
            <p className="text-xs text-text-primary font-medium leading-relaxed">
              {post.actionTip}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-graphite-900 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Voltar para o site
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onRequestQuote();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Quero aplicar isso no meu negócio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
