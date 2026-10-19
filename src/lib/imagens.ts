import sharp from 'sharp';

export const corFundoMarca = '#13294B';

export function respostaBinaria(conteudo: Buffer, tipo: string) {
  return new Response(new Uint8Array(conteudo), { headers: { 'Content-Type': tipo } });
}

export function svgParaPng(svg: string, lado: number) {
  return sharp(Buffer.from(svg)).resize(lado, lado).png().toBuffer();
}

export function pngParaIco(png: Buffer, lado: number) {
  const cabecalho = Buffer.alloc(22);
  cabecalho.writeUInt16LE(0, 0);
  cabecalho.writeUInt16LE(1, 2);
  cabecalho.writeUInt16LE(1, 4);
  cabecalho.writeUInt8(lado, 6);
  cabecalho.writeUInt8(lado, 7);
  cabecalho.writeUInt8(0, 8);
  cabecalho.writeUInt8(0, 9);
  cabecalho.writeUInt16LE(1, 10);
  cabecalho.writeUInt16LE(32, 12);
  cabecalho.writeUInt32LE(png.length, 14);
  cabecalho.writeUInt32LE(cabecalho.length, 18);
  return Buffer.concat([cabecalho, png]);
}
