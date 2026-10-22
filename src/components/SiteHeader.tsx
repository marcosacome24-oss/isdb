"use client";
import { useState } from "react";
import Link from "next/link";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="header"><div className="container nav">
    <Link href="/" className="brand"><img src="/logo.png" className="logo" alt="Logótipo institucional" /><span>INSTITUTO SUPERIOR DOM BOSCO<small>FORMANDO PROFISSIONAIS COMPETENTES</small></span></Link>
    <button className="navtoggle" onClick={() => setOpen(!open)} aria-label="Abrir menu">☰ Menu</button>
    <nav className={`navlinks ${open ? "open" : ""}`}>
      <Link href="/" onClick={() => setOpen(false)}>Início</Link><Link href="/sobre" onClick={() => setOpen(false)}>Sobre nós</Link><Link href="/cursos" onClick={() => setOpen(false)}>Cursos</Link><Link href="/noticias" onClick={() => setOpen(false)}>Notícias</Link><Link href="/candidaturas" onClick={() => setOpen(false)}>Candidaturas</Link><Link href="/contactos" onClick={() => setOpen(false)}>Contactos</Link>
    </nav>
  </div></header>;
}
