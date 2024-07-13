import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import blogPosts from './blogPosts.json' assert { type: 'json' };
import keywords from './src/data/keywords.js';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const websiteUrl = 'https://www.easypomodoro.com';

const generateSitemap = () => {
  const pages = [
    { loc: `${websiteUrl}/`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 1.0 },
    { loc: `${websiteUrl}/timer.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/tasks.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/settings.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/profile.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/signin.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/signup.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/forgot-password.html`, lastmod: new Date().toISOString(), changefreq: 'weekly', priority: 0.9 },
    { loc: `${websiteUrl}/about-us.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/contact-us.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: `${websiteUrl}/privacy-policy.html`, lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 }
  ];

  const blogPostUrls = blogPosts.map(post => ({
    loc: `${websiteUrl}/blog/${post.slug}.html`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8
  }));

  const paths = keywords.map(keyword => {
    const formattedKeyword = keyword.toLowerCase().replace(/ /g, '-');
    return {
      loc: `${websiteUrl}/${formattedKeyword}.html`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8
    };
  });


  const urls = [...pages, ...blogPostUrls, ...paths];

  const urlEntries = urls.map(url => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `).join('');

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlEntries}
    </urlset>
  `;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap.trim());
};

generateSitemap();
