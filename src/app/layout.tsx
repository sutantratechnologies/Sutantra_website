import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUTANTRA TECHNOLOGIES | Reliable Systems. Remarkable Innovation.",
  description: "Empowering global enterprises with cutting-edge software engineering, AI systems, and cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-950 text-white font-telegraf">
        {children}
      </body>
    </html>
  );
}
