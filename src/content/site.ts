import type { ImageMetadata } from 'astro';
import andaimeTopo from '../assets/ilustracoes/andaime-topo.svg';
import andaime from '../assets/ilustracoes/andaime.svg';
import ferramentas from '../assets/ilustracoes/ferramentas.svg';
import carrocinha from '../assets/ilustracoes/carrocinha.svg';

export type Foto = {
  fotoDescricao: string;
  ilustracao: ImageMetadata;
  imagem?: ImageMetadata;
  alt: string;
};

export type Link = {
  rotulo: string;
  href: string;
};

export type Pergunta = {
  pergunta: string;
  resposta: string;
  link?: Link;
};

export const empresa = {
  nome: 'Marinho Locações',
  estado: 'Alagoas',
  municipiosAtendidos: ['Cajueiro', 'Capela', 'Viçosa', 'Chã Preta', 'Paulo Jacinto', 'Atalaia', 'Pilar', 'Murici'],
};

export const contato = {
  telefone: '(82) 99963-6057',
  telefoneInternacional: '+55 82 99963-6057',
  whatsapp: 'https://wa.me/5582999636057',
  instagram: {
    usuario: '@marinho_locacoes12',
    url: 'https://www.instagram.com/marinho_locacoes12/',
  },
  site: 'marinholocacoes.com',
};

export const seo = {
  titulo: 'Locação de equipamentos para obra em Cajueiro, AL · Marinho Locações',
  descricao:
    'Locação de equipamentos para obra em Cajueiro, AL e região: andaimes, ferramentas elétricas, carrocinha e mais. Entrega e coleta na obra. Orçamento pelo WhatsApp.',
  imagemAlt: 'Logo da Marinho Locações sobre fundo azul-marinho',
};

export const acessibilidade = {
  pularParaConteudo: 'Pular para o conteúdo',
  inicio: 'Marinho Locações, início',
  menu: 'Menu',
  navegacao: 'Principal',
  logo: 'Marinho Locações',
};

export const cabecalho = {
  links: [
    { rotulo: 'Como funciona', href: '#como-funciona' },
    { rotulo: 'Equipamentos', href: '#equipamentos' },
    { rotulo: 'Área atendida', href: '#area' },
    { rotulo: 'Dúvidas', href: '#duvidas' },
  ] satisfies Link[],
  botao: 'Pedir orçamento',
};

export const topo = {
  local: 'Cajueiro e região',
  titulo: 'Alugue o que sua obra precisa.',
  texto:
    'Andaimes, ferramentas elétricas, carrocinha e o que mais a obra precisar. Tudo revisado, com entrega e coleta na obra.',
  botao: 'Pedir orçamento no WhatsApp',
  linkSecundario: { rotulo: 'Ver como funciona', href: '#como-funciona' } satisfies Link,
  foto: {
    fotoDescricao: 'andaime montado em obra da região, luz natural',
    ilustracao: andaimeTopo,
    alt: 'Andaime montado em obra da região',
  } satisfies Foto,
};

export const comoFunciona = {
  titulo: 'Como funciona',
  texto: 'Três passos, tudo pelo WhatsApp. Sem loja e sem fila.',
  passos: [
    {
      numero: '01',
      titulo: 'Escolha',
      texto:
        'Mande no WhatsApp o que você precisa e por quantos dias. A gente confirma se está disponível e passa o valor.',
    },
    {
      numero: '02',
      titulo: 'Receba na obra',
      texto: 'No dia combinado, a gente leva até a sua obra. Todo equipamento sai revisado.',
    },
    {
      numero: '03',
      titulo: 'Devolva',
      texto:
        'Terminou o serviço? Avise no WhatsApp e a gente busca na obra. Toda ferramenta volta conferida.',
    },
  ],
};

