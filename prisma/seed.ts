import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const courses = [
    { title: "Ciências da Administração", category: "Licenciatura", mode: "Presencial", description: "Formação em gestão, administração e organização." },
    { title: "Hotelaria e Turismo", category: "Licenciatura", mode: "Presencial", description: "Competências para os sectores de hotelaria, turismo e serviços." },
    { title: "Manutenção Industrial", category: "Licenciatura", mode: "Presencial", description: "Formação técnica orientada para manutenção e sistemas industriais." },
    { title: "Informática", category: "Licenciatura", mode: "Presencial", description: "Fundamentos de informática, sistemas e tecnologias digitais." },
    { title: "Agropecuária", category: "Licenciatura", mode: "Presencial", description: "Conhecimentos aplicados à produção agropecuária." },
    { title: "Certificado A, B e C", category: "Certificação", mode: "Ensino a distância", description: "Percursos de certificação para profissionais da educação." }
  ];
  for (const course of courses) {
    await prisma.course.upsert({
      where: { id: courses.indexOf(course) + 1 },
      update: {},
      create: course
    }).catch(async () => { await prisma.course.create({ data: course }); });
  }

  const count = await prisma.news.count();
  if (!count) {
    await prisma.news.createMany({
      data: [
        { title: "Bem-vindo ao portal institucional", excerpt: "Acompanhe as informações e actividades académicas.", content: "Este espaço reúne notícias, comunicados e actividades da comunidade académica." },
        { title: "Informações sobre candidaturas", excerpt: "Consulte os canais oficiais para conhecer os procedimentos de candidatura.", content: "Para informações actualizadas sobre prazos, documentos e requisitos, contacte os serviços académicos." }
      ]
    });
  }
  console.log("Dados iniciais criados.");
}
main().finally(() => prisma.$disconnect());
