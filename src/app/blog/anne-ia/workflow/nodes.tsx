"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ShieldAlert,
  UserCheck,
  FileAudio,
  Layers,
  Timer,
  Eye,
  Store,
  BrainCircuit,
  Send,
  PackageCheck,
  Smartphone,
  MessageCircle,
  ArrowDown,
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
  {
    id: "junta-15s",
    title: "Junta as mensagens antes de responder",
    icon: Timer,
    color: "text-emerald-400",
    badge: "Aguarda 15 s",
    text: [
      "O primeiro fluxo cuidava apenas da recepção e da triagem na porta de entrada. A partir daqui começa a orquestração da Anne, organizando a conversa antes de entregar o pedido para a inteligência artificial.",
      "Essa etapa resolve um hábito muito comum no WhatsApp: mandar várias mensagens curtas seguidas em vez de escrever um parágrafo inteiro. A pessoa manda \"Oi\", aperta enviar, depois manda \"Tudo bem?\", \"Você tem pronta entrega?\" e \"Qual o valor?\".",
      "Quando um robô comum tenta responder mensagem por mensagem, ele atropela a conversa e gera respostas repetidas. Além de cansar o cliente, isso encarece o atendimento: cada consulta enviada para a inteligência artificial tem um custo direto de processamento. Responder quatro frases separadas faz a empresa gastar quatro vezes mais por uma conversa que seria resolvida em uma única resposta.",
      "O fluxo cria uma pausa estratégica para reunir o pensamento do cliente: primeiro, o sistema retira os recados da fila de espera de forma controlada, sem sobrecarregar a estrutura. Cada frase enviada vai para uma caixinha temporária identificada pelo telefone da pessoa.",
      "Em seguida, ele marca a mensagem como lida e ativa o aviso de digitando. O atendimento aguarda por uma janela de tempo, configurada inicialmente em 15 segundos. Esse intervalo é personalizável e pode ser ajustado para mais ou para menos de acordo com a dinâmica de cada negócio. A marca de 15 segundos foi adotada por representar um equilíbrio médio nos testes práticos, dando tempo suficiente para a pessoa concluir a frase sem deixá-la esperando demais.",
      "Quando esse tempo termina, o sistema confere se aquela execução reúne a última mensagem enviada pelo contato. As mensagens intermediárias que chegam no meio do caminho são descartadas para evitar duplicidades. Na saída, o fluxo junta todas as frases guardadas em um texto único e limpa a memória temporária, entregando para a Anne a pergunta completa de uma só vez.",
    ],
  },
  {
    id: "checagem-pos-espera",
    title: "Última checagem antes de responder",
    icon: Eye,
    color: "text-amber-400",
    badge: "Segurança",
    text: [
      "Logo após essa janela de espera, entra uma segunda checagem de segurança. Enquanto o sistema aguardava o cliente terminar de digitar, o dono da loja ou um funcionário pode ter visto a notificação e respondido a conversa diretamente pelo celular. Sem essa verificação extra, a Anne terminaria os 15 segundos de espera e mandaria uma resposta logo abaixo da fala do atendente, criando confusão na conversa.",
      "Essa etapa funciona como uma última checagem antes do envio. O sistema confere se alguém da equipe mandou mensagem durante aquele intervalo. Se o atendente humano respondeu nesse meio tempo, o fluxo é interrompido na hora e não faz mais nada, mantendo o controle total nas mãos da equipe.",
    ],
  },
  {
    id: "identidade",
    title: "Assume a identidade da empresa",
    icon: Store,
    color: "text-cyan-400",
    badge: "Contexto",
    text: [
      "Se ninguém da equipe interveio, o caminho segue livre para a preparação da resposta. É aqui que o sistema assume a identidade da empresa, carregando o nome da loja, o tom de voz da conversa, as regras de preço e o nome do cliente. Isso garante que a inteligência artificial responda como um funcionário treinado daquele negócio específico.",
    ],
  },
  {
    id: "cerebro-ferramentas",
    title: "O cérebro e as ferramentas",
    icon: BrainCircuit,
    color: "text-violet-400",
    badge: "IA + ferramentas",
    text: [
      "Nesse ponto atua o cérebro da Anne e os recursos de apoio usados para conduzir o diálogo. O primeiro recurso prático é a memória, que acompanha o histórico recente para que o cliente não precise repetir informações a cada nova mensagem.",
      "O sistema se adapta a diferentes ramos de negócio porque funciona como um conjunto de ferramentas ajustáveis, mantendo ativo apenas o que faz sentido para cada operação. Para um escritório de advocacia, por exemplo, ferramentas de estoque não fazem sentido, já que o atendimento lida com prazos, reuniões e serviços jurídicos. Já em um comércio, como uma distribuidora ou uma doceria, a consulta de catálogo pode ser ativada. Quando o cliente pergunta se há determinado item, a Anne consulta o registro do sistema da loja e informa o preço e a quantidade cadastrada na hora. Como ela lê diretamente o que consta nos registros da empresa, manter o controle de estoque em dia garante que ela ofereça exatamente o que está disponível.",
      "A Anne também conta com apoios práticos no atendimento: utiliza uma calculadora para somar orçamentos sem errar contas e tem uma opção direta para transferir o contato à equipe. Se a conversa exigir negociação ou fugir do escopo básico, ela transfere para um atendente humano acompanhado de um resumo organizado de tudo o que foi conversado.",
    ],
  },
  {
    id: "fila-saida",
    title: "Despacho e fila de saída",
    icon: Send,
    color: "text-zinc-200",
    badge: "Envio seguro",
    text: [
      "Depois que a Anne formula a resposta, o texto não vai direto para a tela do aplicativo. Ele passa antes por uma etapa de despacho e organização de saída.",
      "O sistema empacota o texto elaborado junto com os dados do contato, como o nome e o número de telefone, e coloca a mensagem em uma fila de saída segura.",
      "Essa separação protege a operação da loja. Em vários momentos do dia, o WhatsApp ou a conexão de internet podem oscilar por alguns segundos. Se o sistema dependesse da confirmação imediata de entrega para continuar trabalhando, ele travaria e deixaria os outros clientes esperando. Ao depositar a resposta nessa esteira de saída, a Anne conclui a tarefa dela e fica livre para atender a próxima pessoa da fila, enquanto o recado segue com segurança para o ajuste visual final, chegando organizado e fácil de ler no celular do cliente.",
    ],
  },
  {
    id: "retirada-segura",
    title: "Retira o recado com segurança",
    icon: PackageCheck,
    color: "text-emerald-400",
    badge: "Entrega garantida",
    text: [
      "Na terceira fase, o objetivo é cuidar da forma como o cliente recebe e enxerga a resposta na tela do celular. Em vez de despejar um bloco denso de texto de uma vez só, o fluxo organiza o conteúdo para fatiar as frases e simular o ritmo de uma pessoa de verdade conversando no WhatsApp.",
      "O processo começa retirando o recado da esteira de saída com total segurança. O sistema só dá baixa na mensagem depois que a etapa seguinte é concluída com sucesso. Se a internet oscilar ou o aplicativo passar por alguma instabilidade passageira, o recado não se perde pelo caminho, permanecendo guardado para uma nova tentativa automática assim que o sinal voltar ao normal. Em seguida, o fluxo organiza a ficha de envio, separando o texto formulado pela Anne, o nome do cliente e o telefone de destino.",
      "Essa preparação do texto acontece de forma autônoma, sem exigir que o dono da empresa ajuste configurações manualmente na rotina diária. As orientações de como a mensagem deve ser tratada já ficam prontas, garantindo que o acabamento siga o padrão do negócio de maneira padronizada.",
    ],
  },
  {
    id: "fatia-visual",
    title: "Fatia a resposta para o celular",
    icon: Smartphone,
    color: "text-cyan-400",
    badge: "Leitura fácil",
    text: [
      "Receber parágrafos longos no WhatsApp cansa quem está lendo e dificulta a visualização na tela pequena do aparelho. Por isso, essa etapa atua como uma edição visual focada em smartphones. O conteúdo é dividido em pequenas frases de uma ou duas linhas. Quando a resposta traz preços ou detalhes importantes de produtos, esses valores ficam em linhas isoladas para o cliente bater o olho e entender tudo sem esforço. Toda essa divisão mantém fidelidade ao sentido original da conversa, gerando uma sequência ordenada de frases curtas.",
    ],
  },
  {
    id: "entrega-ritmada",
    title: "Entrega no ritmo humano",
    icon: MessageCircle,
    color: "text-violet-400",
    badge: "Anti-bloqueio",
    text: [
      "Com as frases preparadas, chega o momento da entrega no aplicativo. O sistema primeiro confirma a leitura da mensagem do cliente, ativando o sinal de mensagem lida. Logo depois, entra o cuidado com o ritmo. Robôs comuns costumam responder em frações de segundo, o que denuncia na hora o uso de automação mecânica e chama a atenção dos filtros do WhatsApp, elevando o risco de bloqueio da linha por disparo de spam.",
      "Para evitar esse problema, a Anne utiliza pausas antes de soltar cada mensagem. O sistema calcula intervalos variáveis dentro de uma faixa ajustável, como pausas entre 2 e 10 segundos, alternando o aviso de digitando na tela do cliente. Ele entrega a primeira frase, mantém o status de digitando por alguns instantes e só então envia o trecho seguinte. Quando todas as frases são entregues, o atendimento se encerra de forma fluida. O cliente recebe respostas fáceis de ler, com o ritmo acolhedor de uma conversa humana, e a linha da empresa fica protegida contra bloqueios do WhatsApp.",
    ],
  },
];

