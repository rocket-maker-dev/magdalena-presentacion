"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  ChefHat,
  Globe,
  Share2,
  ShoppingBag,
} from "lucide-react";

const budgetItems = [
  {
    num: 1,
    icon: GraduationCap,
    name: 'Formación "Mercado Dixital"',
    detail: "5 módulos para 35 placeros",
    amount: "2.900,00",
    iva: "Exento",
    color: "text-[#00AC81]",
    company: "espacio vivo",
    companyColor: "text-[#00AC81]",
    barWidth: "54%",
    barColor: "from-[#00AC81]/40 to-[#00AC81]/10",
  },
  {
    num: 2,
    icon: ChefHat,
    name: '"Ven a Cociñar ao Mercado"',
    detail: "Showcooking + PequeCHef + nutrición + concurso",
    amount: "2.900,00",
    iva: "Exento",
    color: "text-[#00AC81]",
    company: "espacio vivo",
    companyColor: "text-[#00AC81]",
    barWidth: "54%",
    barColor: "from-[#00AC81]/40 to-[#7B5EA7]/10",
  },
  {
    num: 3,
    icon: Globe,
    name: '"O Mellor do Mercado"',
    detail: "Logo + web directorio + blog",
    amount: "2.900,00",
    iva: "21% incl.",
    color: "text-[#F761A1]",
    company: "Rocket",
    companyColor: "text-[#F761A1]",
    barWidth: "54%",
    barColor: "from-[#8C1BAB]/40 to-[#F761A1]/10",
  },
  {
    num: 4,
    icon: Share2,
    name: "RRSS + Blog 12 meses",
    detail: "Facebook, Instagram, blog profesional",
    amount: "2.900,00",
    iva: "21% incl.",
    color: "text-[#F761A1]",
    company: "Rocket",
    companyColor: "text-[#F761A1]",
    barWidth: "54%",
    barColor: "from-[#8C1BAB]/40 to-[#F761A1]/10",
  },
  {
    num: 5,
    icon: ShoppingBag,
    name: '"Bolsa da Magdalena"',
    detail: "Obsequio condicionado á Actividade 3",
    amount: "0,00",
    iva: "—",
    color: "text-[#F761A1]",
    company: "Rocket",
    companyColor: "text-[#F761A1]",
    barWidth: "0%",
    barColor: "from-[#F761A1]/40 to-[#F761A1]/10",
    isGift: true,
  },
];

export function BudgetSection() {
  return (
    <section id="orzamento" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e1c17] via-[#12082e] to-[#0a0018]" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#7B5EA7] border border-[#7B5EA7]/20 bg-[#7B5EA7]/5 mb-4">
            Orzamento
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Resumo{" "}
            <span className="bg-gradient-to-r from-[#00AC81] via-[#7B5EA7] to-[#F761A1] bg-clip-text text-transparent">
              económico
            </span>
          </h2>
        </motion.div>

        {/* Budget items */}
        <div className="space-y-3">
          {budgetItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      {item.name}
                    </div>
                    <div className="text-[10px] text-neutral-500">
                      {item.detail}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-bold ${item.color}`}>
                    {item.amount} &euro;
                  </div>
                  <div className="text-[9px] text-neutral-600">{item.iva}</div>
                </div>
              </div>
              {/* Company tag */}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[9px] ${item.companyColor} opacity-70`}>
                  {item.company}
                </span>
              </div>
              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: item.barWidth }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${item.barColor}`}
                />
              </div>
              {item.isGift && (
                <div className="mt-2 text-[10px] text-[#F761A1]/70 text-center">
                  Material doado valorado en 1.200,00 &euro;
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-6 rounded-2xl p-6 bg-gradient-to-br from-[#00AC81]/10 via-[#7B5EA7]/10 to-[#F761A1]/10 border border-[#7B5EA7]/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                Total proxecto
              </div>
              <div className="text-xs text-neutral-500">
                Abril 2026 - Marzo 2027
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold bg-gradient-to-r from-[#00AC81] via-[#7B5EA7] to-[#F761A1] bg-clip-text text-transparent">
                11.600 &euro;
              </div>
            </div>
          </div>
          {/* Company breakdown */}
          <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00AC81]" />
              <div>
                <span className="text-[10px] text-[#00AC81]">espacio vivo</span>
                <span className="text-[10px] text-neutral-500 ml-1">5.800 &euro;</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F761A1]" />
              <div>
                <span className="text-[10px] text-[#F761A1]">Rocket</span>
                <span className="text-[10px] text-neutral-500 ml-1">5.800 &euro;</span>
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] text-neutral-500">
              Material doado adicional
            </span>
            <span className="text-xs font-semibold text-[#F761A1]">
              +1.200 &euro;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
