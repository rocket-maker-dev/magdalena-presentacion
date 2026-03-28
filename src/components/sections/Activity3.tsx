"use client";

import { motion } from "motion/react";
import { Palette, Globe, BookOpen, Sparkles } from "lucide-react";

const components = [
  {
    icon: Palette,
    title: "Identidade visual profesional",
    description:
      "Logotipo da asociación en todos os formatos. Un instrumento de comunicación sinxelo, contundente e duradeiro que serve como base para toda a comunicación futura.",
    deliverables: ["SVG / PDF vectorial", "PNG / JPG dixital", "Guía de uso básico"],
    color: "text-[#F761A1]",
    gradient: "from-[#F761A1]/20 via-[#F761A1]/5 to-transparent",
  },
  {
    icon: Globe,
    title: "Portal web directorio",
    description:
      "Escaparate dixital premium que pon en valor os produtos máis diferenciados. Fotografía profesional, descrición narrativa e vídeo dos placeros.",
    deliverables: [
      "Directorio de produtos",
      "Fotografía profesional",
      "Vídeos dos placeros",
    ],
    color: "text-[#8C1BAB]",
    gradient: "from-[#8C1BAB]/20 via-[#8C1BAB]/5 to-transparent",
  },
  {
    icon: BookOpen,
    title: "Blog integrado",
    description:
      "Canle de contidos permanente: receitas, historias dos placeros, cobertura de eventos e artigos sobre alimentación de proximidade.",
    deliverables: [
      "22-24 artigos/ano",
      "Soporte para RRSS",
      "Arquivo permanente",
    ],
    color: "text-[#F761A1]",
    gradient: "from-[#F761A1]/15 via-[#8C1BAB]/5 to-transparent",
  },
];

export function Activity3Section() {
  return (
    <section id="marca" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[#faf8f5]" />

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
              <span className="text-sm font-bold text-[#F761A1]">3</span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#F761A1]">
              Actividade
            </span>
            <div className="ml-auto flex items-center gap-1.5 glass-rocket-light rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#F761A1]" />
              <span className="text-[9px] text-[#F761A1]">Rocket</span>
            </div>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#2a2a3a] mb-3">
            Campaña{" "}
            <span className="bg-gradient-to-r from-[#8C1BAB] to-[#F761A1] bg-clip-text text-transparent">
              &ldquo;O Mellor do Mercado&rdquo;
            </span>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            O eixe de desenvolvemento dixital do proxecto. Tres compoñentes
            inseparables que dotan á asociación dunha presenza profesional e
            perdurable.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="glass-light rounded-lg px-3 py-1.5 text-xs text-neutral-500">
              Abril - Xuño 2026
            </span>
            <span className="glass-rocket-light rounded-lg px-3 py-1.5 text-xs font-semibold text-[#F761A1]">
              2.900,00 &euro; <span className="text-neutral-500">(IVA incl.)</span>
            </span>
          </div>
        </motion.div>

        {/* Component cards */}
        <div className="space-y-4">
          {components.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`rounded-2xl p-5 bg-gradient-to-br ${comp.gradient} border border-neutral-200/50 hover:border-neutral-300/50 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-3">
                <comp.icon className={`w-5 h-5 ${comp.color}`} />
                <h3 className="font-semibold text-[#2a2a3a] text-sm">
                  {comp.title}
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.deliverables.map((d, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 text-[10px] text-neutral-500"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-[#F761A1]/50" />
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strategic importance callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl p-5 border border-[#E8B800]/20 bg-gradient-to-br from-[#E8B800]/10 to-transparent"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E8B800]/20 flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-4 h-4 text-[#E8B800]" />
            </div>
            <div>
              <h4 className="text-xs font-semibold text-[#E8B800] uppercase tracking-wider mb-2">
                Importancia estratéxica
              </h4>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Esta actividade condiciona e posibilita a Actividade 5. Ao
                contratar os servizos, os provedores obsequian material
                promocional por valor de{" "}
                <span className="text-[#E8B800] font-semibold">1.200 &euro;</span>{" "}
                que os placeros venderán ao público, xerando ingresos netos para
                a asociación.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
            Fases de desenvolvemento
          </h4>
          <div className="flex items-center gap-2">
            {[
              { month: "Abr", task: "Selección" },
              { month: "Mai", task: "Fotografía" },
              { month: "Mai-Xuñ", task: "Desenvolvemento" },
              { month: "Xuñ", task: "Publicación" },
            ].map((phase, i) => (
              <div key={i} className="flex-1 text-center">
                <div className="h-1.5 rounded-full bg-gradient-to-r from-[#8C1BAB]/40 to-[#F761A1]/40 mb-2" />
                <div className="text-[10px] font-semibold text-[#F761A1]">
                  {phase.month}
                </div>
                <div className="text-[9px] text-neutral-500">{phase.task}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
