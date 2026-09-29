import { readdir, mkdir } from 'node:fs/promises';
import { extname, join, basename, dirname } from 'node:path';
import sharp from 'sharp';

const roots = ['src/assets/projects', 'src/assets/credentials'];
const supported = new Set(['.jpg', '.jpeg', '.png']);
const widths = [480, 768, 1280];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'generated') continue;
      files.push(...(await walk(fullPath)));
    } else if (supported.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }

  return files;
}

async function processImage(source) {
  const outputDirectory = join(dirname(source), 'generated');
  await mkdir(outputDirectory, { recursive: true });

  const stem = basename(source, extname(source));
  const metadata = await sharp(source).metadata();
  const sourceWidth = metadata.width ?? 1280;

  for (const width of widths.filter((candidate) => candidate <= sourceWidth)) {
    const pipeline = sharp(source).rotate().resize({ width, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 55 }).toFile(join(outputDirectory, `${stem}-${width}.avif`));
    await pipeline.clone().webp({ quality: 78 }).toFile(join(outputDirectory, `${stem}-${width}.webp`));
  }

  console.log(`Processed ${source}`);
}

for (const root of roots) {
  const files = await walk(root);
  for (const file of files) {
    await processImage(file);
  }
}
