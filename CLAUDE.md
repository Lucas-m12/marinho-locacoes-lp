# Marinho Locações · landing page

Página única, estática, de locação de equipamentos para obra em Cajueiro (AL) e região. O único objetivo da página é levar a pessoa a pedir orçamento no WhatsApp. Público: pedreiros, pintores, eletricistas, pequenos empreiteiros e gente reformando a casa, quase sempre no celular.

## Comandos

- `bun install`: instala as dependências.
- `bun run dev`: servidor local em http://localhost:4321.
- `bun run build`: `astro check` + build estático em `dist/`.
- `bun run preview`: serve o `dist/` gerado.
- `bun run check`: só a checagem de tipos.

## Publicação

- Cloudflare Workers, como Worker só de arquivos estáticos, com build automático a cada push na `main`: `bun run build`, depois `npx wrangler deploy`.
- `wrangler.jsonc` publica o `dist/`. Sem esse arquivo, o wrangler tenta se configurar sozinho e o deploy falha. O `name` precisa ser igual ao nome do Worker no painel (`marinho-locacoes-lp`).
- Não adicione o adapter `@astrojs/cloudflare` nem um `main` no `wrangler.jsonc`: o site é estático e não precisa de servidor.

## Onde fica cada coisa

- `src/content/site.ts`: todos os textos, links, dados de contato e fotos. Conteúdo se edita só aqui, nunca direto nos componentes.
- `src/styles/tokens.css`: cores, fontes, raios, foco. `src/styles/base.css`: reset, links, foco, `.container`, `.secao`, `.fundo-escuro`.
- `src/components/`: uma seção por arquivo, na ordem do design. `src/components/ui/`: `Icon`, `Foto`, `Botao`, `TituloSecao`, `Faixa`.
- `src/pages/`: `index.astro` e os arquivos gerados no build (`og.png`, `apple-touch-icon.png`, `favicon.ico`, `favicon.svg`, `robots.txt`). O sitemap vem do `@astrojs/sitemap`.
- `src/assets/marca/`: cópia exata dos SVGs de `referencia/assets/`. Não edite, não recolora, não redesenhe.
- `public/`: `politica-de-troca.pdf` e `politica-de-caucao-e-documentos.pdf`, servidos em `/politica-de-troca.pdf` e `/politica-de-caucao-e-documentos.pdf`. São gerados fora do site: não edite, não comprima, não renomeie. Para atualizar, troque o arquivo inteiro pelo novo, com o mesmo nome.
- `referencia/`: design aprovado. É a fonte da verdade do layout e dos textos.

## Regras da marca

Cores (use sempre os tokens `--cor-*`):

| Token | Cor | Uso |
| --- | --- | --- |
| `--cor-azul` | #13294B | principal, fundos escuros, texto em fundo claro |
| `--cor-terracota` | #B4532A | botão principal, barras, detalhes |
| `--cor-terracota-claro` | #E58A5F | destaque e links sobre o azul |
| `--cor-areia` | #F2E8D7 | fundo de seção |
| `--cor-creme` | #FBF6EC | fundo de seção e de cartão, texto sobre escuro |
| `--cor-cafe` | #2B1E17 | reservado |
| `--cor-azul-grade` | #1F3B68 | linhas do padrão grade de andaime |
| `--cor-texto-apoio-no-azul` | #C9D2DF | texto secundário em fundo escuro |
| `--cor-texto-apoio` | #5E544C | texto secundário em fundo claro |
| `--cor-foto-pendente` | #E9DCC4 | fundo do placeholder de foto |
| `--cor-divisoria` | #D9CBB3 | divisórias |
| `--cor-terracota-hover` | #943F1E | hover do botão terracota |
| `--cor-desativado` | #E3D6BF | botão desativado |

Contraste (AA):
- Nunca use texto #B4532A sobre o azul (2,9:1). Sobre o azul, use #E58A5F.
- Texto terracota pequeno só sobre creme. Sobre areia, só em texto grande.
- Links: terracota em fundo creme, azul em fundo areia, terracota claro em fundo azul. Sempre sublinhados. No hover viram azul (ou creme, no fundo azul).

Forma:
- Cantos de 12 px em botões (`--raio-botao`) e 14 px em cartões (`--raio-cartao`). O resto é reto.
- Sem sombras, sem degradês, sem emojis.

Fonte Archivo (variável, eixos `wdth` e `wght`), via Google Fonts:
- 125% (`--largura-marca`) para nome de marca, 75% (`--largura-titulo`) para títulos e rótulos, 100% (`--largura-texto`) para texto corrido.
- O CSS da fonte tem `preload` no `<head>` e `<link rel="stylesheet">` no fim do `<body>`. Assim não bloqueia a renderização (Lighthouse 100). Não mova o stylesheet para o `<head>`.

