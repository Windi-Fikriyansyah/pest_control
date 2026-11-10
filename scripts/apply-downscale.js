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
  console.log(`Processing downscale for ${images.length} images...`);
  
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
          fs.writeFileSync(file, out);
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

  const result = {
    count,
    totalBeforeMB: (totalBefore / (1024 * 1024)).toFixed(2),
    totalAfterMB: (totalAfter / (1024 * 1024)).toFixed(2),
    savedMB: ((totalBefore - totalAfter) / (1024 * 1024)).toFixed(2),
    list
  };

  fs.writeFileSync('downscale_report.json', JSON.stringify(result, null, 2));
  console.log(`Successfully downscaled ${count} images in-place.`);
  console.log(`Saved: ${result.savedMB} MB!`);
})();

