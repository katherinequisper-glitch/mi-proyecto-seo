import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export default function Menu() {
  const { pathname } = useRouter();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="logo">🚀 Mi Sitio Optimizado</Link>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}