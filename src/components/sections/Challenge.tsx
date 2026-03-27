"use client";

import { motion } from "motion/react";
import { TrendingDown, Store, Wifi, ShieldAlert } from "lucide-react";

const challenges = [
  {
    icon: TrendingDown,
    title: "Perda de visitación",
    description:
      "A competencia do comercio electrónico e das grandes superficies reduce progresivamente o fluxo de clientes nos mercados municipais.",
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400",
  },
  {
    icon: Wifi,
    title: "Brecha dixital",
    description:
      "Os placeros carecen das ferramentas dixitais e das estratexias de comunicación necesarias para competir neste novo escenario.",
    color: "from-[#F761A1]/20 to-[#F761A1]/5",
    iconColor: "text-[#F761A1]",
  },
  {
    icon: Store,
    title: "Invisibilidade",
    description:
      "Sen presenza online profesional nin contidos dixitais, o mercado non existe para as novas xeracións de consumidores.",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    icon: ShieldAlert,
    title: "Dependencia de subvencións",
    description:
      "As asociacións non dispoñen dunha fonte de ingresos estable para cubrir o cofinanciamento esixido nas convocatorias.",
    color: "from-[#7B5EA7]/20 to-[#7B5EA7]/5",
    iconColor: "text-[#7B5EA7]",
  },
];

export function ChallengeSection() {
  return (
    <section id="reto" className="section-padding relative overflow-hidden">
      {/* Nebula gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12082e] via-[#0e1c17] to-[#12082e]" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-red-400 border border-red-400/20 bg-red-400/5 mb-4">
            O Contexto
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            O reto dos mercados
            <br />
            <span className="bg-gradient-to-r from-red-400 to-[#F761A1] bg-clip-text text-transparent">
              municipais
            </span>
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Os mercados municipais de Ferrol encóntranse nun momento de
            transformación. O valor da calidade, a proximidade e o contacto
            humano necesita novas ferramentas para sobrevivir.
          </p>
        </motion.div>

        {/* Challenge cards */}
        <div className="space-y-4">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`relative rounded-2xl p-5 bg-gradient-to-r ${challenge.color} border border-white/5 backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-0.5 ${challenge.iconColor}`}>
                  <challenge.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {challenge.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <div className="glass rounded-2xl p-6">
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00AC81] to-[#7B5EA7] bg-clip-text text-transparent mb-2">
              35
            </div>
            <div className="text-sm text-neutral-300 font-medium mb-1">
              familias dependen do mercado
            </div>
            <div className="text-xs text-neutral-500">
              A maior asociación de vendedores da cidade merece unha resposta á
              altura
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
