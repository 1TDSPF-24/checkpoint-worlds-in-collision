import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}