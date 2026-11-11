const fs = require('fs');

const content = fs.readFileSync('app/page.tsx', 'utf8');
const lines = content.split('\n');

console.log('=== SECTIONS IN PAGE.TSX ===');
lines.forEach((l, i) => {
  if (l.includes('<section')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

console.log('=== SELECT ELEMENTS ===');
lines.forEach((l, i) => {
  if (l.includes('<select')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
    console.log(lines.slice(Math.max(0, i - 3), i + 8).join('\n'));
  }
});

console.log('=== IMAGES WITH PRIORITY ===');
lines.forEach((l, i) => {
  if (l.includes('priority')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});

console.log('=== NON-COMPOSITED ANIMATIONS (CSS/CLASSES) ===');
const animMatches = content.match(/animate-[a-zA-Z0-9_-]+/g);
console.log('Tailwind animation classes in page.tsx:', [...new Set(animMatches)]);

