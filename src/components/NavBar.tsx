"use client";

import {
  ShoppingCart,
  GraduationCap,
  ChefHat,
  Globe,
  Share2,
  ShoppingBag,
  BarChart3,
  Heart,
} from "lucide-react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const navItems = [
  { name: "Inicio", link: "#hero", icon: <ShoppingCart className="h-4 w-4" /> },
  { name: "Solución", link: "#solucion", icon: <Heart className="h-4 w-4" /> },
  { name: "Formación", link: "#formacion", icon: <GraduationCap className="h-4 w-4" /> },
  { name: "Cociñar", link: "#cociñar", icon: <ChefHat className="h-4 w-4" /> },
  { name: "Marca", link: "#marca", icon: <Globe className="h-4 w-4" /> },
  { name: "RRSS", link: "#rrss", icon: <Share2 className="h-4 w-4" /> },
  { name: "Bolsa", link: "#bolsa", icon: <ShoppingBag className="h-4 w-4" /> },
  { name: "Orzamento", link: "#orzamento", icon: <BarChart3 className="h-4 w-4" /> },
];

export function NavBar() {
  return <FloatingNav navItems={navItems} />;
}
