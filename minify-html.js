// minify-html.js
const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');

const options = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
};

const pagesDir = path.join(__dirname, '.next/server/pages');

async function minifyHtmlFiles() {
  const files = fs.readdirSync(pagesDir);

  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && path.extname(file) === '.html') {
      const content = fs.readFileSync(filePath, 'utf8');
      const minified = await minify(content, options);
      fs.writeFileSync(filePath, minified, 'utf8');
    }
  }
}

minifyHtmlFiles().catch(console.error);