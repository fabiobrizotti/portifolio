"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ShieldAlert,
  UserCheck,
  FileAudio,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { Rise } from "../motion";

type Step = {
  id: string;
  title: string;
  icon: LucideIcon;
  color: string;
  badge: string;
  text: string[];
};

const steps: Step[] = [
  {
    id: "recepcao",
    title: "Recepção e organização do contato",
    icon: MessageSquare,
    color: "text-emerald-400",
    badge: "Entrada de dados",
    text: [
      "A primeira parte cuida da recepção das mensagens. Quando uma pessoa envia um texto no aplicativo, a mensagem chega misturada com códigos internos do próprio sistema. O fluxo recebe esse contato e faz uma limpeza geral: organiza o número de telefone sem códigos extras, identifica o nome de quem chamou e verifica se quem digitou foi o cliente ou o próprio dono da empresa. Essa organização garante que a ficha daquele contato fique pronta e correta para as etapas seguintes.",
    ],
  },
  {
    id: "ritmo",
    title: "Controle de ritmo e proteção",
    icon: ShieldAlert,
    color: "text-amber-400",
    badge: "Segurança",
    text: [
      "Depois dessa identificação, a mensagem passa por uma trava de segurança para manter o atendimento organizado.",
      "A primeira verificação avalia quem falou. Se a mensagem foi enviada pelo próprio dono da empresa ou pelo atendente humano, o sistema interrompe o processo na hora para não interferir na conversa manual.",
      "Se a mensagem veio de um cliente, o sistema acompanha a frequência do envio. Se uma pessoa mandar mensagens em excesso em um intervalo muito curto, como dez mensagens em menos de um minuto, o fluxo pausa aquele contato temporariamente e envia um aviso pedindo para aguardar um instante. Essa trava dura apenas o tempo estipulado. Isso evita que disparos repetidos sobrecarreguem o sistema ou prejudiquem os outros clientes que também estão esperando.",
      "Se o cliente enviou mensagens dentro do limite normal, ele é liberado imediatamente para a etapa seguinte, que responde às perguntas do pré-atendimento sem fazer a pessoa esperar em uma fila demorada.",
    ],
  },
  {
    id: "pausa-humana",
    title: "Pausa para atendimento humano",
    icon: UserCheck,
    color: "text-cyan-400",
    badge: "Atendimento manual",
    text: [
      "Essa etapa funciona como um botão de pausa automático quando um atendente de verdade assume a conversa no WhatsApp. Um erro muito comum no comércio acontece quando o próprio vendedor pega o celular da loja para conversar com o cliente, mas o robô não percebe e responde por cima, gerando confusão e passando uma impressão amadora.",
      "Para evitar essa situação, o fluxo faz uma checagem simples sobre quem acabou de enviar a mensagem. Se o texto partiu do próprio atendente da empresa, o sistema entende na hora que uma pessoa física está conversando ali. Ele ativa uma pausa de dez minutos para aquele contato específico e desliga qualquer resposta automática naquele instante.",
      "Quando o cliente manda uma mensagem de volta, a primeira coisa que o sistema faz é checar se essa pausa de dez minutos ainda está ativa. Se o atendente humano interagiu recentemente e o tempo ainda está correndo, o sistema fica totalmente em silêncio e deixa a conversa fluir apenas entre as duas pessoas.",
      "O fluxo automatizado só volta a funcionar para adiantar perguntas repetitivas e rotineiras se essa pausa terminar sem nenhuma mensagem nova da equipe.",
    ],
  },
  {
    id: "triagem",
    title: "Separação de texto, imagem e áudio",
    icon: FileAudio,
    color: "text-violet-400",
    badge: "Triagem",
    text: [
      "No dia a dia do comércio, as pessoas entram em contato de formas bem diferentes: algumas digitam mensagens curtas, muitas preferem mandar áudio pela correria e outras apenas mandam fotos. Essa etapa funciona como uma central de triagem que identifica como o cliente escolheu se comunicar e prepara o recado antes de responder.",
      "Assim que o contato chega, o sistema separa a conversa em três caminhos:",
      "Se o cliente enviou um texto comum, a mensagem já está legível e segue direto para a etapa de atendimento.",
      "Se a pessoa mandou apenas uma foto, o sistema envia uma mensagem educada na mesma hora explicando que ainda não consegue analisar imagens e pede para ela descrever o pedido por escrito. Isso evita que o cliente fique esperando sem resposta achando que alguém já está cuidando do caso.",
      "Se o cliente mandou áudio, o sistema não deixa a conversa empacada nem obriga um atendente a parar o trabalho para ouvir gravações longas. O fluxo recebe o arquivo de som, ouve a fala e converte tudo o que a pessoa disse em texto escrito.",
      "No final dessa separação, seja mensagem digitada ou gravada por voz, tudo vira um texto claro e padronizado. Isso acelera o pré-atendimento e garante que as perguntas frequentes sejam respondidas logo, sem criar filas no WhatsApp da loja.",
    ],
  },
  {
    id: "fila",
    title: "Fila organizada de mensagens",
    icon: Layers,
    color: "text-zinc-200",
    badge: "Entrega garantida",
    text: [
      "Depois que a mensagem foi conferida e qualquer áudio virou texto, o sistema junta tudo em uma ficha organizada com a pergunta limpa, o nome do cliente e o número de contato dele.",
      "Com essa ficha pronta, o fluxo guarda o pedido em uma fila de espera segura, parecida com uma bandeja de comandas organizada por ordem de chegada.",
      "Essa etapa existe para proteger a loja nos momentos de pico. Em datas comemorativas ou promoções, quando dezenas de clientes mandam mensagem no mesmo minuto, uma equipe comum ou um aplicativo despreparado costuma travar e deixar recados para trás. Com essa fila organizada, nenhuma mensagem se perde pelo caminho. Cada pedido fica guardado com segurança até ser entregue para o sistema responder, mantendo o atendimento rápido e garantindo que ninguém fique esperando à toa no balcão virtual.",
    ],
  },
];

export function WorkflowNodes() {
  return (
    <ol className="relative space-y-0">
      {/* conector vertical central */}
      <div
        aria-hidden
        className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent"
      />
      {steps.map((s, i) => (
        <li key={s.id} className="relative flex gap-4 sm:gap-5 pb-8 last:pb-0">
          {/* marcador numerado */}
          <div className="relative z-10 flex flex-col items-center shrink-0">
            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-950 border border-zinc-800/80">
              <s.icon className={`w-5 h-5 ${s.color}`} />
            </span>
            <span className="mt-2 text-[10px] font-mono text-zinc-500">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex-1 min-w-0">
          <Rise delay={0.05 * i}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="p-4 sm:p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2.5"
            >
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-mono bg-zinc-800/50 border border-zinc-700/50 text-zinc-300">
                {s.badge}
              </span>
              <h2 className="text-base font-medium text-white tracking-tight">
                {s.title}
              </h2>
              <div className="space-y-3">
                {s.text.map((p, j) => (
                  <p key={j} className="text-sm text-zinc-400 leading-relaxed">{p}</p>
                ))}
              </div>
            </motion.div>
          </Rise>
          </div>
        </li>
      ))}
    </ol>
  );
}
