import { NextResponse } from "next/server";
import { makeSession, setSession } from "@/lib/auth";
import bcrypt from "bcryptjs";
export async function POST(req: Request) {
 try {
  const { email, password } = await req.json();
  const expectedEmail = process.env.ADMIN_EMAIL || "";
  const expectedPassword = process.env.ADMIN_PASSWORD || "";
  const ok = String(email).toLowerCase() === expectedEmail.toLowerCase() &&
    await bcrypt.compare(String(password), await bcrypt.hash(expectedPassword, 10));
  if (!ok || !expectedEmail || !expectedPassword) return NextResponse.json({error:"Credenciais inválidas"}, {status:401});
  await setSession(await makeSession(expectedEmail));
  return NextResponse.json({ok:true});
 } catch { return NextResponse.json({error:"Não foi possível iniciar sessão"}, {status:500}); }
}
