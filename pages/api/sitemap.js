import { getAllPosts } from "../../lib/posts";
import { SITE_URL } from "../../lib/config";

export default async function handler(req, res) {
  const staticUrls = ["/", "/blog", "/contacto"];

  // Rutas dinámicas desde la base de datos / CMS
  const posts = await getAllPosts();
  const postUrls = posts.map((p) => ({ loc: `/blog/${p.slug}`, lastmod: p.date }));

  const entries = [...staticUrls.map((u) => ({ loc: u })), ...postUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) =>
      `  <url><loc>${SITE_URL}${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ""}</url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(sitemap);
}