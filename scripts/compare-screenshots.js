// Compares baseline/ vs after/ screenshots using pixelmatch & pngjs
const fs = require('fs');
const path = require('path');
const { PNG } = require('C:/Users/msmka/.gemini/antigravity/brain/94811d0c-2e36-4140-b28b-3e60da4b26ba/scratch/tools/node_modules/pngjs');
const pixelmatch = require('C:/Users/msmka/.gemini/antigravity/brain/94811d0c-2e36-4140-b28b-3e60da4b26ba/scratch/tools/node_modules/pixelmatch');

const BASELINE_DIR = path.resolve('baseline');
const AFTER_DIR = path.resolve('after');
const DIFF_DIR = path.resolve('diff');

function loadPNG(file) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(file).pipe(new PNG());
    stream.on('parsed', function () { resolve(this); });
    stream.on('error', reject);
  });
}

(async () => {
  if (!fs.existsSync(BASELINE_DIR) || !fs.existsSync(AFTER_DIR)) {
    console.error('Both baseline/ and after/ must exist');
    process.exit(1);
  }
  fs.mkdirSync(DIFF_DIR, { recursive: true });

  const baselineFiles = fs.readdirSync(BASELINE_DIR).filter((f) => f.endsWith('.png'));
  console.log(`Comparing ${baselineFiles.length} screenshots between baseline and after...`);

  const results = [];
  let totalMismatch = 0;

  for (const file of baselineFiles) {
    const basePath = path.join(BASELINE_DIR, file);
    const afterPath = path.join(AFTER_DIR, file);

    if (!fs.existsSync(afterPath)) {
      results.push({ file, status: 'MISSING_IN_AFTER', diffPixels: -1, diffPercent: '100%' });
      continue;
    }

    const img1 = await loadPNG(basePath);
    const img2 = await loadPNG(afterPath);

    if (img1.width !== img2.width || img1.height !== img2.height) {
      results.push({
        file,
        status: 'DIMENSION_MISMATCH',
        baseSize: `${img1.width}x${img1.height}`,
        afterSize: `${img2.width}x${img2.height}`,
      });
      console.log(`DIMENSION MISMATCH: ${file} (base: ${img1.width}x${img1.height}, after: ${img2.width}x${img2.height})`);
      continue;
    }

    const diff = new PNG({ width: img1.width, height: img1.height });
    const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {
      threshold: 0.1,
      includeAA: true,
    });

    const totalPixels = img1.width * img1.height;
    const diffPercent = ((numDiffPixels / totalPixels) * 100).toFixed(4);
    totalMismatch += numDiffPixels;

    if (numDiffPixels > 0) {
      const diffPath = path.join(DIFF_DIR, file);
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      results.push({ file, status: 'DIFF', diffPixels: numDiffPixels, totalPixels, diffPercent: `${diffPercent}%` });
      console.log(`DIFF: ${file} -> ${numDiffPixels} pixels (${diffPercent}%)`);
    } else {
      results.push({ file, status: 'IDENTICAL', diffPixels: 0, diffPercent: '0%' });
      console.log(`IDENTICAL: ${file}`);
    }
  }

  const identicalCount = results.filter((r) => r.status === 'IDENTICAL').length;
  console.log(`\nSummary: ${identicalCount}/${results.length} files are 100% pixel-identical.`);
  fs.writeFileSync('diff_results.json', JSON.stringify(results, null, 2));
})();