export function FlowTransition({
  line1 = "Gostou dessa primeira parte? Ela é a mais simples do workflow.",
  line2 = "A partir daqui entramos nos conceitos mais técnicos — e mais divertidos. Siga a seta para continuar.",
}: {
  line1?: string;
  line2?: string;
}) {
  return (
    <li className="relative flex gap-4 sm:gap-5 pb-8 list-none">
      <div className="relative z-10 flex flex-col items-center shrink-0 w-14">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30">
          <ArrowDown aria-hidden className="w-4 h-4 text-emerald-400 animate-bounce" />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <Rise>
          <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
            <p className="text-sm text-zinc-200 leading-relaxed">{line1}</p>
            <p className="text-sm text-zinc-400 leading-relaxed">{line2}</p>
          </div>
        </Rise>
      </div>
    </li>
  );
}

function StepItem({ s, i }: { s: Step; i: number }) {
  return (
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
      <Rise delay={0.05 * (i % 5)}>
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
  );
}

const CUT1 = 5;
const CUT2 = 10;

export function WorkflowNodes() {
  return (
    <ol className="relative space-y-0">
      {/* conector vertical central */}
      <div
        aria-hidden
        className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent"
      />
      {steps.slice(0, CUT1).map((s, i) => (
        <StepItem key={s.id} s={s} i={i} />
      ))}
      <FlowTransition />
      {steps.slice(CUT1, CUT2).map((s, k) => (
        <StepItem key={s.id} s={s} i={CUT1 + k} />
      ))}
      <FlowTransition
        line1="E a resposta, como chega no celular do cliente?"
        line2="A última fase fatia o texto e entrega no ritmo de uma conversa humana. Siga a seta."
      />
      {steps.slice(CUT2).map((s, k) => (
        <StepItem key={s.id} s={s} i={CUT2 + k} />
      ))}
    </ol>
  );
}
