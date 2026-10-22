import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/auth";
export async function GET() {
 if (!await isAdmin()) return NextResponse.json({error:"Não autorizado"}, {status:401});
 return NextResponse.json(await prisma.news.findMany({orderBy:{createdAt:"desc"}}));
}
export async function POST(req:Request) {
 if (!await isAdmin()) return NextResponse.json({error:"Não autorizado"}, {status:401});
 try {
  const b=await req.json(); if(!String(b.title||"").trim()||!String(b.content||"").trim()) return NextResponse.json({error:"Preencha título e conteúdo"}, {status:400});
  const item=await prisma.news.create({data:{title:String(b.title),excerpt:String(b.excerpt||"").trim()||String(b.content).slice(0,160),content:String(b.content),imageUrl:b.imageUrl?String(b.imageUrl):null,published:true}});
  return NextResponse.json(item,{status:201});
 } catch { return NextResponse.json({error:"Erro ao guardar notícia"},{status:500}); }
}
