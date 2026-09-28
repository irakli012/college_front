// Writes public/sitemap.xml before each build: the main pages plus every news item.
import fs from 'node:fs';

const SITE = 'https://iliaedu.ge';

const PAGES = [
  '/',
  '/about',
  '/about/mission',
  '/about/structure',
  '/about/authorization',
  '/about/partners',
  '/about/documents',
  '/about/strategic/action-plans',
  '/about/strategic/action-reports',
  '/about/strategic/financial',
  '/about/strategic/plan',
  '/programs',
  '/programs/information-technology',
  '/programs/pharmacy',
  '/programs/veterinary-medicine',
  '/programs/early-childhood-education',
  '/programs/financial-services',
  '/programs/administrative-services',
  '/programs-catalog',
  '/news',
  '/library',
  '/gallery',
  '/register',
  '/contact'
];

// News slugs and dates come from the NEWS array in src/constants.ts
const constants = fs.readFileSync(new URL('../src/constants.ts', import.meta.url), 'utf8');
const newsBlock = constants.slice(constants.indexOf('export const NEWS'), constants.indexOf('\n];', constants.indexOf('export const NEWS')));
const news = [...newsBlock.matchAll(/slug: '([^']+)',[\s\S]*?datetime: '([^']+)'/g)].map(([, slug, date]) => ({ slug, date }));

const url = (loc, lastmod) => `  <url><loc>${SITE}${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...PAGES.map((p) => url(p)),
  ...news.map((n) => url(`/news/${n.slug}`, n.date)),
  '</urlset>',
  ''
].join('\n');

fs.writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml: ${PAGES.length} pages, ${news.length} news items`);
