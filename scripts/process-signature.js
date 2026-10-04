const sharp = require('sharp');
const path = require('path');

async function processSignature() {
  const { data, info } = await sharp('public/signature.jpeg')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;
  const channels = info.channels;

  // Exact ink bounds found: minX: 323, maxX: 1159, minY: 106, maxY: 527
  const pad = 24;
  const cropLeft = Math.max(0, 323 - pad);
  const cropTop = Math.max(0, 106 - pad);
  const cropRight = Math.min(width, 1159 + pad);
  const cropBottom = Math.min(height, 527 + pad);
  const cropW = cropRight - cropLeft;
  const cropH = cropBottom - cropTop;

  const outData = Buffer.alloc(cropW * cropH * 4);

  const inkMin = 65;   // Below this is 100% solid ink
  const inkMax = 142;  // Above this is 100% transparent paper

  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const srcX = cropLeft + x;
      const srcY = cropTop + y;
      const srcIdx = (srcY * width + srcX) * channels;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;

      const dstIdx = (y * cropW + x) * 4;

      let alpha = 0;
      if (lum <= inkMin) {
        alpha = 255;
      } else if (lum >= inkMax) {
        alpha = 0;
      } else {
        const factor = (inkMax - lum) / (inkMax - inkMin);
        // smooth step
        const smoothFactor = factor * factor * (3 - 2 * factor);
        alpha = Math.round(255 * smoothFactor);
      }

      // Ink is crisp black (0,0,0) with anti-aliased alpha
      outData[dstIdx] = 0;
      outData[dstIdx + 1] = 0;
      outData[dstIdx + 2] = 0;
      outData[dstIdx + 3] = alpha;
    }
  }

  // Create clean transparent PNG
  const pngBuffer = await sharp(outData, {
    raw: {
      width: cropW,
      height: cropH,
      channels: 4,
    }
  })
    .png({ compressionLevel: 9 })
    .toBuffer();

  // Save to public/signature.png and public/images/bronx/signature.png
  await sharp(pngBuffer).toFile('public/signature.png');
  await sharp(pngBuffer).toFile('public/images/bronx/signature.png');

  console.log(`Successfully generated transparent signature: ${cropW}x${cropH}px`);
}

processSignature().catch(console.error);
