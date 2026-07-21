"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { navigation } from "@/lib/site-data";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Brand />
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>
      <nav
        id="primary-navigation"
        className={menuOpen ? "navigation navigation--open" : "navigation"}
        aria-label="Navegação principal"
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="header-cta" href="#contato" onClick={closeMenu}>
          Pedir orçamento
        </a>
      </nav>
    </header>
  );
}
