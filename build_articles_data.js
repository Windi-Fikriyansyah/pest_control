const fs = require('fs');
const path = require('path');

const scratchDir = path.resolve('scratch_docx');
const artikelDir = path.resolve('public/artikel');
const outputTsFile = path.resolve('app/data/articles.ts');

const docxFiles = fs.readdirSync(artikelDir).filter(f => f.endsWith('.docx'));

function slugify(name) {
  return name
    .replace(/\.docx$/i, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

function decodeXml(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

// Category mapping helper
function getCategoryForSlug(slug) {
  const map = {
    'bandara': 'Transportasi & Fasilitas Publik',
    'cafe': 'F&B & Kuliner',
    'disinfeksi': 'Sterilisasi & Disinfeksi Medis',
    'hipermarket': 'Retail & Supermarket',
    'hotel': 'Hospitality & Pariwisata',
    'kampus': 'Pendidikan & Universitas',
    'kantor': 'Komersial & Perkantoran',
    'layanan-vecos': 'Panduan & Layanan Terpadu',
    'pabrik-makanan': 'Industri Manufaktur & Pangan',
    'restauran': 'F&B & Restoran',
    'rumah-sakit': 'Fasilitas Kesehatan & Medis',
    'rumah': 'Residensial & Perumahan',
    'warehouse': 'Logistik & Pergudangan'
  };
  return map[slug] || 'Layanan Pest Control';
}

function parseDocx(slug) {
  const extractDir = path.join(scratchDir, slug);
  const docXmlPath = path.join(extractDir, 'word', 'document.xml');
  const relsPath = path.join(extractDir, 'word', '_rels', 'document.xml.rels');

  if (!fs.existsSync(docXmlPath)) {
    throw new Error(`File not found: ${docXmlPath}`);
  }

  const docXml = fs.readFileSync(docXmlPath, 'utf8');

  // Relasi gambar
  const imgRelMap = {};
  if (fs.existsSync(relsPath)) {
    const relsXml = fs.readFileSync(relsPath, 'utf8');
    const relMatches = relsXml.match(/<Relationship[\s\S]*?\/>/g) || [];
    for (const rel of relMatches) {
      const idMatch = rel.match(/Id="([^"]+)"/);
      const targetMatch = rel.match(/Target="([^"]+)"/);
      const typeMatch = rel.match(/Type="([^"]+)"/);
      if (idMatch && targetMatch && typeMatch && typeMatch[1].includes('image')) {
        imgRelMap[idMatch[1]] = targetMatch[1].replace(/^media\//, '');
      }
    }
  }

  function extractImagesFromNode(nodeXml) {
    const drawings = nodeXml.match(/<w:drawing[\s\S]*?<\/w:drawing>/g) || [];
    const images = [];
    for (const d of drawings) {
      const blipMatch = d.match(/r:embed="([^"]+)"/);
      if (blipMatch && imgRelMap[blipMatch[1]]) {
        images.push(`/images/artikel/${slug}/${imgRelMap[blipMatch[1]]}`);
      }
    }
    return images;
  }

  function extractRuns(nodeXml) {
    const runs = [];
    const rMatches = nodeXml.match(/<w:r[\s\S]*?<\/w:r>/g) || [];
    for (const r of rMatches) {
      const isBold = /<w:b(\/|>|\s)/.test(r) && !/<w:b\s+w:val="(0|false|none)"\/>/.test(r);
      const isItalic = /<w:i(\/|>|\s)/.test(r) && !/<w:i\s+w:val="(0|false|none)"\/>/.test(r);
      const isUnderline = /<w:u(\/|>|\s)/.test(r) && !/<w:u\s+w:val="(0|false|none)"\/>/.test(r);

      const images = extractImagesFromNode(r);

      const textMatches = r.match(/<w:t[\s\S]*?>([\s\S]*?)<\/w:t>/g) || [];
      const text = textMatches.map(t => decodeXml(t.replace(/<[^>]+>/g, ''))).join('');

      if (text || images.length > 0) {
        runs.push({
          text,
          bold: isBold,
          italic: isItalic,
          underline: isUnderline,
          images
        });
      }
    }
    return runs;
  }

  function parseParagraph(pXml) {
    const pStyleMatch = pXml.match(/<w:pStyle\s+w:val="([^"]+)"/);
    const pStyle = pStyleMatch ? pStyleMatch[1] : '';
    const isList = /<w:numPr>/.test(pXml);

    const images = extractImagesFromNode(pXml);
    const runs = extractRuns(pXml);
    const rawText = runs.map(r => r.text).join('').trim();

    // Check heading level
    let headingLevel = 0;
    if (pStyle.toLowerCase().includes('heading1') || pStyle.toLowerCase() === 'h1') headingLevel = 1;
    else if (pStyle.toLowerCase().includes('heading2') || pStyle.toLowerCase() === 'h2') headingLevel = 2;
    else if (pStyle.toLowerCase().includes('heading3') || pStyle.toLowerCase() === 'h3') headingLevel = 3;
    else if (pStyle.toLowerCase().includes('title')) headingLevel = 1;

    return {
      type: 'paragraph',
      pStyle,
      headingLevel,
      isList,
      rawText,
      runs,
      images
    };
  }

  function parseTable(tblXml) {
    const rows = [];
    const trMatches = tblXml.match(/<w:tr[\s\S]*?<\/w:tr>/g) || [];
    for (const tr of trMatches) {
      const cells = [];
      const tcMatches = tr.match(/<w:tc[\s\S]*?<\/w:tc>/g) || [];
      for (const tc of tcMatches) {
        const pMatches = tc.match(/<w:p[\s\S]*?<\/w:p>/g) || [];
        const cellParas = pMatches.map(p => parseParagraph(p)).filter(p => p.rawText.length > 0 || p.images.length > 0);
        // Combine text and runs of cell
        const cellText = cellParas.map(p => p.rawText).filter(Boolean).join('\n');
        const cellRuns = cellParas.flatMap(p => p.runs);
        const cellImages = cellParas.flatMap(p => p.images);
        cells.push({
          text: cellText,
          runs: cellRuns,
          images: cellImages
        });
      }
      rows.push(cells);
    }
    return {
      type: 'table',
      rows
    };
  }

  const bodyMatch = docXml.match(/<w:body[\s\S]*?<\/w:body>/);
  if (!bodyMatch) return { title: slug, elements: [] };

  const bodyXml = bodyMatch[0];
  const rawElements = [];
  const topRegex = /<(w:p|w:tbl)[\s\S]*?<\/\1>/g;
  let match;
  while ((match = topRegex.exec(bodyXml)) !== null) {
    const tag = match[1];
    const content = match[0];
    if (tag === 'w:p') {
      const p = parseParagraph(content);
      if (p.rawText.length > 0 || p.images.length > 0) {
        rawElements.push(p);
      }
    } else if (tag === 'w:tbl') {
      rawElements.push(parseTable(content));
    }
  }

  // Find article Title and Cover Image
  let title = '';
  let coverImage = '';
  const elements = [];

  for (let i = 0; i < rawElements.length; i++) {
    const el = rawElements[i];

    // If it's a paragraph containing images and no text
    if (el.type === 'paragraph' && el.images.length > 0 && !el.rawText) {
      for (const img of el.images) {
        if (!coverImage) coverImage = img;
        elements.push({
          type: 'image',
          src: img,
          alt: title || slug
        });
      }
      continue;
    }

    // Identify title
    if (!title && el.type === 'paragraph' && el.rawText) {
      if (el.pStyle.toLowerCase().includes('title') || el.headingLevel === 1 || i <= 2) {
        title = el.rawText;
        // Do not skip, but mark as title or heading
        elements.push({
          type: 'heading',
          level: 1,
          text: el.rawText,
          runs: el.runs
        });
        continue;
      }
    }

    if (el.type === 'paragraph') {
      if (el.headingLevel > 0) {
        elements.push({
          type: 'heading',
          level: el.headingLevel,
          text: el.rawText,
          runs: el.runs
        });
      } else {
        elements.push({
          type: 'paragraph',
          text: el.rawText,
          runs: el.runs,
          isList: el.isList,
          images: el.images
        });
      }
    } else if (el.type === 'table') {
      elements.push(el);
    }
  }

  if (!title) {
    title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  if (!coverImage) {
    // Check if there are any copied images in public/images/artikel/[slug]
    const mediaDir = path.resolve('public/images/artikel', slug);
    if (fs.existsSync(mediaDir)) {
      const imgs = fs.readdirSync(mediaDir);
      if (imgs.length > 0) {
        coverImage = `/images/artikel/${slug}/${imgs[0]}`;
      }
    }
  }

  // Calculate words and read time
  const fullText = elements.map(e => e.text || (e.rows ? e.rows.map(r => r.map(c => c.text).join(' ')).join(' ') : '')).join(' ');
  const wordCount = fullText.split(/\s+/).filter(Boolean).length;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 200));

  // Excerpt for summary cards
  const firstPara = elements.find(e => e.type === 'paragraph' && e.text && e.text.length > 40);
  const excerpt = firstPara ? firstPara.text.slice(0, 220) + '...' : fullText.slice(0, 200) + '...';

  return {
    slug,
    title,
    category: getCategoryForSlug(slug),
    date: '15 Oktober 2026',
    readTime: `${readTimeMinutes} Menit Baca`,
    wordCount,
    coverImage: coverImage || '/images/vecos.jpg',
    excerpt,
    elements
  };
}

