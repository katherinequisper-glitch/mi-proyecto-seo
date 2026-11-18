import Head from "next/head";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "../../lib/posts";
import { SITE_URL } from "../../lib/config";

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { notFound: true };
  return { props: { post } };
}

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{`${post.title} | Blog | Mi Sitio Optimizado`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
      </Head>

      <article className="article">
        <Link href="/blog" className="back">← Volver al blog</Link>
        <h1>{post.title}</h1>
        <span className="date">📅 {post.date}</span>
        <p style={{ marginTop: 16 }}>{post.description}</p>
      </article>
    </>
  );
}