import fs from 'node:fs';
import path from 'node:path';

const uploadsDir = 'C:\\Users\\manis\\.gemini\\antigravity-ide\\brain\\a3304378-bd0d-4f05-b1b8-5797474f0f6a\\.user_uploaded';

const stateFiles = {
  'gujarat': 'media_1789928566754.jpg',
  'karnataka': 'media_1789928597519.jpg',
  'uttar-pradesh': 'media_1789928631898.jpg',
  'west-bengal': 'media_1789928726425.jpg'
};

const baseDir = path.resolve(process.cwd(), 'public/assets/states');

for (const [slug, fileName] of Object.entries(stateFiles)) {
  const targetDir = path.join(baseDir, slug);
  fs.mkdirSync(targetDir, { recursive: true });

  const srcPath = path.join(uploadsDir, fileName);
  const destMockup = path.join(targetDir, 'mockup.jpg');
  const destHero = path.join(targetDir, 'hero.jpg');

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destMockup);
    fs.copyFileSync(srcPath, destHero);
    console.log(`Successfully copied ${slug}: ${srcPath} -> ${destMockup}`);
  } else {
    console.error(`Missing source file: ${srcPath}`);
  }
}

console.log('Finished copying all 4 state mockup images.');