## Conteúdo: não inventar dados

- Não invente preços, endereço, horários, depoimentos, números nem municípios.
- Os marcadores pendentes ficam visíveis até o cliente mandar o dado real: `[FOTO: …]`, `[MAPA: …]`, `[MUNICÍPIOS]`, `[CONDIÇÕES DE ENTREGA]`, `[TABELA DE PREÇOS]`.
- Já resolvidos: `[REGRAS DE CAUÇÃO E DOCUMENTOS]` e `[POLÍTICA DE TROCA]`. As respostas estão no FAQ (`duvidas` em `src/content/site.ts`), cada uma com link para o PDF da política em `public/`.
- Pergunta do FAQ pode ter `link` (`rotulo` + `href`), que aparece num parágrafo próprio abaixo da resposta, com o ícone `documento`, em nova aba (`target="_blank"`, `rel="noopener"`, `type="application/pdf"`).
- Nunca descreva a empresa como "ferramentas e andaimes": o catálogo vai crescer. Use "equipamentos para obra".
- Não existe loja aberta. Todo pedido é pelo WhatsApp: todos os botões de orçamento apontam para `contato.whatsapp` (https://wa.me/5582999636057), com `target="_blank"` e `rel="noopener"`. Use o componente `<Botao>`.
- O JSON-LD `LocalBusiness` leva só o que é real: nome, telefone, url, `areaServed` e `sameAs` (Instagram).
- Use os textos exatamente como estão em `referencia/design/`.

## Layout

- Mobile-first. O CSS base segue `referencia/design/landing-celular.html`, e `@media (min-width: 768px)` segue `landing-desktop.html`. Use sempre esse mesmo breakpoint, e `(max-width: 767.98px)` quando um bloco só valer no celular.
- Use os valores exatos dos arquivos de referência (fonte, espaçamento, cor, canto), sem arredondar.
- Logos: `<img>` do SVG nas medidas do design (212×44 e 168×35 no cabeçalho, 260×54 e 200×42 no rodapé). O SVG preserva a proporção sozinho. Não use `object-fit: fill` e não recolora.
- Zero JavaScript no cliente. O menu do celular é `<details>/<summary>`, e o FAQ também.
- Alvos de toque de pelo menos 44 px (`--alvo-toque`). Quando o design tem um link mais baixo, aumente a área clicável com `::after` em vez de mudar o layout.
- Foco visível: `:focus-visible` global com contorno de 3 px (`--foco-cor`). Em fundo azul ou terracota, aplique `.fundo-escuro` (o contorno fica creme).
- Sem rolagem horizontal a partir de 320 px.
- `vite.build.cssTarget` (em `astro.config.mjs`) mira o Safari 14 para as media queries saírem na sintaxe clássica (iPhones antigos). Não remova.

## Fotos

Salve o arquivo em `src/assets/fotos/`, importe no topo de `src/content/site.ts` e preencha `imagem` na foto correspondente, revisando o `alt`:

```ts
import andaime from '../assets/fotos/andaime.jpg';
// ...
foto: { marcador: '[FOTO: andaime montado]', marcadorCelular: '[FOTO]', imagem: andaime, alt: 'Andaime montado em obra em Cajueiro' },
```

O componente `Foto` troca o placeholder por um `<img>` otimizado do `astro:assets`, com WebP, `srcset`, `width`, `height` e `alt`. A foto do topo carrega com prioridade, as outras com lazy.

## Ícones

`<Icon name="whatsapp | instagram | site | local | menu | fechar | documento">`, em `src/components/ui/Icon.astro`. A cor vem sempre de `currentColor`.

- `whatsapp` e `instagram`: glifos oficiais das marcas, em uma cor só. Os desenhos vêm do Simple Icons (CC0, v16.35.0), sem alteração. O `ajusteMarca` (`translate(1.5 1.5) scale(0.875)`) só reduz o glifo para 21/24 do quadro, para ele ter o mesmo tamanho visual dos ícones de linha. Não redesenhe, não distorça e não use o degradê do Instagram (a marca não usa degradês).
- `site`, `local`, `menu`, `fechar`, `documento`: SVG de linha, traço 2,2 (2,4 nos botões), pontas retas.

## Antes de entregar

- `bun run build` sem erros nem avisos.
- Compare com `referencia/design/` em 390, 768 e 1440 px.
- Lighthouse no celular ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO.
