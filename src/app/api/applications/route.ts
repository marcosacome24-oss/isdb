import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function POST(req: Request) {
 try {
  const body = await req.json();
  const fullName = String(body.fullName ?? "").trim(), email = String(body.email ?? "").trim(), phone = String(body.phone ?? "").trim(), course = String(body.course ?? "").trim(), message = String(body.message ?? "").trim();
  if (fullName.length < 3 || !email.includes("@") || !phone || !course) return NextResponse.json({error:"Dados inválidos"}, {status:400});
  await prisma.application.create({data:{fullName,email,phone,course,message:message || null}});
  return NextResponse.json({ok:true}, {status:201});
 } catch { return NextResponse.json({error:"Erro ao registar pedido"}, {status:500}); }
}
