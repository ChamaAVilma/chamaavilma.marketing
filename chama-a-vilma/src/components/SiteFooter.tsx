
import { Sparkles } from "lucide-react";
import "./SiteFooter.css";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a href="#inicio" className="brand footer-brand">
          <span className="brand-icon">
            <Sparkles size={22} aria-hidden="true" />
          </span>

          <span className="brand-text">
            <strong>Chama a Vilma</strong>
            <small>Limpeza e conservação</small>
          </span>
        </a>

        <p>Limpeza e organização para diferentes ambientes.</p>

        <span>
          © {new Date().getFullYear()} Chama a Vilma.
        </span>
      </div>
    </footer>
  );
}
