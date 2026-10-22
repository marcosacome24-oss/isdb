import Link from "next/link";
export function SiteFooter() {
  return <footer className="footer"><div className="container"><div className="footer-grid">
    <div><h3>Instituto Superior Dom Bosco</h3><p>Formando profissionais competentes para a educação profissional.</p><p>Portal institucional de informação académica e comunitária.</p></div>
    <div><h4>Links úteis</h4><p><Link href="/sobre">Sobre nós</Link></p><p><Link href="/cursos">Oferta formativa</Link></p><p><Link href="/candidaturas">Candidaturas</Link></p></div>
    <div><h4>Contactos</h4><p>Bairro de Luís Cabral, Rua 5011, Maputo</p><p>+258 82 303 2618</p><p>info@isdb.ac.mz</p></div>
  </div><div className="copyright">© {new Date().getFullYear()} Instituto Superior Dom Bosco. Modelo de demonstração — confirme e actualize os conteúdos antes da publicação.</div></div></footer>;
}
