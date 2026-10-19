import type { APIRoute } from 'astro';
import sharp from 'sharp';
import perfil from '../assets/marca/marinho-perfil.svg?raw';
import { corFundoMarca, respostaBinaria } from '../lib/imagens';

export const GET: APIRoute = async () => {
  const imagem = await sharp(Buffer.from(perfil))
    .resize(180, 180)
    .flatten({ background: corFundoMarca })
    .png()
    .toBuffer();

  return respostaBinaria(imagem, 'image/png');
};