export const equipamentos = {
  titulo: 'Equipamentos',
  texto: 'O catálogo está crescendo. Não achou o que precisa? Pergunte no WhatsApp.',
  link: 'Pedir no WhatsApp',
  itens: [
    {
      nome: 'Andaimes',
      texto: 'Para pintura, reboco e fachada.',
      foto: {
        fotoDescricao: 'andaime montado',
        ilustracao: andaime,
        alt: 'Andaime montado',
      },
    },
    {
      nome: 'Ferramentas elétricas',
      texto: 'Para o serviço de poucos dias, sem precisar comprar.',
      foto: {
        fotoDescricao: 'ferramenta elétrica em uso',
        ilustracao: ferramentas,
        alt: 'Ferramenta elétrica em uso',
      },
    },
    {
      nome: 'Carrocinha',
      texto: 'Para levar material até a obra.',
      foto: {
        fotoDescricao: 'carrocinha engatada',
        ilustracao: carrocinha,
        alt: 'Carrocinha engatada',
      },
    },
  ] satisfies { nome: string; texto: string; foto: Foto }[],
  outros: {
    titulo: 'E o que mais a obra precisar',
    texto: 'Diga o serviço e a gente vê o que tem para você.',
    link: 'Perguntar no WhatsApp',
  },
};

export const diferenciais = {
  titulo: 'Por que alugar com a Marinho',
  itens: [
    {
      titulo: 'Revisado antes de cada locação',
      texto: 'Toda ferramenta sai testada e volta conferida.',
    },
    {
      titulo: 'Atendimento direto da família',
      texto: 'Você fala com quem cuida do equipamento, pelo WhatsApp.',
    },
    {
      titulo: 'Entrega e coleta na obra',
      texto: 'A gente leva no dia combinado e busca quando o serviço terminar.',
    },
  ],
};

export const areaAtendida = {
  titulo: 'Área atendida',
  regiao: 'Cajueiro e região: Capela, Viçosa, Chã Preta, Paulo Jacinto, Atalaia, Pilar e Murici.',
  texto: 'A obra fica fora dessa área ? Pergunte no WhatsApp antes de desistir.',
};

export const duvidas = {
  titulo: 'Perguntas frequentes',
  perguntas: [
    {
      pergunta: 'Como faço para alugar?',
      resposta: `Mande uma mensagem no WhatsApp ${contato.telefone} dizendo o equipamento e por quantos dias. A gente confirma se está disponível e passa o valor.`,
    },
    {
      pergunta: 'Vocês entregam na obra?',
      resposta:
        'Sim. A entrega e a coleta são feitas na obra, em Cajueiro e região.',
    },
    {
      pergunta: 'Quanto custa?',
      resposta:
        'Depende do equipamento e do tempo de uso. Peça o orçamento pelo WhatsApp.',
    },
    {
      pergunta: 'Precisa de caução ou documento?',
      resposta:
        'Sim. A gente pede um documento com foto e o CPF de quem aluga (empresa: CNPJ e documento do responsável) e o endereço da obra. A caução é paga em Pix ou dinheiro antes da entrega, com o valor informado no orçamento, e volta em até 24 horas depois da devolução do equipamento.',
      link: {
        rotulo: 'Ver a política de caução e documentos (PDF)',
        href: '/politica-de-caucao-e-documentos.pdf',
      },
    },
    {
      pergunta: 'E se o equipamento der problema?',
      resposta:
        'Todo equipamento é revisado antes de sair e conferido na entrega, na frente de quem recebe. Se der defeito durante o uso, pare de usar e chame no WhatsApp: a gente troca ou conserta sem custo, o mais rápido possível, e os dias parados não entram na conta. Quebra por mau uso, perda ou furto ficam por conta do cliente, com orçamento mostrado antes.',
      link: {
        rotulo: 'Ver a política de troca completa (PDF)',
        href: '/politica-de-troca.pdf',
      },
    },
  ] satisfies Pergunta[],
};

export const chamadaFinal = {
  titulo: 'Precisa de equipamento para a obra?',
  botao: 'Pedir orçamento no WhatsApp',
};

export const rodape = {
  descricao: 'Locação de equipamentos para obra · Cajueiro, Alagoas',
  aviso: 'Atendimento sem loja aberta: tudo pelo WhatsApp.',
};
