const fs = require('fs');
const { PNG } = require('C:/Users/msmka/.gemini/antigravity/brain/94811d0c-2e36-4140-b28b-3e60da4b26ba/scratch/tools/node_modules/pngjs');

const b = PNG.sync.read(fs.readFileSync('baseline/desktop_artikel_nyamuk.png'));
const a = PNG.sync.read(fs.readFileSync('after/desktop_artikel_nyamuk.png'));

const cropB = new PNG({ width: 1440, height: 600 });
const cropA = new PNG({ width: 1440, height: 600 });

for (let y = 0; y < 600; y++) {
  for (let x = 0; x < 1440; x++) {
    const srcIdx = (y * 1440 + x) * 4;
    const dstIdx = (y * 1440 + x) * 4;
    for (let c = 0; c < 4; c++) {
      cropB.data[dstIdx + c] = b.data[srcIdx + c];
      cropA.data[dstIdx + c] = a.data[srcIdx + c];
    }
  }
}
fs.writeFileSync('crop_b_nyamuk.png', PNG.sync.write(cropB));
fs.writeFileSync('crop_a_nyamuk.png', PNG.sync.write(cropA));
console.log('Saved crops for nyamuk');

