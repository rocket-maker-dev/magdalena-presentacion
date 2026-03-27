"use client";

import { motion } from "motion/react";
import {
  MessageSquare,
  AtSign,
  Camera,
  Handshake,
  Languages,
} from "lucide-react";

const modules = [
  {
    number: "01",
    icon: MessageSquare,
    title: "WhatsApp Business",
    description:
      "Catálogo de produtos, respostas automáticas, listas e difusións. Un punto de venda virtual dende calquera móbil.",
    color: "text-[#00AC81]",
    bg: "from-[#00AC81]/10 to-[#00AC81]/0",
    border: "border-[#00AC81]/20",
  },
  {
    number: "02",
    icon: AtSign,
    title: "Redes sociais dende o móbil",
    description:
      "Facebook e Instagram básico. Como publicar, usar Stories e Reels para dar visibilidade cotiá ao posto.",
    color: "text-[#F079C6]",
    bg: "from-[#F079C6]/10 to-[#F079C6]/0",
    border: "border-[#F079C6]/20",
  },
  {
    number: "03",
    icon: Camera,
    title: "Fotografía e vídeo co móbil",
    description:
      "Iluminación natural, encadre, vídeos curtos. Contido atractivo sen equipamento nin coñecementos previos.",
    color: "text-[#E8B800]",
    bg: "from-[#E8B800]/10 to-[#E8B800]/0",
    border: "border-[#E8B800]/20",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Comunicación e venda",
    description:
      "Atraer e reter clientes, presentar o produto, actuar ante reclamacións. Profesionalizar a atención.",
    color: "text-[#7B5EA7]",
    bg: "from-[#7B5EA7]/10 to-[#7B5EA7]/0",
    border: "border-[#7B5EA7]/20",
  },
  {
    number: "05",
    icon: Languages,
    title: "Inglés básico para turistas",
    description:
      "Frases de atención ao cliente, vocabulario de produtos e prezos. Comunicar a esencia do mercado.",
    color: "text-[#00AC81]",
    bg: "from-[#00AC81]/10 to-[#00AC81]/0",
    border: "border-[#00AC81]/20",
  },
];

export function Activity1Section() {
  return (
    <section id="formacion" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c17] via-[#12082e] to-[#0e1c17]" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#00AC81]/10 border border-[#00AC81]/20 flex items-center justify-center">
              <span className="text-sm font-bold text-[#00AC81]">1</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#00AC81]">
              Actividade
            </span>
            <div className="ml-auto flex items-center gap-1.5 glass-ev rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00AC81]" />
              <span className="text-[9px] text-[#00AC81]">espacio vivo</span>
            </div>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-3">
            Formación{" "}
            <span className="bg-gradient-to-r from-[#00AC81] to-[#7B5EA7] bg-clip-text text-transparent">
              &ldquo;Mercado Dixital&rdquo;
            </span>
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Programa formativo presencial para os 35 placeros. Sen tecnicismos,
            con exemplos reais e resultado visible desde a primeira sesión.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="glass rounded-lg px-3 py-1.5 text-xs text-neutral-300">
              Abril - Setembro 2026
            </span>
            <span className="glass-ev rounded-lg px-3 py-1.5 text-xs font-semibold text-[#00AC81]">
              3.000,00 &euro;
            </span>
          </div>
        </motion.div>

        {/* Modules */}
        <div className="space-y-3">
          {modules.map((mod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`relative rounded-2xl p-4 bg-gradient-to-r ${mod.bg} border ${mod.border} backdrop-blur-sm group hover:scale-[1.02] transition-transform duration-200`}
            >
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-[10px] font-mono text-neutral-600">
                    {mod.number}
                  </span>
                  <mod.icon className={`w-5 h-5 ${mod.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <p className="text-[11px] text-neutral-500 italic">
            Todos os materiais en lingua galega e con linguaxe inclusiva.
            Formación impartida por profesionais con experiencia en autónomos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
