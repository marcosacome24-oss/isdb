import { prisma } from "@/lib/prisma";
export const dynamic = "force-dynamic";
export default async function Noticias() {
 const news = await prisma.news.findMany({where:{published:true},orderBy:{createdAt:"desc"}}).catch(() => []);
 return <><section className="page-title"><div className="container"><div className="eyebrow">Actualidade</div><h1>Notícias e comunicados</h1></div></section><section className="section"><div className="container"><div className="grid">{news.map(n=><article className="card" key={n.id}><div className="news-date">{new Date(n.createdAt).toLocaleDateString("pt-MZ")}</div><h3>{n.title}</h3><p>{n.excerpt}</p><details><summary>Ler notícia</summary><p>{n.content}</p></details></article>)}</div>{!news.length&&<p>Não existem notícias publicadas.</p>}</div></section></>;
}
