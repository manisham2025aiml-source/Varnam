import fs from 'node:fs';
import path from 'node:path';

const baseUploadDir = 'C:\\Users\\manis\\.gemini\\antigravity-ide\\brain\\ace2695e-2687-4d42-8d99-92f8f5d3c130\\.user_uploaded';
const tnDir = path.resolve(process.cwd(), 'public/assets/states/tamil-nadu');
const stickerDir = path.resolve(process.cwd(), 'public/assets/stickers');

fs.mkdirSync(tnDir, { recursive: true });
fs.mkdirSync(stickerDir, { recursive: true });

// Copy Meenakshi Amman Temple Hero
const gopuramSrc = path.join(baseUploadDir, 'media_1789709785817.png');
if (fs.existsSync(gopuramSrc)) {
  fs.copyFileSync(gopuramSrc, path.join(tnDir, 'hero.png'));
  fs.copyFileSync(gopuramSrc, path.join(tnDir, 'meenakshi-amman.png'));
  console.log('Copied Meenakshi Amman Temple hero');
}

// Copy Bamboo & Cane Craft
const bambooSrc = path.join(baseUploadDir, 'media_1789709817530.png');
if (fs.existsSync(bambooSrc)) {
  fs.copyFileSync(bambooSrc, path.join(tnDir, 'bamboo-cane.png'));
  fs.copyFileSync(bambooSrc, path.join(stickerDir, 'bamboo-cane-sticker.png'));
  console.log('Copied Bamboo & Cane Craft');
}

// Copy Handcraft illustration sheet
const craftHandsSrc = path.join(baseUploadDir, 'media_1789709844408.png');
if (fs.existsSync(craftHandsSrc)) {
  fs.copyFileSync(craftHandsSrc, path.join(stickerDir, 'craft-hands-sheet.png'));
  console.log('Copied craft hands sheet');
}

// Copy composite mockup
const layoutSrc = path.join(baseUploadDir, 'media_1789710164440.png');
if (fs.existsSync(layoutSrc)) {
  fs.copyFileSync(layoutSrc, path.join(tnDir, 'scrapbook-layout.png'));
  console.log('Copied scrapbook layout mockup');
}

console.log('Asset setup completed successfully.');
