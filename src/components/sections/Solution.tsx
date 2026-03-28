"use client";

import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  GraduationCap,
  ChefHat,
  Globe,
  Share2,
  ShoppingBag,
} from "lucide-react";

const activities = [
  {
    title: "Mercado Dixital",
    description:
      "Formación en ferramentas dixitais accesibles para os 35 placeros. WhatsApp Business, RRSS, foto e vídeo, comunicación e inglés turístico.",
    icon: <GraduationCap className="w-5 h-5 text-[#00AC81]" />,
    badge: "espacio vivo",
    badgeColor: "text-[#00AC81] border-[#00AC81]/20 bg-[#00AC81]/5",
    header: (
      <div className="relative h-28 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80"
          alt="Formación dixital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#faf8f5]" />
        <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-[#00AC81] uppercase tracking-wider">
          Actividade 1
        </span>
      </div>
    ),
    className: "md:col-span-2",
  },
  {
    title: "Ven a Cociñar",
    description:
      "Showcooking, PequeCHef, charla de nutrición, concurso de receitas e sesión veciñal aberta.",
    icon: <ChefHat className="w-5 h-5 text-[#00AC81]" />,
    badge: "espacio vivo",
    badgeColor: "text-[#00AC81] border-[#00AC81]/20 bg-[#00AC81]/5",
    header: (
      <div className="relative h-28 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80"
          alt="Showcooking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#faf8f5]" />
        <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-[#00AC81] uppercase tracking-wider">
          Actividade 2
        </span>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "O Mellor do Mercado",
    description:
      "Identidade visual profesional, portal web directorio con fotografía premium e blog integrado.",
    icon: <Globe className="w-5 h-5 text-[#F761A1]" />,
    badge: "Rocket",
    badgeColor: "text-[#F761A1] border-[#F761A1]/20 bg-[#F761A1]/5",
    header: (
      <div className="relative h-28 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80"
          alt="Mercado"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#faf8f5]" />
        <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-[#F761A1] uppercase tracking-wider">
          Actividade 3
        </span>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "RRSS + Blog 12 meses",
    description:
      "3-4 publicacións semanais en Facebook e Instagram, 1 artigo de blog cada 2 semanas, cobertura audiovisual completa.",
    icon: <Share2 className="w-5 h-5 text-[#8C1BAB]" />,
    badge: "Rocket",
    badgeColor: "text-[#F761A1] border-[#F761A1]/20 bg-[#F761A1]/5",
    header: (
      <div className="relative h-28 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80"
          alt="Redes sociais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#faf8f5]" />
        <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-[#8C1BAB] uppercase tracking-wider">
          Actividade 4
        </span>
      </div>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Bolsa da Magdalena",
    description:
      "Modelo de autofinanciación: material promocional de obsequio que os placeros venden, xerando fondos propios.",
    icon: <ShoppingBag className="w-5 h-5 text-[#F761A1]" />,
    badge: "Rocket",
    badgeColor: "text-[#F761A1] border-[#F761A1]/20 bg-[#F761A1]/5",
    header: (
      <div className="relative h-28 rounded-xl overflow-hidden">
        <img
          src="/ref-ferrol-comercio-bag.png"
          alt="Bolsa da Magdalena"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#faf8f5]" />
        <span className="absolute bottom-2 left-3 text-[10px] font-semibold text-[#F761A1] uppercase tracking-wider">
          Actividade 5
        </span>
      </div>
    ),
    className: "md:col-span-1",
  },
];

export function SolutionSection() {
  return (
    <section id="solucion" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#12082e] via-[#0a0018] to-[#0e1c17]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-lg mx-auto"
        >
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-[#00AC81] border border-[#00AC81]/20 bg-[#00AC81]/5 mb-4">
            A Solución
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-[#2a2a3a] mb-4">
            5 actividades{" "}
            <span className="bg-gradient-to-r from-[#00AC81] via-[#7B5EA7] to-[#F761A1] bg-clip-text text-transparent">
              interconectadas
            </span>
          </h2>
          <p className="text-sm text-neutral-600 leading-relaxed">
            Un modelo de intervención articulado que cubre formación,
            dinamización, identidade, comunicación e sustentabilidade.
          </p>

          {/* Company distribution */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 glass-ev-light rounded-full px-3 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#00AC81]" />
              <span className="text-[10px] text-[#00AC81]">espacio vivo</span>
              <span className="text-[9px] text-neutral-500">Act. 1-2</span>
            </div>
            <div className="flex items-center gap-2 glass-rocket-light rounded-full px-3 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#F761A1]" />
              <span className="text-[10px] text-[#F761A1]">Rocket</span>
              <span className="text-[9px] text-neutral-500">Act. 3-5</span>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <BentoGrid className="max-w-lg mx-auto md:max-w-5xl md:grid-cols-3 gap-4 md:auto-rows-[20rem]">
            {activities.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={`${item.className} !bg-[#12082e] !border-neutral-200/50 hover:!border-neutral-300 transition-all duration-300`}
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
