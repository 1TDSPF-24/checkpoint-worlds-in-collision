import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Worlds In Collision CP",
    default: "Worlds In Collision CP"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased h-screen w-full`}
      >
        <div className="flex flex-col py-2 items-center bg-slate-950 border-b-2">
          <nav className="flex items-center gap-4 text-slate-50 py-4 font-bold">
            <Link href="/">Introdução</Link>
            <Link href="/impact">Impacto</Link>
            <Link href="/catastrophe">Catastrofe</Link>
            <Link href="/calculus">Calculo</Link>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
}