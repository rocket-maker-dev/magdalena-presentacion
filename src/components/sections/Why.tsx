"use client";

import { motion } from "motion/react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Award,
  Target,
  Heart,
  Lightbulb,
  Shield,
  Globe,
  Clock,
  Users,
} from "lucide-react";

const testimonials = [
  {
    quote: "A maior asociación de vendedores de Ferrol — a maior asociación da cidade. Máis diversidade de produtos, máis retorno social por cada euro investido.",
    name: "Escala real",
    title: "Máximo impacto",
  },
  {
    quote: "12 meses completos de comunicación dixital. Os mercados non pechan en xaneiro, e a súa comunicación tampouco.",
    name: "Período completo",
    title: "Abril 2026 - Marzo 2027",
  },
  {
    quote: "Modelo de autofinanciación innovador que rompe a dependencia das subvencións e garante a sustentabilidade.",
    name: "Innovación",
    title: "Modelo replicable",
  },
  {
    quote: "100% dos materiais, formación e contidos en lingua galega con linguaxe inclusiva.",
    name: "Compromiso lingüístico",
    title: "Galego pleno",
  },
];

const differentials = [
  {
    icon: Target,
    title: "Intervención integral",
    description: "5 actividades interconectadas que se refórzan mutuamente",
    color: "text-[#00AC81]",
  },
  {
    icon: Lightbulb,
    title: "Autofinanciación innovadora",
    description: "Modelo que non existe noutras propostas da convocatoria",
    color: "text-[#E8B800]",
  },
  {
    icon: Clock,
    title: "12 meses completos",
    description: "Fronte ás propostas habituais de 6 ou 8 meses",
    color: "text-[#F761A1]",
  },
  {
    icon: Users,
    title: "35 placeros",
    description: "Maior escala = maior retorno social por euro investido",
    color: "text-[#7B5EA7]",
  },
  {
    icon: Shield,
    title: "Sustentabilidade",
    description: "Capacidade de fondos propios para futuras convocatorias",
    color: "text-[#8C1BAB]",
  },
  {
    icon: Globe,
    title: "Presenza dixital real",
    description: "Non unha acción puntual, senón un proxecto de comunicación",
    color: "text-[#F079C6]",
  },
  {
    icon: Heart,
    title: "Impacto comunitario",
    description: "Novas xeracións e familias conectadas co mercado",
    color: "text-[#F04923]",
  },
  {
    icon: Award,
    title: "Referente municipal",
    description: "Posicionar Ferrol na dinamización do comercio local",
    color: "text-[#00AC81]",
  },
];

export function WhySection() {
  return (
    <section id="porque" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0018] via-[#1f1245] to-[#12082e]" />

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#E8B800] border border-[#E8B800]/20 bg-[#E8B800]/5 mb-4">
            Valor Diferencial
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#2a2a3a] mb-4">
            Por que{" "}
            <span className="bg-gradient-to-r from-[#E8B800] to-[#F04923] bg-clip-text text-transparent">
              este proxecto
            </span>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Un trinomio que poucas propostas presentarán: identidade dixital +
            comunicación sostida + modelo de autofinanciación.
          </p>
        </motion.div>

        {/* Differentials grid */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {differentials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              className="rounded-xl p-4 bg-white/80 border border-neutral-200/50 hover:border-neutral-300/50 transition-all duration-300"
            >
              <item.icon className={`w-5 h-5 ${item.color} mb-2`} />
              <div className="text-xs font-semibold text-[#2a2a3a] mb-0.5">
                {item.title}
              </div>
              <div className="text-[10px] text-neutral-500 leading-relaxed">
                {item.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite moving testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            className="py-4"
          />
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="rounded-2xl p-6 bg-gradient-to-br from-[#E8B800]/10 via-[#F04923]/5 to-transparent border border-[#E8B800]/20 text-center"
        >
          <Award className="w-8 h-8 text-[#E8B800] mx-auto mb-3" />
          <h3 className="text-lg font-bold text-[#2a2a3a] mb-2">
            Valoración global estimada
          </h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-[#E8B800] to-[#F04923] bg-clip-text text-transparent mb-3">
            Moi Alta
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed max-w-sm mx-auto">
            O proxecto cubre a práctica totalidade dos criterios de valoración
            das bases, con especial fortaleza na combinación única de tres eixos
            estratéxicos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
