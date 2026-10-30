const fs = require('fs');
const zlib = require('zlib');

function run() {
  const buf = fs.readFileSync('public/webgonex-logo.png');
  const width = buf.readUInt32BE(16);
  const height = buf.readUInt32BE(20);

  let pos = 8;
  const idatChunks = [];
  while (pos < buf.length) {
    const len = buf.readUInt32BE(pos);
    const type = buf.toString('ascii', pos + 4, pos + 8);
    if (type === 'IDAT') idatChunks.push(buf.slice(pos + 8, pos + 8 + len));
    pos += 12 + len;
  }
  const raw = zlib.inflateSync(Buffer.concat(idatChunks));
  const stride = width * 4;
  const pixels = Buffer.alloc(width * height * 4);
  let rawOffset = 0;

  for (let y = 0; y < height; y++) {
    const filterType = raw[rawOffset++];
    const rowStart = y * stride;
    const prevRowStart = (y - 1) * stride;
    for (let x = 0; x < stride; x++) {
      const rawByte = raw[rawOffset++];
      const left = x >= 4 ? pixels[rowStart + x - 4] : 0;
      const up = y > 0 ? pixels[prevRowStart + x] : 0;
      const upLeft = (y > 0 && x >= 4) ? pixels[prevRowStart + x - 4] : 0;
      let val = rawByte;
      if (filterType === 1) val = (rawByte + left) & 0xff;
      else if (filterType === 2) val = (rawByte + up) & 0xff;
      else if (filterType === 3) val = (rawByte + Math.floor((left + up) / 2)) & 0xff;
      else if (filterType === 4) {
        const p = left + up - upLeft;
        const pa = Math.abs(p - left), pb = Math.abs(p - up), pc = Math.abs(p - upLeft);
        let pr = left;
        if (pb < pa && pb <= pc) pr = up;
        else if (pc < pa && pc <= pb) pr = upLeft;
        val = (rawByte + pr) & 0xff;
      }
      pixels[rowStart + x] = val;
    }
  }

  // Helper to encode PNG
  function encodePNG(w, h, rgba) {
    const rawOut = Buffer.alloc(h * (1 + w * 4));
    let rawIdx = 0;
    for (let y = 0; y < h; y++) {
      rawOut[rawIdx++] = 0; // Filter None
      rgba.copy(rawOut, rawIdx, y * w * 4, (y + 1) * w * 4);
      rawIdx += w * 4;
    }
    const compressed = zlib.deflateSync(rawOut, { level: 9 });

    const png = [];
    png.push(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));

    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(w, 0);
    ihdr.writeUInt32BE(h, 4);
    ihdr[8] = 8;
    ihdr[9] = 6; // RGBA
    ihdr[10] = 0;
    ihdr[11] = 0;
    ihdr[12] = 0;
    png.push(makeChunk('IHDR', ihdr));
    png.push(makeChunk('IDAT', compressed));
    png.push(makeChunk('IEND', Buffer.alloc(0)));

    return Buffer.concat(png);
  }

  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) {
      if (c & 1) c = 0xedb88320 ^ (c >>> 1);
      else c = c >>> 1;
    }
    crcTable[n] = c;
  }

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const chunk = Buffer.alloc(12 + data.length);
    chunk.writeUInt32BE(data.length, 0);
    chunk.write(type, 4, 4, 'ascii');
    data.copy(chunk, 8);
    chunk.writeUInt32BE(crc32(chunk.slice(4, 8 + data.length)), 8 + data.length);
    return chunk;
  }

  // 1. Crop Emblem: X from 106 to 508, Y from 82 to 410
  const embX1 = 106, embX2 = 508, embY1 = 82, embY2 = 410;
  const embW = embX2 - embX1;
  const embH = embY2 - embY1;
  const embRgba = Buffer.alloc(embW * embH * 4);

  for (let y = 0; y < embH; y++) {
    for (let x = 0; x < embW; x++) {
      const srcIdx = ((embY1 + y) * width + (embX1 + x)) * 4;
      const dstIdx = (y * embW + x) * 4;
      const r = pixels[srcIdx];
      const g = pixels[srcIdx + 1];
      const b = pixels[srcIdx + 2];

      // If background white
      if (r > 240 && g > 240 && b > 240) {
        embRgba[dstIdx + 3] = 0;
      } else if (r > 215 && g > 215 && b > 215) {
        // Soft edge
        const bright = (r + g + b) / 3;
        const alpha = Math.max(0, Math.min(255, Math.floor((255 - bright) * 6)));
        embRgba[dstIdx] = r;
        embRgba[dstIdx + 1] = g;
        embRgba[dstIdx + 2] = b;
        embRgba[dstIdx + 3] = alpha;
      } else {
        embRgba[dstIdx] = r;
        embRgba[dstIdx + 1] = g;
        embRgba[dstIdx + 2] = b;
        embRgba[dstIdx + 3] = 255;
      }
    }
  }

  fs.writeFileSync('public/webgonex-emblem.png', encodePNG(embW, embH, embRgba));
  console.log('Saved public/webgonex-emblem.png:', embW, 'x', embH);

  // 2. Crop full stacked logo: X from 102 to 512, Y from 82 to 512
  const fullX1 = 102, fullX2 = 512, fullY1 = 82, fullY2 = 512;
  const fullW = fullX2 - fullX1;
  const fullH = fullY2 - fullY1;
  const fullRgba = Buffer.alloc(fullW * fullH * 4);

  for (let y = 0; y < fullH; y++) {
    for (let x = 0; x < fullW; x++) {
      const srcIdx = ((fullY1 + y) * width + (fullX1 + x)) * 4;
      const dstIdx = (y * fullW + x) * 4;
      const r = pixels[srcIdx];
      const g = pixels[srcIdx + 1];
      const b = pixels[srcIdx + 2];

      if (r > 240 && g > 240 && b > 240) {
        fullRgba[dstIdx + 3] = 0;
      } else if (r > 215 && g > 215 && b > 215) {
        const bright = (r + g + b) / 3;
        const alpha = Math.max(0, Math.min(255, Math.floor((255 - bright) * 6)));
        fullRgba[dstIdx] = r;
        fullRgba[dstIdx + 1] = g;
        fullRgba[dstIdx + 2] = b;
        fullRgba[dstIdx + 3] = alpha;
      } else {
        // If it is the "Web" text (black on original), turn it to crisp white for dark backgrounds
        if (y > 340 && x < 185 && r < 140 && g < 140 && b < 140) {
          fullRgba[dstIdx] = 255;
          fullRgba[dstIdx + 1] = 255;
          fullRgba[dstIdx + 2] = 255;
        } else {
          fullRgba[dstIdx] = r;
          fullRgba[dstIdx + 1] = g;
          fullRgba[dstIdx + 2] = b;
        }
        fullRgba[dstIdx + 3] = 255;
      }
    }
  }

  fs.writeFileSync('public/webgonex-logo-dark.png', encodePNG(fullW, fullH, fullRgba));
  console.log('Saved public/webgonex-logo-dark.png:', fullW, 'x', fullH);
}

run();
