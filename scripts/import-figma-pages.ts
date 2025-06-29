// Script to automate importing Figma-Make pages into the React project
// Will be implemented to handle merging, renaming, diffing, and import rewriting

import * as fs from 'fs';
import * as path from 'path';

// You may need to install 'fs-extra' for recursive copy and ensureDir
import * as fse from 'fs-extra';

// Source Figma-Make folders
const figmaFolders = [
  {
    name: 'Chat',
    folder: 'CareConnect Mobile Chat Screen',
  },
  {
    name: 'Doctors',
    folder: 'CareConnect Mobile Doctor List screen',
  },
  {
    name: 'DoctorDetail',
    folder: 'CareConnect Mobile Doctor Detail screen',
  },
  {
    name: 'LanguageSelect',
    folder: 'CareConnect Mobile Onboarding Screen',
  },
];

const SOURCE_BASE = 'C:/Users/abdul/Downloads/DTTP';
const TARGET_BASE = 'C:/DTTP/careconnect/src/components/figma';
const TARGET_STYLES = 'C:/DTTP/careconnect/src/styles/globals.css';

function getAllFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

function getSuffix(pageName: string) {
  return '_' + pageName.toLowerCase();
}

async function copyComponentsAndRenameApp() {
  for (const { name, folder } of figmaFolders) {
    const srcComponents = path.join(SOURCE_BASE, folder, 'components');
    if (!fs.existsSync(srcComponents)) continue;
    const files = getAllFiles(srcComponents);
    for (const file of files) {
      const relPath = path.relative(srcComponents, file);
      let destPath = path.join(TARGET_BASE, relPath);
      // If file exists, save both with suffixes
      if (fs.existsSync(destPath)) {
        const ext = path.extname(destPath);
        const base = destPath.slice(0, -ext.length);
        destPath = base + getSuffix(name) + ext;
      }
      await fse.ensureDir(path.dirname(destPath));
      await fse.copy(file, destPath);
    }
    // Rename App.tsx
    const srcApp = path.join(SOURCE_BASE, folder, 'App.tsx');
    if (fs.existsSync(srcApp)) {
      const destApp = path.join(TARGET_BASE, name + '.tsx');
      await fse.copy(srcApp, destApp);
      await rewriteImports(destApp, name);
    }
    // Copy first found styles/globals.css
    const srcGlobals = path.join(SOURCE_BASE, folder, 'styles', 'globals.css');
    if (fs.existsSync(srcGlobals) && !fs.existsSync(TARGET_STYLES)) {
      await fse.copy(srcGlobals, TARGET_STYLES);
    }
  }
}

async function rewriteImports(filePath: string, pageName: string) {
  // Read file
  let content = await fse.readFile(filePath, 'utf8');
  // Rewrite relative imports from './components' or '../components' to './components/figma'
  content = content.replace(
    /(['\"])(\.\.?(\/components[^"]*))\1/g,
    (match: string, quote: string, rel: string) => {
      return quote + './components/figma' + rel.replace(/^\/components/, '') + quote;
    }
  );
  // Remove any import of globals.css
  content = content.replace(/import\s+['\"]\.\/styles\/globals\.css['\"];?\n?/g, '');
  await fse.writeFile(filePath, content, 'utf8');
}

async function main() {
  await fse.ensureDir(TARGET_BASE);
  await fse.ensureDir(path.dirname(TARGET_STYLES));
  await copyComponentsAndRenameApp();
  console.log('Figma components and pages imported. Next: router App.tsx and index.tsx CSS import.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 