const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcssImport = require('postcss-import');
const postcssNested = require('postcss-nested');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

// Configuration
const inputDir = path.join(__dirname, 'styles');
const outputDir = path.join(__dirname, 'dist');
const isWatch = process.argv.includes('--watch');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// PostCSS plugins
const plugins = [
  postcssImport(),
  postcssNested(),
  postcssCustomProperties(),
  postcssCustomMedia(),
  autoprefixer(),
  cssnano({
    preset: ['default', {
      discardComments: {
        removeAll: true,
      },
    }]
  })
];

// Process CSS file
async function processCSS(inputFile, outputFile) {
  try {
    const css = fs.readFileSync(inputFile, 'utf8');
    const result = await postcss(plugins).process(css, {
      from: inputFile,
      to: outputFile
    });
    
    fs.writeFileSync(outputFile, result.css);
    console.log(`✓ Built: ${path.relative(__dirname, outputFile)}`);
    
    if (result.map) {
      fs.writeFileSync(outputFile + '.map', result.map.toString());
    }
  } catch (error) {
    console.error(`✗ Error processing ${inputFile}:`, error.message);
  }
}

// Build all CSS files
async function buildAll() {
  console.log('Building styles...');
  
  const cssFiles = [
    'globals.css',
    'loading.css',
    'Projects.css',
    'Resume.css'
  ];
  
  for (const file of cssFiles) {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file);
    
    if (fs.existsSync(inputFile)) {
      await processCSS(inputFile, outputFile);
    } else {
      console.warn(`⚠ Warning: ${file} not found`);
    }
  }
  
  // Copy design-system.css to dist
  const designSystemSrc = path.join(__dirname, 'design-system.css');
  const designSystemDest = path.join(outputDir, 'design-system.css');
  
  if (fs.existsSync(designSystemSrc)) {
    fs.copyFileSync(designSystemSrc, designSystemDest);
    console.log(`✓ Copied: design-system.css`);
  }
  
  console.log('Build complete!');
}

// Watch mode
function watch() {
  console.log('Watching for changes...');
  
  fs.watch(inputDir, { recursive: true }, (eventType, filename) => {
    if (filename && filename.endsWith('.css')) {
      console.log(`\nFile ${filename} changed, rebuilding...`);
      buildAll();
    }
  });
  
  fs.watch(__dirname, (eventType, filename) => {
    if (filename === 'design-system.css') {
      console.log('\nDesign system changed, rebuilding...');
      buildAll();
    }
  });
}

// Run build
if (isWatch) {
  buildAll().then(() => watch());
} else {
  buildAll();
}
