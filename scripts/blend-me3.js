const sharp = require('sharp');

async function processImage() {
  const inputPath = 'public/me3-original.jpeg';
  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const w = info.width;
  const h = info.height;

  // Step 1: Flood fill from borders
  const visited = new Uint8Array(w * h);
  const queue = [];

  for (let x = 0; x < w; x++) {
    queue.push(x);
    queue.push((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    queue.push(y * w);
    queue.push(y * w + w - 1);
  }

  // Threshold: studio off-white backdrop is >= 198
  while (queue.length > 0) {
    const idx = queue.pop();
    if (visited[idx]) continue;
    visited[idx] = 1;

    const r = data[idx * 3];
    const g = data[idx * 3 + 1];
    const b = data[idx * 3 + 2];

    if (r >= 198 && g >= 198 && b >= 198) {
      const x = idx % w;
      const y = Math.floor(idx / w);

      if (x > 0 && !visited[idx - 1]) queue.push(idx - 1);
      if (x < w - 1 && !visited[idx + 1]) queue.push(idx + 1);
      if (y > 0 && !visited[idx - w]) queue.push(idx - w);
      if (y < h - 1 && !visited[idx + w]) queue.push(idx + w);
    }
  }

  // Step 2: Subject mask (255 = subject, 0 = bg)
  const mask = Buffer.alloc(w * h);
  for (let i = 0; i < w * h; i++) {
    mask[i] = visited[i] ? 0 : 255;
  }

  // Step 3: 1-pixel morphological erosion of the mask to eliminate light edge fringe
  const eroded = Buffer.from(mask);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = y * w + x;
      if (mask[idx] === 255) {
        if (
          mask[idx - 1] === 0 ||
          mask[idx + 1] === 0 ||
          mask[idx - w] === 0 ||
          mask[idx + w] === 0 ||
          mask[idx - w - 1] === 0 ||
          mask[idx - w + 1] === 0 ||
          mask[idx + w - 1] === 0 ||
          mask[idx + w + 1] === 0
        ) {
          eroded[idx] = 0;
        }
      }
    }
  }

  // Step 4: Feather the eroded mask slightly (0.8px radius)
  const feathered = await sharp(eroded, {
    raw: { width: w, height: h, channels: 1 }
  })
    .blur(0.8)
    .toColourspace('b-w')
    .raw()
    .toBuffer();

  // Step 5: Build RGBA cutout
  const rgba = Buffer.alloc(w * h * 4);
  for (let i = 0; i < w * h; i++) {
    rgba[i * 4] = data[i * 3];
    rgba[i * 4 + 1] = data[i * 3 + 1];
    rgba[i * 4 + 2] = data[i * 3 + 2];
    rgba[i * 4 + 3] = feathered[i];
  }

  const cutout = await sharp(rgba, {
    raw: { width: w, height: h, channels: 4 }
  })
    .png()
    .toBuffer();

  await sharp(cutout).toFile('public/me3-cutout.png');
  console.log('public/me3-cutout.png saved');

  // Step 6: Create elegant dark forest background
  const bgSvg = Buffer.from(
    `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#192e23"/>
          <stop offset="35%" stop-color="#13241b"/>
          <stop offset="70%" stop-color="#0f1c15"/>
          <stop offset="100%" stop-color="#09110d"/>
        </linearGradient>
        <radialGradient id="subjectAura" cx="50%" cy="34%" r="48%">
          <stop offset="0%" stop-color="rgba(74, 120, 92, 0.42)"/>
          <stop offset="55%" stop-color="rgba(25, 45, 34, 0.2)"/>
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0)"/>
        </radialGradient>
        <radialGradient id="topRim" cx="50%" cy="6%" r="35%">
          <stop offset="0%" stop-color="rgba(110, 165, 130, 0.16)"/>
          <stop offset="100%" stop-color="rgba(0, 0, 0, 0)"/>
        </radialGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#bgGrad)"/>
      <rect width="${w}" height="${h}" fill="url(#subjectAura)"/>
      <rect width="${w}" height="${h}" fill="url(#topRim)"/>
    </svg>`
  );

  const bgBuffer = await sharp(bgSvg).png().toBuffer();

  const finalJpg = await sharp(bgBuffer)
    .composite([{ input: cutout, blend: 'over' }])
    .jpeg({ quality: 96, mozjpeg: true })
    .toBuffer();

  await sharp(finalJpg).toFile('public/me3.jpeg');
  await sharp(finalJpg).toFile('public/me3-blended.jpeg');
  console.log('Successfully written public/me3.jpeg and public/me3-blended.jpeg');
}

processImage().catch(console.error);