console.log('Building articles data for all 13 documents...');
const articles = [];
for (let i = 0; i < docxFiles.length; i++) {
  const f = docxFiles[i];
  const slug = slugify(f);
  console.log(`[${i+1}/${docxFiles.length}] Parsing ${slug}...`);
  const art = parseDocx(slug);
  art.id = i + 1;
  articles.push(art);
}

// Ensure app/data directory exists
const dataDir = path.resolve('app/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const fileHeader = `// Auto-generated full article content parsed from D:\\pest_control\\public\\artikel
// Content preserved 100% without modification as requested.

export interface ArticleRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  images?: string[];
}

export interface ArticleTableCell {
  text: string;
  runs?: ArticleRun[];
  images?: string[];
}

export interface ArticleElement {
  type: 'heading' | 'paragraph' | 'image' | 'table';
  level?: number;
  text?: string;
  runs?: ArticleRun[];
  isList?: boolean;
  images?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  rows?: ArticleTableCell[][];
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  wordCount: number;
  coverImage: string;
  excerpt: string;
  elements: ArticleElement[];
}

export const articles: Article[] = `;

fs.writeFileSync(outputTsFile, fileHeader + JSON.stringify(articles, null, 2) + ';\n', 'utf8');
console.log(`\nSuccessfully generated ${articles.length} articles into: ${outputTsFile}`);
console.log('Articles list:');
articles.forEach(a => console.log(`- [${a.slug}] ${a.title} (${a.wordCount} words, ${a.elements.length} elements)`));
