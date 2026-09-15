export interface Project {
 id: string;
 title: string;
 subtitle: string;
 description: string;
 impact: string;
 tags: string[];
 githubUrl?: string;
 liveUrl?: string;
 featured: boolean;
 category: "produto" | "negocio" | "lideranca" | "engenharia";
}

export interface SkillCategory {
 title: string;
 sectionNumber: string;
 skills: {
 name: string;
 level: "Avançado" | "Especialista" | "Proficiente";
 }[];
}

export interface Experience {
 role: string;
 company: string;
 period: string;
 description: string;
 highlights: string[];
 techStack: string[];
}

export interface Metric {
 label: string;
 value: string;
 description: string;
}

export interface PortfolioData {
 personal: {
 name: string;
 fullName: string;
 domain: string;
 role: string;
 headline: string;
 availabilityStatus: string;
 shortBio: string;
 fullBio: string[];
 email: string;
 location: string;
 academic: {
 technical: string;
 school: string;
 highSchool: string;
 leadershipRole: string;
 };
 social: {
 github: string;
 linkedin: string;
 anneIaRepo: string;
 };
 cvUrl: string;
 };
 metrics: Metric[];
 skills: SkillCategory[];
 projects: Project[];
 experiences: Experience[];
 coreValues: {
 title: string;
 description: string;
 }[];
}

