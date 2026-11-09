import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/mockData';

interface ContactFormProps {
  initialService?: string;
  initialPlan?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, initialPlan }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [businessType, setBusinessType] = useState('loja');
  const [urgency, setUrgency] = useState('24h');
  const [message, setMessage] = useState(
    initialService 
      ? `Olá! Gostaria de um orçamento para o serviço: ${initialService}.`
      : initialPlan 
      ? `Olá! Tenho interesse no ${initialPlan}.`
      : ''
  );

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const formatWhatsapp = (val: string) => {
    const numbers = val.replace(/\D/g, '');
    if (numbers.length <= 11) {
      if (numbers.length > 6) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
      } else if (numbers.length > 2) {
        return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
      }
      return numbers;
    }
    return val;
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatWhatsapp(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent, viaWhatsApp: boolean = false) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor, informe seu nome completo.');
      return;
    }
    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setError('Por favor, informe um WhatsApp válido com DDD (Ex: 22 98163-1084).');
      return;
    }

    setError('');
    setSubmitted(true);

    const businessLabelMap: Record<string, string> = {
      loja: 'Loja / Comércio Varejista',
      restaurante: 'Restaurante / Gastronomia',
      barbearia: 'Barbearia / Salão / Estética',
      oficina: 'Oficina Mecânica / Auto Center',
      servico: 'Prestador de Serviços',
      outro: 'Outro Segmento'
    };

    const urgencyMap: Record<string, string> = {
      '24h': 'Urgente (Hoje / em até 24 horas)',
      '3dias': 'Em até 3 dias',
      '1semana': 'Dentro de 1 semana',
      'pesquisa': 'Apenas pesquisando valores'
    };

    const fullText = `*NOVA SOLICITAÇÃO DE SITE - VITRINE DIGITAL*
👤 *Nome:* ${name}
📱 *WhatsApp:* ${whatsapp}
📧 *E-mail:* ${email || 'Não informado'}
🏢 *Segmento:* ${businessLabelMap[businessType] || businessType}
⚡ *Prazo desejado:* ${urgencyMap[urgency] || urgency}
📝 *Detalhes:* ${message || 'Solicitação padrão de orçamento para site profissional'}`;

    if (viaWhatsApp) {
      const url = getWhatsAppUrl(fullText);
      window.open(url, '_blank');
    }
  };

  return (
    <section id="contato" className="py-24 bg-surface/40 border-b border-border-subtle scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Reassurance & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
              06. Solicite Seu Site
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight text-balance">
              Dê o primeiro passo para ter uma vitrine que trabalha por você 24h por dia
            </h2>

            <p className="text-text-secondary text-base leading-relaxed">
              Preencha os dados abaixo para receber uma proposta rápida e personalizada. Se preferir, pode enviar os dados diretamente para o nosso WhatsApp comercial.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface border border-border-subtle">
                <Clock className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">Resposta em poucos minutos</h4>
                  <p className="text-xs text-text-muted mt-0.5">Nosso time responde rapidamente no WhatsApp comercial para entender seu projeto.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface border border-border-subtle">
                <Sparkles className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">Entrega no mesmo dia disponível</h4>
                  <p className="text-xs text-text-muted mt-0.5">Se você tiver urgência, temos a modalidade Express com publicação em 24h.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-surface border border-border-subtle">
                <ShieldCheck className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-text-primary">Sem surpresas nem custos ocultos</h4>
                  <p className="text-xs text-text-muted mt-0.5">Orçamento claro e detalhado antes de qualquer compromisso.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 p-5 rounded-2xl bg-brand-accent/10 border border-brand-accent/30">
              <p className="text-xs text-text-secondary font-medium">
                Prefere conversar diretamente agora sem preencher o formulário?
              </p>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de solicitar um site com a Vitrine Digital.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover px-4 py-2.5 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border-medium shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Solicitação enviada com sucesso!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Muito obrigado, <strong className="text-text-primary">{name}</strong>! Recebemos seus dados. Para agilizar ainda mais o início do seu projeto, clique no botão abaixo para nos chamar no WhatsApp.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppUrl(`Olá! Acabei de enviar meus dados no site da Vitrine Digital. Meu nome é ${name} e quero criar o site do meu negócio.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-xl shadow transition-all inline-flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir conversa no WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-3 text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                    >
                      Enviar outra solicitação
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-5">
                  <div className="border-b border-border-subtle pb-4">
                    <h3 className="text-lg font-bold text-text-primary">Formulário de Orçamento Rápido</h3>
                    <p className="text-xs text-text-muted mt-1">Leva menos de 1 minuto para preencher.</p>
                  </div>

                  {error && (
                    <div className="p-3 text-xs text-red-200 bg-red-950/50 border border-red-500/40 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ex: Carlos Silva"
                        className="w-full px-3.5 py-2.5 text-xs bg-canvas rounded-lg border border-border-subtle focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-text-primary outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Seu WhatsApp com DDD *
                      </label>
                      <input
                        type="text"
                        required
                        value={whatsapp}
                        onChange={handleWhatsappChange}
                        placeholder="(22) 98163-1084"
                        className="w-full px-3.5 py-2.5 text-xs bg-canvas rounded-lg border border-border-subtle focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-text-primary outline-none transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        E-mail de Contato (Opcional)
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-canvas rounded-lg border border-border-subtle focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-text-primary outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                        Tipo de Negócio *
                      </label>
                      <select
                        value={businessType}
                        onChange={(e) => setBusinessType(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-xs bg-canvas rounded-lg border border-border-subtle focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-text-primary outline-none transition-colors"
                      >
                        <option value="loja">Loja / Comércio Varejista</option>
                        <option value="restaurante">Restaurante / Gastronomia / Lanchonete</option>
                        <option value="barbearia">Barbearia / Salão / Estética</option>
                        <option value="oficina">Oficina Mecânica / Auto Center</option>
                        <option value="servico">Prestador de Serviços / Autônomo</option>
                        <option value="outro">Outro segmento</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                      Qual o prazo desejado para ter o site no ar?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: '24h', label: 'Hoje / 24h (Urgente)' },
                        { id: '3dias', label: 'Em até 3 dias' },
                        { id: '1semana', label: '1 semana' },
                        { id: 'pesquisa', label: 'Só pesquisando' }
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setUrgency(item.id)}
                          className={`p-2 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                            urgency === item.id
                              ? 'bg-brand-accent/20 border-brand-accent text-brand-accent'
                              : 'bg-canvas border-border-subtle text-text-muted hover:text-text-primary'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5">
                      Conte um pouco sobre o que você precisa
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Ex: Tenho uma loja de roupas e quero um catálogo simples com fotos para minhas clientes pedirem pelo WhatsApp..."
                      className="w-full px-3.5 py-2.5 text-xs bg-canvas rounded-lg border border-border-subtle focus:border-brand-accent focus:ring-1 focus:ring-brand-accent text-text-primary outline-none transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="button"
                      onClick={(e) => handleSubmit(e, true)}
                      className="w-full sm:w-auto flex-1 px-6 py-3.5 text-xs font-bold text-white bg-brand-accent hover:bg-brand-accent-hover active:bg-brand-accent-dark rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer accent-glow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Solicitar pelo WhatsApp (Recomendado)</span>
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-5 py-3.5 text-xs font-semibold text-text-secondary hover:text-text-primary bg-surface-elevated hover:bg-surface border border-border-subtle rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar pelo site</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-text-muted text-center pt-2">
                    🔒 Seus dados estão seguros e serão utilizados apenas para elaboração do seu orçamento.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
