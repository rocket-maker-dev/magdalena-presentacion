"use client";

import { motion } from "motion/react";
import {
  FileText,
  Gift,
  ShoppingCart,
  Banknote,
  PiggyBank,
  Repeat,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "1",
    icon: FileText,
    title: "Contratación",
    description: "A asociación contrata os servizos de desenvolvemento (Actividade 3: logo + web + blog)",
    color: "text-[#8C1BAB]",
    bgColor: "bg-[#8C1BAB]/10",
    borderColor: "border-[#8C1BAB]/20",
  },
  {
    number: "2",
    icon: Gift,
    title: "Obsequio",
    description: "Rocket + espacio vivo obsequian material promocional por valor de 1.200 \u20ac (IVA inclu\u00eddo)",
    color: "text-[#F761A1]",
    bgColor: "bg-[#F761A1]/10",
    borderColor: "border-[#F761A1]/20",
  },
  {
    number: "3",
    icon: ShoppingCart,
    title: "Venda",
    description: "Os placeros venden o material aos seus clientes a prezo de mercado (2-3x o valor)",
    color: "text-[#F04923]",
    bgColor: "bg-[#F04923]/10",
    borderColor: "border-[#F04923]/20",
  },
  {
    number: "4",
    icon: Banknote,
    title: "Ingresos netos",
    description: "O importe \u00edntegro da venda queda como ingreso neto para a asociaci\u00f3n",
    color: "text-[#00AC81]",
    bgColor: "bg-[#00AC81]/10",
    borderColor: "border-[#00AC81]/20",
  },
  {
    number: "5",
    icon: PiggyBank,
    title: "Cofinanciamento",
    description: "Os fondos permiten cubrir o 20% esixido na convocatoria actual e dispo\u00f1er de excedente",
    color: "text-[#E8B800]",
    bgColor: "bg-[#E8B800]/10",
    borderColor: "border-[#E8B800]/20",
  },
  {
    number: "6",
    icon: Repeat,
    title: "Escalabilidade",
    description: "O excedente financia tiraxes maiores na seguinte campa\u00f1a. Ciclo autosostible",
    color: "text-[#7B5EA7]",
    bgColor: "bg-[#7B5EA7]/10",
    borderColor: "border-[#7B5EA7]/20",
  },
];

export function SelfFinancingSection() {
  return (
    <section
      id="autofinanciacion"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#12082e] via-[#0a0018] to-[#0e1c17]" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#7B5EA7] border border-[#7B5EA7]/20 bg-[#7B5EA7]/5 mb-4">
            Modelo Innovador
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white mb-4">
            Autofinanciaci&oacute;n{" "}
            <span className="bg-gradient-to-r from-[#00AC81] to-[#7B5EA7] bg-clip-text text-transparent">
              paso a paso
            </span>
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
            Resolve o principal atallo das asociaci&oacute;ns de vendedores: a necesidade
            de fondos propios sen ter unha fonte de ingresos estable.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, idx) => (
            <div key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className={`relative rounded-2xl p-4 ${step.bgColor} border ${step.borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center gap-1 shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full ${step.bgColor} border ${step.borderColor} flex items-center justify-center`}
                    >
                      <span className={`text-xs font-bold ${step.color}`}>
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <step.icon className={`w-4 h-4 ${step.color}`} />
                      <h4 className="text-sm font-semibold text-white">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
              {idx < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-3 h-3 text-neutral-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-10 rounded-2xl p-6 bg-gradient-to-br from-[#00AC81]/15 via-[#7B5EA7]/10 to-[#F761A1]/5 border border-[#7B5EA7]/20 text-center"
        >
          <div className="text-3xl font-bold bg-gradient-to-r from-[#00AC81] via-[#7B5EA7] to-[#F761A1] bg-clip-text text-transparent mb-2">
            Rompe a dependencia
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed max-w-sm mx-auto">
            O modelo non require investimento inicial, beneficia os placeros e xera
            un obxecto que funciona como produto, ferramenta de m&aacute;rketing e
            embaixador do mercado.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
