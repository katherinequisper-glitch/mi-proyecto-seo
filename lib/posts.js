export const posts = [
  { slug: "que-es-seo", title: "Qué es el SEO", description: "Introducción al posicionamiento en buscadores.", date: "2026-11-01" },
  { slug: "meta-tags-nextjs", title: "Meta Tags en Next.js", description: "Cómo definir meta tags dinámicos con next/head.", date: "2026-11-05" },
  { slug: "sitemap-dinamico", title: "Sitemap dinámico", description: "Genera un sitemap.xml desde tus datos.", date: "2026-11-10" },
];

// Simula una consulta a una base de datos / CMS
export async function getAllPosts() {
  return posts;
}

export async function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) || null;
}