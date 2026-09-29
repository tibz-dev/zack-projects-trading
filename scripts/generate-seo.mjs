import { mkdir, readFile, writeFile } from 'node:fs/promises';

async function readEnvFile(path) {
  try {
    const text = await readFile(path, 'utf8');
    return Object.fromEntries(
      text
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#') && line.includes('='))
        .map((line) => {
          const separator = line.indexOf('=');
          const key = line.slice(0, separator).trim();
          const value = line
            .slice(separator + 1)
            .trim()
            .replace(/^['"]|['"]$/g, '');
          return [key, value];
        }),
    );
  } catch {
    return {};
  }
}

const localEnv = await readEnvFile('.env.local');
const baseEnv = await readEnvFile('.env');
const rawSiteUrl =
  process.env.VITE_SITE_URL ||
  localEnv.VITE_SITE_URL ||
  baseEnv.VITE_SITE_URL ||
  'https://example.invalid';
const siteUrl = rawSiteUrl.replace(/\/$/, '');
const routes = ['/', '/services', '/building-materials', '/projects', '/about', '/contact'];

await mkdir('public', { recursive: true });

const urls = routes.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join('\n');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
const robots = `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;

await Promise.all([
  writeFile('public/sitemap.xml', sitemap, 'utf8'),
  writeFile('public/robots.txt', robots, 'utf8'),
]);

if (siteUrl.includes('example.invalid')) {
  console.warn(
    'SEO files generated with example.invalid. Set VITE_SITE_URL before production deployment.',
  );
}
