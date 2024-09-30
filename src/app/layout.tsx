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
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

// api key: Gp46NTWkIy0RnqiBj8cZFgR004wrkwt0DBpJurF2