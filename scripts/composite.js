const sharp = require('sharp');
const fs = require('fs');

async function run() {
  const screenWidth = 918;
  const screenHeight = 646;
  const cornerRadius = 14;

  const mask = Buffer.from(
    `<svg width="${screenWidth}" height="${screenHeight}">
      <rect x="0" y="0" width="${screenWidth}" height="${screenHeight}" rx="${cornerRadius}" ry="${cornerRadius}" fill="#ffffff"/>
    </svg>`
  );

  // me.jpeg is 1086 x 1084.
  // Crop height for 1.421 aspect ratio:
  const cropWidth = 1086;
  const cropHeight = Math.round(cropWidth / (screenWidth / screenHeight)); // 764
  const cropTop = 45; // slight breathing room above head

  const meCover = await sharp('public/me.jpeg')
    .extract({ left: 0, top: cropTop, width: cropWidth, height: cropHeight })
    .resize(screenWidth, screenHeight, { kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 0.7, m1: 0.7, m2: 1.2 })
    .composite([{
      input: mask,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const timestamp = Date.now();
  const newFilename = `hero-tanjirul-${timestamp}.jpg`;

  await sharp('public/images/bronx/hero-1-original.jpg')
    .composite([{
      input: meCover,
      top: 217,
      left: 501
    }])
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(`public/images/bronx/${newFilename}`);

  // Also update public/images/bronx/hero-tanjirul.jpg and hero-1.jpg
  await sharp(`public/images/bronx/${newFilename}`)
    .toFile('public/images/bronx/hero-tanjirul.jpg');
  await sharp(`public/images/bronx/${newFilename}`)
    .toFile('public/images/bronx/hero-1.jpg');

  console.log('Generated:', newFilename);
  return newFilename;
}

run().then(name => {
  console.log('SUCCESS:', name);
}).catch(console.error);
