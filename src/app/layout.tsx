import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "A Magdalena Conecta — Proxecto de Dinamización",
  description:
    "Proxecto de dinamización integral para a Asociación de Vendedores de A Magdalena, o mercado municipal con maior número de vendedores de Ferrol.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="gl"
      className={`${inter.variable} ${outfit.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-nebula text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
