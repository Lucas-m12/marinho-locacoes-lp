import type { APIRoute } from 'astro';
import sharp from 'sharp';
import logoNegativo from '../assets/marca/marinho-logo-negativo.svg?raw';
import { corFundoMarca, respostaBinaria } from '../lib/imagens';

const largura = 1200;
const altura = 630;
const larguraLogo = 600;

export const GET: APIRoute = async () => {
  const logo = await sharp(Buffer.from(logoNegativo)).resize({ width: larguraLogo }).png().toBuffer();
  const imagem = await sharp({
    create: { width: largura, height: altura, channels: 3, background: corFundoMarca },
  })
    .composite([{ input: logo, gravity: 'center' }])
    .png()
    .toBuffer();

  return respostaBinaria(imagem, 'image/png');
};
