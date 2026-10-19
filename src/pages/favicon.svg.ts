import type { APIRoute } from 'astro';
import perfil from '../assets/marca/marinho-perfil.svg?raw';

export const GET: APIRoute = () =>
  new Response(perfil, { headers: { 'Content-Type': 'image/svg+xml' } });
