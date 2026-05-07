import { copyFileSync, cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(scriptDir, '../../..');
const siteDir = join(repoRoot, 'site');
const distDir = join(repoRoot, 'docs/land/dist');

const docsDirs = [
  'ajuda-e-suporte',
  'blog',
  'como-funciona',
  'curso-de-extensao',
  'sobre',
  'search',
];

function copyDir(name, { clean = true } = {}) {
  const source = join(siteDir, name);
  const target = join(distDir, name);

  if (!existsSync(source)) return;
  if (clean && existsSync(target)) rmSync(target, { recursive: true, force: true });
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true });
}

if (!existsSync(siteDir)) {
  throw new Error(`MkDocs output not found: ${siteDir}`);
}

if (!existsSync(distDir)) {
  throw new Error(`Vite dist not found: ${distDir}`);
}

for (const dir of docsDirs) copyDir(dir);

const siteAssets = join(siteDir, 'assets');
const distAssets = join(distDir, 'assets');
if (existsSync(siteAssets)) {
  mkdirSync(distAssets, { recursive: true });
  for (const item of readdirSync(siteAssets)) {
    cpSync(join(siteAssets, item), join(distAssets, item), { recursive: true });
  }
}

for (const file of ['404.html', 'sitemap.xml', 'sitemap.xml.gz']) {
  const source = join(siteDir, file);
  if (existsSync(source)) copyFileSync(source, join(distDir, file));
}

console.log('MkDocs documentation copied into docs/land/dist.');
