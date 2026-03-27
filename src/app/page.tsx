"use client";

import { HeroSection } from "@/components/sections/Hero";
import { ChallengeSection } from "@/components/sections/Challenge";
import { SolutionSection } from "@/components/sections/Solution";
import { Activity1Section } from "@/components/sections/Activity1";
import { Activity2Section } from "@/components/sections/Activity2";
import { Activity3Section } from "@/components/sections/Activity3";
import { Activity4Section } from "@/components/sections/Activity4";
import { Activity5Section } from "@/components/sections/Activity5";
import { SelfFinancingSection } from "@/components/sections/SelfFinancing";
import { BudgetSection } from "@/components/sections/Budget";
import { WhySection } from "@/components/sections/Why";
import { FooterSection } from "@/components/sections/Footer";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HeroSection />
      <ChallengeSection />
      <SolutionSection />
      <Activity1Section />
      <Activity2Section />
      <Activity3Section />
      <Activity4Section />
      <Activity5Section />
      <SelfFinancingSection />
      <BudgetSection />
      <WhySection />
      <FooterSection />
    </main>
  );
}
