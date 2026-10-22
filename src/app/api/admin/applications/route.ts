import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdmin } from "@/lib/auth";
export async function GET() {
 if (!await isAdmin()) return NextResponse.json({error:"Não autorizado"}, {status:401});
 return NextResponse.json(await prisma.application.findMany({orderBy:{createdAt:"desc"}}));
}
