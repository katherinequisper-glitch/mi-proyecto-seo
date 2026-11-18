import Head from "next/head";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import { SITE_URL } from "../../lib/config";

export async function getStaticProps() {
  const posts = await getAllPosts();
  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog de SEO y Next.js | Artículos y guías | Mi Sitio Optimizado</title>
        <meta name="description" content="Artículos sobre SEO, meta tags, sitemaps y optimización de rendimiento en Next.js." />
        <meta property="og:title" content="Blog de SEO y Next.js" />
        <meta property="og:description" content="Guías y artículos para mejorar el posicionamiento de tu web." />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
      </Head>

      <h1 className="page-title">Blog</h1>
      <p className="page-subtitle">Artículos y guías sobre SEO y Next.js.</p>

      <div className="grid">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <span className="date">📅 {p.date}</span>
          </Link>
        ))}
      </div>
    </>
  );
}