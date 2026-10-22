# Portal institucional ISDB — projecto inicial

Aplicação full-stack de demonstração inspirada na estrutura de um portal institucional académico. Não é uma cópia oficial nem está afiliada ao Instituto Superior Dom Bosco. Confirme autorização para utilizar o logótipo, fotografias e identidade institucional antes de publicar.

## Requisitos
- Node.js 20 ou superior
- npm

## Instalação no Windows
1. Instale Node.js LTS.
2. Extraia esta pasta.
3. Copie `.env.example` para `.env`.
4. Altere `SESSION_SECRET`, `ADMIN_EMAIL` e `ADMIN_PASSWORD`.
5. No terminal, dentro da pasta do projecto, execute:

```bash
npm install
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

6. Abra `http://localhost:3000`.
7. O painel administrativo fica em `http://localhost:3000/admin`.

## Logótipo e fotografias
- Substitua `public/logo.png` pelo ficheiro oficial do logótipo que tenha autorização para usar.
- Coloque uma fotografia autorizada do campus em `public/images/campus.jpg`.
- A aplicação mantém um espaço reservado para estes ficheiros. Não foi incluído um logótipo oficial nem fotografias de terceiros.

## Funcionalidades incluídas
- Página inicial, Sobre, Cursos, Notícias, Candidaturas e Contactos.
- API de registo de pedidos de informação.
- Painel administrativo com sessão por cookie HTTP-only.
- Criação de cursos e notícias; consulta de pedidos de candidatura.
- Base de dados SQLite via Prisma para desenvolvimento local.

## Antes de publicar em produção
- Configure uma base de dados persistente compatível com o alojamento escolhido.
- Use HTTPS e segredos fortes; não publique o ficheiro `.env`.
- Adicione recuperação de palavra-passe, controlo de permissões, protecção contra spam/rate limiting, validação adicional e registos de auditoria.
- Crie operações de edição/remoção e gestão de imagens conforme os requisitos.
- Reveja privacidade, consentimento e retenção dos dados pessoais recebidos.
- Confirme todos os cursos, datas, contactos e textos junto da instituição.

## API
- `POST /api/applications` — regista pedido de informação.
- `POST /api/admin/login` — inicia sessão administrativa.
- `POST /api/admin/logout` — termina sessão.
- `GET/POST /api/admin/courses` — listar/adicionar cursos (autenticado).
- `GET/POST /api/admin/news` — listar/adicionar notícias (autenticado).
- `GET /api/admin/applications` — consultar candidaturas (autenticado).

## Paleta visual
O tema foi ajustado para uma paleta institucional de azul profundo (#003B71), azul complementar (#005A9C), amarelo/dourado (#F2B705), branco e cinzas claros. Confirme os códigos exactos com o manual de identidade visual oficial antes de uma publicação institucional.
