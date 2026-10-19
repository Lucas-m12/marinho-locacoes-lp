import type { APIRoute } from 'astro';
import perfil from '../assets/marca/marinho-perfil.svg?raw';
import { pngParaIco, respostaBinaria, svgParaPng } from '../lib/imagens';

const lado = 32;

export const GET: APIRoute = async () => {
  const png = await svgParaPng(perfil, lado);
  return respostaBinaria(pngParaIco(png, lado), 'image/x-icon');
};
