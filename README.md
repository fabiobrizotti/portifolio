# Portfólio de Engenharia & Arquitetura de Software

Portfólio minimalista e de alta performance de **Fabio Brizotti** (Desenvolvedor Autônomo & Engenheiro de Software). Projetado com foco em arquitetura de sistemas distribuídos, resiliência operacional e inteligência artificial aplicada.

---

## ⚡ Stack Tecnológica

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Server-side Rendering & Static Generation)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) (Design Minimalista / Craft Dark System com micro-detalhes pixel art)
- **Tipografia**: [Geist Sans & Geist Mono](https://vercel.com/font) (Google Fonts / Vercel)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: [Vercel](https://vercel.com/)

---

## 🚀 Projeto em Destaque: Anne IA

Plataforma de atendimento inteligente baseada em microsserviços e IA multimodal via WhatsApp, estruturada sob 4 eixos de engenharia:
1. **Soberania Tecnológica**: Infraestrutura *self-hosted* baseada em Docker e n8n, eliminando *vendor lock-in*.
2. **Resiliência a Picos de Tráfego**: Mensageria assíncrona com RabbitMQ e agrupamento de sessões com Redis para garantir zero perda de mensagens.
3. **Segurança Cognitiva**: Proteção contra *Prompt Injection* via matrizes XML de segurança (*Guardrails*) e RAG com PostgreSQL + pgvector.
4. **Eficiência Operacional & LGPD**: Respostas multimodais instantâneas e descarte cíclico de dados (*Garbage Collector*).

---

## 📦 Estrutura do Projeto

```text
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens, variáveis de superfície e classes de utilidade
│   │   ├── layout.tsx       # Root layout com Geist Fonts e metadata SEO
│   │   └── page.tsx         # Landing page modular e responsiva
│   ├── components/
│   │   ├── Navbar.tsx       # Header flutuante com blur e status dot
│   │   ├── Hero.tsx         # Apresentação de alto impacto
│   │   ├── About.tsx        # Trajetória real e fundamentos
│   │   ├── Experience.tsx   # Linha do tempo profissional (ordem decrescente)
│   │   ├── Projects.tsx     # Destaque arquitetural da Anne IA
│   │   ├── Skills.tsx       # Competências técnicas agrupadas por domínio
│   │   └── Contact.tsx      # Canais de conexão direta (Email, GitHub, LinkedIn)
│   └── data/
│       └── portfolioData.ts # Dados de referência e contatos
├── .gitignore               # Regras de higiene de repositório
└── README.md                # Documentação técnica
```

---

## 🛠️ Como Executar Localmente

1. **Instalar dependências**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000).

3. **Build de Produção & Tipagem**:
   ```bash
   npm run build
   ```

---

## 📬 Contato

- **Email**: [fabio.brizottilab@gmail.com](mailto:fabio.brizottilab@gmail.com)
- **GitHub**: [github.com/fabiobrizotti](https://github.com/fabiobrizotti)
- **LinkedIn**: [linkedin.com/in/fabiobrizotti](https://www.linkedin.com/in/fabiobrizotti/)
