"use client";

import { motion } from "motion/react";
import {
  Share2,
  AtSign,
  Hash,
  BookOpen,
  Camera,
  BarChart3,
  Palette,
  Video,
} from "lucide-react";

const deliverables = [
  {
    icon: AtSign,
    label: "3-4 posts/semana",
    sublabel: "Facebook + Instagram",
    color: "text-[#F761A1]",
  },
  {
    icon: BookOpen,
    label: "1 artigo/2 semanas",
    sublabel: "22-24 artigos/ano",
    color: "text-[#8C1BAB]",
  },
  {
    icon: Camera,
    label: "Cobertura fotográfica",
    sublabel: "Todos os eventos",
    color: "text-[#E8B800]",
  },
  {
    icon: Palette,
    label: "Deseño gráfico",
    sublabel: "Pezas e banners",
    color: "text-[#F761A1]",
  },
  {
    icon: Video,
    label: "Sesións de gravación",
    sublabel: "Periódicas no mercado",
    color: "text-[#8C1BAB]",
  },
  {
    icon: BarChart3,
    label: "Informe mensual",
    sublabel: "Alcance e interaccións",
    color: "text-[#F761A1]",
  },
];

const months = [
  "Abr", "Mai", "Xuñ", "Xul", "Ago", "Set",
  "Out", "Nov", "Dec", "Xan", "Feb", "Mar",
];

export function Activity4Section() {
  return (
    <section id="rrss" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0018] via-[#12082e] to-[#0a0018]" />

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
            <div className="w-10 h-10 rounded-xl bg-[#8C1BAB]/15 border border-[#8C1BAB]/25 flex items-center justify-center">
              <span className="text-sm font-bold text-[#F761A1]">4</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#F761A1]">
              Actividade
            </span>
            <div className="ml-auto flex items-center gap-1.5 glass-rocket rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F761A1]" />
              <span className="text-[9px] text-[#F761A1]">Rocket</span>
            </div>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-white mb-3">
            RRSS + Blog{" "}
            <span className="bg-gradient-to-r from-[#8C1BAB] to-[#F761A1] bg-clip-text text-transparent">
              12 meses
            </span>
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Presenza dixital sostida ao longo de todo o ano. Os mercados non
            pechan en agosto nin en xaneiro, e a súa comunicación tampouco.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="glass rounded-lg px-3 py-1.5 text-xs text-neutral-300">
              Abril 2026 - Marzo 2027
            </span>
            <span className="glass-rocket rounded-lg px-3 py-1.5 text-xs font-semibold text-[#F761A1]">
              4.145,00 &euro; <span className="text-neutral-500">(IVA incl.)</span>
            </span>
          </div>
        </motion.div>

        {/* 12 month bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="grid grid-cols-12 gap-1">
            {months.map((m, i) => (
              <motion.div
                key={m}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="origin-bottom"
              >
                <div
                  className="h-16 rounded-t-lg"
                  style={{
                    background: `linear-gradient(to top, rgba(140, 27, 171, ${0.15 + (i < 6 ? 0.08 * (6 - i) : 0.04)}), rgba(247, 97, 161, 0.05))`,
                    border: "1px solid rgba(247, 97, 161, 0.1)",
                  }}
                />
                <div className="text-[8px] text-neutral-500 text-center mt-1.5">
                  {m}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-3">
            <span className="text-[10px] text-[#F761A1]/70 uppercase tracking-widest">
              Cobertura anual completa
            </span>
          </div>
        </motion.div>

        {/* Deliverables grid */}
        <div className="grid grid-cols-2 gap-3">
          {deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="rounded-xl p-4 bg-white/[0.02] border border-white/5 hover:border-[#F761A1]/15 transition-all duration-300"
            >
              <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
              <div className="text-xs font-semibold text-white">{item.label}</div>
              <div className="text-[10px] text-neutral-500">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Social icons row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 glass-rocket rounded-full px-4 py-2">
            <Hash className="w-4 h-4 text-[#8C1BAB]" />
            <span className="text-xs text-neutral-400">Facebook</span>
          </div>
          <div className="flex items-center gap-2 glass-rocket rounded-full px-4 py-2">
            <AtSign className="w-4 h-4 text-[#F761A1]" />
            <span className="text-xs text-neutral-400">Instagram</span>
          </div>
        </motion.div>

        {/* Model collaboration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-6 rounded-2xl p-4 border border-[#8C1BAB]/15 bg-[#8C1BAB]/5"
        >
          <p className="text-xs text-neutral-400 leading-relaxed text-center">
            <span className="text-[#F761A1] font-semibold">Modelo colaborativo:</span>{" "}
            Os placeros envían fotos e vídeos seguindo pautas sinxelas da
            formación. Periodicamente, gravacións profesionais no mercado
            alimentan redes e blog.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
