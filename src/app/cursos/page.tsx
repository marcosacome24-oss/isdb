import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";
export default async function Cursos() {
 const courses = await prisma.course.findMany({where:{active:true},orderBy:{title:"asc"}}).catch(() => []);
 return <><section className="page-title"><div className="container"><div className="eyebrow">Oferta formativa</div><h1>Cursos e formação</h1></div></section><section className="section"><div className="container"><div className="grid">{courses.map(c=><article className="card" key={c.id}><div className="meta">{c.category} · {c.mode}</div><h3>{c.title}</h3><p>{c.description}</p><a href="/candidaturas">Pedir informações →</a></article>)}</div>{!courses.length&&<p>A oferta formativa será publicada em breve.</p>}</div></section></>;
}
