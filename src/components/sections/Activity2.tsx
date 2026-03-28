"use client";

import { motion } from "motion/react";
import {
  ChefHat,
  Baby,
  Apple,
  Trophy,
  Users,
} from "lucide-react";

const events = [
  {
    icon: ChefHat,
    title: "Showcooking «Cociñando no Mercado»",
    description:
      "Chef local elabora receitas con produtos de temporada dos postos. Demostración en directo, degustación e promoción activa dos placeros.",
    color: "text-[#F04923]",
    bgColor: "bg-[#F04923]/10",
    img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&q=80",
  },
  {
    icon: Baby,
    title: "PequeCHef na Magdalena",
    description:
      "Obradoiros de cociña para nenos e nenas de 6-12 anos. Visitan postos, escollen ingredientes, elaboran receitas e levan caderno para a casa.",
    color: "text-[#F079C6]",
    bgColor: "bg-[#F079C6]/10",
    img: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=300&q=80",
  },
  {
    icon: Apple,
    title: "Charla «Nutrición no Mercado»",
    description:
      "Xornada divulgativa sobre consumo de proximidade e produtos de temporada. Degustación e visita guiada aos postos.",
    color: "text-[#00AC81]",
    bgColor: "bg-[#00AC81]/10",
    img: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=300&q=80",
  },
  {
    icon: Trophy,
    title: "Concurso «A Cociña da Magdalena»",
    description:
      "Competición culinaria aberta a veciños. Receitas con produtos do mercado, degustación, xurado técnico e premios.",
    color: "text-[#E8B800]",
    bgColor: "bg-[#E8B800]/10",
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80",
  },
  {
    icon: Users,
    title: "Sesión aberta «Ven a Cociñar»",
    description:
      "Xornada de participación veciñal. Merenda comunitaria con elaboracións propias con produtos do mercado.",
    color: "text-[#7B5EA7]",
    bgColor: "bg-[#7B5EA7]/10",
    img: "https://images.unsplash.com/photo-1529543544282-ea98407407c0?w=300&q=80",
  },
];

export function Activity2Section() {
  return (
    <section id="cociñar" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c17] via-[#12082e] to-[#0a0018]" />

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
            <div className="w-10 h-10 rounded-xl bg-[#F04923]/10 border border-[#F04923]/20 flex items-center justify-center">
              <span className="text-sm font-bold text-[#F04923]">2</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#F04923]">
              Actividade
            </span>
            <div className="ml-auto flex items-center gap-1.5 glass-ev rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00AC81]" />
              <span className="text-[9px] text-[#00AC81]">espacio vivo</span>
            </div>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-3">
            <span className="bg-gradient-to-r from-[#F04923] to-[#E8B800] bg-clip-text text-transparent">
              &ldquo;Ven a Cociñar&rdquo;
            </span>
            <br />
            ao Mercado
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Programa de dinamización gastronómica e comunitaria. O produto fresco
            do mercado como protagonista absoluto.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="glass rounded-lg px-3 py-1.5 text-xs text-neutral-300">
              Maio - Setembro 2026
            </span>
            <span className="glass-ev rounded-lg px-3 py-1.5 text-xs font-semibold text-[#00AC81]">
              2.900,00 &euro;
            </span>
          </div>
        </motion.div>

        {/* Event cards */}
        <div className="space-y-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Image background */}
              <div className="absolute inset-0">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#12082e] via-[#12082e]/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-5">
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${event.bgColor} flex items-center justify-center shrink-0`}
                  >
                    <event.icon className={`w-5 h-5 ${event.color}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {event.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PequeCHef highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl p-5 bg-gradient-to-br from-[#F079C6]/10 via-[#7B5EA7]/5 to-transparent border border-[#F079C6]/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Baby className="w-4 h-4 text-[#F079C6]" />
            <span className="text-xs font-semibold text-[#F079C6] uppercase tracking-wider">
              PequeCHef
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Deseñado para crear un primeiro contacto emocional co mercado: que
            os nenos e nenas vexan de onde veñen os alimentos, que coñezan os
            placeros, que asocien o mercado cun espazo de descubrimento.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
