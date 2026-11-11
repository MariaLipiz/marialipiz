import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer landing-footer">
      <div className="contenedor footer-content">
        <div className="footer-signature">
          <Link className="brand" href="/" aria-label="María Lipiz, inicio">maría lípiz.</Link>
        </div>
        <nav className="footer-links texto-pequeno" aria-label="Enlaces del pie de página">
          <Link href="/aviso-legal">Legal</Link>
        </nav>
      </div>
    </footer>
  );
}
