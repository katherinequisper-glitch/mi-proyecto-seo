import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { SITE_URL } from "../lib/config";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Optimización Web y SEO con Next.js | Mi Sitio Optimizado</title>
        <meta name="description" content="Aprende SEO y rendimiento en Next.js: meta tags, sitemap dinámico, imágenes optimizadas y lazy loading." />
        <meta name="keywords" content="Next.js, SEO, optimización web, sitemap, meta tags" />
        <meta property="og:title" content="Optimización Web y SEO con Next.js" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
      </Head>

      <section className="hero">
        <h1>Bienvenido a mi página optimizada</h1>
        <p>Aprende cómo mejorar el rendimiento y el posicionamiento SEO de tu web con Next.js.</p>
        <div className="hero-buttons">
          <Link href="/blog" className="btn">Ver el blog</Link>
          <Link href="/contacto" className="btn btn-outline">Contáctanos</Link>
        </div>
      </section>

      <div className="hero-image">
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada"
          priority
        />
      </div>

      <h2 className="section-title">¿Qué optimizamos?</h2>
      <div className="grid">
        <div className="card">
          <h3>🏷️ Meta tags</h3>
          <p>Títulos, descripciones y Open Graph para Google y redes sociales.</p>
        </div>
        <div className="card">
          <h3>🗺️ Sitemap dinámico</h3>
          <p>Un sitemap.xml generado desde los datos para que Google indexe todo.</p>
        </div>
        <div className="card">
          <h3>🖼️ Imágenes y fuentes</h3>
          <p>next/image en WebP y fuentes optimizadas con next/font.</p>
        </div>
      </div>

      <DynamicComponent />
    </>
  );
}