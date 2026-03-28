"use client";

import { motion } from "motion/react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { SparklesCore } from "@/components/ui/sparkles";
import { MapPin, Calendar, ArrowDown } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative">
      <AuroraBackground
        className="min-h-screen"
        style={{
          background: "linear-gradient(135deg, #12082e 0%, #0e1c17 100%)",
        }}
      >
        {/* Sparkles overlay — EV green + Rocket pink mix */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1.2}
            particleDensity={40}
            className="w-full h-full"
            particleColor="#7B5EA7"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-lg mx-auto">
          {/* Market logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            {/* Minimal market icon — SVG */}
            <div className="w-24 h-24 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center shadow-2xl shadow-[#7B5EA7]/20">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-14 h-14"
              >
                {/* Awning / canopy */}
                <path
                  d="M8 22 L32 10 L56 22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Awning fill */}
                <path
                  d="M8 22 L32 10 L56 22 L56 26 Q44 32 32 26 Q20 32 8 26 Z"
                  fill="rgba(123,94,167,0.25)"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                {/* Left column */}
                <line x1="12" y1="26" x2="12" y2="54" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                {/* Right column */}
                <line x1="52" y1="26" x2="52" y2="54" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                {/* Base / floor */}
                <line x1="8" y1="54" x2="56" y2="54" stroke="white" strokeWidth="2" strokeLinecap="round" />
                {/* Stall counter */}
                <rect x="20" y="38" width="24" height="10" rx="2" stroke="white" strokeWidth="1.5" fill="rgba(0,172,129,0.15)" />
                {/* Small product dots */}
                <circle cx="26" cy="43" r="2" fill="rgba(0,172,129,0.7)" />
                <circle cx="32" cy="43" r="2" fill="rgba(123,94,167,0.7)" />
                <circle cx="38" cy="43" r="2" fill="rgba(247,97,161,0.7)" />
              </svg>
            </div>
          </motion.div>

          {/* Concello badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-[#7B5EA7] mb-6 uppercase tracking-widest"
          >
            <MapPin className="w-3 h-3" />
            Concello de Ferrol 2026
          </motion.div>

          {/* Title — mixed gradients */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-[#00AC81] via-[#7B5EA7] to-[#F761A1] bg-clip-text text-transparent">
              A Magdalena
            </span>
            <br />
            <span className="text-white">Conecta</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-base md:text-lg text-neutral-400 mb-8 leading-relaxed"
          >
            Proxecto de dinamización integral para o mercado municipal con maior
            número de vendedores de Ferrol
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-center gap-6 mb-10"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-2xl font-bold text-white">
                12
              </div>
              <div className="text-xs text-neutral-500 mt-1">Meses</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-xs text-neutral-500 mt-1">Actividades</div>
            </div>
          </motion.div>

          {/* Partner badges — espacio vivo + Rocket */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="glass rounded-xl px-4 py-2 flex items-center gap-2">
              <img src="/logo-ev-blanco.png" alt="espacio vivo" className="h-6 w-auto" />
            </div>
            <div className="glass rounded-xl px-4 py-2 flex items-center gap-2">
              <img src="/rocket-real-logo.svg" alt="Rocket" className="h-6 w-auto" />
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 animate-float"
          >
            <a
              href="#reto"
              className="flex flex-col items-center gap-2 text-neutral-500 hover:text-[#00AC81] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest">
                Descubrir
              </span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  );
}
