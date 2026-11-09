import { ServiceItem, PortfolioItem, TestimonialItem, PricingPlan, BlogPost, FAQItem } from '../types';

export const WHATSAPP_NUMBER = "55221981631084";
export const WHATSAPP_DISPLAY = "(22) 98163-1084";
export const INSTAGRAM_HANDLE = "vitrinedigital.7";
export const INSTAGRAM_URL = "https://instagram.com/vitrinedigital.7";

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "sites-institucionais",
    number: "01",
    title: "Sites Institucionais para Comércios e Empresas",
    shortDesc: "Páginas profissionais para apresentar sua marca com autoridade, credibilidade e presença impecável no Google.",
    fullDesc: "Criamos a vitrine digital definitiva para o seu negócio. Seus futuros clientes encontrarão todas as informações essenciais organizadas: quem é sua empresa, fotos reais do espaço, catálogo de serviços, localização no mapa e botões diretos de contato.",
    features: [
      "Design moderno e limpo sem poluição visual",
      "Adaptação perfeita para 100% dos modelos de smartphones",
      "Botão de WhatsApp flutuante de resposta rápida",
      "Integração com Google Maps e horário de funcionamento",
      "Otimização inicial para buscas no Google (SEO)"
    ],
    deliveryTime: "Pronto a partir de 24 horas",
    idealFor: "Lojas físicas, prestadores de serviços, consultórios e pequenas empresas"
  },
  {
    id: "landing-pages",
    number: "02",
    title: "Landing Pages de Alta Conversão",
    shortDesc: "Páginas focadas em uma única ação: transformar visitantes curiosos em orçamentos e mensagens no WhatsApp.",
    fullDesc: "Desenvolvidas com metodologia de resposta direta e copywriting persuasivo. Cada elemento — da chamada inicial ao botão final — é pensado para reduzir objeções e guiar o visitante a chamar seu negócio imediatamente.",
    features: [
      "Estrutura psicológica de conversão comprovada",
      "Carregamento ultra-rápido (menos de 1,5s no 4G)",
      "Formulário direto e botões chamativos para WhatsApp",
      "Seção de depoimentos e provas sociais destacadas",
      "Pronta para anúncios patrocinados (Instagram, Facebook e Google Ads)"
    ],
    deliveryTime: "Entregue no mesmo dia (24h)",
    idealFor: "Profissionais liberais, campanhas promocionais, autônomos e lançamentos",
    badge: "Mais Rápido"
  },
  {
    id: "catalogo-digital",
    number: "03",
    title: "Catálogo Online & Pedido no WhatsApp",
    shortDesc: "Apresente seus produtos de maneira elegante sem pagar taxas abusivas de marketplaces ou plataformas pesadas.",
    fullDesc: "Seu cliente navega pelas fotos, confere preços, descrições detalhadas e clica em 'Pedir no WhatsApp'. A mensagem já chega pronta para você com o nome do produto e a quantidade, facilitando o fechamento da venda.",
    features: [
      "Vitrine de produtos com fotos em alta definição",
      "Separação por categorias intuitivas",
      "Botão de compra direta com mensagem pré-preenchida no WhatsApp",
      "Fácil atualização de preços e estoque sem dor de cabeça",
      "Sem cobrança de porcentagem sobre as suas vendas"
    ],
    deliveryTime: "24h a 48h",
    idealFor: "Lojas de roupas, calçados, eletrônicos, cosméticos e varejo em geral",
    badge: "Alta Procura"
  },
  {
    id: "cardapio-digital",
    number: "04",
    title: "Cardápio Digital para Gastronomia",
    shortDesc: "Cardápio interativo e dinâmico para restaurantes, pizzarias, hamburguerias e lanchonetes.",
    fullDesc: "Diga adeus aos PDFs pesados que não abrem no celular do cliente. Criamos cardápios digitais interativos com fotos de dar água na boca, botão de pedidos diretos para o WhatsApp do delivery e opção de QR Code para mesas.",
    features: [
      "Abertura instantânea no celular do cliente",
      "QR Code personalizado para imprimir nas mesas e balcões",
      "Organização por pratos, bebidas, combos e sobremesas",
      "Botão de pedido direto para o WhatsApp da cozinha/balcão",
      "Informações claras de taxa de entrega e tempo estimado"
    ],
    deliveryTime: "Pronto a partir de 24h",
    idealFor: "Restaurantes, pizzarias, lanchonetes, confeitarias e cafeterias"
  },
  {
    id: "agendamento-online",
    number: "05",
    title: "Sites com Agendamento para Barbearias e Salões",
    shortDesc: "Facilite o agendamento de horários para barbearias, salões de beleza, clínicas estéticas e estúdios.",
    fullDesc: "Reduza o tempo gasto respondendo 'qual horário tem livre?'. Seu site apresenta sua equipe, tabela de serviços com preços e permite ao cliente escolher o horário e confirmar diretamente no WhatsApp.",
    features: [
      "Apresentação da equipe e especialidades",
      "Tabela de preços transparente de serviços",
      "Galeria de cortes, antes/depois e procedimentos",
      "Redução drástica no número de faltas e atrasos",
      "Localização e rotas pelo Waze/Google Maps"
    ],
    deliveryTime: "24h a 48h",
    idealFor: "Barbearias, salões de beleza, manicures, clínicas de estética e tatuadores"
  },
  {
    id: "redesign-modernizacao",
    number: "06",
    title: "Redesign e Modernização de Sites Antigos",
    shortDesc: "Seu site atual parece antigo ou não funciona bem no celular? Nós transformamos sua presença digital por completo.",
    fullDesc: "Se o seu site foi feito há alguns anos, é provável que esteja perdendo clientes por lentidão ou layout quebrado no smartphone. Nós recriamos sua página do zero, mantendo sua essência e elevando o padrão para o nível das grandes marcas.",
    features: [
      "Diagnóstico completo de problemas do site antigo",
      "Migração segura sem perder seu domínio atual",
      "Nova roupagem visual sofisticada e rápida",
      "Ajuste completo para funcionamento em telas modernas",
      "Integração imediata com o WhatsApp atual da empresa"
    ],
    deliveryTime: "A partir de 24h",
    idealFor: "Empresas com sites desatualizados, lentos ou sem botões de contato"
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: "maison-ete",
    title: "Maison Été - Moda & Varejo Feminino",
    category: "lojas",
    categoryLabel: "Comércio & Varejo",
    client: "Boutique Maison Été",
    location: "São Paulo, SP",
    image: "/src/assets/images/portfolio_store_fashion_1793060895237.jpg",
    metric: "+240%",
    metricLabel: "Aumento nos pedidos via WhatsApp nos primeiros 30 dias",
    summary: "Catálogo de moda limpo e sofisticado com visualização de looks e botão de compra direta para atendimento humanizado.",
    fullStory: "A loja dependia exclusivamente de mensagens desorganizadas no direct do Instagram. Desenvolvemos uma vitrine digital em menos de 24 horas com fotos das peças e botão que envia a foto e o tamanho do look diretamente ao WhatsApp das vendedoras.",
    highlights: [
      "Catálogo dividido por coleções e novidades da semana",
      "Carregamento das fotos em menos de 1 segundo",
      "Mensagem no WhatsApp já indicando a peça de interesse",
      "Taxa de abandono reduzida em 68%"
    ],
    liveFeatures: ["Catálogo Integrado", "Pedido WhatsApp", "Design Minimalista", "100% Responsivo"]
  },
  {
    id: "livias-bistro",
    title: "Livia's Bistro & Gastronomia Artesanal",
    category: "restaurantes",
    categoryLabel: "Gastronomia & Restaurantes",
    client: "Livia's Bistro Contemporâneo",
    location: "Rio de Janeiro, RJ",
    image: "/src/assets/images/portfolio_restaurant_menu_1793060895639.jpg",
    metric: "3.2x",
    metricLabel: "Mais reservas de mesas e pedidos de delivery diretos",
    summary: "Cardápio digital moderno com fotos profissionais dos pratos, sistema de reserva simplificada e QR Code para mesas.",
    fullStory: "O restaurante utilizava um PDF de 15MB que os clientes reclamavam que demorava a abrir. Criamos um site rápido e envolvente onde o cliente visualiza pratos, harmonizações e clica para reservar uma mesa ou solicitar entrega sem pagar taxas abusivas.",
    highlights: [
      "Cardápio dinâmico com fotos apetitosas e preços claros",
      "QR Code impresso que direciona clientes das mesas para o site",
      "Integração para reservas via WhatsApp com horário e número de pessoas",
      "Economia comprovada de comissões com pedidos diretos"
    ],
    liveFeatures: ["Cardápio Digital", "Reserva WhatsApp", "QR Code Incluso", "SEO Local"]
  },
  {
    id: "iron-oak",
    title: "The Iron & Oak - Barbearia & Clube Masculino",
    category: "barbearias",
    categoryLabel: "Beleza & Barbearias",
    client: "The Iron & Oak Grooming",
    location: "Belo Horizonte, MG",
    image: "/src/assets/images/portfolio_barbershop_1793060896410.jpg",
    metric: "85%",
    metricLabel: "Dos novos clientes agora chegam pelo site e Google",
    summary: "Site de alta sofisticação com apresentação dos barbeiros, tabela de serviços e confirmação de agendamentos.",
    fullStory: "O negócio precisava atrair um público disposto a pagar um valor premium pelo corte e barba. O site foi entregue em 24h com visual escuro imponente e botões diretos de agendamento que direcionam para a recepção.",
    highlights: [
      "Perfil completo dos profissionais e fotos do espaço",
      "Tabela de combos e produtos de barbearia",
      "Botão de rota com GPS direto para a porta do estabelecimento",
      "Aumento imediato de 42% no ticket médio"
    ],
    liveFeatures: ["Agendamento Ágil", "Tabela de Preços", "Localização GPS", "Visual Imponente"]
  },
  {
    id: "autotech-precision",
    title: "AutoTech - Centro Automotivo & Oficina Mecânica",
    category: "oficinas",
    categoryLabel: "Automotivo & Oficinas",
    client: "AutoTech Centro Especializado",
    location: "Curitiba, PR",
    image: "/src/assets/images/hero_agency_devices_1793060894524.jpg",
    metric: "+180%",
    metricLabel: "Aumento nos orçamentos de revisão e manutenção solicitados",
    summary: "Página moderna que transmite total transparência técnica, laudos fotográficos e botão para socorro mecânico rápido.",
    fullStory: "A oficina sofria com a desconfiança comum do setor. O novo site destacou certificações, fotos da oficina limpa e moderna, e um botão de emergência 'Guincho e Socorro Mecânico' que conecta direto com o mecânico de plantão.",
    highlights: [
      "Botão de solicitação de orçamento com fotos do veículo",
      "Seção especial para emergências e socorro na estrada",
      "Depoimentos reais de clientes corporativos e particulares",
      "Presença no topo das pesquisas de mecânicas da região"
    ],
    liveFeatures: ["Socorro Rápido", "Orçamento Online", "Prova Social", "Google Maps"]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "depo-1",
    name: "Marcos Silveira",
    business: "Barbearia Silveira",
    segment: "Barbearia & Estética",
    city: "Campinas, SP",
    avatarText: "MS",
    quote: "Eu precisava do site com urgência para a inauguração da nossa segunda unidade. A Vitrine Digital entregou tudo no mesmo dia, exatamente como prometido! No primeiro sábado já recebemos 18 novos clientes agendando pelo WhatsApp.",
    result: "Site entregue em menos de 24h e agenda lotada no 1º final de semana",
    rating: 5
  },
  {
    id: "depo-2",
    name: "Camila Albuquerque",
    business: "La Vie Calçados & Moda",
    segment: "Comércio Varejista",
    city: "Belo Horizonte, MG",
    avatarText: "CA",
    quote: "Antes eu perdia horas no WhatsApp mandando fotos soltas de sapatos para as clientes. Agora mando o link do meu catálogo da Vitrine Digital. O visual ficou de loja de shopping de luxo e as clientes elogiam todos os dias!",
    result: "+240% de agilidade no atendimento e aumento real nas vendas",
    rating: 5
  },
  {
    id: "depo-3",
    name: "Renato Nogueira",
    business: "Pizzaria & Cucina Napoletana",
    segment: "Gastronomia",
    city: "Rio de Janeiro, RJ",
    avatarText: "RN",
    quote: "Nosso cardápio em PDF travava o celular de todo mundo. O site novo abre na hora e o botão do WhatsApp já manda o sabor e o endereço certinho. O suporte foi nota mil e o valor coube perfeitamente no nosso orçamento.",
    result: "Economia de comissões de aplicativo e pedidos diretos no WhatsApp",
    rating: 5
  },
  {
    id: "depo-4",
    name: "Juliana Prado",
    business: "Studio Juliana Prado Estética",
    segment: "Saúde & Beleza",
    city: "Niterói, RJ",
    avatarText: "JP",
    quote: "Ter um site profissional mudou a percepção das minhas clientes. Pude reajustar minha tabela de procedimentos porque a empresa agora transmite a autoridade que sempre teve na prática. Recomendo de olhos fechados!",
    result: "+40% de valorização no ticket médio dos tratamentos",
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "plano-express",
    name: "Plano Express 24h",
    badge: "Entrega no Mesmo Dia",
    price: "R$ 299,99",
    installments: "ou até 12x no cartão",
    deliveryTime: "Pronto em até 24 horas",
    description: "Ideal para quem tem pressa máxima e quer seu negócio com presença profissional na internet ainda hoje.",
    included: [
      "Site em página única de alta conversão",
      "Design 100% adaptado para celulares e computadores",
      "Botão flutuante integrado ao seu WhatsApp",
      "Apresentação da empresa e fotos dos serviços",
      "Localização com mapa interativo do Google",
      "Configuração do seu domínio (.com.br)",
      "Certificado de segurança SSL (Cadeado verde)"
    ],
    ctaLabel: "Solicitar Plano Express"
  },
  {
    id: "plano-comercial-pro",
    name: "Plano Comercial Pro",
    badge: "O Mais Escolhido",
    isPopular: true,
    price: "R$ 599,90",
    installments: "ou até 12x no cartão",
    deliveryTime: "Pronto em 24h a 48h",
    description: "Perfeito para lojas, comércios, restaurantes e clínicas que precisam expor produtos e atrair mais clientes locais.",
    included: [
      "Tudo do Plano Express e mais:",
      "Estrutura completa com seções avançadas",
      "Catálogo de produtos ou Cardápio digital interativo",
      "Botão de compra/pedido direto no WhatsApp com mensagem pronta",
      "Galeria de fotos em alta resolução com zoom",
      "Otimização de SEO para aparecer nas buscas da sua cidade",
      "Formulário de orçamento personalizado",
      "QR Code personalizado para divulgação no balcão/mesas",
      "Suporte prioritário e treinamento rápido para atualizações"
    ],
    ctaLabel: "Quero o Plano Comercial Pro"
  },
  {
    id: "plano-premium",
    name: "Plano Premium Exclusivo",
    badge: "Personalização Total",
    price: "R$ 1.000,00",
    installments: "ou até 12x no cartão",
    deliveryTime: "Pronto em 48h a 72h",
    description: "A solução definitiva para empresas que exigem máxima autoridade, múltiplas páginas e sistemas integrados.",
    included: [
      "Tudo do Plano Comercial Pro e mais:",
      "Estrutura multipáginas institucional completa",
      "Módulo de agendamento de serviços online",
      "Integração para múltiplos atendentes no WhatsApp",
      "Área de Blog e notícias para posicionamento no Google",
      "Otimização avançada de velocidade de carregamento (PageSpeed)",
      "Redação profissional de textos persuasivos (Copywriting)",
      "Garantia estendida de alterações e suporte VIP"
    ],
    ctaLabel: "Solicitar Plano Premium"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "artigo-1",
    slug: "por-que-comerciantes-perdem-vendas-sem-site",
    title: "Por que pequenos comerciantes perdem até 40% das vendas sem um site profissional em 2026",
    snippet: "Descubra por que depender apenas de redes sociais é um risco para o seu negócio e como o cliente decide onde comprar.",
    readTime: "3 min de leitura",
    date: "Atualizado recentemente",
    category: "Vendas & Negócios",
    content: [
      "Quando uma pessoa precisa de um encanador, de uma barbearia perto de casa, de uma oficina mecânica ou de uma loja de calçados, o primeiro reflexo dela não é rolar o feed de fotos: é abrir o Google.",
      "Se ao pesquisar pelo seu segmento na sua cidade o cliente encontra o site do seu concorrente com fotos organizadas, preços claros e botão de WhatsApp, a chance dele fechar com ele é de mais de 80%.",
      "As redes sociais são ótimas ferramentas de relacionamento, mas o site próprio é o seu terreno definitivo. Ele passa a sensação de segurança de que a sua empresa é sólida, tem endereço e é confiável."
    ],
    actionTip: "Não espere o cliente escolher o concorrente. Um site simples e rápido no ar já coloca você na frente de quase todo o comércio local."
  },
  {
    id: "artigo-2",
    slug: "como-funciona-site-no-mesmo-dia",
    title: "Site pronto no mesmo dia: como o método ágil da Vitrine Digital funciona na prática",
    snippet: "Esqueça orçamentos burocráticos de meses. Saiba como colocamos sua empresa online em menos de 24 horas.",
    readTime: "4 min de leitura",
    date: "Metodologia Vitrine Digital",
    category: "Bastidores & Tecnologia",
    content: [
      "Muitos empreendedores fogem de criar um site porque já tiveram experiências traumáticas com agências que demoravam 3 meses, cobravam mensalidades eternas e entregavam algo confuso.",
      "Na Vitrine Digital eliminamos reuniões desnecessárias. Trabalhamos com uma metodologia focada naquilo que realmente gera faturamento para pequenos e médios negócios: velocidade, design impecável no celular e botão de WhatsApp que funciona.",
      "Você nos envia suas fotos, seus serviços e suas informações básicas. Nossa equipe estrutura o layout, otimiza as imagens e publica seu site em poucas horas."
    ],
    actionTip: "A agilidade permite que você comece a divulgar seu novo link para os seus clientes ainda hoje."
  },
  {
    id: "artigo-3",
    slug: "instagram-vs-site-proprio-conversao",
    title: "Instagram vs. Site Próprio: onde o cliente realmente fecha a compra?",
    snippet: "Por que o cliente que pesquisa no Google gasta mais e reclama menos do que o seguidor do Instagram.",
    readTime: "3 min de leitura",
    date: "Estratégia Digital",
    category: "Marketing Local",
    content: [
      "O seguidor do Instagram muitas vezes está ali apenas passando o tempo e buscando entretenimento. Ele pergunta o preço por curiosidade e não responde mais.",
      "Já a pessoa que clica no link do seu site está em 'modo de compra'. Ela quer saber: Onde fica? Quanto custa? Como chamo no WhatsApp? Que horas abre?",
      "Quando você tem um site profissional conectado ao seu Instagram e ao seu WhatsApp, você passa a filtrar os curiosos e receber apenas contatos qualificados e prontos para comprar."
    ],
    actionTip: "Coloque o link do seu site na bio do Instagram e veja a qualidade dos seus atendimentos mudar imediatamente."
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "prazos",
    question: "Como funciona a entrega no mesmo dia (em até 24 horas)?",
    answer: "Assim que você escolhe o plano e nos envia os dados básicos do seu negócio (fotos, serviços, telefone e endereço), nossa equipe inicia a montagem imediata da sua página. No mesmo dia seu site é finalizado, revisado com você e publicado na internet!"
  },
  {
    id: "faq-2",
    category: "tecnologia",
    question: "Eu preciso comprar domínio e hospedagem por fora?",
    answer: "Não precisa se preocupar com nenhuma complicação técnica! Nós auxiliamos ou configuramos o registro do seu domínio oficial (.com.br) e conectamos a uma hospedagem de altíssima velocidade com certificado de segurança SSL (o cadeado verde de segurança)."
  },
  {
    id: "faq-3",
    category: "suporte",
    question: "Consigo alterar fotos, preços ou informações depois que o site estiver pronto?",
    answer: "Sim! Todos os nossos clientes contam com nosso suporte direto via WhatsApp para solicitar alterações de preços, novas fotos, promoções ou novos serviços de forma rápida e sem burocracia."
  },
  {
    id: "faq-4",
    category: "tecnologia",
    question: "O site vai funcionar bem no celular dos meus clientes?",
    answer: "Com certeza! Mais de 85% das pessoas navegam pela internet através do smartphone. Por isso, todos os sites da Vitrine Digital são criados com foco 'Mobile-First': carregam em menos de 2 segundos, com letras nítidas e botões fáceis de tocar."
  },
  {
    id: "faq-5",
    category: "pagamento",
    question: "Quais são as formas de pagamento disponíveis?",
    answer: "Você pode pagar via Pix à vista com desconto especial, ou parcelar em até 12x no cartão de crédito. Fornecemos recibo e total transparência antes do início do desenvolvimento."
  },
  {
    id: "faq-6",
    category: "suporte",
    question: "Sou autônomo ou tenho uma loja bem pequena, a Vitrine Digital atende meu caso?",
    answer: "Absolutamente! O nosso lema é justamente esse: 'Do pequeno empreendedor à grande empresa: todo negócio merece uma presença digital profissional.' Temos opções acessíveis desenhadas especialmente para barbearias de bairro, lojas de roupas, oficinas mecânicas e autônomos."
  }
];
