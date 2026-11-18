import "../styles/globals.css";
import { Inter } from "next/font/google";
import Menu from "../components/Menu";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className} site`}>
      <Menu />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <footer className="footer">© 2026 Mi Sitio Optimizado · Hecho con Next.js</footer>
    </div>
  );
}

export default MyApp;