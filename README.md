# Decor Sandri — Landing page institucional

Landing page desenvolvida para a **Decor Sandri by Inventando Festa**, marca especializada em decorações personalizadas para festas infantis e adultas em São Leopoldo e região.

O projeto traduz a identidade da empresa para uma experiência digital sofisticada, acolhedora e orientada à conversão. A navegação conduz o visitante da apresentação da marca ao portfólio, processo de trabalho, avaliações reais e solicitação de orçamento pelo WhatsApp.

[Acessar o projeto publicado](https://julianastomazi.github.io/decor-sandri-festas/)

![Página inicial da Decor Sandri](public/images/hero-decor-sandri.webp)

## O desafio

A Decor Sandri já possuía identidade visual e um acervo consistente de trabalhos, mas precisava reuni-los em uma presença digital que transmitisse o caráter autoral da marca e facilitasse o primeiro contato comercial.

Os principais objetivos foram:

- valorizar as decorações sem transformar a experiência em um catálogo convencional;
- comunicar cuidado, exclusividade e organização;
- construir confiança com avaliações reais e um processo de contratação claro;
- tornar o pedido de orçamento simples em qualquer dispositivo;
- preservar a qualidade visual em telas grandes, tablets e celulares.

## A solução

A página foi construída como uma narrativa visual. A hero estabelece o posicionamento premium da marca; a galeria editorial apresenta diferentes estilos de celebração; a seção institucional aproxima a profissional do público; e as etapas seguintes respondem às principais dúvidas antes do contato.

A direção visual combina vinho, marrom, cobre e dourado, apoiada por tipografia editorial, imagens com enquadramento responsivo e interações discretas. Os pontos de conversão aparecem ao longo da jornada sem competir com o conteúdo.

## Experiência desenvolvida

### Apresentação da marca

- hero responsiva com imagem em alta resolução e área protegida para leitura;
- logotipo tratado para integração ao cabeçalho escuro;
- navegação por âncoras e menu adaptado para dispositivos móveis;
- chamadas para orçamento integradas ao WhatsApp;
- prova social com nota e quantidade de avaliações do Google.

### Galeria “Inspirações”

- composição editorial baseada em uma grade de 12 colunas;
- áreas visuais proporcionais para equilibrar imagens de formatos diferentes;
- variações planejadas para desktop, tablet e mobile;
- fundos sutis e sombras leves que preservam o protagonismo das decorações;
- microinterações aplicadas somente quando agregam contexto à navegação.

### Conteúdo institucional e comercial

- apresentação da história e da profissional responsável pela marca;
- fotografia integrada gradualmente ao fundo da seção;
- serviços organizados por tipo de celebração;
- processo de contratação explicado em três etapas;
- perguntas frequentes em acordeão acessível;
- chamada final direcionada ao pedido de orçamento.

### Avaliações reais

- alternância suave entre depoimentos publicados no Google;
- pausa automática durante a interação do visitante;
- estabilidade de layout durante a troca do conteúdo;
- comportamento alternativo para pessoas que preferem movimento reduzido.

## Decisões técnicas

- **Next.js com App Router** para organizar a aplicação por componentes e gerar uma versão estática;
- **TypeScript** para garantir contratos mais seguros entre dados e interface;
- **CSS responsivo** com variáveis, `clamp()` e breakpoints orientados pelo conteúdo;
- **Next Font** para carregar Manrope e Cormorant Garamond com menor impacto visual durante a renderização;
- **dados estruturados de negócio local**, metadados, URL canônica e Open Graph;
- conteúdo recorrente centralizado para facilitar manutenção e inclusão de novos trabalhos;
- exportação estática compatível com GitHub Pages, sem dependências de servidor.

## Acessibilidade e qualidade

O projeto contempla:

- estrutura semântica de títulos, seções, links e botões;
- textos alternativos nas imagens;
- navegação por teclado e estados de foco visíveis;
- atributos ARIA nos controles interativos;
- contraste adequado sobre imagens e fundos institucionais;
- suporte a `prefers-reduced-motion`;
- dimensionamento de imagens para reduzir mudanças de layout;
- validações automatizadas de formatação, lint, tipos e build.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- CSS
- ESLint
- Prettier
- pnpm
- GitHub Actions
- GitHub Pages

## Estrutura do projeto

```text
app/                  página, metadados e estilos globais
components/           componentes visuais e interativos
lib/site-data.ts      conteúdo e configurações da marca
public/images/        identidade visual e imagens do portfólio
.github/workflows/    validação e publicação automatizadas
```

## Executando localmente

Requisitos: Node.js 22 e pnpm 10.

```bash
pnpm install
pnpm dev
```

O ambiente de desenvolvimento estará disponível em `http://localhost:3000`.

## Validação

Para executar todas as verificações do projeto:

```bash
pnpm check
```

O comando valida formatação, lint, tipos e build de produção.

## Publicação

O projeto utiliza exportação estática. Após o merge na branch `main`, o GitHub Actions executa as verificações de qualidade, gera os arquivos de produção e publica a nova versão no GitHub Pages.

---

Projeto desenvolvido como solução digital sob medida para a Decor Sandri by Inventando Festa.
