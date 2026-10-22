import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Header.css";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Para empresas", href: "#empresas" },
  { label: "Atendimento", href: "#atendimento" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container header-content">
        <a
          href="#inicio"
          className="brand"
          aria-label="Chama a Vilma — página inicial"
          onClick={closeMenu}
        >
          <img
            className="brand-logo"
            src="/logo-vilma.jpg"
            alt=""
            width="56"
            height="56"
          />

          <span className="brand-text">
            <strong>Chama a Vilma</strong>
            <small>Limpeza e conservação</small>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <a
            className="button button--primary header-cta"
            href="#contato"
            onClick={closeMenu}
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
