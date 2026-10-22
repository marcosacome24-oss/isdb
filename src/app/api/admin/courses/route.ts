import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/auth";
export async function GET() {
 if (!await isAdmin()) return NextResponse.json({error:"Não autorizado"}, {status:401});
 return NextResponse.json(await prisma.course.findMany({orderBy:{createdAt:"desc"}}));
}
export async function POST(req:Request) {
 if (!await isAdmin()) return NextResponse.json({error:"Não autorizado"}, {status:401});
 try {
  const b=await req.json(); if(!String(b.title||"").trim()||!String(b.description||"").trim()) return NextResponse.json({error:"Preencha título e descrição"}, {status:400});
  const item=await prisma.course.create({data:{title:String(b.title),category:String(b.category||"Licenciatura"),mode:String(b.mode||"Presencial"),description:String(b.description),active:true}});
  return NextResponse.json(item,{status:201});
 } catch { return NextResponse.json({error:"Erro ao guardar curso"},{status:500}); }
}
