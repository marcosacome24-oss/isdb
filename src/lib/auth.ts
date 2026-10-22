import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

const cookieName = "isdb_admin_session";
function secret() {
  const value = process.env.SESSION_SECRET;
  if (!value || value.length < 24) throw new Error("Configure SESSION_SECRET com pelo menos 24 caracteres.");
  return new TextEncoder().encode(value);
}
export async function makeSession(email: string) {
  return new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("8h")
    .sign(secret());
}
export async function isAdmin() {
  const token = (await cookies()).get(cookieName)?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secret());
    return payload.role === "admin";
  } catch { return false; }
}
export async function setSession(token: string) {
  (await cookies()).set(cookieName, token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production",
    sameSite: "lax", path: "/", maxAge: 60 * 60 * 8
  });
}
export async function clearSession() {
  (await cookies()).delete(cookieName);
}
export async function verifyAdmin(email: string, password: string) {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedEmail || !expectedPassword) return false;
  return email.toLowerCase() === expectedEmail.toLowerCase() &&
    await bcrypt.compare(password, await bcrypt.hash(expectedPassword, 10)).catch(() => false);
}
export { cookieName };
