import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [courses, news] = await Promise.all([
    prisma.course.findMany({ where: { active: true }, take: 3, orderBy: { createdAt: "asc" } }).catch(() => []),
    prisma.news.findMany({ where: { published: true }, take: 3, orderBy: { createdAt: "desc" } }).catch(() => [])
  ]);
  return <>
    <section className="hero"><div className="container"><div className="hero-inner"><div className="eyebrow">Educação · Formação · Futuro</div><h1>Formando profissionais competentes para a educação profissional</h1><p>Conhecimento, competências técnicas e valores para responder aos desafios da sociedade e do sector produtivo.</p><div className="actions"><Link className="btn btn-primary" href="/cursos">Conhecer os cursos</Link><Link className="btn btn-outline" href="/candidaturas">Informações de candidatura</Link></div></div></div></section>
    <section className="section"><div className="container about"><div><div className="eyebrow">Bem-vindo ao ISDB</div><div className="section-head"><h2>Educação que transforma vidas</h2><p>Uma comunidade educativa dedicada à formação integral, à investigação e ao desenvolvimento de competências profissionais.</p></div><Link className="btn btn-blue" href="/sobre">Conheça o instituto</Link></div><div className="about-panel"><h3>Conhecimento com propósito</h3><p>Promovemos a qualidade da formação, a responsabilidade ética e a ligação entre a educação e as necessidades da comunidade.</p><p><strong>Missão · Visão · Valores</strong></p></div></div></section>
    <section className="section section-soft"><div className="container"><div className="section-head"><div className="eyebrow">Oferta formativa</div><h2>Encontre o seu caminho</h2><p>Explore algumas das áreas de formação. Confirme a oferta e os requisitos oficiais junto dos serviços académicos.</p></div><div className="grid">{courses.map(c=><article className="card" key={c.id}><div className="card-icon">⌘</div><div className="meta">{c.category} · {c.mode}</div><h3>{c.title}</h3><p>{c.description}</p><Link href="/cursos">Saber mais →</Link></article>)}</div><div className="actions"><Link className="btn btn-blue" href="/cursos">Ver todos os cursos</Link></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div className="eyebrow">Actualidade</div><h2>Notícias e comunicados</h2><p>Acompanhe as actividades e informações da comunidade académica.</p></div><div className="grid">{news.map(n=><article className="card news-card" key={n.id}><div className="news-placeholder">ISDB · NOTÍCIAS</div><div className="news-body"><div className="news-date">{new Date(n.createdAt).toLocaleDateString("pt-MZ")}</div><h3>{n.title}</h3><p>{n.excerpt}</p><Link href="/noticias">Ler notícias →</Link></div></article>)}</div></div></section>
    <section className="section section-soft"><div className="container"><div className="cta"><div><h2>Quer saber mais sobre as candidaturas?</h2><p>Envie os seus dados e a equipa poderá entrar em contacto consigo.</p></div><Link className="btn btn-primary" href="/candidaturas">Contactar os serviços</Link></div></div></section>
  </>;
}
