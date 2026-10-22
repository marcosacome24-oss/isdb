import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Instituto Superior Dom Bosco | Portal Institucional",
  description: "Portal institucional de ensino, formação profissional, notícias e candidaturas."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt"><body><div className="topbar"><div className="container"><span>Maputo, Moçambique · Educação e formação profissional</span><span>info@isdb.ac.mz · +258 82 303 2618</span></div></div><SiteHeader />{children}<SiteFooter /></body></html>;
}
