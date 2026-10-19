Quero implementar a landing page da Marinho Locações (marinholocacoes.com). O design já está pronto e aprovado; seu trabalho é transformar esse design em um site de verdade, fiel ao layout.

## Contexto
- Empresa familiar de locação de equipamentos para obra em Cajueiro (AL) e região: andaimes, escoras de laje, ferramentas elétricas, carrocinha e o que mais a obra precisar. O catálogo vai crescer, então nunca descreva a empresa como "ferramentas e andaimes".
- Não tem loja aberta: todo pedido acontece pelo WhatsApp. O único objetivo da página é levar a pessoa a pedir orçamento no WhatsApp.
- Público: pedreiros, pintores, eletricistas, pequenos empreiteiros e gente reformando a casa. Quase todos vão abrir no celular.

## Referência (pasta `referencia/`)
- `design/landing-desktop.html`: a página completa, referência em 1440 px.
- `design/landing-celular.html`: a mesma página em 390 px. No celular, siga este arquivo em vez de só "espremer" o desktop (o cabeçalho vira menu, os equipamentos viram cartões horizontais etc.).
- `design/componentes.html`: estilos de botões (normal, hover, foco, desativado), links e cartões. Os campos de formulário não entram na página agora.
- `assets/`: logos e o padrão "grade de andaime" em SVG. Use os SVGs do logo exatamente como estão: não redesenhe, não recolora e não distorça.

Os arquivos de design são HTML com estilos inline exportados de uma ferramenta de design. Ignore as tags `<x-dc>` e `<helmet>`, o `<script type="text/x-dc">` e atributos como `open="{{ yes }}"` (significa: a primeira pergunta do FAQ começa aberta). Abra os arquivos no navegador para ver o resultado esperado. Leia os três arquivos inteiros antes de começar e use os valores exatos deles (tamanhos de fonte, espaçamentos, cores, cantos), sem arredondar.

## Stack
- Astro + TypeScript, saída 100% estática.
- CSS puro com variáveis (custom properties) para os tokens. Sem Tailwind e sem biblioteca de componentes.
- Zero JavaScript no cliente, exceto um script mínimo e acessível para o menu do celular, se precisar (pode usar `<details>`/`<summary>`).
- Fonte Archivo (variável, eixos de largura e peso) do Google Fonts, com preconnect e `display=swap`, como no design. Larguras: 125% para nome de marca, 75% para títulos e rótulos, 100% para texto corrido.

## Tokens
Cores:
- Azul-marinho #13294B (principal), terracota #B4532A, terracota claro #E58A5F, areia #F2E8D7, creme #FBF6EC, café #2B1E17.
- Apoio: #1F3B68 (linhas do padrão), #C9D2DF (texto secundário em fundo escuro), #5E544C (texto secundário em fundo claro), #E9DCC4 (fundo do placeholder de foto), #D9CBB3 (divisórias), #943F1E (hover do botão terracota).

Regras:
- Nunca use texto #B4532A sobre o azul (contraste 2,9:1); sobre o azul, use #E58A5F.
- Texto terracota pequeno só sobre creme; sobre areia, só em texto grande.
- Cantos de 12 px em botões e 14 px em cartões; o resto é reto. Sem sombras, sem degradês e sem emojis.

## Estrutura (na ordem do design)
1. Cabeçalho com o logo negativo, o menu (Como funciona, Equipamentos, Área atendida, Dúvidas) e o botão "Pedir orçamento".
2. Topo com "Alugue o que sua obra precisa.", o botão "Pedir orçamento no WhatsApp" e a área de foto sobre o padrão grade de andaime.
3. Como funciona (3 passos).
4. Equipamentos (cartões, mais o cartão "E o que mais a obra precisar").
5. Diferenciais (fundo azul).
6. Área atendida (texto e mapa).
7. Perguntas frequentes com `<details>`/`<summary>`.
8. Chamada final em terracota.
9. Rodapé.

Use os textos exatamente como estão nos arquivos de referência.

## Links e dados
- WhatsApp (82) 99963-6057: todos os botões de orçamento apontam para https://wa.me/5582999636057, em nova aba com `rel="noopener"`.
- Instagram @marinho_locacoes12: https://www.instagram.com/marinho_locacoes12/
- Site: marinholocacoes.com
- Coloque todos os textos, links e dados em um único arquivo (por exemplo, `src/content/site.ts`) para eu poder editar sem mexer no layout.

## Pendências (não invente nada)
- Mantenha visíveis os marcadores [FOTO: …], [MAPA: …], [MUNICÍPIOS], [CONDIÇÕES DE ENTREGA] e [TABELA DE PREÇOS].
- [REGRAS DE CAUÇÃO E DOCUMENTOS] e [POLÍTICA DE TROCA] já foram resolvidos: o FAQ tem as respostas e os links para `public/politica-de-caucao-e-documentos.pdf` e `public/politica-de-troca.pdf`. Os PDFs são gerados fora do site: não edite, não comprima e não renomeie.
- Não invente preços, endereço, horários, depoimentos nem números.
- Fotos: crie um componente que mostra a caixa de placeholder com a descrição quando não houver imagem, e um `<img>` otimizado (astro:assets, com width, height e alt) quando eu passar o arquivo.

## Ícones
Os ícones de contato (balão de mensagem, globo, arroba e alfinete) são SVG de linha, traço 2,2 e pontas retas, como no design. Faça um componente `<Icon name="...">`, para eu poder trocar depois pelos arquivos oficiais do WhatsApp e do Instagram.

## SEO e metadados
- `lang="pt-BR"`, title e meta description focados em "locação de equipamentos para obra em Cajueiro, AL".
- Favicon e apple-touch-icon a partir de `assets/marinho-perfil.svg`.
- Open Graph com imagem 1200×630: o logo negativo centralizado sobre #13294B.
- JSON-LD LocalBusiness só com o que é real: nome, telefone +55 82 99963-6057, url, areaServed "Cajueiro, AL e região" e sameAs com o Instagram.
- sitemap e robots.txt.

## Acessibilidade e qualidade
- HTML semântico (header, nav, main, sections com títulos, footer) e um link "Pular para o conteúdo".
- Foco visível em tudo que é clicável (contorno de 3 px, como em `componentes.html`).
- Alvos de toque com pelo menos 44 px e contraste AA.
- Sem rolagem horizontal a partir de 320 px.
- Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO, no celular.

## Como trabalhar
1. Leia os arquivos de referência e me mostre um plano curto (estrutura de pastas, componentes e tokens) antes de escrever o código.
2. Implemente.
3. Rode o build e confira com Playwright em 390, 768 e 1440 px: tire screenshots e compare com os arquivos de referência abertos no mesmo tamanho. Corrija o que estiver diferente.
4. Crie um CLAUDE.md com as regras da marca (cores, contraste, fontes, "não inventar dados") e os comandos do projeto.
5. No final, me diga como publicar em marinholocacoes.com, sem configurar o deploy ainda.
