const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

sharp.cache(false);

const MAX_DIM = 1920;
const PUBLIC_DIR = path.resolve('public/images');

async function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of list) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(await getAllImages(full));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

(async () => {
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Checking ${images.length} images...`);
  
  let count = 0;
  let totalBefore = 0;
  let totalAfter = 0;
  const list = [];

  for (const file of images) {
    try {
      const buf = fs.readFileSync(file);
      const meta = await sharp(buf).metadata();
      if (meta.width > MAX_DIM || meta.height > MAX_DIM) {
        let pipeline = sharp(buf).resize({
          width: MAX_DIM,
          height: MAX_DIM,
          fit: 'inside',
          withoutEnlargement: true
        });

        if (meta.format === 'jpeg') {
          pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
        } else if (meta.format === 'png') {
          pipeline = pipeline.png({ compressionLevel: 9, effort: 7 });
        } else if (meta.format === 'webp') {
          pipeline = pipeline.webp({ quality: 88 });
        }

        const out = await pipeline.toBuffer();
        if (out.length < buf.length) {
          count++;
          totalBefore += buf.length;
          totalAfter += out.length;
          list.push({
            file: path.relative(process.cwd(), file),
            origDim: `${meta.width}x${meta.height}`,
            beforeKB: Math.round(buf.length / 1024),
            afterKB: Math.round(out.length / 1024),
            savedKB: Math.round((buf.length - out.length) / 1024)
          });
        }
      }
    } catch (e) {
      console.error('Error on', file, e.message);
    }
  }

  list.sort((a, b) => b.savedKB - a.savedKB);
  console.log(`Found ${count} images to downscale to max ${MAX_DIM}px.`);
  console.log(`Total Before: ${(totalBefore / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Total After : ${(totalAfter / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Saved       : ${((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2)} MB (-${Math.round(((totalBefore - totalAfter) / totalBefore) * 100)}%)`);
  console.log('Top 15 savings:');
  console.log(list.slice(0, 15));
})();