export const portfolioData: PortfolioData = {
 personal: {
 name: "Fabio Brizotti",
 fullName: "Fabio Luis Brizotti Filho",
 domain: "fabiobrizotti.dev",
  role: "Desenvolvedor Autônomo",
  headline: "Sistemas web, automações e integrações de IA focados na operação real de empresas.",
 availabilityStatus: "Disponível para projetos",
 shortBio: "Desenvolvedor formado pela ETEC, fundador da B&B Doceria e criador da Anne IA, plataforma para automação de atendimento no WhatsApp.",
 fullBio: [
 "Sou Técnico em Desenvolvimento de Sistemas formado pela ETEC Dr. Nelson Alves Vianna (Tietê - SP), com Ensino Médio na EE Plínio Rodrigues de Morais. Atuo como Aluno Monitor no programa BEEM, prestando suporte técnico em laboratórios, redes e orientando estudantes e professores na resolução de problemas de TI.",
 "Em 2025, fundei a B&B Doceria e a gerenciei durante 9 meses. Nessa vivência prática, controlando estoque, calculando marcação de preços e atendendo clientes pelo WhatsApp, identifiquei um gargalo operacional crítico: o tempo gasto com atendimento manual competia diretamente com a produção.",
 "A partir desse diagnóstico, projetei e desenvolvi a Anne IA: uma arquitetura completa de microsserviços em Docker, integrando n8n, RabbitMQ, Redis, PostgreSQL com pgvector e Gemini. A solução eliminou o gargalo de atendimento com mensageria assíncrona, inteligência multimodal e conformidade com a LGPD.",
 ],
 email: "fabio.brizottilab@gmail.com",
 location: "Tietê, SP · Brasil",
 academic: {
 technical: "Técnico em Desenvolvimento de Sistemas",
 school: "ETEC Dr. Nelson Alves Vianna (Tietê - SP)",
 highSchool: "EE Plínio Rodrigues de Morais",
 leadershipRole: "Aluno Monitor, Programa BEEM",
 },
 social: {
 github: "https://github.com/fabiobrizotti",
 linkedin: "https://linkedin.com/in/fabiobrizotti",
 anneIaRepo: "https://github.com/fabiobrizotti/Anne-IA",
 },
 cvUrl: "#",
 },

 metrics: [
 {
 label: "Empreendimento Fundado",
 value: "B&B Doceria",
 description: "9 meses de operação, gestão e mapeamento de processos",
 },
 {
 label: "Produto de Software",
 value: "Anne IA",
 description: "Plataforma de automação comercial com IA multimodal",
 },
 {
 label: "Formação Técnica",
 value: "ETEC Tietê",
 description: "Desenvolvimento de Sistemas · Dr. Nelson Alves Vianna",
 },
 {
 label: "Liderança & Suporte",
 value: "Monitor BEEM",
 description: "Suporte de TI, redes e orientação a alunos e professores",
 },
 ],

 skills: [
 {
 title: "Gestão de Negócios & Produto",
 sectionNumber: "4.1",
 skills: [
 { name: "Mapeamento de Processos & Identificação de Gargalos", level: "Especialista" },
 { name: "Controle de Estoque, Markup & Precificação", level: "Avançado" },
 { name: "Atendimento Comercial & Relacionamento com Clientes", level: "Especialista" },
 { name: "Planejamento de Produto & Validação de Mercado", level: "Avançado" },
 ],
 },
 {
 title: "Automação Inteligente & IA Aplicada",
 sectionNumber: "4.2",
 skills: [
 { name: "n8n Self-Hosted · Workflows Agênticos & LangChain", level: "Especialista" },
 { name: "Google Gemini Multimodal (Áudio, Imagem e Texto)", level: "Especialista" },
 { name: "RAG Semântico & Embeddings (pgvector)", level: "Especialista" },
 { name: "Guardrails de Segurança XML (OWASP)", level: "Especialista" },
 { name: "UX Conversacional & Presença Humanizada", level: "Especialista" },
 ],
 },
 {
 title: "Engenharia de Software & Arquitetura",
 sectionNumber: "4.3",
 skills: [
 { name: "Docker & Docker Compose (Provisão Zero-Touch)", level: "Especialista" },
 { name: "RabbitMQ (Filas Quorum, Policies & AMQP)", level: "Especialista" },
 { name: "Redis (Rate Limiting, Cache & Debouncing)", level: "Especialista" },
 { name: "PostgreSQL (Relacional, JSONB & pgvector)", level: "Especialista" },
 { name: "JavaScript / TypeScript & Node.js", level: "Avançado" },
 { name: "Next.js 15 & React (App Router, Tailwind CSS)", level: "Avançado" },
 ],
 },
 {
 title: "Liderança, Redes & Infraestrutura",
 sectionNumber: "4.4",
 skills: [
 { name: "Suporte Técnico de TI & Diagnóstico de Hardware", level: "Especialista" },
 { name: "Redes de Computadores & Cabeamento Estruturado", level: "Avançado" },
 { name: "Linux, Windows & Ambientes de Desenvolvimento", level: "Avançado" },
 { name: "Git & GitHub Actions (CI/CD)", level: "Avançado" },
 { name: "Orientação Técnica a Alunos e Professores", level: "Especialista" },
 ],
 },
 ],

 projects: [
 {
 id: "anne-ia",
 title: "Anne IA, Plataforma de Automação Comercial",
 subtitle: "Atendimento inteligente no WhatsApp com IA multimodal e arquitetura de microsserviços",
 description: "Plataforma self-hosted completa que automatiza o atendimento comercial no WhatsApp. Nasceu da necessidade prática da B&B Doceria, onde o tempo de resposta manual era o principal fator de perda de vendas. A solução integra 5 microsserviços com um único comando, garantindo persistência assíncrona e inteligência multimodal.",
 impact: "Eliminação total do gargalo de atendimento · Zero perda de mensagens · Setup automatizado em um único comando",
 tags: ["Docker", "n8n", "RabbitMQ", "Redis", "PostgreSQL", "pgvector", "Gemini", "LGPD"],
 githubUrl: "https://github.com/fabiobrizotti/Anne-IA",
 liveUrl: "https://github.com/fabiobrizotti/Anne-IA#readme",
 featured: true,
 category: "produto",
 },
 {
 id: "bb-doceria",
 title: "B&B Doceria, Empreendedorismo & Validação de Mercado",
 subtitle: "Fundação e gestão operacional de microempresa no setor alimentício",
    description: "Fundação e gestão completa de microempresa no setor alimentício durante 9 meses em 2025. Produção, controle financeiro, atendimento comercial e mapeamento de processos operacionais.",
  impact: "9 meses de operação prática · Mapeamento completo de processos · Origem dos requisitos da Anne IA",
  tags: ["Gestão de Negócios", "Controle de Estoque", "Precificação", "Atendimento Comercial"],
  featured: true,
  category: "negocio",
},
{
  id: "beem-monitoria",
  title: "Programa BEEM, Liderança & Infraestrutura de TI",
  subtitle: "Monitoria técnica na ETEC Dr. Nelson Alves Vianna e EE Plínio Rodrigues de Morais",
  description: "Suporte técnico em laboratórios de informática, configuração de redes e orientação a estudantes e professores.",
  impact: "Suporte contínuo a dezenas de estações · Resolução de chamados de TI · Apoio técnico a docentes",
  tags: ["Suporte Técnico", "Redes", "Hardware", "Linux", "Windows", "Liderança"],
  featured: true,
  category: "lideranca",
 },
 {
 id: "n8n-sanitizer",
 title: "Motor de Importação & Sanitização Idempotente",
 subtitle: "Componente técnico para bootstrap limpo de workflows em n8n",
 description: "Ferramenta em Node.js desenvolvida para o bootstrap da Anne IA. Remove dados residuais de instâncias de origem, força estado inativo e importa workflows no database.sqlite sem conflito de migrations, garantindo idempotência total.",
 impact: "100% idempotente · Zero conflitos de migration · Execução isolada via container one-shot",
 tags: ["Node.js", "SQLite", "Docker", "n8n API", "Idempotência"],
 githubUrl: "https://github.com/fabiobrizotti/Anne-IA",
 featured: false,
 category: "engenharia",
 },
 ],

 experiences: [
 {
 role: "Fundador & Gestor de Operações",
 company: "B&B Doceria",
  period: "2025 (9 meses)",
  description: "Fundação e gestão de microempresa no setor alimentício, atuando diretamente na produção, controle financeiro, atendimento comercial e mapeamento de processos.",
 highlights: [
 "Identificação do gargalo de atendimento simultâneo no WhatsApp, que originou os requisitos de engenharia da Anne IA.",
 "Estruturação de catálogo de produtos, cálculo de margem por markup e sistema de precificação dinâmica.",
 "Mapeamento completo dos processos comerciais que fundamentaram as regras de negócio do agente de estoque e da calculadora de pedidos da Anne IA.",
 ],
 techStack: ["Gestão de Negócios", "Atendimento Comercial", "Controle de Estoque", "Mapeamento de Requisitos"],
 },
 {
 role: "Criador & Desenvolvedor de Produto",
 company: "Projeto Anne IA (Repositório Aberto)",
 period: "2025, Presente",
 description: "Concepção, arquitetura e desenvolvimento da plataforma Anne IA, transformando uma dor operacional real em um produto de software completo com microsserviços, IA multimodal e conformidade regulatória.",
 highlights: [
 "Arquitetura de microsserviços em Docker Compose integrando n8n, Evolution API, RabbitMQ, Redis e PostgreSQL.",
 "Implementação de RAG semântico com pgvector (vector 3072) e blindagem contra Prompt Injection com Guardrails em XML.",
 "Criação de Garbage Collector automatizado com expurgo a cada 24 horas para conformidade estrita com a LGPD.",
 "Desenvolvimento de esteira de UX conversacional com fatiamento inteligente de mensagens e presença simulada.",
 ],
 techStack: ["Docker", "n8n", "RabbitMQ", "Redis", "PostgreSQL", "pgvector", "Gemini", "LangChain"],
 },
 {
 role: "Aluno Monitor Técnico (Programa BEEM)",
 company: "ETEC Dr. Nelson Alves Vianna & EE Plínio Rodrigues de Morais",
 period: "2023, Presente",
 description: "Liderança e suporte técnico na gestão de infraestrutura de TI, laboratórios de informática e orientação a alunos e docentes em projetos de desenvolvimento.",
 highlights: [
 "Manutenção corretiva e preventiva de computadores e periféricos dos laboratórios escolares.",
 "Apoio técnico na instalação e configuração de ambientes de desenvolvimento (VS Code, Docker, Node.js, Git).",
 "Suporte em configurações de redes locais e resolução de chamados de software e hardware.",
 ],
 techStack: ["Hardware", "Redes de Computadores", "Linux", "Windows", "Suporte ao Usuário"],
 },
 ],

 coreValues: [
 {
 title: "Resolver problemas reais",
 description: "Toda tecnologia que construo nasce de uma dor legítima de negócios, vivenciada na prática, não em exercícios teóricos.",
 },
 {
 title: "Autonomia e eficiência",
 description: "Soluções auto-hospedadas, infraestrutura como código e provisão Zero-Touch para entregar velocidade sem depender de fornecedores caros.",
 },
 {
 title: "Segurança e conformidade",
 description: "Blindagem semântica contra ataques de Prompt Injection e descarte automatizado de dados para privacidade e conformidade com a LGPD.",
 },
 {
 title: "Execução com responsabilidade",
 description: "Código limpo, testes, tipagem estrita e processos idempotentes, cada entrega é verificável e cada alteração é rastreável.",
 },
 ],
};
