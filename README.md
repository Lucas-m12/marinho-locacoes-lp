# Marinho Locações

Landing page de [marinholocacoes.com](https://marinholocacoes.com): locação de equipamentos para obra em Cajueiro (AL) e região. São andaimes, escoras de laje, ferramentas elétricas, carrocinha e o que mais a obra precisar.

A empresa não tem loja aberta, e todo pedido acontece pelo WhatsApp. O único objetivo da página é levar a pessoa a pedir orçamento por lá.

## Stack

- [Astro](https://astro.build) 7 + TypeScript, com saída 100% estática.
- CSS puro com variáveis (custom properties) para os tokens da marca, sem Tailwind e sem biblioteca de componentes.
- Nenhum JavaScript no cliente: o menu do celular e as perguntas frequentes usam `<details>`/`<summary>`.
- Fonte Archivo (Google Fonts) e imagens otimizadas com `astro:assets`.
- Lighthouse no celular: 100 em Performance, Acessibilidade, Boas práticas e SEO.

## Comandos

Requer [Bun](https://bun.sh) 1.3+ (ou Node 22.22+ com npm).

| Comando | O que faz |
| --- | --- |
| `bun install` | Instala as dependências |
| `bun run dev` | Servidor local em http://localhost:4321 |
| `bun run build` | Checagem de tipos + build estático em `dist/` |
| `bun run preview` | Serve o `dist/` gerado |
| `bun run check` | Só a checagem de tipos |

## Estrutura

```
src/
  content/site.ts       textos, links, contato e fotos (o único arquivo de conteúdo)
  styles/tokens.css     cores, fontes, cantos e foco
  styles/base.css       reset, links, foco e utilitários
  layouts/Base.astro    <head>: SEO, Open Graph, JSON-LD e fontes
  components/           uma seção por arquivo, na ordem da página
  components/ui/        Icon, Foto, Botao, TituloSecao, Faixa
  pages/                index.astro + og.png, favicons e robots.txt gerados no build
  assets/marca/         SVGs oficiais do logo (não editar)
referencia/             design aprovado (desktop 1440 px, celular 390 px e componentes)
```

## Editar conteúdo

Todos os textos, links, telefone, Instagram e fotos ficam em `src/content/site.ts`. Para mudar o conteúdo não é preciso mexer no layout.

Os marcadores entre colchetes, como `[MUNICÍPIOS]` e `[TABELA DE PREÇOS]`, indicam informações que ainda faltam. Eles ficam visíveis de propósito até o dado real chegar. Não invente preços, endereço, horários, depoimentos nem números.

### Fotos

Para colocar uma foto no lugar de um marcador `[FOTO: …]`:

1. Salve o arquivo em `src/assets/fotos/`.
2. Importe-o no topo de `src/content/site.ts`.
3. Preencha `imagem` na foto correspondente e revise o `alt`.

```ts
import andaime from '../assets/fotos/andaime.jpg';

foto: {
  marcador: '[FOTO: andaime montado]',
  marcadorCelular: '[FOTO]',
  imagem: andaime,
  alt: 'Andaime montado em obra em Cajueiro',
},
```

O build gera as versões otimizadas (WebP, `srcset`, `width` e `height`).

### Ícones

Os ícones ficam em `src/components/ui/Icon.astro`. Os de WhatsApp e Instagram são os glifos oficiais das marcas, em uma cor só (vindos do [Simple Icons](https://simpleicons.org), CC0). Os demais são ícones de linha no estilo da marca.

## Publicação

O build gera um site estático em `dist/`, que pode ir para qualquer hospedagem estática (Cloudflare Pages, Netlify, Vercel). Use o comando de build `bun run build` e a pasta de saída `dist`. O endereço canônico é `https://marinholocacoes.com`. Se o domínio mudar, atualize `site` em `astro.config.mjs`.

## Marca

As regras de cores, contraste, fontes e conteúdo estão em [`CLAUDE.md`](CLAUDE.md). O design aprovado está em `referencia/design/`.
