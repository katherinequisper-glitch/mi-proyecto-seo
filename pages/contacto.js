import { useState } from "react";
import Head from "next/head";
import { SITE_URL } from "../lib/config";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <>
      <Head>
        <title>Contacto | Escríbenos | Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto con nosotros para consultas sobre SEO y desarrollo web con Next.js." />
        <meta property="og:title" content="Contacto - Mi Sitio Optimizado" />
        <meta property="og:description" content="Escríbenos para resolver tus dudas sobre optimización web." />
        <meta property="og:image" content={`${SITE_URL}/images/seo-image.png`} />
        <meta property="og:url" content={`${SITE_URL}/contacto`} />
        <meta property="og:type" content="website" />
      </Head>

      <h1 className="page-title">Contacto</h1>
      <p className="page-subtitle">Escríbenos y te responderemos pronto.</p>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input type="text" required placeholder="Tu nombre" />
        </label>
        <label>
          Correo
          <input type="email" required placeholder="correo@ejemplo.com" />
        </label>
        <label>
          Mensaje
          <textarea rows={4} required placeholder="¿En qué podemos ayudarte?" />
        </label>
        <button type="submit" className="btn">Enviar mensaje</button>
        {enviado && <div className="success">✅ ¡Mensaje enviado!</div>}
      </form>
    </>
  );
}