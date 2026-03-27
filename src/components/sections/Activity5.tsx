"use client";

import { motion } from "motion/react";
import { ShoppingBag, Gift, TrendingUp, Recycle, Megaphone } from "lucide-react";

export function Activity5Section() {
  return (
    <section id="bolsa" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0018] via-[#0e1c17] to-[#12082e]" />

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
            <div className="w-10 h-10 rounded-xl bg-[#F761A1]/10 border border-[#F761A1]/20 flex items-center justify-center">
              <span className="text-sm font-bold text-[#F761A1]">5</span>
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
            <span className="bg-gradient-to-r from-[#8C1BAB] to-[#F761A1] bg-clip-text text-transparent">
              &ldquo;Bolsa da Magdalena&rdquo;
            </span>
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            O compoñente estratéxico que pecha o círculo e garante a
            sustentabilidade económica da asociación.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <span className="glass rounded-lg px-3 py-1.5 text-xs text-neutral-300">
              Xuño 2026 + continua
            </span>
            <span className="glass-rocket rounded-lg px-3 py-1.5 text-xs font-semibold text-[#00AC81]">
              Custo: 0,00 &euro;
            </span>
          </div>
        </motion.div>

        {/* Bag image showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-8 border border-[#F761A1]/10"
        >
          <img
            src="/ref-ferrol-comercio-bag.png"
            alt="Bolsa da Magdalena"
            className="w-full h-56 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0018] via-[#0a0018]/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-[#F761A1]" />
              <span className="text-xs text-[#F761A1] font-semibold">
                Material doado por Rocket + espacio vivo
              </span>
            </div>
            <div className="text-2xl font-bold text-white mt-1">
              Valor: 1.200 &euro;
            </div>
          </div>
        </motion.div>

        {/* Value props */}
        <div className="space-y-3">
          {[
            {
              icon: Gift,
              title: "Sen investimento inicial",
              description: "A asociación non paga nada. O material é un obsequio dos provedores.",
              color: "text-[#00AC81]",
            },
            {
              icon: TrendingUp,
              title: "Ingresos netos 2-3x",
              description: "Os placeros venden a prezo de mercado. Todo o importe queda para a asociación.",
              color: "text-[#F761A1]",
            },
            {
              icon: Recycle,
              title: "Modelo escalable",
              description: "O excedente financia tiraxes maiores na seguinte campaña. Rompe a dependencia.",
              color: "text-[#7B5EA7]",
            },
            {
              icon: Megaphone,
              title: "Publicidade ambulante",
              description: "Cada bolsa que circula pola cidade é visibilidade gratuíta para o mercado.",
              color: "text-[#8C1BAB]",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
            >
              <item.icon className={`w-5 h-5 ${item.color} mt-0.5 shrink-0`} />
              <div>
                <h4 className="text-sm font-semibold text-white mb-0.5">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reference: apron */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl overflow-hidden border border-white/5"
        >
          <img
            src="/ref-recimil-apron.png"
            alt="Referencia merchandising"
            className="w-full h-40 object-cover opacity-60"
          />
          <div className="p-4 bg-white/[0.02]">
            <p className="text-[10px] text-neutral-500 text-center">
              Referencia de merchandising: bolsas térmicas personalizadas, útiles, duradeiras e ecolóxicas
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
