export const site = {
  name: "Decor Sandri",
  signature: "by Inventando Festa",
  region: "São Leopoldo e região",
  phone: "5551998429491",
  instagram: "https://www.instagram.com/inventandofesta_decoracoes/",
  whatsappMessage: "Olá, vim pelo site e quero um orçamento para minha festa!",
} as const;

export const whatsappUrl = `https://wa.me/${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navigation = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
] as const;

export const portfolioItems = [
  {
    src: "/images/hero.png",
    alt: "Decoração elegante em tons de vinho e dourado",
    label: "Celebrações elegantes",
    layout: "featured",
    position: "center",
  },
  {
    src: "/images/safari.png",
    alt: "Decoração infantil com tema de safari",
    label: "Infantis cheias de encanto",
    layout: "standard",
    position: "center",
  },
  {
    src: "/images/burgundy.png",
    alt: "Decoração adulta em tons de vinho",
    label: "Adultas com personalidade",
    layout: "portrait",
    position: "center",
  },
  {
    src: "/images/hero.png",
    alt: "Detalhes de uma composição decorativa",
    label: "Detalhes que surpreendem",
    layout: "standard",
    position: "65% center",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Festas infantis",
    text: "Universos lúdicos, delicados e cheios de personalidade para celebrar a infância.",
  },
  {
    number: "02",
    title: "Festas adultas",
    text: "Composições elegantes e marcantes para aniversários e momentos especiais.",
  },
  {
    number: "03",
    title: "Projetos personalizados",
    text: "Conceito, paleta e detalhes criados para traduzir a sua história em um cenário único.",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Você conta seu sonho",
    text: "Conversamos sobre a data, o estilo, o espaço e tudo o que você imagina.",
  },
  {
    number: "02",
    title: "Criamos a proposta",
    text: "Desenhamos um projeto personalizado, alinhado ao seu momento e orçamento.",
  },
  {
    number: "03",
    title: "Transformamos o espaço",
    text: "Cuidamos da montagem e de cada detalhe para você apenas celebrar.",
  },
] as const;

export const faqs = [
  {
    question: "Com quanto tempo de antecedência devo reservar?",
    answer:
      "Quanto antes, melhor — especialmente para fins de semana. Fale conosco para conferir a disponibilidade da sua data.",
  },
  {
    question: "Vocês atendem fora de São Leopoldo?",
    answer:
      "Atendemos São Leopoldo e região. Consulte pelo WhatsApp se o seu local está dentro da área de atendimento.",
  },
  {
    question: "A decoração é personalizada?",
    answer:
      "Sim. Tema, paleta, tamanho e composição são definidos de acordo com a sua celebração, espaço e orçamento.",
  },
  {
    question: "Como recebo o orçamento?",
    answer:
      "Clique em qualquer botão de WhatsApp e conte a data, o local e o tipo de festa. A partir disso, montamos uma proposta para você.",
  },
] as const;
