import React from 'react';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { BlogPost } from '../types';

interface BlogProps {
  onOpenArticle: (post: BlogPost) => void;
}

export const Blog: React.FC<BlogProps> = ({ onOpenArticle }) => {
  return (
    <section id="blog" className="py-24 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
            08. Conteúdo & Inteligência de Negócio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
            Estratégias para fazer sua empresa vender mais na internet
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Artigos objetivos e práticos para lojistas, comerciantes e prestadores de serviços que querem atrair mais clientes e fugir do amadorismo.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => onOpenArticle(post)}
              className="p-6 sm:p-7 rounded-2xl bg-surface border border-border-subtle hover:border-border-accent transition-all duration-300 flex flex-col justify-between group hover:shadow-xl cursor-pointer"
            >
              <div className="space-y-4">
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-text-muted">
                  <span className="font-semibold text-brand-accent">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-brand-accent transition-colors leading-snug">
                  {post.title}
                </h3>

                {/* Snippet */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {post.snippet}
                </p>
              </div>

              {/* Bottom Read link */}
              <div className="pt-6 border-t border-border-subtle flex items-center justify-between text-xs font-semibold text-text-primary group-hover:text-brand-accent transition-colors">
                <span>Ler artigo completo</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
