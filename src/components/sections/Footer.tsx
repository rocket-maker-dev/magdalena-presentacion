"use client";

import { motion } from "motion/react";
import { SparklesCore } from "@/components/ui/sparkles";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden">
      {/* Sparkles background */}
      <div className="absolute inset-0">
        <SparklesCore
          id="footer-sparkles"
          background="transparent"
          minSize={0.3}
          maxSize={0.8}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#7B5EA7"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0018] via-[#0a0018]/90 to-[#12082e]/60" />

      <div className="relative z-10 section-padding max-w-lg mx-auto">
        {/* Logos — espacio vivo + Rocket (stacked on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 mb-10 sm:flex-row sm:gap-6"
        >
          {/* espacio vivo */}
          <img
            src="/logo-ev-blanco.png"
            alt="espacio vivo"
            className="h-12 w-auto object-contain sm:h-14"
          />
          <div className="hidden sm:block w-px h-12 bg-white/10" />
          {/* Rocket */}
          <img
            src="/rocket-real-logo-white.svg"
            alt="Rocket"
            className="h-10 w-auto object-contain sm:h-14"
          />
        </motion.div>

        {/* Project title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white mb-2">
            A Magdalena Conecta
          </h2>
          <p className="text-xs text-neutral-300">
            Asociación de Vendedores de A Magdalena
          </p>
          <p className="text-[10px] text-neutral-400 mt-1">
            Liña 3: Mercados Municipais — Concello de Ferrol 2026
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="space-y-3 mb-8"
        >
          <div className="flex items-center gap-3 justify-center text-xs text-neutral-400">
            <MapPin className="w-3.5 h-3.5 text-[#00AC81]" />
            <span>Mercado da Magdalena, Ferrol, A Coruña</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-xs text-neutral-400">
            <Mail className="w-3.5 h-3.5 text-[#7B5EA7]" />
            <span>orbita@espaciovivo.red</span>
          </div>
          <div className="flex items-center gap-3 justify-center text-xs text-neutral-400">
            <Phone className="w-3.5 h-3.5 text-[#F761A1]" />
            <span>+34 699 446 093</span>
          </div>
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-3">
            Con apoio de
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-[10px] text-neutral-300">
              <ExternalLink className="w-3 h-3" />
              Concello de Ferrol
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#00AC81]/60">
              <ExternalLink className="w-3 h-3" />
              espacio vivo
            </div>
            <div className="flex items-center gap-1.5 text-[10px] text-[#F761A1]/60">
              <ExternalLink className="w-3 h-3" />
              Rocket — Lanzadera Digital
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#7B5EA7]/20 to-transparent mb-6" />

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[10px] text-neutral-700">
            Período de execución: Abril 2026 — Marzo 2027
          </p>
          <p className="text-[10px] text-neutral-700 mt-1">
            Orzamento total: 11.600,00 &euro;
          </p>
        </div>
      </div>
    </footer>
  );
}
