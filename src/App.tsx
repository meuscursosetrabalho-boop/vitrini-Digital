import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Blog } from './components/Blog';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { SimulatorModal } from './components/SimulatorModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { ServiceItem, PortfolioItem, PricingPlan, BlogPost } from './types';

export default function App() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');
  const [selectedPlanTitle, setSelectedPlanTitle] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceTitle(service.title);
    scrollToContact();
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    setSelectedPlanTitle(plan.name);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-canvas text-text-primary flex flex-col font-sans selection:bg-brand-accent/20 selection:text-brand-accent">
      {/* Top Bar Header with 3-Zone Contract */}
      <Header
        onOpenSimulator={() => setSimulatorOpen(true)}
        onRequestQuote={scrollToContact}
      />

      <main className="flex-1">
        {/* 1. Seção inicial impactante */}
        <Hero
          onRequestQuote={scrollToContact}
          onOpenSimulator={() => setSimulatorOpen(true)}
        />

        {/* 2. Sobre / Quem sou */}
        <About onRequestQuote={scrollToContact} />

        {/* 3. Serviços */}
        <Services onSelectService={handleSelectService} />

        {/* 4. Portfólio / Projetos */}
        <Portfolio
          onOpenProjectModal={(proj) => setSelectedProject(proj)}
          onRequestQuote={scrollToContact}
        />

        {/* 5. Depoimentos */}
        <Testimonials onRequestQuote={scrollToContact} />

        {/* 6. Formulário de contato */}
        <ContactForm
          initialService={selectedServiceTitle}
          initialPlan={selectedPlanTitle}
        />

        {/* 8. Blog / Conteúdo */}
        <Blog onOpenArticle={(article) => setSelectedArticle(article)} />

        {/* 9. Preços / Planos */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 10. FAQ */}
        <FAQ />
      </main>

      {/* 7. WhatsApp flutuante (Fixed Widget) */}
      <FloatingWhatsApp />

      {/* Quiet high-end Footer */}
      <Footer />

      {/* Interactive Modals */}
      <SimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
        onRequestWithData={(plan, notes) => {
          setSelectedPlanTitle(plan);
          scrollToContact();
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        post={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onRequestQuote={scrollToContact}
      />
    </div>
  );
}
