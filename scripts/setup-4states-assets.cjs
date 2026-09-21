const fs = require('fs');
const path = require('path');

const uploadsDir = 'C:\\Users\\manis\\.gemini\\antigravity-ide\\brain\\a3304378-bd0d-4f05-b1b8-5797474f0f6a\\.user_uploaded';

const stateFiles = {
  'gujarat': 'media_1789928566754.jpg',
  'karnataka': 'media_1789928597519.jpg',
  'uttar-pradesh': 'media_1789928631898.jpg',
  'west-bengal': 'media_1789928726425.jpg'
};

const baseDir = path.resolve(__dirname, '../public/assets/states');

for (const [slug, fileName] of Object.entries(stateFiles)) {
  const targetDir = path.join(baseDir, slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const srcPath = path.join(uploadsDir, fileName);
  const destPath = path.join(targetDir, 'mockup.jpg');
  const heroPath = path.join(targetDir, 'hero.jpg');

  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    fs.copyFileSync(srcPath, heroPath);
    console.log(`Copied ${fileName} -> ${destPath}`);
  } else {
    console.warn(`Source file not found: ${srcPath}`);
  }
}

console.log('All 4 state assets setup successfully!');
