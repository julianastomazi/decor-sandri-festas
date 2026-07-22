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
  { href: "#portfolio", label: "Inspire-se" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "Dúvidas" },
] as const;

export const portfolioItems = [
  {
    src: "/images/inspire-festa-infantil-fazendinha.png",
    width: 900,
    height: 858,
    alt: "Decoração infantil com tema fazendinha, balões coloridos e personagens de animais",
    label: "Fazendinha cheia de cor",
    category: "Festa Infantil",
    layout: "feature",
  },
  {
    src: "/images/inspire-festa-adulta-rosa.png",
    width: 900,
    height: 720,
    alt: "Decoração de aniversário adulto em tons de rosa, nude e dourado",
    label: "Elegância em rosa",
    category: "Festa Adulta",
    layout: "standard",
  },
  {
    src: "/images/inspire-cha-bebe-neutro.png",
    width: 900,
    height: 720,
    alt: "Decoração de chá de bebê em azul claro, verde e tons neutros",
    label: "Delicadeza para receber",
    category: "Chá de Bebê",
    layout: "standard",
  },
  {
    src: "/images/inspire-festa-infantil-futebol.png",
    width: 900,
    height: 900,
    alt: "Decoração infantil com tema futebol em verde, preto e branco",
    label: "Paixão pelo futebol",
    category: "Festa Infantil",
    layout: "standard",
  },
  {
    src: "/images/inspire-cha-revelacao.png",
    width: 900,
    height: 992,
    alt: "Decoração de chá revelação em rosa e azul com ursinhos",
    label: "Uma doce revelação",
    category: "Chá Revelação",
    layout: "standard",
  },
  {
    src: "/images/inspire-festa-adulta-vinho.png",
    width: 900,
    height: 720,
    alt: "Decoração de aniversário adulto em vinho, cobre e dourado",
    label: "Celebração em vinho e cobre",
    category: "Festa Adulta",
    layout: "standard",
  },
  {
    src: "/images/inspire-cha-bebe-azul.png",
    width: 900,
    height: 675,
    alt: "Decoração de chá de bebê em azul marinho, verde e dourado",
    label: "Doçura para receber",
    category: "Chá de Bebê",
    layout: "wide",
  },
  {
    src: "/images/inspire-cha-bebe-rosa.png",
    width: 900,
    height: 675,
    alt: "Decoração de chá de bebê em rosa, bege e dourado",
    label: "Chá de bebê delicado",
    category: "Chá de Bebê",
    layout: "panorama",
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
