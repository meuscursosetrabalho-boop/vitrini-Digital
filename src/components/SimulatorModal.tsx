import React, { useState } from 'react';
import { X, Check, ArrowRight, MessageCircle, Sparkles, Calculator } from 'lucide-react';
import { getWhatsAppUrl } from '../data/mockData';

interface SimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestWithData: (planName: string, notes: string) => void;
}

export const SimulatorModal: React.FC<SimulatorModalProps> = ({
  isOpen,
  onClose,
  onRequestWithData
}) => {
  const [segment, setSegment] = useState('loja');
  const [pages, setPages] = useState('1'); // '1' (one page express) or 'multiple'
  const [hasCatalog, setHasCatalog] = useState(true);
  const [hasWhatsAppBtn, setHasWhatsAppBtn] = useState(true);
  const [isUrgent24h, setIsUrgent24h] = useState(true);
  const [needDomain, setNeedDomain] = useState(true);

  if (!isOpen) return null;

  // Calculate estimated plan and recommendation
  let recommendedPlan = "Plano Comercial Pro";
  let estimatedPrice = "R$ 599,90";
  let estimatedDelivery = "24h a 48h";

  if (pages === '1' && !hasCatalog) {
    recommendedPlan = "Plano Express 24h";
    estimatedPrice = "R$ 299,99";
    estimatedDelivery = "No mesmo dia (24h)";
  } else if (pages === 'multiple') {
    recommendedPlan = "Plano Premium Exclusivo";
    estimatedPrice = "R$ 1.000,00";
    estimatedDelivery = "48h a 72h";
  }

  const segmentLabels: Record<string, string> = {
    loja: 'Loja / Comércio Varejista',
    restaurante: 'Restaurante / Lanchonete / Delivery',
    barbearia: 'Barbearia / Salão / Estética',
    oficina: 'Oficina Mecânica / Auto Center',
    servico: 'Prestador de Serviços / Consultoria',
    outro: 'Outro Negócio'
  };

  const handleSendWhatsApp = () => {
    const summary = `*SIMULAÇÃO DE SITE - VITRINE DIGITAL*
🏢 *Segmento:* ${segmentLabels[segment]}
📄 *Estrutura:* ${pages === '1' ? 'Página Única (One-Page)' : 'Multi-páginas'}
📦 *Catálogo/Cardápio:* ${hasCatalog ? 'Sim' : 'Não'}
⚡ *Entrega Express 24h:* ${isUrgent24h ? 'Sim' : 'Não'}
🌐 *Precisa de Domínio:* ${needDomain ? 'Sim' : 'Não'}
💡 *Plano Sugerido:* ${recommendedPlan} (${estimatedPrice})
⏱️ *Prazo Estimado:* ${estimatedDelivery}`;

    window.open(getWhatsAppUrl(summary), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/80 backdrop-blur-sm animate-in fade-in">
      <div 
        className="w-full max-w-xl rounded-2xl bg-surface border border-border-medium shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 bg-graphite-900 border-b border-border-subtle flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-accent/20 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary">Simulador de Projeto Interativo</h3>
              <p className="text-[11px] text-text-muted">Descubra em segundos o modelo perfeito para seu negócio</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-text-muted hover:text-text-primary rounded-lg transition-colors cursor-pointer"
            aria-label="Fechar simulador"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs">
          
          {/* Step 1: Segment */}
          <div>
            <label className="block font-bold text-text-primary mb-2">
              1. Qual é o ramo da sua empresa?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'loja', label: 'Loja / Comércio' },
                { id: 'restaurante', label: 'Restaurante / Bar' },
                { id: 'barbearia', label: 'Barbearia / Salão' },
                { id: 'oficina', label: 'Oficina / Mecânica' },
                { id: 'servico', label: 'Prestador de Serviço' },
                { id: 'outro', label: 'Outro' }
              ].map(item => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSegment(item.id)}
                  className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                    segment === item.id
                      ? 'bg-brand-accent/15 border-brand-accent text-brand-accent font-semibold'
                      : 'bg-canvas border-border-subtle text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Structure */}
          <div>
            <label className="block font-bold text-text-primary mb-2">
              2. Qual formato de estrutura você prefere?
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPages('1')}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  pages === '1'
                    ? 'bg-brand-accent/15 border-brand-accent text-brand-accent font-semibold'
                    : 'bg-canvas border-border-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                <div className="font-bold">Página Única (One-Page)</div>
                <div className="text-[11px] text-text-muted mt-0.5">Mais rápida, objetiva e entrega em até 24h</div>
              </button>

              <button
                type="button"
                onClick={() => setPages('multiple')}
                className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                  pages === 'multiple'
                    ? 'bg-brand-accent/15 border-brand-accent text-brand-accent font-semibold'
                    : 'bg-canvas border-border-subtle text-text-secondary hover:text-text-primary'
                }`}
              >
                <div className="font-bold">Múltiplas Páginas</div>
                <div className="text-[11px] text-text-muted mt-0.5">Completa, com blog, equipe e vários serviços</div>
              </button>
            </div>
          </div>

          {/* Step 3: Features */}
          <div>
            <label className="block font-bold text-text-primary mb-2">
              3. Recursos adicionais recomendados:
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-2.5 rounded-lg bg-canvas border border-border-subtle cursor-pointer hover:border-border-medium">
                <input
                  type="checkbox"
                  checked={hasCatalog}
                  onChange={(e) => setHasCatalog(e.target.checked)}
                  className="rounded text-brand-accent focus:ring-brand-accent h-4 w-4"
                />
                <span className="text-text-secondary font-medium">Catálogo de Produtos ou Cardápio Digital Interativo</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-lg bg-canvas border border-border-subtle cursor-pointer hover:border-border-medium">
                <input
                  type="checkbox"
                  checked={isUrgent24h}
                  onChange={(e) => setIsUrgent24h(e.target.checked)}
                  className="rounded text-brand-accent focus:ring-brand-accent h-4 w-4"
                />
                <span className="text-text-secondary font-medium">Urgência: Publicação no mesmo dia (até 24 horas)</span>
              </label>

              <label className="flex items-center gap-3 p-2.5 rounded-lg bg-canvas border border-border-subtle cursor-pointer hover:border-border-medium">
                <input
                  type="checkbox"
                  checked={needDomain}
                  onChange={(e) => setNeedDomain(e.target.checked)}
                  className="rounded text-brand-accent focus:ring-brand-accent h-4 w-4"
                />
                <span className="text-text-secondary font-medium">Auxílio com Domínio próprio (.com.br) e Hospedagem Rápida</span>
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="p-4 rounded-xl bg-graphite-900 border border-brand-accent/40 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-wider">
                Recomendação da Vitrine Digital:
              </span>
              <span className="text-xs font-bold text-emerald-400 font-mono">
                {estimatedDelivery}
              </span>
            </div>

            <div className="flex items-baseline justify-between pt-1">
              <h4 className="text-base font-extrabold text-text-primary">
                {recommendedPlan}
              </h4>
              <span className="text-xl font-bold font-mono text-brand-accent">
                {estimatedPrice}
              </span>
            </div>

            <p className="text-[11px] text-text-muted leading-relaxed">
              Inclui design moderno adaptado para celular, botão de WhatsApp e garantia de aprovação antes da publicação.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 bg-graphite-900 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-text-muted hover:text-text-primary transition-colors cursor-pointer"
          >
            Fechar
          </button>

          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enviar simulação para o WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
