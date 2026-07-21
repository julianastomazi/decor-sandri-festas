# Decor Sandri

Site institucional responsivo para a Decor Sandri, especializada em festas infantis e adultas em São Leopoldo e região.

## Visão geral

O projeto transforma a identidade visual da marca em uma experiência editorial, com foco em apresentação do portfólio, confiança e conversão pelo WhatsApp. A aplicação é exportada como site estático e publicada automaticamente no GitHub Pages.

## Destaques técnicos

- Next.js com App Router e TypeScript estrito
- componentes organizados por responsabilidade
- conteúdo recorrente centralizado em `lib/site-data.ts`
- imagens responsivas com proporções e pontos de interesse controlados
- navegação móvel acessível
- metadados, Open Graph e dados estruturados de negócio local
- suporte a teclado, foco visível e movimento reduzido
- validação automática de formato, lint, tipos e build
- publicação contínua pelo GitHub Actions

## Estrutura

```text
app/                 páginas, metadados e estilos globais
components/          componentes visuais e interativos
lib/site-data.ts     conteúdo e configurações da marca
public/images/       imagens substituíveis do portfólio
.github/workflows/   qualidade e publicação automática
```

## Desenvolvimento

Requisitos: Node.js 22 e pnpm 10.

```bash
pnpm install
pnpm dev
```

Abra `http://localhost:3000`.

## Qualidade

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
```

Para executar todas as verificações:

```bash
pnpm check
```

## Substituição das imagens

As imagens ficam em `public/images`. Para atualizar o portfólio, substitua os arquivos e ajuste textos alternativos, rótulos ou enquadramento em `lib/site-data.ts`. Preserve imagens grandes o suficiente para telas de alta densidade, preferencialmente em WebP ou AVIF e com tamanho otimizado para web.

## Publicação

Todo envio para a branch `main` executa as verificações de qualidade, gera a exportação estática e publica o resultado no GitHub Pages.
