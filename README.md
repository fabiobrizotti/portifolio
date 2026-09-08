# 🚀 Portfólio de Engenharia de Software & Arquitetura

> Portfólio moderno de alta performance, estética **Futuristic / Dark Tech** e arquitetura limpa com **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** e **Framer Motion**.

[![CI Pipeline](https://github.com/brizotti/portifolio/actions/workflows/ci.yml/badge.svg)](https://github.com/brizotti/portifolio/actions/workflows/ci.yml)
[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## ⚡ Visão Geral e Destaques

- **Estética Dark Tech & Cyber Glow**: Visual imersivo com fundo escuro profundo, efeitos de neon ciano e violeta, bordas iluminadas e glassmorphism refinado.
- **Camada de Dados Desacoplada**: Todo o conteúdo (bio, projetos, habilidades, linha do tempo, redes sociais e métricas) é centralizado em `src/data/portfolioData.ts`. Alterar os dados do portfólio não exige mexer nos componentes visuais.
- **Tipagem Estrita com TypeScript**: 100% tipado para prevenção de regressões e código autoexplicativo.
- **Design Responsivo & Acessível**: Experiência fluida em dispositivos móveis, tablets e telas ultrawide.
- **Pronto para Deploy Contínuo (CI/CD)**: Pipeline configurada no GitHub Actions para validação estrita de tipos (`tsc --noEmit`) e build de produção a cada PR/push.

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | [Next.js 15](https://nextjs.org/) | App Router, Server Components e Static Export |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e segurança de código |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Design utilitário e temas customizados |
| **Ícones** | [Lucide React](https://lucide.dev/) | Ícones vetoriais leves e consistentes |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) | Transições e micro-interações fluidas |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Automação de testes e compilação |

---

## 📁 Estrutura de Diretórios

```
portifolio/
├── .github/
│   └── workflows/
│       └── ci.yml             # Pipeline de CI (Typecheck & Build)
├── public/                    # Assets estáticos e favicons
├── src/
│   ├── app/
│   │   ├── globals.css        # Efeitos visuais, glow e gradientes
│   │   ├── layout.tsx         # Layout raiz e metadados de SEO
│   │   └── page.tsx           # Composição da página principal
│   ├── components/
│   │   ├── Navbar.tsx         # Barra de navegação com backdrop blur
│   │   ├── Hero.tsx           # Seção principal com terminal mockup
│   │   ├── About.tsx          # Trajetória e pilares de engenharia
│   │   ├── Projects.tsx       # Grid de projetos com tags e métricas
│   │   ├── Skills.tsx         # Matriz categorizada de competências
│   │   ├── Experience.tsx     # Linha do tempo profissional
│   │   ├── Contact.tsx        # Seção de contato com cópia de email
│   │   ├── Footer.tsx         # Rodapé com status do sistema
│   │   └── ui/                # Componentes atômicos (Badge, Button, Card, SectionHeading)
│   ├── data/
│   │   └── portfolioData.ts   # Fonte única da verdade (Single Source of Truth)
│   └── lib/
│       └── utils.ts           # Utilitários de classes CSS (clsx + twMerge)
├── tailwind.config.ts         # Configuração de temas e cores futuristas
├── tsconfig.json              # Configurações do compilador TypeScript
└── package.json               # Dependências e scripts do projeto
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- **Node.js** 20.x ou superior (recomendado 22.x)
- Gerenciador de pacotes: `npm`, `pnpm` ou `yarn`

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/portifolio.git
cd portifolio
```

### 2. Instalar Dependências
```bash
npm install
# ou
pnpm install
```

### 3. Iniciar Servidor de Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar.

### 4. Build de Produção & Verificação de Tipos
```bash
npm run typecheck
npm run build
```

---

## ✏️ Como Customizar o Conteúdo

Para personalizar seus dados, projetos e redes, basta editar o arquivo **`src/data/portfolioData.ts`**:

```typescript
export const portfolioData = {
  personal: {
    name: "Seu Nome",
    role: "Sua Especialidade",
    email: "seu.email@dominio.com",
    // ...
  },
  projects: [
    // Seus projetos aqui
  ],
  skills: [
    // Suas habilidades por categoria
  ],
  experiences: [
    // Sua trajetória profissional
  ]
};
```

---

## 🌐 Deploy em Produção

### Deploy na Vercel (Recomendado)
1. Conecte seu repositório no dashboard da [Vercel](https://vercel.com).
2. O Next.js será detectado automaticamente.
3. Clique em **Deploy**.

---

## 📜 Padrão de Commits

Este projeto segue a convenção [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade ou seção
- `fix:` Correção de bug ou ajuste visual
- `style:` Alterações de estilo / Tailwind
- `refactor:` Refatoração de código
- `docs:` Documentação
- `chore:` Manutenção e configurações de build

---

## 📄 Licença

Distribuído sob a licença **MIT**. Veja `LICENSE` para mais detalhes.
